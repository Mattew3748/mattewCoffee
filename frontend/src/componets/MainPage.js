import React from 'react';
import { Button } from 'react-bootstrap';
import './MainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="allDiv">
      <div>
        <img
          src="https://mattewcoffee.s3.ap-northeast-2.amazonaws.com/mattewcoffee/loadingpages/loadingPageSum2.png"
          style={{ width: '1519px' }}
          alt="mainpage"
        />
      </div>
      <div className="buttonPosition">
        <a href="/mainMenu">
          <Button
            variant="outline-danger"
            style={{
              width: '260px',
              height: '50px',
              //   backgroundColor: '#ff1659',
              border: '3px solid white',
              fontWeight: '900',
              color: 'white',
              fontSize: '20px',
            }}
          >
            주문하기
          </Button>
        </a>
      </div>
      <div className="buttonPosition2">
        <Link to="/admin/mainPage" className="button">
          {' '}
          <Button
            variant="outline-danger"
            style={{
              width: '260px',
              height: '50px',
              border: '3px solid white',
              fontWeight: '900',
              color: 'white',
              fontSize: '20px',
            }}
          >
            관리자페이지
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
