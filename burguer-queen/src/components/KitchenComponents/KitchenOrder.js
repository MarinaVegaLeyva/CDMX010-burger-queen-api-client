import React from 'react';
import { useHistory } from "react-router-dom";
import './KitchenOrder.css';

const KitchenOrder = ({ order }) => {
	const history = useHistory();
	const handleChangeOrderStatus = async () => {
		const urlId = 'http://localhost:3004/orders/' + order.id;
		await fetch(urlId, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: order.id,
				userId: order.userId,
				client: order.client,
				products: order.products,
				status: "delivering",
				dateEntry: order.dateEntry,
				dateProcessed: order.dateProcessed,
				total: order.total
			})
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	}

	return (
		<div className='kitchenOrder-container'>
			<div className="idAndTimer-container">
				<div className='k-orderNum'>Orden</div>
				<div className='k-orderTimer'>00:00</div>
			</div>
			<div className="k-orderItems-Container">
				{order.products.map((product) => (
					<div className="k-item-container">
						<div className="kOrder-items">{product.product}</div><div className="kOrder-qty">{product.qty}</div>
					</div>
				))}
			</div>
			<div className="doneButton-container">
				<button className="doneOrder-button" onClick={() => {
					handleChangeOrderStatus();
					history.push("/kitchen")
				}}>Done</button>
			</div>

		</div>
	)
}

export default KitchenOrder;