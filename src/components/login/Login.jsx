import React from "react";
import css from "./login.module.css";

const Login = () => {
  const click = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img src="images/logo.png" alt="로고" className={css.img} />
        <p className={css.title}>Business Card Maker</p>
        <div className={css.whiteBack}>
          <p>Login</p>
          <button className={css.button} onClick={click} id="google">
            Google
          </button>
          <button className={css.button} onClick={click} id="github">
            Github
          </button>
        </div>
        <p>Dreams Come True</p>
      </div>
    </div>
  );
};

export default Login;
