import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import "./menu.css";





function Menu({handleAddProducts,order, handleDeleteProducts,handleAddInfoOrder, handleResetOrder}) {
	const history = useHistory();
	const postOrder= () => {
		const options = {
			method: 'POST',
			body: JSON.stringify(order),
			headers: {
				'Content-Type': 'application/json'
			}
		};
		
		fetch('http://localhost:3004/orders', options)
			.then(res => res.json())
			.then(res => console.log(res));
	}
	
	const addOrderData = () => {
		console.log('subir al json');
		postOrder();
	}
	const addClientName= () =>{
		let name=document.getElementById('name').value;
		handleAddInfoOrder('client', name);
		const date = new Date();
		handleAddInfoOrder('dateEntry',date);
	}

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
					addOrderData();
					history.push("/waitersmain");
					handleResetOrder()
				}}>
					<label>Nombre del cliente :</label> 
          <input type="text" id="name" onChange = {addClientName}/>
					<button className="button">Añadir orden</button>
				</form>
			</div>
  );
}



export default Menu;

