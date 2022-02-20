import React, { memo } from "react";
import css from "./profileBox.module.css";
import Button from "components/button/Button";

export const ProfileBox = memo(
  ({ FileInput, user, deleteCard, updateCard }) => {
    const { name, company, theme, title, email, message, fileName } = user;

    const onChange = (e) => {
      if (e.currentTarget === null) {
        return null;
      }
      e.preventDefault();
      updateCard({
        ...user,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    };
    const onDelete = () => {
      deleteCard(user);
    };

    const onFileChange = (file) => {
      updateCard({
        ...user,
        fileName: file.name,
        fileURL: file.url,
      });
    };
    return (
      <div className={css.profileBox}>
        <div className={css.box}>
          <input
            className={css.input}
            type="text"
            placeholder="Name"
            defaultValue={name}
            name="name"
            onChange={onChange}
            maxLength="20"
          />
          <input
            className={css.input}
            type="text"
            name="company"
            placeholder="Company"
            defaultValue={company}
            onChange={onChange}
            maxLength="20"
          />
          <select
            className={css.input}
            defaultValue={theme}
            onChange={onChange}
            name="theme"
          >
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
            onChange={onChange}
            name="title"
            maxLength="20"
          />
          <input
            className={css.input}
            type="text"
            placeholder="Email"
            defaultValue={email}
            onChange={onChange}
            name="email"
            maxLength="30"
          />
        </div>
        <textarea
          type="text"
          placeholder="Message"
          className={css.message}
          defaultValue={message}
          onChange={onChange}
          name="message"
          maxLength="100"
        />
        <div className={css.box}>
          <FileInput name={fileName} onFileChange={onFileChange} />
          <Button name={fileName} deleteCard={onDelete} />
        </div>
      </div>
    );
  }
);
