import { NavLink } from "react-router-dom";
import "./index.scss";
import Home, { Karzinka, Settings } from "../../constants";
import { CiLogout } from "react-icons/ci";
const SiteBar = ({ login }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    login(false);
  };

  const menu = [
    {
      to: "/",
      icon: <Home />,
    },
    {
      to: "/",
      icon: <Settings />,
    },
    {
      to: "/add/product",
      icon: <Karzinka />,
    },
    {
      to: "/",
      icon: <CiLogout />,
      logout: true,
      onClick: handleLogout,
    },
  ];
  return (
    <>
      <div className="site_bar">
        <div className="site_bar_icon">
          <div className="site_bar_icon_item">
            {menu?.map((el, i) => (
              <NavLink key={i} to={el?.to} onClick={el?.onClick}>
                {el?.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteBar;
