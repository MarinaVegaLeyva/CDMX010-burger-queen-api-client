import React from 'react';
// import ReactDOM from 'react-dom';

// import TemplateModalInProgress from '../OrderCardsWaiters/OrderModalTemplates/TemplateModalInProgress';

// import './Modal.css';

const Modal = () => {
	return(
	
			<div>
					<div className="modal-container" id="modal-container"></div>
					<div className="modal modal-close" id= "modal-alert"></div>
			</div>  
	)
}

export default Modal;



// // Tache para cerrar el modal
// const modal = document.querySelectorAll('.modal')[0];
// const modalContainer = document.getElementById('modal-container');
// const modalAlert = document.getElementById('modal-alert');

// // EFECTO QUE VA A TENER EL MODAL CUANDO LE DEMOS CLICK PARA QUE SE CIERREN
// export function closeModalLink() {
//   modal.classList.toggle('modal-close');
//   modalContainer.style.opacity = '0';
//   modalContainer.style.visibility = 'hidden';
// }

// // FUNCION PARA QUE SE PUEDAN CERRAR LOS MODALES
// export function closeModal() {
//   const close = document.getElementById('close');
//   close.addEventListener('click', closeModalLink);
// }

//QUE APAREZCAN LOS MODALES, SEGUN LAS REGLAS QUE LES DEFINIMOS
export const openModal = (Template) => {
  modalContainer.style.opacity = '1';
  modalContainer.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
	ReactDOM.render(
  <React.StrictMode>
		<Template />
  </React.StrictMode>,
  document.getElementById('modal')
);
  // closeModal();

console.log('aquíestoy')
};





