// Reactを使う時は Reactの機能をimportします！
import React from "react";
import styled from "styled-components";
import ImgPath from "./img/header_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="headerlogo">
        <img src={ImgPath} className="h" alt="ろご" />
      </div>
      <ul className="nav_list">
        <li className="nav_list2">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav_list2">
          <a href="#course">COURSE</a>
        </li>
        <li className="nav_list2">
          <a href="#news">NEWS</a>
        </li>
        <li className="nav_list2">
          <a href="#access">ACCESS</a>
        </li>
        <li className="nav_list2">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
