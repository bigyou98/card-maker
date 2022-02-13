import React, { useState } from "react";
import { ProfileBox } from "./ProfileBox";
import { ProfileBoxTemplate } from "./ProfileBoxTemplate";
import css from "./profileBox.module.css";

const Editor = () => {
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
    <div className={css.halfWrapper}>
      <p className={css.title}>Card Maker</p>
      <ProfileBox profile={profile} />
      <ProfileBoxTemplate />
    </div>
  );
};

export default Editor;
