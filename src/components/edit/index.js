import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
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
  const hendelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://crud-product-sla6.onrender.com/products/${id}`)
        .then((res) => {
          const product = res.data;
          setProduct({
            id: product.id,
            title: product.title,
            brand: product.brand,
            stock: product.stock,
            description: product.description,
            price: product.price,
            discountPercentage: product.discountPercentage,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const editSave = () => {
    axios
      .put(`https://crud-product-sla6.onrender.com/products/${id}`, product)
      .then((res) => {
        closeBtn();
        toast.success("Товар успешно изменен");
      })
      .catch((err) => {
        console.log(err);
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
            <button onClick={editSave}>Обновлять</button>
            <button onClick={closeBtn}>Отмена</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edit;
