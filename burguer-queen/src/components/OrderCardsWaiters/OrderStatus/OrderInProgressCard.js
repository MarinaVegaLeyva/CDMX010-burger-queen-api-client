import React from 'react';
import './OrderInProgressCard.css';
import TemplateModalInProgress from '../OrderModalTemplates/TemplateModalInProgress';

const OrderInProgressCard = ({order}) => {
	return(
		<div className='cardOrder'>
			<div className='orderNumber'>Orden</div>
			<div className ='clientName'>{order.client}</div>
		</div>
	)
}

export default OrderInProgressCard;

