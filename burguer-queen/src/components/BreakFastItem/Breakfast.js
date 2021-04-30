import React from "react";
import "./breakfastItem.css";

const BreakfastItem = (props) => {
  return (
    <div className='contentItem'>
      <h3 className='titleItem'>{props.product}</h3>
      <h4 className='priceItem'>{"$"+props.price}</h4>
    </div>
  );
};

export default BreakfastItem;
