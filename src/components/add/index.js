import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    brand: "",
    stock: "",
    description: "",
    price: "",
    discountPercentage: "",
  });
  const closeBtn = () => {
    navigation("/");
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://crud-product-sla6.onrender.com/products")
        .then((res) => {
          const products = res.data;
          setProducts(products);
        });
    };
    fetchData();
  }, []);

  const hendelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value.trim() });
  };

  const save = async () => {
    const newData = { ...product, id: products.length + 1 + "" };
    await axios
      .post("https://crud-product-sla6.onrender.com/products", newData)
      .then((res) => {
        console.log(res.data);
        closeBtn();
        toast.success("Товар успешно добавлен");
      });
  };

  return (
    <>
      <section className="add_product">
        <div className="container">
          <div className="add_product_item">
            <button className="osno">Основные</button>
            <div className="add_form">
              <div className="add_form_item_w">
                <div className="add_form_item">
                  <label className="label">Название</label>
                  <input
                    type="text"
                    name="title"
                    onChange={hendelChange}
                    value={product.title}
                  />
                </div>
                <div className="add_form_item">
                  <label className="label">Бренд </label>
                  <input
                    type="text"
                    name="brand"
                    onChange={hendelChange}
                    value={product.brand}
                  />
                </div>
                <div className="add_form_item">
                  <label className="label">Артикул производителя </label>
                  <input
                    type="text"
                    name="discountPercentage"
                    onChange={hendelChange}
                    value={product.discountPercentage}
                  />
                </div>
              </div>

              <div className="add_form_item1">
                <label className="label">Описание </label>
                <textarea
                  name="description"
                  onChange={hendelChange}
                  value={product.description}
                ></textarea>
              </div>
              <div className="input_pr">
                <div className="add_form_item2">
                  <label className="label">Цена</label>
                  <input
                    type="text"
                    name="price"
                    onChange={hendelChange}
                    value={product.price}
                  />
                </div>
                <div className="add_form_item3">
                  <label className="label">Цена со скидкой</label>
                  <input
                    type="text"
                    name="stock"
                    onChange={hendelChange}
                    value={product.stock}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="save">
            <button onClick={save}>Сохранить</button>
            <button onClick={closeBtn}>Отмена</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
