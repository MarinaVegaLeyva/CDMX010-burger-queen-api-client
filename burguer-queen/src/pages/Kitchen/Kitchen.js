import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import OrdersContainer from "../../components/KitchenComponents/OrdersContainer";
import './Kitchen.css';

const Kitchen = () => {
	return (
		<div className="kitchen-container">
			<Header />
			<OrdersContainer/>
		</div>
	)
}

export default Kitchen;
