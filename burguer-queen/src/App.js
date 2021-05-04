//import logo from './logo.svg';
import './style/App.css';
// import Login from './pages/Login/Login';
// import WaitersMain from './pages/WaitersMain/WaitersMain';
// import Modal from './components/Modal/Modal';
import OrderInProgressCard from './components/OrderCardsWaiters/OrderStatus/OrderInProgressCard';

function App() {
  return (
    <div className="App">
				<OrderInProgressCard />
    </div>
  );
}

export default App;

// //import logo from './logo.svg';
// import './style/App.css';
// // import Login from './pages/Login/Login';
// // import WaitersMain from './pages/WaitersMain/WaitersMain';
// // import Modal from './components/Modal/Modal';
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
