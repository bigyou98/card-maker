import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./login.module.css";

const Login = ({ authService }) => {
  const navigation = useNavigate();

  const onLogin = (e) => {
    authService.login(e.target.innerText);
    navigation("/main");
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
