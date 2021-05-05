import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./modalForm.css";

function ModalForm(props) {
  // use this hook to control the dialog
  const dialog = useDialog();

  const [value, setValue] = useState();

  const [value2, setValue2] = useState();

  return (
    <div className="modal">
      {console.log("props", props.data.product.id)}
      <h1>{props.data.product.name}</h1>
      <img className="img" src={props.data.product.image} alt="Img Logo" />
      <div className='label'>
      <h3 className="labelValue">Cantidad</h3>
      <input type="number" className="inputForm"/>
      </div>
      <h3 className="labelValue">Especificaciones</h3>
      <textarea className="specs"></textarea>
      <button className="buttonAdd"
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value+value2);
        }}
      >
        Añadir Producto
      </button>
    </div>
  );
}

export default ModalForm;
