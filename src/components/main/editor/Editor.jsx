import React from "react";
import { ProfileBox } from "./ProfileBox";
import { ProfileBoxTemplate } from "./ProfileBoxTemplate";
import css from "./profileBox.module.css";

const Editor = ({ FileInput, users, addCard, deleteCard, updateCard }) => {
  return (
    <div className={css.halfWrapper}>
      <p className={css.title}>Card Maker</p>
      {Object.keys(users).map((key) => (
        <ProfileBox
          key={key}
          FileInput={FileInput}
          user={users[key]}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
      <ProfileBoxTemplate addCard={addCard} FileInput={FileInput} />
    </div>
  );
};

export default Editor;
