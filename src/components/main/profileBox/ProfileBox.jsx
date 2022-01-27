import React from "react";
import css from "./profileBox.module.css";

export const ProfileBox = () => {
  return (
    <div className={css.profileBox}>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Company" />
        <select>
          <option value="1" selected>
            Dark
          </option>
          <option value="2">Pink</option>
        </select>
      </div>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Message" />
      <select>
        <option value="1" selected>
          블랙
        </option>
        <option value="2">핑크</option>
      </select>
      <button>사진선택</button>
      <button>추가하기</button>
    </div>
  );
};
