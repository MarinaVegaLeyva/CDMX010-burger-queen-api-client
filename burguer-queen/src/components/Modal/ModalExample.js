
import React, { useState } from "react";
import Modal from 'react-modal';


function ModalExample (Template){
	console.log('aquíestoy');
	const [modalIsOpen, setModalIsOpen] = useState(false)
	return(
		<div>
			<button onClick={() => setModalIsOpen(true)}>Modal</button>
			<Modal isOpen={modalIsOpen}>
				<div>holaaaa</div>
				<div>
					<button onClick={() => setModalIsOpen(false)}>close</button>
				</div>
			</Modal>
		</div>
		
	)
};

export default ModalExample;



// class ModalExample extends React.Component {
// 	constructor(props) {
// 		super(props);his
// 	}
// }