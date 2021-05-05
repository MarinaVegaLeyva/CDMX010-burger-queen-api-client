import React from "react";

/* import BreakfastItem  from '../components/breakFastItem/menuItem';
import Order  from '../components/order/order';
import AddItem from '../components/addItem/addItem' */
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Description from "../components/Description/Description";
import "./menu.css";

function Menu() {

  const ejemplo = (data) => {
console.log("valor ",data);
  }
  return (
    <div>
      <Header />
      <Table ejemplo={ejemplo} />
      {/* <CustomExample /> */}
      <div className="contenedores">
        <Products />
        <Description />
      </div>
      <button className="button">Añadir orden</button>
    </div>
  );
}

export default Menu;
