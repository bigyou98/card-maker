import React, { memo } from "react";
import BusinessCard from "./BusinessCard";
import css from "./businessCard.module.css";

const Preview = memo(({ users }) => {
  return (
    <div className={css.preview}>
      <p className={css.title}>Card Preview</p>
      {Object.keys(users).map((key) => (
        <BusinessCard user={users[key]} key={key} />
      ))}
    </div>
  );
});

export default Preview;
