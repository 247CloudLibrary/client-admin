import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const FindPwForm = ({ id, email, handleId, handleEmail, onSubmit }) => {
  return (
    <div className="findPwForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={handleId}
        />
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleEmail}
        />
        <button className="btn">비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default FindPwForm;
