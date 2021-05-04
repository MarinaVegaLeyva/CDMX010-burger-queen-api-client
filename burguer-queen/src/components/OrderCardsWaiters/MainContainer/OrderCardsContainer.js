import OrderInProgressCard from '../OrderStatus/OrderInProgressCard';
import './OrderCardsContainer.css';

const OrderCardsContainer = () => {
	return(
	<div className="waitersMain-orders">
		<div className="waiterName">Meserx : Laura Beltran</div>
		<div className="cards-container">
			<OrderInProgressCard/>
		</div>
		<button className="newOrder-button"> + Añadir Orden</button>
	</div>
	)
}

export default OrderCardsContainer;