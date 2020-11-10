import React from "react";
import styled from "styled-components";
import ImgPath1 from "./img/about_01.jpg";
import ImgPath2 from "./img/about_02.jpg";
import ImgPath3 from "./img/about_03.jpg";
import ImgPath4 from "./img/about_04.jpg";

const Photos = () => {
  return (
    <div className="photos">
      <img src={ImgPath1} alt="ろご" />
      <img src={ImgPath2} alt="ろご" />
      <img src={ImgPath3} alt="ろご" />
      <img src={ImgPath4} alt="ろご" />
    </div>
  );
};
export default Photos;
