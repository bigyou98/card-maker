import React from "react";
import style from "./imgFileInput.module.css";

const ImgFileInput = ({ name }) => {
  const fileHave = name ? style.pink : null;

  return (
    <button className={`${style.button} ${fileHave}`}>
      {name || "No file"}
    </button>
  );
};

export default ImgFileInput;
