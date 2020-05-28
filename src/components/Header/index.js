import React from 'react';

import './index.scss';
import logo from '../../assets/logo.svg';
import userPic from '../../assets/male.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img
              src={logo}
              alt="Logo"
              width={154}
              height={20}
            />
          </div>
          <div className="header__profile">
            <img src={userPic} alt="User Avatar"/>
            Nickname
          </div>
        </div>
      </div>
    </header>
  )
};
