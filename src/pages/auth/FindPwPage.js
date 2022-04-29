import FindPw from "../../container/auth/FindPw";
import { Link } from "react-router-dom";

const FindPwPage = () => {
  return (
    <div id="findPw">
      {localStorage.getItem("user") === null ? (
        <FindPw />
      ) : (
        <Link to={"/home"}>메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default FindPwPage;
