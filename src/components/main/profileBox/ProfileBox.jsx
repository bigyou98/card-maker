import React from "react";
import css from "./profileBox.module.css";

const ProfileBox = () => {
  return (
    <div className={css.businessCard}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <select>
        <option value="1" selected>
          블랙
        </option>
        <option value="2">핑크</option>
      </select>
      <button>사진 선택</button>
      <button>추가하기</button>
    </div>
  );
};

export default ProfileBox;
