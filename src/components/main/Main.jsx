import React, { useState } from "react";
import css from "./main.module.css";
import BusinessCard from "./businessCard/BusinessCard";
import { ProfileBox, ProfileBoxTemplate } from "components/main/profileBox";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

const Main = ({ authService }) => {
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

  // const db = getDatabase(app);

  // const writeUserData = (
  //   userId,
  //   name,
  //   company,
  //   theme,
  //   title,
  //   email,
  //   message,
  //   photo
  // ) => {

  return (
    <div className={css.layout}>
      <Header
        onLogout={() => {
          authService.logout();
        }}
      />
      <div className={css.wrapper}>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Maker</p>
          <ProfileBox profile={profile} />
          <ProfileBoxTemplate writeUserData={() => {}} />
        </div>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Preview</p>
          <BusinessCard profile={profile} />
          <BusinessCard profile={profile} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
