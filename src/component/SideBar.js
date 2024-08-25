import React from 'react';

const SideBar = ({ showSideBar }) => {
  // showSideBar 상태를 사용하여 사이드바 표시 여부 결정
  // 예: className={showSideBar? 'active':''}
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
  return (
    <div>
      <nav className={`${showSideBar ? 'sideBarOpen' : 'sideBar'}`}>
        <ul className="navList">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
