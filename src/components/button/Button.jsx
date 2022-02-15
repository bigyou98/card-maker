import React from "react";
import style from "./button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {name ? "Delete" : "Add"}
    </button>
  );
};

export default Button;
