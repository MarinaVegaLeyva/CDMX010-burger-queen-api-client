import { useHistory } from "react-router-dom";
import OrderInProgressCard from '../OrderStatus/OrderInProgressCard';
import OrderReadyCard from '../OrderStatus/OrderReadyCard';
import './OrderCardsContainer.css';

const OrderCardsContainer = ({ pending, delivering }) => {
	const history = useHistory();
	return (
		<div className="waitersMain-orders">
			<div className="waiterName">Meserx : Laura Beltran</div>
			<div className="cards-container">
				{delivering &&
					delivering.map((order) => (
						<OrderReadyCard
							order={order}
							key={order.id}
						/>
					))}
				{pending &&
					pending.map((order) => (
						<OrderInProgressCard
							order={order}
							key={order.id}
						/>
					))}

			</div>
			<button className="newOrder-button" onClick={() => history.push("/menu")}> + Añadir Orden</button>
		</div>
	)
}

export default OrderCardsContainer;