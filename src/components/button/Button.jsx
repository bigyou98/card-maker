import React from "react";
import style from "./button.module.css";

const Button = ({ deleteCard, onSubmit }) => {
  return deleteCard ? (
    <button className={style.button} onClick={deleteCard}>
      Delete
    </button>
  ) : (
    <button className={style.button} onClick={onSubmit}>
      Add
    </button>
  );
};

export default Button;
