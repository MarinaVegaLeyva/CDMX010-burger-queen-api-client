import './OrderInProgressCard.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import { Modal }from '../../Modal/Modal';


const OrderInProgressCard = () => {
	const [open, setOpen] = useState(false);

	const handlerModalOpen = () => {
		setOpen(true);
	};

	return(
		<div className='cardOrder'  id="OrderCard" onClick= {handlerModalOpen}>
			<div className='orderNumber'>Orden 58</div>
			<div className ='clientName'>User Name</div>
			{open &&
				<Modal />
			}
		</div>
	)
}

export default OrderInProgressCard;

const OpenCardOrder = () => {
	openModal(TemplateModalInProgress);
	console.log('Estoy vivo, hola');
	// ReactDOM.render(
	// 	<React.StrictMode>
	// 		<TemplateModalInProgress />
	// 	</React.StrictMode>,
	// 	document.getElementById('root')
	// );
}
