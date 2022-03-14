import React from "react";
import style from "../Home/style/Home.module.css";
import Section1 from "../Home/Section1";
import img1 from "../../assetcs/images/img1.jpg";
const Home = () => {
  return (
    <div>
      <img className={style.img} src={img1} alt="" />

      <Section1 />
    </div>
  );
};

export default Home;
