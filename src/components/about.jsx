import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <button onClick={() => navigate("/")}></button>
    </div>
  );
};

export default About;
