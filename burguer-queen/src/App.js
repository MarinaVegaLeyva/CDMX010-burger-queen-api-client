import React,{useState} from 'react';
import Menu from "./pages/Menu";
import Login from './pages/Login/Login';
import WaitersMain from './pages/WaitersMain/WaitersMain';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
} from "react-router-dom";
import OrderCardsContainer from './components/OrderCardsWaiters/MainContainer/OrderCardsContainer';


function App() {
  const [order, setOrder]=useState({
    nombreCliente:"",
    status:"pendiente",
    items:[],
    total:0
  })

  const handleAddProducts=(item)=>{
    setOrder({...order, items:[...order.items, item]})
  }
	
	const handleDeleteProducts = (arrItems) => {
		setOrder({...order, items: arrItems})
	}

  return (
    <Router>
      <Switch>
        <Route path="/waitersmain">
					<WaitersMain/>
				</Route>
        <Route path="/menu">
          <div>
            <Menu 
            handleAddProducts={handleAddProducts}
            order={order}
						handleDeleteProducts = {handleDeleteProducts}
            />
          </div>
        </Route>
        <Route path="/">
					<Login/>
				</Route>
      </Switch>
    </Router>
  );
}

export default App;



// import './style/App.css';
// import React, { useState } from "react";
// import Modal from 'react-modal';


// function App() {
// 	const [modalIsOpen, setModalIsOpen] = useState(false)
//   return (
//     <div className="App">
// 			<button onClick={() => setModalIsOpen(true)}>Modal</button>
// 				<Modal isOpen={modalIsOpen}>
// 					<div>holaaaa</div>
// 					<div>
// 						<button onClick={() => setModalIsOpen(false)}>close</button>
// 					</div>
// 				</Modal>
//     </div>
//   );
// }

// export default App;
