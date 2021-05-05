import './TemplateModalInProgress.css'


const TemplateModalInProgress = ()=>{
	return(
		<div>
			<div className="orderModalTitle">Orden 58</div>
			<div className="orderModalClient">Clientx : Name</div>
			<div className="orderModalProducts">
				<li>1 Sándwich de jamón con queso</li>
				<li>1 Café con leche </li>
			</div>
			<div className="inProductionMessage">En producción...</div>
		</div>
	)
}

export default TemplateModalInProgress;