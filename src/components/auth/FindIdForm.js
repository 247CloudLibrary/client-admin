import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const FindIdForm = ({ email, onChange, onSubmit }) => {
  return (
    <div className="findIdForm">
      <Link to={"/"} className="logo">
        <WiCloud />
        <span>Cloud Library</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={onChange}
        />
        <button className="btn">아이디 찾기</button>
      </form>
    </div>
  );
};

export default FindIdForm;
