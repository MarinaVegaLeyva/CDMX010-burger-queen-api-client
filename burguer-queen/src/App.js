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


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/waitersmain">
					<WaitersMain/>
				</Route>
        <Route path="/menu">
          <div>
            <Menu />
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
