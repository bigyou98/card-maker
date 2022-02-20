import Button from "components/button/Button";
import React, { memo, useRef, useState } from "react";
import css from "./profileBox.module.css";

export const ProfileBoxTemplate = memo(({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      userId: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    addCard(card);
    setFile({});
  };

  return (
    <form className={css.profileBox} ref={formRef}>
      <div className={css.box}>
        <input
          ref={nameRef}
          className={css.input}
          type="text"
          placeholder="Name"
          name="name"
          maxLength="20"
        />
        <input
          ref={companyRef}
          className={css.input}
          type="text"
          placeholder="Company"
          name="company"
          maxLength="20"
        />
        <select className={css.input} name="theme" ref={themeRef}>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={css.box}>
        <input
          ref={titleRef}
          className={css.input}
          type="text"
          placeholder="Title"
          name="title"
          maxLength="20"
        />
        <input
          ref={emailRef}
          className={css.input}
          type="text"
          placeholder="Email"
          name="email"
          maxLength="20"
        />
      </div>
      <textarea
        type="text"
        ref={messageRef}
        placeholder="Message"
        className={css.message}
        name="message"
        maxLength="100"
      />
      <div className={css.box}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button onSubmit={onSubmit} />
      </div>
    </form>
  );
});
