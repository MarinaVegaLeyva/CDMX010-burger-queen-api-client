import React from 'react';
import './Header.css';
import logoBQBlanco from '../../assets/img/logoBQBlanco.svg';
import menuIcon from '../../assets/img/menuIcon.jpg';
const Header = () => {
	return(
		<header className="headerBQ">
			<div className="textLogo">Burger Queen <img className="logoBQ" src={logoBQBlanco} alt="logoBQ"/></div>
			<div className="burgerMenu"><img className="menuIcon" src={menuIcon} alt="menuIcon"/></div>
		</header>
	)
};

export default Header;