import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import css from "./businessCard.module.css";

const Preview = () => {
  const [profile, setProfile] = useState({
    name: "박상훈",
    company: "네이버",
    theme: "dark",
    title: "학생",
    email: "bigyou00@gmail.com",
    message: "'현재는 한세대학교 학생입니다.'",
    photo: "",
    userId: "0",
  });
  return (
    <div className={css.preview}>
      <p className={css.title}>Card Preview</p>
      <BusinessCard profile={profile} />
      <BusinessCard profile={profile} />
    </div>
  );
};

export default Preview;
