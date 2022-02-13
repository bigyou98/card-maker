import React from "react";
import css from "./profileBox.module.css";

export const ProfileBox = ({ profile }) => {
  const { name, company, theme, title, email, message, photo } = profile;
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input
          className={css.flex1}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          className={css.flex1}
          type="text"
          placeholder="Company"
          value={company}
        />
        <select className={css.flex1} value={theme}>
          <option value="dark">Dark</option>
          <option value="white">white</option>
          <option value="pink">Pink</option>
        </select>
      </div>
      <div className={css.box}>
        <input
          className={css.flex1}
          type="text"
          placeholder="Title"
          value={title}
        />
        <input
          className={css.flex1}
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
        <label htmlFor="profilePhoto2" className={`${css.flex1} ${css.label}`}>
          선택된 사진이 있으면 분홍색
        </label>
        <input
          id="profilePhoto2"
          type="file"
          className={`${css.flex1} ${css.btn1}`}
          value={photo}
        ></input>
        <button className={`${css.flex1} ${css.btn2}`}>추가하기</button>
      </div>
    </div>
  );
};
