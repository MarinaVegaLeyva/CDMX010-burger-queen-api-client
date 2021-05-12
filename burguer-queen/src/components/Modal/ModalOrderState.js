import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./Modal.css";

const ModalOrderState = ({order}) => {
  const dialog = useDialog();
  const enviarDatos = (event) => {
    event.preventDefault();
    dialog.close();
  };
  return (
    <div className="modal">
      <h1 className="modalTitle">Orden {order.id}</h1>
      <h3 className="labelValue spaces">Cliente: {order.client}</h3>
      <div className="divOrder">
      {order.products.map((product) => {
          return (
            <h3 key={product.id} className="productWrapped" className='productOrder'>
              {product.qty} {product.product}
            </h3>
          );
        })}
      </div>
      <h3>Total  ${order.total}</h3>
      <button className="buttonAdd buttonSpaces" onClick={enviarDatos}>Entregado</button>
    </div>
  );
};

export default ModalOrderState;