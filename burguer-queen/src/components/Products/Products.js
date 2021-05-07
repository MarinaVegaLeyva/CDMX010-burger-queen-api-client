import "./products.css";
import editPicture from "../../../src/assets/img/editar.png";
import deltePicture from "../../../src/assets/img/eliminar.png";

const Products = ({ order }) => {
    console.log(order);

  return (
    <div className="wrapped">
      {order.items.map((product) => {
         return (
            <h3>hola
                {product.amount}
                {product.id}
            <img className="editIcon" src={editPicture} alt="editPicture" />
            <img className="deleteIcon" src={deltePicture} alt="deltePicture" />
            </h3>
         )
      })}
    </div>
  );
};

export default Products;

