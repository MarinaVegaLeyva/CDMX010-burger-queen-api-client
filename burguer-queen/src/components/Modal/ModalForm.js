import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./modalForm.css";

function ModalForm(props) {
  // use this hook to control the dialog
  const dialog = useDialog();
  
  const [addProduct, setAddProduct ]=useState({
    id:props.data.product.id,
		product: props.data.product.name,
    price:props.data.product.price,
    specs:'',
    qty:''
  })

  const addPoducts = (event)=>{
		setAddProduct({
      ...addProduct,
      [event.target.name] : event.target.value
    })
  }

	const enviarDatos = (event) =>{
		event.preventDefault();
		props.data.handleAddProducts(addProduct);
		dialog.close(addProduct);
	}

  return (
    <div className="modal">
			<form className="row" onSubmit={enviarDatos}>
      {/* {console.log("props", props.data.product.id)} */}
      <h1>{props.data.product.name}</h1>
      <img className="img" src={props.data.product.image} alt="Img Logo" />
      <div className='label'>
      <h3 className="labelValue">Cantidad</h3>
      <input type="number" className="inputForm" id="amount" name="qty" onChange={addPoducts} pattern="[0,9]{0,13}" required="required" min={1}/>
      </div>
      <h3 className="labelValue">Especificaciones</h3>
      <textarea className="specs" id="specs" name="specs" onChange={addPoducts}></textarea>
      <button className="buttonAdd">
        Añadir Producto
      </button>
			</form>
    </div>
  );
}

export default ModalForm;
