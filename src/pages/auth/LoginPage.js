import AuthForm from "../../container/auth/AuthForm";
import { Link, Redirect } from "react-router-dom";

const LoginPage = () => {
  return (
    <div id="login">
      {localStorage.getItem("user") === null ? (
        <AuthForm />
      ) : (
        <Link to={"/home"}>메인페이지로 이동</Link>
      )}
    </div>
  );
};

export default LoginPage;
