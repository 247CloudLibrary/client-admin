import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const FindIdForm = ({ email, onChange, onSubmit, id, loading, goToLogin }) => {
  return (
    <div className="findIdForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      {loading ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={onChange}
          />
          <button className="btn">아이디 찾기</button>
        </form>
      ) : (
        <div className="container">
          <div className="text">{email}로 가입하신 아이디는</div>
          <div className="text">{id} 입니다.</div>
          <button className="btn" onClick={goToLogin}>
            로그인 하기
          </button>
        </div>
      )}
    </div>
  );
};

export default FindIdForm;
