import { useNavigate } from "react-router-dom";
import MainForm from "../components/MainForm";

const Main = () => {
  const navigate = useNavigate();
  const onBoards = () => {
    navigate("/boards");
  };
  const onBooks = () => {
    navigate("/books");
  };
  const onLending = () => {
    navigate("/lending");
  };
  const onProfile = () => {
    navigate("/profile");
  };
  const onBlackList = () => {
    navigate("/lending/blacklist");
  };
  const onRules = () => {
    navigate("/lending/libraries/rules");
  };
  const onSearchUser = () => {
    navigate("/auth");
  };
  const onLibraryList = () => {
    navigate("/libraries/list");
  };

  const onLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      window.location.href = "https://www.cloudlibrary.shop:444/";
    } else {
      console.log("Local Storage is null");
    }
  };

  const handlePasswordChange = () => {
    navigate("/change-pw");
  };
  const props = {
    onBoards,
    onBooks,
    onLending,
    onProfile,
    onBlackList,
    onRules,
    onSearchUser,
    onLibraryList,
    onLogout,
    handlePasswordChange,
  };
  return <MainForm props={props} />;
};

export default Main;
