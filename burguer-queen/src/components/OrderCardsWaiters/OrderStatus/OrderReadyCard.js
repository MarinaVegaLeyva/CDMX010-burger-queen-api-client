  
import { CustomDialog } from "react-st-modal";
import ModalOrderState from "../../../components/Modal/ModalOrderState";
import './OrderCards.css';

const OrderReadyCard = ({order}) => {
	return(
		<div className='cardOrder readyCard' 
		onClick={async () => {
			await CustomDialog(
			<ModalOrderState
			order={order}
			/>, {
			  title: "Detalle de orden",
			  showCloseIcon: true,
			});
		  }}
		>
			<div className='orderNumber'>Orden</div>
			<div className ='clientName'>{order.client}</div>
		</div>
	)
}

export default OrderReadyCard;