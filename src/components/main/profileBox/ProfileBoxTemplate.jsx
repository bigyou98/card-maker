import React from "react";
import css from "./profileBox.module.css";

export const ProfileBoxTemplate = () => {
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input className={css.pros} type="text" placeholder="Name" />
        <input className={css.pros} type="text" placeholder="Company" />
        <select className={css.pros}>
          <option value="1" selected>
            Dark
          </option>
          <option value="2">Pink</option>
        </select>
      </div>
      <div className={css.box}>
        <input className={css.pros} type="text" placeholder="Title" />
        <input className={css.pros} type="text" placeholder="Email" />
      </div>
      <input type="text" placeholder="Message" className={css.message} />
      <div className={css.box}>
        <input type="file" className={`${css.pros} ${css.btn1}`}></input>
        <button className={`${css.pros} ${css.btn2}`}>추가하기</button>
      </div>
    </div>
  );
};
