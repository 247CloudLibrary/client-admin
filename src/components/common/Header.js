import { RiLogoutBoxRLine } from "react-icons/ri";
import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const Header = () => {
  const onLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      window.location.href = "https://www.cloudlibrary.shop";
    } else {
      console.log("Local Storage is null");
    }
  };

  return (
    <div className="main-header">
      <div className="header">
        <Link to="/home" className="logo">
          <WiCloud />
          <span>Cloud Library</span>
        </Link>
        <button onClick={onLogout} className="logout">
          <RiLogoutBoxRLine />
        </button>
      </div>
    </div>
  );
};

export default Header;
