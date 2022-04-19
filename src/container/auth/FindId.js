import FindIdForm from "../../components/auth/FindIdForm";
import { useState } from "react";

const FindId = () => {
  const [email, setEmail] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return <FindIdForm onChange={onChange} onSubmit={onSubmit} email={email} />;
};

export default FindId;
