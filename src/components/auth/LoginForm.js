import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onChange, onSubmit, form }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };
  return (
    <div className="loginForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="userId"
          onChange={onChange}
          value={form.userId}
        />
        <input
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <button className="login-btn" onClick={onClick}>
          로그인
        </button>
      </form>
      <footer>
        <Link to="/find-id">
          <span>아이디찾기</span>
        </Link>
        <Link to="/find-pw">
          <span>비밀번호찾기</span>
        </Link>
      </footer>
    </div>
  );
};

export default LoginForm;
