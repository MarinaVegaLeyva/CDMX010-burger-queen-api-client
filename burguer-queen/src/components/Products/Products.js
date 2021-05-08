import "./products.css";
import editPicture from "../../../src/assets/img/editar.png";
import deltePicture from "../../../src/assets/img/eliminar.png";

const Products = ({ order }) => {
    console.log(order);

  return (
    <div className="wrapped">
      {order.items.map((product) => {
				return (
            <h3 className="productWrapped">{product.amount} {product.name} $ {product.price}
							<img className="editIcon" id={'editProduct' + product.id} src={editPicture} alt="editPicture" onClick={()=>console.log('edit')}/>
							<img className="deleteIcon" id={'deleteProduct' + product.id} src={deltePicture} alt="deltePicture" onClick={()=>console.log('delete')} />
            </h3>
				)
      })}
    </div>
  );
};

export default Products;

const deleteProductOrder = (order, product) => {
	order.items.filter((item) => item.id !== product.id)
}
