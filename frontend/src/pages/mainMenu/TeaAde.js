import React, { useEffect, useState } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';

const styles = {
  cardImage: {
    width: 286,
    height: 286,
  },
  cardTitle: {
    textAlign: 'center',
    color: 'black',
  },
  cardBody: {
    padding: '0.1rem',
  },
  pulsbutton: {
    width: '50px',
    height: '50px',
    marginLeft: '30px',
  },
};

const TeaAde = () => {
  const [categoryMenu, setCategoryMenu] = useState([]);

  const [tempMenu, setTempMenu] = useState([]);
  // 더보기 시작과 끝 숫자 초기지정
  const [skip, setSkip] = useState(8);
  const [limit, setLimit] = useState(16);
  // 더보기 클릭시 증가할 페이지수
  const pagePlusNum = 8;
  // 더보기 if문사용을 위한 전체 데이터 담기
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8060/mainMenu/tea_ade')
      .then((res) => res.json())
      .then((res) => {
        setCategoryMenu(res);
        setTempMenu(res.slice(0, 8));
        setPageSize(res.length);
      });
  }, []);

  const loadMoreHandler = () => {
    setSkip(skip + pagePlusNum);
    setLimit(limit + pagePlusNum);

    setTempMenu([...tempMenu, ...categoryMenu.slice(skip, limit)]);
  };

  // DB의 정보들 뿌려주는 부분
  const menuPrivew = tempMenu.map((menu) => (
    <Col lg={3} md={4} xs={12}>
      <div style={{ position: 'relative' }}>
        <div className="duration">
          <Link
            to={'/mainMenu/detail/' + menu.id}
            style={{ width: '18rem' }}
            className="card"
            bg="danger"
          >
            <Card.Img
              variant="top"
              src={menu.eelocation}
              style={styles.cardImage}
              v
            />
            <Card.Body style={styles.cardBody}>
              <Card.Title style={styles.cardTitle}>{menu.cckor}</Card.Title>
              <Card.Title style={styles.cardTitle}>
                {menu.ddprice.toLocaleString('ko-KR')}원
              </Card.Title>
            </Card.Body>
          </Link>
        </div>
      </div>
    </Col>
  ));

  return (
    <div style={{ paddingTop: '40px' }}>
      <Row gutter={[16, 16]}>{menuPrivew}</Row>
      {pageSize >= skip && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IoIosAddCircleOutline
            onClick={loadMoreHandler}
            style={styles.pulsbutton}
          />
        </div>
      )}
    </div>
  );
};
export default TeaAde;
