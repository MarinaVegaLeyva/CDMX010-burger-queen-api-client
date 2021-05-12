import { useHistory} from "react-router-dom";
import OrderInProgressCard from '../OrderStatus/OrderInProgressCard';
import './OrderCardsContainer.css';

const OrderCardsContainer = ({pending}) => {
	const history = useHistory();
	return(
	<div className="waitersMain-orders">
		<div className="waiterName">Meserx : Laura Beltran</div>
		<div className="cards-container">
		{pending &&
              pending.map((order) => (
							<OrderInProgressCard
								order={order} 
								key={order.id}
								/>
              ))}
			
		</div>
		<button className="newOrder-button" onClick={()=> history.push("/menu")}> + Añadir Orden</button>
	</div>
	)
}

export default OrderCardsContainer;