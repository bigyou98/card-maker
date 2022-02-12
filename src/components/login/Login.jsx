import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./login.module.css";

const Login = ({ authService }) => {
  const navigation = useNavigate();

  const goToMain = (userId) => {
    navigation("/main", { state: { id: userId } });
  };

  const onLogin = (e) => {
    authService
      .login(e.target.innerText)
      .then((data) => goToMain(data.user.uid));
  };

  // 로그인이 되었다면 자동으로 메인페이지로 가게끔
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.id);
    });
  });

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
