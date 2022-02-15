import React from "react";
import { ProfileBox } from "./ProfileBox";
import { ProfileBoxTemplate } from "./ProfileBoxTemplate";
import css from "./profileBox.module.css";

const Editor = ({ users, addCard }) => {
  return (
    <div className={css.halfWrapper}>
      <p className={css.title}>Card Maker</p>
      {users.map((user) => (
        <ProfileBox user={user} key={user.userId} />
      ))}
      <ProfileBoxTemplate addCard={addCard} />
    </div>
  );
};

export default Editor;
