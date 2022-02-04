import React, { useState } from "react";
import css from "./main.module.css";
import BusinessCard from "./businessCard/BusinessCard";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ProfileBox, ProfileBoxTemplate } from "components/main/profileBox";

const Main = () => {
  // DB 사용 준비
  const firebaseConfig = {
    apiKey: "AIzaSyBb71mkpUGzjcrKEViTKoV_NxBxOdUe6v8",
    authDomain: "ellie-card-maker.firebaseapp.com",
    databaseURL: "https://ellie-card-maker-default-rtdb.firebaseio.com",
    projectId: "ellie-card-maker",
    storageBucket: "ellie-card-maker.appspot.com",
    messagingSenderId: "190507871648",
    appId: "1:190507871648:web:2d31934116b6db82cf48c5",
    measurementId: "G-3GPCGWW4JX",
  };

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

  const [profile, setProfile] = useState({
    name: "박상훈",
    company: "네이버",
    theme: "dark",
    title: "학생",
    email: "bigyou00@gmail.com",
    message: "'현재는 한세대학교 학생입니다.'",
    photo: "",
    id: "0",
  });
  const navigation = useNavigate();

  return (
    <div className={css.layout}>
      <div className={css.header}>
        <img
          src="images/logo.png"
          alt="로고"
          className={css.img}
          onClick={() => {
            navigation("/");
          }}
        />
        Business Card Maker
      </div>
      <div className={css.wrapper}>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Maker</p>
          <ProfileBox profile={profile} />
          <ProfileBoxTemplate />
        </div>
        <div className={css.halfWrapper}>
          <p className={css.title}>Card Preview</p>
          <BusinessCard profile={profile} />
          <BusinessCard profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default Main;
