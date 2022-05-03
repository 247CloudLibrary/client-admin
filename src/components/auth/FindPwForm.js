import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const FindPwForm = ({
  goToLogin,
  id,
  pw,
  loading,
  email,
  handleId,
  handleEmail,
  onSubmit,
}) => {
  return (
    <div className="findPwForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span className="title">Cloud Library</span>
      </Link>
      {loading ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={handleId}
            required
          />
          <input
            type="text"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmail}
            required
          />
          <button className="btn">비밀번호 찾기</button>
        </form>
      ) : (
        <div className="pw-form">
          <span className="text">임시 비밀번호</span>
          <span>{pw}</span>

          <button className="btn" onClick={goToLogin}>
            로그인 하기
          </button>
        </div>
      )}
    </div>
  );
};

export default FindPwForm;
