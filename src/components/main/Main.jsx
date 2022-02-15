import React, { useEffect, useState } from "react";
import css from "./main.module.css";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const Main = ({ authService }) => {
  const navigation = useNavigate();
  const [users, setUsers] = useState({
    1: {
      name: "박상훈",
      company: "네이버",
      theme: "dark",
      title: "학생",
      email: "bigyou00@gmail.com",
      message: "'현재는 한세대학교 학생입니다.'",
      fileName: "박상훈 증명사진",
      fileURL: "sanghun.png",
      userId: "1",
    },
    2: {
      name: "박동글",
      company: "네이버",
      theme: "white",
      title: "학생",
      email: "bigyou00@gmail.com",
      message: "레츠고",
      fileName: "상훈쓰",
      fileURL: null,
      userId: "2",
    },
    3: {
      name: "김가영",
      company: "카페",
      theme: "pink",
      title: "메이크업 디자이너",
      email: "bigyou00@gmail.com",
      message: "알바중 입니다",
      fileName: "",
      fileURL: null,
      userId: "3",
    },
  });

  // 사용자 정보가 없다면 로그인 페이지로
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigation("/");
      }
    });
  });

  const deleteCard = (user) => {
    setUsers((cur) => {
      const updated = { ...cur };
      delete updated[user.userId];
      return updated;
    });
  };
  const createOrUpdateCard = (user) => {
    setUsers((cur) => {
      const updated = { ...cur };
      updated[user.userId] = user;
      return updated;
    });
  };

  return (
    <div className={css.main}>
      <Header onLogout={() => authService.logout()} />
      <div className={css.wrapper}>
        <Editor
          users={users}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview users={users} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
