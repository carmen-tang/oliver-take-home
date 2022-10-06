import React from 'react';
import '../Styles/Home.scss';

import logo from '../Images/Logo.svg';

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
            <div className="header-inner">
                <div className="logo-wrapper">
                    <img  src={logo} alt="Oliver Space"/>
                </div>
                <div className="header-space">Refurbished</div>
            </div>
        </div>
      );
  }
}

export default Header;
