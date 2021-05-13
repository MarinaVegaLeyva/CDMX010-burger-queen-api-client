import React from 'react';
import { useHistory } from "react-router-dom";
import './FormLogin.css';
const FormLogin = () => {
	const history = useHistory();
	const handleLogin = () =>{
		history.push("/waitersmain")
	}
	return(
		<form id="loginForm" className="LoginForm">
			<input type="email" id="inputEmail" className="loginInput" placeholder="Correo electrónico"></input>
			<input type="password" id="inputPassword" className="loginInput" placeholder="Contraseña"></input>
			<button id="loginButton" className="sendButton" onClick={handleLogin}>Ingresar</button>
		</form>
	)
};

export default FormLogin;