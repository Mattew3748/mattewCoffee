import React, { useEffect } from 'react';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import './Header.css';

const styles = {
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
};

const Header = () => {
  const number = useSelector((store) => store.number);

  useEffect(() => {
    fetch('http://localhost:8060/api/cart/countCardNum')
      .then((res) => res.json())
      .then((res) => {});
  }, []);
  // 헤더 예외처리
  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/admin/mainPage') return null;
  if (window.location.pathname === '/admin/mainPage/past') return null;

  return (
    <div>
      <Nav
        bg="dark"
        justify
        variant="pills"
        defaultActiveKey="/mainMenu"
        className="my-nav"
      >
        <NavLink exact={true} to="/mainMenu" className="nav-link">
          전체
        </NavLink>
        <NavLink exact={true} to="/mainMenu/coffee" className="nav-link">
          커피
        </NavLink>
        <NavLink
          exact={true}
          to="/mainMenu/decaffeineCoffee"
          className="nav-link"
        >
          디카페인커피
        </NavLink>
        <NavLink exact={true} to="/mainMenu/milkTea_Latte" className="nav-link">
          밀크티&라떼
        </NavLink>
        <NavLink exact={true} to="/mainMenu/Juice_Yogurt" className="nav-link">
          주스&요거트
        </NavLink>
        <NavLink exact={true} to="/mainMenu/smoothie" className="nav-link">
          스무디
        </NavLink>
        <NavLink exact={true} to="/mainMenu/tea_ade" className="nav-link">
          에이드
        </NavLink>
        <NavLink exact={true} to="/mainMenu/maniaSeries" className="nav-link">
          매니아시리즈
        </NavLink>
        <NavLink exact={true} to="/mainMenu/grillied" className="nav-link">
          그릴드
        </NavLink>
        <NavLink exact={true} to="/mainMenu/bread" className="nav-link">
          쿠키&마카롱
        </NavLink>
        <NavLink exact={true} to="/api/cart" className="nav-link">
          <Container>
            <Row>
              <Col sm={6} style={styles.right}>
                <FaCartPlus />
              </Col>
              <Col sm={6} style={styles.left}>
                <h5 style={styles.left}>{number}</h5>
              </Col>
            </Row>
          </Container>
        </NavLink>
      </Nav>
    </div>
  );
};

export default Header;
