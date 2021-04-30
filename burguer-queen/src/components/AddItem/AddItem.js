import productPicture from '../../assets/img/sandwich.png';
const AddItem = () => {
  return (
    <div>
      <h2>Sándwich de jamón con queso</h2>
      <img src={productPicture}  alt="" />
      <h3>Cantidad</h3>
      <input type="number" name="cantidad"></input>
      <h3>Especificaciones</h3>
      <textarea/>
      <button>Añadir producto</button>
    </div>
  );
};

export default AddItem;
