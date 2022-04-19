import FindPwForm from "../../components/auth/FindPwForm";
import { useState } from "react";

const FindPw = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
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
      id={id}
      email={email}
    />
  );
};

export default FindPw;
