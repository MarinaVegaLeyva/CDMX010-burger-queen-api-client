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
      <h3>{order.id}</h3>
      <h3 className="labelValue">{order.client}</h3>
      <div className="divOrder">
      {order.products.map((product) => {
          return (
            <h3 key={product.id} className="productWrapped">
              {product.qty} {product.product}
            </h3>
          );
        })}
      </div>
      <h3>{order.total}</h3>
      <button className="buttonAdd" onClick={enviarDatos}>Entregado</button>
    </div>
  );
};

export default ModalOrderState;
