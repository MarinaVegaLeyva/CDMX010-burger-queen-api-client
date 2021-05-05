import React from 'react';
import './FormLogin.css';
const FormLogin = () => {
	return(
		<form id="loginForm" className="LoginForm">
			<input type="email" id="inputEmail" className="loginInput" placeholder="Correo electrónico"></input>
			<input type="password" id="inputPassword" className="loginInput" placeholder="Contraseña"></input>
			<button id="loginButton" className="sendButton">Ingresar</button>
		</form>
	)
};

export default FormLogin;