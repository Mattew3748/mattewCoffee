import React, { useEffect, useState } from 'react';
import { Navbar, Card, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const AdminMainPagePast = () => {
  //restart
  const [restart, setRestart] = useState(0);

  const [orderNum, setOrderNum] = useState([]);

  const orderHeader = orderNum.map((header) => (
    <Card>
      <Card.Header as="h5"> 주문번호 : [{header.iiorderNum}] </Card.Header>

      <Card.Body>
        <Card.Text>
          {header.cckor}&nbsp; / &nbsp;
          {header.ggiceHot}&nbsp; / &nbsp; 수량 : {header.hhcount}&nbsp; /
          &nbsp; 가격 :{' '}
          {(parseInt(header.ddprice) * parseInt(header.hhcount)).toLocaleString(
            'en',
          )}
          원
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  useEffect(() => {
    const status = 'past';
    fetch('http://localhost:8060/api/admin/' + status)
      .then((res) => res.json())
      .then((res) => {
        setOrderNum(res);
      });
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
        <h2>지난 주문 내역</h2>
      </Container>
      <br />
      <Container>{orderHeader}</Container>
    </div>
  );
};

export default AdminMainPagePast;
