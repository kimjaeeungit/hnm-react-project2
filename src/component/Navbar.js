import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/');
  };
  const clickLogo = () => {
    navigate('/');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
      console.log('key press', keyword);
    }
  };
  return (
    <div>
      <div>
        {authenticate === false ? (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogout}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          width="100px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAaKiaRYNTRewPvMiE3pTI6o9LoTX1gpOtw&s"
          onClick={clickLogo}
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event) => search(event)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
