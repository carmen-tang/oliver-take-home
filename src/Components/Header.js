import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Home.scss';

import logo from '../Images/Logo.svg';

function Header() {
    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return (
        <div className="Header">
            <div className="header-inner">
                <div className="logo-wrapper" onClick={() => goHome()}>
                    <img  src={logo} alt="Oliver Space"/>
                </div>
                <div className="header-space">Refurbished</div>
            </div>
        </div>
    );
}

export default Header;
