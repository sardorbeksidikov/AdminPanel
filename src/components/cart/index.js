import axios from "axios";
import { Delete, Edit } from "../../constants";
import "./index.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({
  id,
  title,
  price,
  rating,
  discountPercentage,
  brand,
  category,
  stock,
  data,
}) => {
  const navegation = useNavigate();
  const deleteProduct = (id) => {
    if (window.confirm("Вы действительно хотите удалить товар")) {
      axios.delete(`https://crud-product-sla6.onrender.com/products/${id}`);
      toast.success("Товар удален");
      data(true);
    }
  };

  const editProduct = (id) => {
    navegation(`/edit/product/${id}`);
  };

  return (
    <div className="cart">
      <p>Товар {id} </p>
      <p>{discountPercentage}</p>
      <p>{brand}</p>
      <p>{price}$</p>
      <p>{stock}$</p>
      <div className="actions">
        <button onClick={() => editProduct(id)}>
          <Edit />
        </button>
        <button onClick={() => deleteProduct(id)}>
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default Cart;
