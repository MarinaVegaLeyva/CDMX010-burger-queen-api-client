import './products.css'
import editPicture from '../../../src/assets/img/editar.png';
import deltePicture from '../../../src/assets/img/eliminar.png';
const Products = () => {
    return (
        <div className='wrapped'>
            <h3>1   Sándwich de jamón con queso  $10 <img className="editIcon" src={editPicture} alt="editPicture"/> <img className="deleteIcon" src={deltePicture} alt="deltePicture"/></h3>
        </div>
    );
}
 
export default Products;