import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import LoginForm from "../../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const login = async (id, password) =>
    await axios.post("/admin/signin", {
      id: id,
      pw: password,
    });
  const { form, auth, authError } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { userId, password } = form;
    login(userId, password).then((response) => {
      setUser(response);
      console.log(response.status);
    });
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("Error");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("로그인 성공");
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/home");
      try {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(localStorage.getItem("user"));
        console.log(user);
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [navigate, user]);

  return <LoginForm form={form} onSubmit={onSubmit} onChange={onChange} />;
};

export default AuthForm;
