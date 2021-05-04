import React from 'react';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import OrderCardsContainer from '../../components/OrderCardsWaiters/MainContainer/OrderCardsContainer';
import './WaitersMain.css';

const WaitersMain = () => {
	return(
		<div className="mainWaiters-container">
			<Header/>
			<OrderCardsContainer/>
			<Modal />
		</div>
	)
}
export default WaitersMain;