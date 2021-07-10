import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Card, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { decreaseOrder } from '../../componets/Store';

const AdminMainPage = () => {
  //restart
  const [restart, setRestart] = useState(0);

  //리랜더링을 위한 설정
  const savedCallback = useRef();
  function callback() {
    setRestart(restart + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);
  // 리렌더링 설정끝

  const [orderNum, setOrderNum] = useState([]);

  const updateStatus = (e) => {
    const idx = e.target.getAttribute('idx');
    fetch('http://localhost:8060/api/admin/' + idx, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((res) => {
        setRestart(restart + 1);
      });
  };

  const orderHeader = orderNum.map((header) => (
    <Card>
      <Card.Header as="h5">
        {' '}
        주문번호 : [{header.iiorderNum}]{' '}
        <Button
          style={{ float: 'right', marginLeft: '20px' }}
          onClick={updateStatus}
          idx={header.idx}
        >
          제조완료
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {header.cckor}&nbsp; / &nbsp;
          {header.ggiceHot}&nbsp; / &nbsp; 수량 : {header.hhcount}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  useEffect(() => {
    const status = 'ordered';
    fetch('http://localhost:8060/api/admin/' + status)
      .then((res) => res.json())
      .then((res) => {
        setOrderNum(res);
      });
  }, [restart]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavLink to="/admin/mainPage" className="navbar-brand">
          실시간 주문 현황
        </NavLink>
        <h3> |&nbsp;</h3>
        <NavLink to="/admin/mainPage/past" className="navbar-brand">
          지난 주문 내역
        </NavLink>
      </Navbar>
      <br />
      <br />
      <br />
      <Container style={{ textAlign: 'center' }}>
        <h2>실시간 주문 현황</h2>
      </Container>
      <br />
      <Container>{orderHeader}</Container>
    </div>
  );
};

export default AdminMainPage;
