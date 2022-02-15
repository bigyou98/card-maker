import Button from "components/button/Button";
import ImgFileInput from "components/image_file_input/ImgFileInput";
import React, { useRef } from "react";
import css from "./profileBox.module.css";

export const ProfileBoxTemplate = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    addCard(card);
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
        />
        <input
          ref={companyRef}
          className={css.input}
          type="text"
          placeholder="Company"
          name="company"
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
        />
        <input
          ref={emailRef}
          className={css.input}
          type="text"
          placeholder="Email"
          name="email"
        />
      </div>
      <textarea
        type="text"
        ref={messageRef}
        placeholder="Message"
        className={css.message}
        name="message"
      />
      <div className={css.box}>
        <ImgFileInput />
        <Button onSubmit={onSubmit} />
      </div>
    </form>
  );
};
