import React from "react";
import styled from "styled-components";
import ImgPath from "./img/mainbg.png";

const MainVisual = () => {
  return (
    <>
      <div class="mainvisual">
        <div class="mainbg">
          <img src={ImgPath} className="mainbg" alt="ろご" />
          <div class="mainbgtext">
            <h1 class="mainbgtitle">セカイを変えるチーズを作ろう</h1>
            <h2 class="mainbgcomment">
              チーズ職人養成学校「チーズアカデミーTOKYO」
            </h2>
          </div>
        </div>

        <h3 class="about">
          <a id="about">ABOUT</a>
        </h3>
        <h4>チーズアカデミーについて</h4>

        <div class="maintext">
          <p>チーズアカデミーは、チーズ職人養成学校です。</p>
        </div>
        <div class="maintext">
          <p>
            チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
            <br />
            そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
          </p>
        </div>
        <div class="maintext">
          <p>
            そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
          </p>
        </div>

        <div class="maintext">
          <p>
            卒業後、チーズ自給自足のバックアップはもちろんのこと、
            <br />
            チーズ職人への就職・転職もサポートします。
          </p>
        </div>
      </div>
    </>
  );
};
export default MainVisual;
