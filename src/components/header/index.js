import { useEffect, useState } from "react";
import "./index.scss";

const Header = ({ login }) => {
  const [setUrl, setsetUrl] = useState();
  const [text, setText] = useState("Авторизоваться");
  const parms = window.location.href;

  useEffect(() => {
    if (parms.includes("/")) {
      setsetUrl("Главная / Товары");
      setText("Товары");
    }
    if (parms.includes("/add/product")) {
      setsetUrl("Главная / Товары / Новый товар");
      setText("Новый товар");
    }
    if (parms.includes("/edit/product")) {
      setsetUrl("Главная / Товары / Редактирование товара");
      setText("Редактирование товара");
    }
    if (parms.includes("/login")) {
      setText("Авторизоваться");
    }
    if (parms.includes("/login")) {
      setsetUrl("");
    }
  }, [parms]);
  return (
    <>
      <header>
        <div className={`header ${!login ? "active" : ""}`}>
          <div className="header_text">
            <h3>{text}</h3>
            <p> {setUrl}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
