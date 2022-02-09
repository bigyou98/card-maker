import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import css from "./login.module.css";

const Login = ({ authService }) => {
  const navigation = useNavigate();
  const { search, state } = useLocation();

  const goToMain = (userId) => {
    navigation("/main", { sanghun: "쿵쿵쿵" });
  };
  const onLogin = (e) => {
    authService
      .login(e.target.innerText)
      .then((data) => goToMain(data.user.uid));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Header />
        <div className={css.whiteBack}>
          <p>Login</p>
          <button className={css.button} onClick={onLogin}>
            Google
          </button>
          <button className={css.button} onClick={onLogin}>
            Github
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
