import React, { useState } from "react";
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import "./menu.css";


const addOrderData = (order, handleAddInfoOrder) => {
	console.log('subir al json', order);
	const date = new Date();
	handleAddInfoOrder('dateEntry',date);
  
}

const addClientName= (handleAddInfoOrder) =>{
	let name=document.getElementById('name').value;
  handleAddInfoOrder('client', name);
}


function Menu({handleAddProducts,order, handleDeleteProducts,handleAddInfoOrder}) {
  return (
    <div>
      <Header />
      <Table 
      handleAddProducts={handleAddProducts}
      />
      {/* <CustomExample /> */}
      <div className="contenedores">
        <Products
        order={order}
				handleDeleteProducts = {handleDeleteProducts}
        handleAddInfoOrder={handleAddInfoOrder}
        />
				</div>
				<form onSubmit={(e)=> {
					e.preventDefault();
					addOrderData(order, handleAddInfoOrder);
				}}>
					<label>Nombre del cliente :</label> 
          <input type="text" id="name" onChange = {()=>addClientName(handleAddInfoOrder)}/>
					<button className="button">Añadir orden</button>
				</form>
			</div>
  );
}



export default Menu;

