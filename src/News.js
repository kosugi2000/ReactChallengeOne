import React from "react";
import styled from "styled-components";
import ImgPath1 from "./img/news_img.jpg";

const News = () => {
  return (
    <>
      <h3 className="newstitle">
        <a className="newsx">NEWS</a>
      </h3>

      <h4 className="newstitle2">ニュース</h4>

      <div className="news">
        <div className="hover2">
          <div className="news1">
            <img src={ImgPath1} alt="ロゴ" />
            <p className="date">2016/11/18</p>
            <p className="blog">
              チーズアカデミー卒業生のコスゲさんによる
              チーズだけをふんだんに使用した話題のピザ屋 「Kosuge
              Pizza」が渋谷でオープンしました！
            </p>
          </div>
        </div>

        <div className="hover2">
          <div className="news2">
            <img src={ImgPath1} alt="ロゴ" />
            <p className="date">2016/11/18</p>
            <p className="blog">
              チーズアカデミー卒業生のコスゲさんによる
              チーズだけをふんだんに使用した話題のピザ屋 「Kosuge
              Pizza」が渋谷でオープンしました！
            </p>
          </div>
        </div>

        <a href="https://gsacademy.jp/">
          <div className="hover2">
            <div className="news3">
              <img src={ImgPath1} alt="ロゴ" />
              <p className="date">2016/11/18</p>
              <p className="blog">
                チーズアカデミー卒業生のコスゲさんによる
                チーズだけをふんだんに使用した話題のピザ屋 「Kosuge
                Pizza」が渋谷でオープンしました！
              </p>
            </div>
          </div>
        </a>
      </div>
      <a href="https://gsacademy.jp/">
        <div className="hover1">More</div>
      </a>
    </>
  );
};
export default News;
