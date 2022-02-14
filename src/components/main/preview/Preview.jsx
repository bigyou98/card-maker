import React from "react";
import BusinessCard from "./BusinessCard";
import css from "./businessCard.module.css";

const Preview = ({ users }) => {
  return (
    <div className={css.preview}>
      <p className={css.title}>Card Preview</p>
      {users.map((user) => (
        <BusinessCard user={user} key={user.userId}/>
      ))}
    </div>
  );
};

export default Preview;
