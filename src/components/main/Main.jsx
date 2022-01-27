import React, { useState } from "react";
import css from "./main.module.css";
import BusinessCard from "./businessCard/BusinessCard";
import { ProfileBox, ProfileBoxTemplate } from "components/main/profileBox";

const Main = () => {
  const [obj, setObj] = useState({
    name: "박상훈",
    company: "네이버",
    title: "학생",
    email: "bigyou00@gmail.com",
    message: "현재는 한세대학교 학생입니다.",
  });

  return (
    <div className={css.layout}>
      <div className={css.header}>
        <img src="images/logo.png" alt="로고" className={css.img} />
        Business Card Maker
      </div>
      <div className={css.wrapper}>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Maker</p>
          {/* <ProfileBox /> */}
          <ProfileBoxTemplate />
        </div>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Preview</p>
          <BusinessCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
