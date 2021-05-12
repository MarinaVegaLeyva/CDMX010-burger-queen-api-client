import React from 'react';
import './OrderCards.css';

const OrderReadyCard = ({order}) => {
	return(
		<div className='cardOrder readyCard'>
			<div className='orderNumber'>Orden</div>
			<div className ='clientName'>{order.client}</div>
		</div>
	)
}

export default OrderReadyCard;