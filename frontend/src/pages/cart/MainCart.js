import React, { useLayoutEffect, useState } from 'react';
import './MainCart.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { decrease, increaseOrder, reset } from '../../componets/Store';
import Paypal from './Paypal';

const MainCart = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  // 리렌더링 스위치
  const [restart, setRestart] = useState(0);
  const [restartPlus, setRestartPlus] = useState(0);

  // 장바구니 reduce
  const dispatcher = useDispatch();

  //수량 +
  let plusQuantity = (e) => {
    const tempCount = e.target.getAttribute('count');
    const idx = e.target.getAttribute('idx');
    let count = parseInt(tempCount, 10) + 1;

    fetch('http://localhost:8060/api/cart/' + idx + '&' + count, {
      method: 'PUT',
    })
      .then((res) => res.text())
      .then((res) => {
        setRestartPlus(restartPlus + 1);
      });
  };
  //수량 -
  let minusQuantity = (e) => {
    e.preventDefault();
    const tempCount = e.target.getAttribute('count');
    const idx = e.target.getAttribute('idx');
    let count = parseInt(tempCount, 10) - 1;
    if (count < 2) {
      count = 1;
    }

    fetch('http://localhost:8060/api/cart/' + idx + '&' + count, {
      method: 'PUT',
    })
      .then((res) => res.text())
      .then((res) => {
        setRestartPlus(restartPlus - 1);
      });
  };
  // 삭제하기 버튼
  let removeItem = (e) => {
    e.preventDefault();
    const idx = e.target.getAttribute('param');

    fetch('http://localhost:8060/api/cart/' + idx, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          setRestart(restart + 1);
          calculateTotal(cartItem);
          dispatcher(decrease());
        } else {
        }
      });
  };

  // 총금액계산
  let calculateTotal = (cartItem) => {
    let total1 = 0;
    cartItem.map((item) => {
      total1 += parseInt(item.ddprice, 10) * item.hhcount;
    });
    setTotal(total1);
  };

  const cartItems = cartItem.map((item) => (
    <tr>
      <td>
        <img style={{ height: '70px' }} src={item.eelocation} />
      </td>
      <td>{item.cckor}</td>
      <td>{item.ggiceHot}</td>
      <td>
        <Row>
          <Col sm={7} style={{ textAlign: 'right' }}>
            {item.hhcount}
          </Col>
          <Col sm={5}>
            <Button
              style={{
                textAlign: 'right',
                width: '21.35px',
                height: '21px',
                paddingRight: '13px',
                paddingLeft: '5px',
                paddingTop: '0px',
                paddingBottom: '22px',
              }}
              onClick={plusQuantity}
              count={item.hhcount}
              idx={item.idx}
              variant="info"
            >
              +
            </Button>
            &nbsp;
            <Button
              style={{
                textAlign: 'right',
                width: '21.35px',
                height: '21px',
                paddingRight: '11px',
                paddingLeft: '7px',
                paddingTop: '0px',
                paddingBottom: '22px',
              }}
              onClick={minusQuantity}
              count={item.hhcount}
              idx={item.idx}
              variant="info"
            >
              -
            </Button>
          </Col>
        </Row>
      </td>
      <td>{item.ddprice.toLocaleString('en')}원</td>
      <td>
        <Button
          shape="round"
          variant="danger"
          onClick={removeItem}
          param={item.idx}
        >
          삭제하기
        </Button>
      </td>
    </tr>
  ));

  useLayoutEffect(() => {
    const status = 'cart';
    fetch('http://localhost:8060/api/cart/' + status)
      .then((res) => res.json())
      .then((res) => {
        setCartItem(res);
        calculateTotal(res);
      });
  }, [restart]);

  useLayoutEffect(() => {
    const status = 'cart';
    fetch('http://localhost:8060/api/cart/' + status)
      .then((res) => res.json())
      .then((res) => {
        setCartItem(res);
        calculateTotal(res);
      });
  }, [restartPlus]);

  const transactionSuccess = (data) => {
    fetch('http://localhost:8060/api/cartAll', {
      method: 'PUT',
    })
      .then((res) => res.text())
      .then((res) => {
        setRestart(restart + 1);
        setRestartPlus(restartPlus + 1);
        dispatcher(reset());
        alert('주문이 완료되었습니다. 주문번호 : ' + res);
        props.history.push('/mainMenu');
      });
  };

  return (
    <div>
      <Container>
        <table>
          <thead>
            <h1 style={{ marginTop: '50px' }}>My Cart</h1>
            <tr>
              <th style={{ width: '200px' }}>Image</th>
              <th>Name</th>
              <th>Temperature</th>
              <th style={{ width: '200px' }}>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </Container>
      <br />
      <Container>
        <h2>Total Amount: {total.toLocaleString('en')}원</h2>
        <Paypal total={total} onSuccess={transactionSuccess} />
      </Container>
    </div>
  );
};

export default MainCart;
