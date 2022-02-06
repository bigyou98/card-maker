import React, { useState, useRef } from "react";
import css from "./profileBox.module.css";

export const ProfileBoxTemplate = ({ writeUserData }) => {
  const [obj, setObj] = useState({
    name: "현재 이것은 템플릿임",
    company: "",
    them: "dark",
    title: "",
    email: "",
    message: "",
    photo: "",
    userId: "",
  });
  const ref = useRef();

  let userId = Date.now().toString();

  let photoName = obj.photo
    .replace("C:\\fakepath\\", "")
    .replace(".jpg", "")
    .replace(".png", "");

  const addProfile = async () => {
    // 1. DB에 내용 저장하기
    try {
      await writeUserData(
        userId,
        obj.name,
        obj.company,
        obj.them,
        obj.title,
        obj.email,
        obj.message,
        obj.photo
      );
    } catch (e) {
      console.log(e);
    }
    // 2. obj 내용물 비우기
    setObj({});
  };
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input
          className={css.flex1}
          type="text"
          placeholder="Name"
          value={obj.name}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, name: e.target.value };
            });
          }}
        />
        <input
          className={css.flex1}
          type="text"
          placeholder="Company"
          value={obj.company}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, company: e.target.value };
            });
          }}
        />
        <select
          className={css.flex1}
          value={obj.them}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, them: e.target.value };
            });
          }}
        >
          <option value="dark">Dark</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
        </select>
      </div>
      <div className={css.box}>
        <input
          ref={ref}
          className={css.flex1}
          type="text"
          placeholder="Title"
          value={obj.title}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, title: e.target.value };
            });
          }}
        />
        <input
          className={css.flex1}
          type="text"
          placeholder="Email"
          value={obj.email}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, email: e.target.value };
            });
          }}
        />
      </div>
      <textarea
        type="text"
        placeholder="Message"
        className={css.message}
        value={obj.message}
        onChange={(e) => {
          setObj((cur) => {
            return { ...cur, message: e.target.value };
          });
        }}
      />
      <div className={css.box}>
        <label
          htmlFor="profilePhoto"
          className={photoName === "" ? css.label : css.photo}
        >
          {photoName === "" ? "file 선택하기" : photoName}
        </label>
        <input
          type="file"
          id="profilePhoto"
          className={`${css.flex1} ${css.btn1}`}
          value={obj.photo}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, photo: e.target.value };
            });
          }}
        ></input>
        <button className={`${css.flex1} ${css.btn2}`} onClick={addProfile}>
          추가하기
        </button>
      </div>
    </div>
  );
};
