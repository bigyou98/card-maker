import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 가장 먼저 보여지는 페이지</p>
      <button onClick={() => navigate("/about")}>클릭</button>
    </div>
  );
};

export default Home;
