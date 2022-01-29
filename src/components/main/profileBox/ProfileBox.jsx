import React from "react";
import css from "./profileBox.module.css";

export const ProfileBox = ({ profile }) => {
  const { name, company, theme, title, email, message, photo, id } = profile;
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input
          className={css.pros}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          className={css.pros}
          type="text"
          placeholder="Company"
          value={company}
        />
        <select className={css.pros} value={theme}>
          <option value="dark" selected>
            Dark
          </option>
          <option value="pink">Pink</option>
        </select>
      </div>
      <div className={css.box}>
        <input
          className={css.pros}
          type="text"
          placeholder="Title"
          value={title}
        />
        <input
          className={css.pros}
          type="text"
          placeholder="Email"
          value={email}
        />
      </div>
      <textarea
        type="text"
        placeholder="Message"
        className={css.message}
        value={message}
      />
      <div className={css.box}>
        <input
          type="file"
          className={`${css.pros} ${css.btn1}`}
          value={photo}
        ></input>
        <button className={`${css.pros} ${css.btn2}`}>추가하기</button>
      </div>
    </div>
  );
};
