import React, { useState } from "react";
import css from "./profileBox.module.css";

export const ProfileBoxTemplate = () => {
  const [obj, setObj] = useState({
    name: "현재 이것은 템플릿임",
    company: "",
    them: "dark",
    title: "",
    email: "",
    message: "",
    photo: "",
  });

  const addProfile = () => {
    // 1. DB에 내용 저장하기
    // 2. obj 내용물 비우기
  };
  return (
    <div className={css.profileBox}>
      <div className={css.box}>
        <input
          className={css.pros}
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
          className={css.pros}
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
          className={css.pros}
          value={obj.them}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, them: e.target.value };
            });
          }}
        >
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
          value={obj.title}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, title: e.target.value };
            });
          }}
        />
        <input
          className={css.pros}
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
        <input
          type="file"
          className={`${css.pros} ${css.btn1}`}
          value={obj.photo}
          onChange={(e) => {
            setObj((cur) => {
              return { ...cur, photo: e.target.value };
            });
          }}
        ></input>
        <button className={`${css.pros} ${css.btn2}`} onClick={addProfile}>
          추가하기
        </button>
      </div>
    </div>
  );
};
