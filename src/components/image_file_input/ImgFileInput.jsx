import React, { useRef, useState } from "react";
import style from "./imgFileInput.module.css";

const ImgFileInput = ({ name, imgUploader, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imgUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={style.container}>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        name="file"
        className={style.input}
        onChange={onChange}
      />
      {loading ? (
        <div className={style.loading} />
      ) : (
        <button
          className={`${style.button} ${name ? style.pink : null}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
    </div>
  );
};

export default ImgFileInput;
