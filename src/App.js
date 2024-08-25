import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1 Navigation 바 만들기 (그대로 유지하기)
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안됬을 경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.

function App() {
  //로그인을 한 유저인지 아닌지 알려주는 state
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log('authenticate', authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll></ProductAll>} />
        <Route
          path="/login"
          element={
            <Login
              setAuthenticate={setAuthenticate}
              authenticate={authenticate}
            ></Login>
          }
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
