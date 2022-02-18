import React, { useEffect, useState } from "react";
import css from "./main.module.css";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const Main = ({ authService, FileInput, realTimeDB }) => {
  const navigation = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState(location.state && location.state.id);

  const [users, setUsers] = useState({});

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigation("/");
      }
    });
  });

  const createOrUpdateCard = (user) => {
    setUsers((cur) => {
      const updated = { ...cur };
      updated[user.userId] = user;
      return updated;
    });

    realTimeDB.saveCard(userId, user);
  };

  const deleteCard = (user) => {
    setUsers((cur) => {
      const updated = { ...cur };
      delete updated[user.userId];
      return updated;
    });
    realTimeDB.removeCard(userId, user);
  };

  return (
    <div className={css.main}>
      <Header onLogout={() => authService.logout()} />
      <div className={css.wrapper}>
        <Editor
          FileInput={FileInput}
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
