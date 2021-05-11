import React, { useState } from "react";
import Menu from "./pages/Menu";
import Login from "./pages/Login/Login";
import WaitersMain from "./pages/WaitersMain/WaitersMain";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
} from "react-router-dom";
import OrderCardsContainer from "./components/OrderCardsWaiters/MainContainer/OrderCardsContainer";

function App() {
  const [order, setOrder] = useState({
    id: "",
    userId: "",
    client: "",
    products: [],
    status: "pending",
    dateEntry: "",
    dateProcessed: "??",
    total: 0,
  });

  const handleAddProducts = (item) => {
    setOrder({ ...order, products: [...order.products, item] });
  };

  const handleAddInfoOrder = (prop, item) => {
    setOrder({ ...order, [prop]: item });
  };
  const handleDeleteProducts = (arrItems) => {
    setOrder({ ...order, products: arrItems });
  };

  return (
    <Router>
      <Switch>
        <Route path="/waitersmain">
          <WaitersMain />
        </Route>
        <Route path="/menu">
          <div>
            <Menu
              handleAddProducts={handleAddProducts}
              order={order}
              handleDeleteProducts={handleDeleteProducts}
              handleAddInfoOrder={handleAddInfoOrder}
            />
          </div>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
