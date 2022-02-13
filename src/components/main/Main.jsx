import React, { useEffect, useState } from "react";
import css from "./main.module.css";
import BusinessCard from "./preview/BusinessCard";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const Main = ({ authService }) => {
  const navigation = useNavigate();

  const {
    state: { id },
  } = useLocation();

  // 사용자 정보가 없다면 로그인 페이지로
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigation("/");
      }
    });
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
    <div className={css.main}>
      <Header onLogout={() => authService.logout()} />
      <div className={css.wrapper}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
