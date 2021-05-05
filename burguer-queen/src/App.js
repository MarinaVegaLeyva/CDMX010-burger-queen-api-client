import React from 'react';
import './style/App.css';

import WaitersMain from './pages/WaitersMain/WaitersMain';

function App() {
  return (
    <div className="App">
				<WaitersMain />
    </div>
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
