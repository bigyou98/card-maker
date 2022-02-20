import React, { memo } from "react";
import css from "./businessCard.module.css";

const DEFAULT_IMG = "images/default_logo.png";

const BusinessCard = memo(({ user }) => {
  const { name, company, theme, title, email, message, fileURL } = user;
  return (
    <div className={`${css.businessCard} ${getThem(theme)}`}>
      <div className={css.imgArea}>
        <img
          src={fileURL || DEFAULT_IMG}
          alt="로고이미지"
          className={css.img}
        />
      </div>
      <div className={css.textArea}>
        <p className={css.name}>{name}</p>
        <p className={css.text}>{company}</p>
        <hr className={css.hr} />
        <p className={css.text}>{title}</p>
        <p className={css.text}>{email}</p>
        <p className={css.text}>{message}</p>
      </div>
    </div>
  );
});

function getThem(theme) {
  switch (theme) {
    case "dark":
      return css.dark;
    case "pink":
      return css.pink;
    case "white":
      return css.white;
    default:
      throw new Error(`모르는 테마 : ${theme}`);
  }
}
export default BusinessCard;
