import React from "react";
import { ProfileBox } from "./ProfileBox";
import { ProfileBoxTemplate } from "./ProfileBoxTemplate";
import css from "./profileBox.module.css";

const Editor = ({ users, addCard, deleteCard, updateCard }) => {
  return (
    <div className={css.halfWrapper}>
      <p className={css.title}>Card Maker</p>
      {Object.keys(users).map((key) => (
        <ProfileBox
          user={users[key]}
          key={key}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
      <ProfileBoxTemplate addCard={addCard} />
    </div>
  );
};

export default Editor;
