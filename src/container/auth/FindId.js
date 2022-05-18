import FindIdForm from "../../components/auth/FindIdForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindId = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getId = async (email) => {
    const mail = await axios.post("/v1/admin/findid", {
      email: email,
    });
    setId(mail.data.data.id);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await getId(email);
    if (window.confirm(`${email} 로 가입한 아이디를 찾으시겠습니까?`)) {
      console.log(id);
      setLoading(false);
    } else {
      return;
    }
  };

  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <FindIdForm
      onChange={onChange}
      onSubmit={onSubmit}
      email={email}
      id={id}
      loading={loading}
      goToLogin={goToLogin}
    />
  );
};

export default FindId;
