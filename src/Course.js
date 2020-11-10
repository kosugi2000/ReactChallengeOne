import React from "react";
import styled from "styled-components";
import ImgPath1 from "./img/course_01.jpg";
import ImgPath2 from "./img/course_02.jpg";
import ImgPath3 from "./img/course_03.jpg";

const Course = () => {
  return (
    <>
      <h3 class="course">
        <a id="course">COURSE</a>
      </h3>
      <p class="maintext">
        未経験からでもスタートができるよう、カリキュラムは多くの専門家や
        <br />
        現役チーズ職人のアドバイスのもと、作られました。
      </p>
      <div class="nouen">
        <img src={ImgPath1} alt="nouen" class="nouenimg" />
        <div class="nouentext">
          <p class="coursetext0">本格的な農園を使った実地研修</p>
          <p class="coursetext1">
            チーズアカデミーでは、本格的な農園を使った実地研修を
            <br />
            行うことができます。プロとして活躍するチーズ職人も
            <br />
            使用するような、広大で環境も整った農園を余すところ
            <br />
            なく使い、卒業時には本格的なチーズを自分の力で作れる
            <br />
            実践力の養成を目指します。
          </p>
        </div>
      </div>

      <div class="lesson">
        <div class="courseimg">
          <img src={ImgPath2} alt="lesson" class="lessonimg" />
        </div>
        <div class="coursetext">
          <p class="coursetext0">必要な知識もしっかりと取得</p>
          <p class="coursetext1">
            チーズ作りには、しっかりとした食に関する知識が
            <br />
            欠かせません。チーズアカデミーでは、一流講師陣による、
            <br />
            チーズ作りに必要ないろはを余すところなく学べます。
            <br />
            チーズそのものでなく、栄養学全般を学ぶことも
            <br />
            可能ですので、チーズ以外への展開も夢ではないでしょう。
          </p>
        </div>
      </div>
      <div class="nouen">
        <img src={ImgPath3} alt="nouenimg" class="nouenimg" />
        <div class="nouentext">
          <p class="coursetext0">卒業制作はティスティング審査あり</p>
          <p class="coursetext1">
            チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。
            <br />
            卒業制作として、チーズ作りを実際に行います。卒業後、
            <br />
            一般参加によるティスティング審査があるため、作り手の
            <br />
            目線だけでなく、消費者の目線から、卒業制作作品としての
            <br />
            チーズを、しっかりと評価いただくことができます。
            <br />
          </p>
        </div>
      </div>
    </>
  );
};
export default Course;
