import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const uid = storage.adminId;
  const token = json.headers.token;

  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [previousPw, setPreviousPw] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNewPassword = (event) => {
    setPassword(event.target.value);
  };
  const handlePwConfirm = (event) => {
    setPwConfirm(event.target.value);
  };
  const handlePreviousPassword = (event) => {
    setPreviousPw(event.target.value);
  };

  const changePw = async (uid, password, token) => {
    const response = await axios.patch(
      "/v1/admin/update-state",
      {
        adminId: uid,
        changePassword: password,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return response;
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (window.confirm("비밀번호를 변경 하시겠습까?")) {
      try {
        const response = await changePw(uid, password, token);
        if (response.status === 200) {
          window.alert("비밀번호를 변경하였습니다.");
          navigate("/home");
        }
        console.log(response);
      } catch (e) {
        window.alert("비밀번호 변경에 실패하였습니다.");
      }
    } else {
      return;
    }
  };

  const handleEye = (event) => {
    setToggle((toggle) => !toggle);
    console.log(event);
  };
  return (
    <div id="change-password">
      <div className="form">
        <Link to={"/"} className="logo">
          <WiCloud />
          <span>Cloud Library</span>
        </Link>
        <form onSubmit={onSubmit}>
          <label htmlFor="previous-pw">이전 비밀번호</label>
          <input
            id="previous-pw"
            type="text"
            onChange={handlePreviousPassword}
            value={previousPw}
            required
          />

          <label htmlFor="new-pw">
            새 비밀번호
            <span onClick={handleEye}>
              {toggle ? (
                <AiOutlineEyeInvisible className="eye" />
              ) : (
                <AiOutlineEye className="eye" />
              )}
            </span>
          </label>
          <input
            id="new-pw"
            type={toggle ? "text" : "password"}
            onChange={handleNewPassword}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
            required
          />

          <label htmlFor="new-pwConfirm">새 비밀번호 확인</label>
          <input
            id="new-pwConfirm"
            type="password"
            onChange={handlePwConfirm}
            value={pwConfirm}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
            required
          />
          {password !== pwConfirm ? (
            <div className="error-text">일치하지 않습니다</div>
          ) : (
            ""
          )}
          <button>변경하기</button>
        </form>
      </div>
    </div>
  );
};
export default ChangePasswordForm;
