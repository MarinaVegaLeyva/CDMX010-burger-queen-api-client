import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./modalForm.css";

function ModalForm(props) {
  // use this hook to control the dialog
  const dialog = useDialog();
  
  const [addProduct, setAddProduct ]=useState({
    id:props.data.product.id,
    price:props.data.product.price,
    specs:'',
    amount:''
  })

  const addPoducts = (event)=>{
    setAddProduct({
      ...addProduct,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div className="modal">
      {/* {console.log("props", props.data.product.id)} */}
      <h1>{props.data.product.name}</h1>
      <img className="img" src={props.data.product.image} alt="Img Logo" />
      <div className='label'>
      <h3 className="labelValue">Cantidad</h3>
      <input type="number" className="inputForm" id="amount" name="amount" onChange={addPoducts} />
      </div>
      <h3 className="labelValue">Especificaciones</h3>
      <textarea className="specs" id="specs" name="specs" onChange={addPoducts}></textarea>
      <button className="buttonAdd"
        onClick={() => {
          props.data.handleAddProducts(addProduct)
          // Сlose the dialog and return the value
          dialog.close(addProduct);
        }}
      >
        Añadir Producto
      </button>
    </div>
  );
}

export default ModalForm;
