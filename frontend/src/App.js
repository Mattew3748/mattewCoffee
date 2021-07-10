import { Container } from 'react-bootstrap';
import './App.css';
import Header from './componets/Header';
import { Route } from 'react-router-dom';
import All from './pages/mainMenu/All';
import Bread from './pages/mainMenu/Bread';
import Coffee from './pages/mainMenu/Coffee';
import DecaffeineCoffee from './pages/mainMenu/DecaffeineCoffee';
import MilkTeaLatte from './pages/mainMenu/MilkTeaLatte';
import JuiceYogurt from './pages/mainMenu/JuiceYogurt';
import Smoothie from './pages/mainMenu/Smoothie';
import TeaAde from './pages/mainMenu/TeaAde';
import ManiaSeries from './pages/mainMenu/ManiaSeries';
import Grillied from './pages/mainMenu/Grillied';
import Detail from './componets/Detail';
import MainCart from './pages/cart/MainCart';
import MainPage from './componets/MainPage';
import adminMainPage from './pages/admin/AdminMainPage';
import AdminMainPagePast from './pages/admin/AdminMainPagePast';

function App() {
  return (
    <div>
      {/* main page */}
      <Route path="/" exact={true} component={MainPage} />
      {/* admin pages */}
      <Route path="/admin/mainPage" exact={true} component={adminMainPage} />
      <Route
        path="/admin/mainPage/past"
        exact={true}
        component={AdminMainPagePast}
      />
      <Header />
      <br />
      {/* header에 따른 Router */}
      <Container>
        <Route path="/mainMenu" exact={true} component={All} />
        <Route path="/mainMenu/coffee" exact={true} component={Coffee} />
        <Route
          path="/mainMenu/decaffeineCoffee"
          exact={true}
          component={DecaffeineCoffee}
        />
        <Route
          path="/mainMenu/milkTea_Latte"
          exact={true}
          component={MilkTeaLatte}
        />
        <Route
          path="/mainMenu/Juice_Yogurt"
          exact={true}
          component={JuiceYogurt}
        />
        <Route path="/mainMenu/smoothie" exact={true} component={Smoothie} />
        <Route path="/mainMenu/tea_ade" exact={true} component={TeaAde} />
        <Route
          path="/mainMenu/maniaSeries"
          exact={true}
          component={ManiaSeries}
        />
        <Route path="/mainMenu/grillied" exact={true} component={Grillied} />
        <Route path="/mainMenu/bread" exact={true} component={Bread} />
      </Container>
      {/* 상품별 상세페이지 */}
      <Container>
        <Route path="/mainMenu/detail/:id" exact={true} component={Detail} />
      </Container>

      <Route path="/api/cart" exact={true} component={MainCart} />
    </div>
  );
}

export default App;
