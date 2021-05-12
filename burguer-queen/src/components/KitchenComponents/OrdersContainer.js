import React, { useEffect, useState } from "react";
import KitchenOrder from './KitchenOrder';
import './OrdersContainer.css';

const OrdersContainer = () => {
	const [pending, setPending] = useState();
	let getData = async () => {
    let url = "http://localhost:3004/orders";
    let getFectchData = await fetch(url).then((result) => result.json());
    let filterPending = getFectchData.filter(
      (element) => element.status === "pending"
    );
		console.log('odersss', filterPending)
		setPending(filterPending);
		};
  useEffect(() => {
    getData();
  }, []);

	return (
		<div className="k-orders-container">
			{pending &&
				pending.map((order) => (
					<KitchenOrder
						order={order}
						key={order.id}
					/>
				))}
		</div>
	)
}

export default OrdersContainer;