import React from 'react';
import TemplateModalInProgress from '../OrderCardsWaiters/OrderModalTemplates/TemplateModalInProgress';

import './Modal.css';

const ModalNew = (props) => {
	console.log(props)
	return(
			<div className="modal-container">
				<button className="modal-close" onClick={props.handlerModalClose()}>X</button>
				<div className="modal-content">
					<TemplateModalInProgress/>
				</div>
			</div>  
	)
}

export default ModalNew;






