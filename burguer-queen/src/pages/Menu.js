import React from "react";

/* import BreakfastItem  from '../components/breakFastItem/menuItem';
import Order  from '../components/order/order';
import AddItem from '../components/addItem/addItem' */
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import "./menu.css";


const addOrderData = (order, event) => {
	console.log('subir al json')
}


function Menu({handleAddProducts,order, handleDeleteProducts}) {
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
        />
				</div>
				<form onSubmit={(e)=> {
					e.preventDefault();
					addOrderData(order)
				}}>
					<label>Nombre del cliente :</label> <input type="text"/>
					<button className="button">Añadir orden</button>
				</form>
			</div>
  );
}



export default Menu;

