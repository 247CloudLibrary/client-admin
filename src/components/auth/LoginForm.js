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
        <div className="input-form">
          <input
            type="text"
            id="login-id-input"
            name="userId"
            onChange={onChange}
            value={form.userId}
            autoComplete="off"
            required
          />
          <label htmlFor="login-id-input" className="input-label">
            <span className="content-text">아이디</span>
          </label>
        </div>
        <div className="input-form">
          <input
            id="login-password-input"
            onChange={onChange}
            value={form.password}
            name="password"
            type="password"
            required
          />
          <label htmlFor="login-password-input" className="input-label">
            <span className="content-text">비밀번호</span>
          </label>
        </div>
        <button className="login-btn">로그인</button>
      </form>
      <footer className="login-footer">
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
