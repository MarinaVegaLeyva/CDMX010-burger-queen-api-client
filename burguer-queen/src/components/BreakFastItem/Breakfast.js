import { CustomDialog } from 'react-st-modal';
import ModalForm from '../Modal/ModalForm'
import "./breakfastItem.css";


const BreakfastItem = (props) => {  
  return (
    <div className='contentItem' onClick={async () => {
      const result = await CustomDialog(
        <ModalForm  data={props} />,
        {
          title: 'Producto',
          showCloseIcon: true,
        }
      );
      console.log("result",result);
    }}>
      <h3 className='titleItem'>{props.product.name}</h3>
      <h4 className='priceItem'>{"$"+props.product.price}</h4>
    </div>
  );
};


export default BreakfastItem;
