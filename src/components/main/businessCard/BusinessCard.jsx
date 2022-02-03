import React from "react";
import css from "./businessCard.module.css";

const BusinessCard = ({ profile }) => {
  const { name, company, theme, title, email, message, photo } = profile;
  return (
    <div className={css.businessCard}>
      <div className={css.imgArea}>
        <img
          src="images/default_logo.png"
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
};

export default BusinessCard;
