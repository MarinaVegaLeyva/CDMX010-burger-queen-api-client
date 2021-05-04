import React from 'react';
import './LoginLogo.css';
// import logoBQBlanco from '../../assets/img/logoBQBlanco.svg';
// const LoginLogo = () => {
// 	return(
// 		<div className="logoContainer">
// 			<div className="textLogo-burger">Burger<img className="logoBQ" src={logoBQBlanco} alt="logoBQ"/></div>
			
// 			<div className="textLogo-queen">Queen</div>
// 		</div>
// 	)
// };


import logoBQBlanco from '../../assets/img/bqLogoLogin.png';

const LoginLogo = () => {
	return(
		<div className='logoImg-container'>
			<img className="logoLoginBQ" src={logoBQBlanco} alt="logoBQ"/>
		</div>
	)
};

export default LoginLogo;