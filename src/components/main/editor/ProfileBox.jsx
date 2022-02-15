import React from "react";
import css from "./profileBox.module.css";
import Button from "components/button/Button";
import ImgFileInput from "components/image_file_input/ImgFileInput";

export const ProfileBox = ({ user }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    user;
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input
          className={css.input}
          type="text"
          placeholder="Name"
          defaultValue={name}
        />
        <input
          className={css.input}
          type="text"
          placeholder="Company"
          defaultValue={company}
        />
        <select className={css.input} defaultValue={theme}>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={css.box}>
        <input
          className={css.input}
          type="text"
          placeholder="Title"
          defaultValue={title}
        />
        <input
          className={css.input}
          type="text"
          placeholder="Email"
          defaultValue={email}
        />
      </div>
      <textarea
        type="text"
        placeholder="Message"
        className={css.message}
        defaultValue={message}
      />
      <div className={css.box}>
        <ImgFileInput name={fileName} />
        <Button name={fileName} />
      </div>
    </div>
  );
};
