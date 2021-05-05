import React from 'react';
import './OrderInProgressCard.css';
import TemplateModalInProgress from '../OrderModalTemplates/TemplateModalInProgress';


import { useState } from 'react';


import  ModalNew from '../../Modal/Modal';


const OrderInProgressCard = () => {
	const [open, setOpen] = useState(false);

	const handlerModalOpen = () => {
		setOpen(true);
	};

	const handlerModalClose = () => {
		console.log('cerrar')
		setOpen(false);
	};

	return(
		<div className='cardOrder'  id="OrderCard" onClick= {handlerModalOpen}>
			<div className='orderNumber'>Orden 58</div>
			<div className ='clientName'>clientName</div>
			{open &&
				<div className="modal-container">
						<button className="modal-close" onClick={handlerModalClose}>X</button>
					<div className="modal-content">
						<TemplateModalInProgress/>
					</div>
				</div>
				
			}
		</div>
	)
}

export default OrderInProgressCard;

