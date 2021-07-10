import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Image,
  Container,
  Button,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increase } from './Store';

const styles = {
  menuTop: {
    paddingBottom: '10px',
    borderBottom: '2px solid #f1648a',
  },
  tit: {
    color: '#f1648a',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  menuDetail: {
    borderBottom: '1px solid #d2d2d2',
    padding: '10px 0',
    lineHight: '24px',
    fontSize: '16px',
  },
};

const Detail = (props) => {
  // reduce설정
  const dispatcher = useDispatch();

  // detail 관련 설정
  const id = props.match.params.id;
  const [details, setDetails] = useState([]);
  const [price, setPrice] = useState([]);

  // ICEHOT Checkbox 관련설정
  const [radioValue, setRadioValue] = useState('ICE');

  const radios = [
    { name: 'ICE', value: 'ICE' },
    { name: 'HOT', value: 'HOT' },
  ];

  // 장바구니버튼 관련설정
  const [newPost, setNewPost] = useState(null);
  const hoverButton = () => {
    setNewPost({ ...details, ggiceHot: radioValue, hhcount: 1 });
  };

  const clickButton = (e) => {
    e.preventDefault();
    setNewPost({ ...details, ggiceHot: radioValue, hhcount: 1 });

    fetch('http://localhost:8060/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res != null) {
          alert('장바구니 담기 완료');
          props.history.push('/mainMenu');
          // reduce증가
          dispatcher(increase());
        } else {
          alert('이미 장바구니에 담겨 있습니다.');
          props.history.push('/mainMenu');
        }
      });
  };

  useEffect(() => {
    fetch('http://localhost:8060/mainMenu/detail/' + id)
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
        setPrice(res.ddprice.toLocaleString('en'));
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={5}>
            <Image src={details.eelocation} thumbnail></Image>
          </Col>

          <Col sm={7}>
            <div className="text">
              <div style={styles.menuTop}>
                <Row>
                  <Col sm={8}>
                    <h3>{details.cckor}</h3>
                  </Col>
                  <Col sm={4}>
                    <h3 style={styles.textAlignRight}>{price}원</h3>
                  </Col>
                </Row>
                <span style={styles.tit}>{details.bben}</span>
              </div>
              <p style={styles.menuDetail}>{details.ffdetail}</p>
            </div>
            <br /> <br />
            <div>
              <Row>
                <Col sm={8}></Col>
                <Col style={styles.textAlignRight}>
                  <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>
              </Row>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <form onSubmit={clickButton}>
                <Button
                  size="large"
                  shape="round"
                  variant="danger"
                  type="submit"
                  onMouseOver={hoverButton}
                >
                  장바구니 담기
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
