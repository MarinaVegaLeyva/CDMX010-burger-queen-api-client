 import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import LoginLogo from '../../components/LoginLogo/LoginLogo';
import './Login.css';
const Login = () => {
	return(
		<div className="login-container">
			<div className="transparency">
				<LoginLogo />
				<FormLogin />
			</div>
		</div>
	)
};

export default Login;