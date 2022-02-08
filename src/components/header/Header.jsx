import React from "react";
import style from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }) => {
  const navigation = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigation("/");
  };
  return (
    <div className={style.header}>
      {onLogout && (
        <button onClick={handleLogout} className={style.logout}>
          Logout
        </button>
      )}
      <img src="images/logo.png" alt="로고" className={style.logo} />
      <p className={style.title}>Business Card Maker</p>
    </div>
  );
};

export default Header;
