import { Link } from "react-router-dom";
import Main from "../container/Main";

const Home = () => {
  return (
    <div id="main">
      {localStorage.getItem("user") === null ? (
        <Link to={"/"}>로그인</Link>
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Home;
