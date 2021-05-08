import "./products.css";
import editPicture from "../../../src/assets/img/editar.png";
import deltePicture from "../../../src/assets/img/eliminar.png";

const Products = ({ order, handleDeleteProducts}) => {
	let total = 0;
  return (
		<>
    <div className="wrapped">
      {order.items.map((product) => {
				{total += product.amount * product.price}
				return (
					<h3 key={product.id} className="productWrapped">{product.amount} {product.name} $ {product.price}
						<img className="editIcon" src={editPicture} alt="editPicture" onClick={()=>console.log('edit')}/>
						<img className="deleteIcon" src={deltePicture} alt="deltePicture" onClick={()=>deleteProductOrder(order, product,handleDeleteProducts)} />
          </h3>
				)
      })}
    </div>
		<div className='total'>Total    ${total}</div>
		</>
  );
};

export default Products;

const deleteProductOrder = (order, product,handleDeleteProducts) => {
	const deleteProduct=order.items.filter((item) => item.id !== product.id);
	handleDeleteProducts(deleteProduct)
}
