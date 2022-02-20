import React, { memo } from "react";
import style from "./header.module.css";

const Header = memo(({ onLogout }) => {
  return (
    <div className={style.header}>
      {onLogout && (
        <button onClick={onLogout} className={style.logout}>
          Logout
        </button>
      )}
      <img src="images/logo.png" alt="로고" className={style.logo} />
      <p className={style.title}>Business Card Maker</p>
    </div>
  );
});

export default Header;
