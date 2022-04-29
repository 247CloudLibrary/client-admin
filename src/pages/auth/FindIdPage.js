import FindId from "../../container/auth/FindId";
import { Link } from "react-router-dom";

const FindIdPage = () => {
  return (
    <div id="findId">
      {localStorage.getItem("user") === null ? (
        <FindId />
      ) : (
        <Link to={"/home"}>메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default FindIdPage;
