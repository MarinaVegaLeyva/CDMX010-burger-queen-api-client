import React from "react";
import { CustomDialog } from 'react-st-modal';
import "./breakfastItem.css";
import ModalForm from '../Modal/ModalForm'

// const handleClick = () => {
//   console.log('this is:', this);
// }

const BreakfastItem = (props) => {
  return (
    <div className='contentItem' onClick={async () => {
      const result = await CustomDialog(
        <ModalForm  data={props}/>,
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
