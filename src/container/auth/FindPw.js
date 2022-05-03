import FindPwForm from "../../components/auth/FindPwForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindPw = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getPw = async (id, email) => {
    const password = await axios.patch("/v1/admin/findpw", {
      id: id,
      email: email,
    });
    setPw(password.data.data.changePassword);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (window.confirm(`임시 비밀번호를 받으시겠습니까?`)) {
      try {
        await getPw(id, email);
        console.log(pw);
        setLoading(false);
      } catch (e) {
        window.alert("아이디, 이메일이 올바르지 않습니다");
      }
    } else {
      return;
    }
  };

  const goToLogin = () => {
    navigate("/");
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleId = (event) => {
    setId(event.target.value);
  };
  return (
    <FindPwForm
      handleEmail={handleEmail}
      handleId={handleId}
      onSubmit={onSubmit}
      goToLogin={goToLogin}
      id={id}
      email={email}
      pw={pw}
      loading={loading}
    />
  );
};

export default FindPw;
