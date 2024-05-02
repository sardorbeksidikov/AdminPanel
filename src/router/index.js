import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../page/Home";
import LoginPage from "../page/Login";
import AddPage from "../page/Add";
import EditPage from "../page/Edit";
import { Header, SiteBar } from "../components";
import { ToastContainer } from "react-toastify";
const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigate();
  const parms = window.location.href;
  // login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
      if (parms.includes("/login")) {
        return navigation("/");
      }
      return;
    } else {
      setIsLogin(false);
      return navigation("/login");
    }
  }, [isLogin, parms]);
  return (
    <>
      <ToastContainer />
      <Header login={isLogin} />

      <div className="wrapper_admin">
        {isLogin ? <SiteBar login={setIsLogin} /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage login={setIsLogin} />} />
          <Route path="/add/product" element={<AddPage />} />
          <Route path="/edit/product/:id" element={<EditPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
