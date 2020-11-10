// Reactを使う時は Reactの機能をimportします！
import React from "react";
import styled from "styled-components";
const ButtonItem = styled.button`
  border: 2px solid green;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
`;
const Button = ({ text }) => {
  return (
    <>
      <ButtonItem>{text}</ButtonItem>
    </>
  );
};
export default Button;