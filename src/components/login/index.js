import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const LoginPanel = ({ login }) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const navigation = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const hendelSubmit = () => {
    if (user.name && user.email !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      navigation("/");
      login(true);
    } else {
      if (user.name === "") {
        setName(true);
      }
      if (user.email === "") {
        setEmail(true);
      }
    }
  };
  const hendelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    setEmail(false);
    setName(false);
  };
  return (
    <>
      <div className="login_p">
        <div className="container">
          <div className="login">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="user"
                placeholder="Name"
                required
                name="name"
                value={user.name}
                className={`input ${name ? "active" : ""}`}
                onChange={hendelChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={user.email}
                onChange={hendelChange}
                className={`input ${email ? "active" : ""}`}
              />
              <button onClick={hendelSubmit}>Входить</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
