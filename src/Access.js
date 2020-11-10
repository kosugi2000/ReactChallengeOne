import React from "react";
import styled from "styled-components";

const iFrameItem = styled.div`
  width: 50%;
  height: 600px;
`;

const Access = () => {
  return (
    <>
      <div className="accesswrap">
        <h3 className="access">
          <a id="access">ACCESS</a>
        </h3>
        <h4>会社情報</h4>
        <iFrameItem>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.396444816522!2d139.7119021152585!3d35.66723918019762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396adb5ba7ce03!2z44K444O844K644Ki44Kr44OH44Of44O85p2x5Lqs77yP6LW35qWt5a6244Ko44Oz44K444OL44Ki6aSK5oiQ5a2m5qCh77yI44OX44Ot44Kw44Op44Of44Oz44Kw77yJ!5e0!3m2!1sja!2sjp!4v1596967364450!5m2!1sja!2sjp"
            allowfullscreen=""
            aria-hidden="false"
            tabindex=""
          ></iframe>
        </iFrameItem>

        <div className="access1">
          <dl>
            <dt>学校名</dt>
            <dd>チーズアカデミーTOKYO</dd>
            <dt>事務所所在地</dt>
            <dd>〒107-0061東京都港区北青山3-5-6 青朋ビル2F</dd>
            <dt>TEL</dt>
            <dd>03-5413-5045</dd>
            <dt>FAX</dt>
            <dd>03-5413-5046</dd>
            <dt>MAIL</dt>
            <dd>dummy@cheeseacademy.tokyo</dd>
          </dl>
        </div>
      </div>
    </>
  );
};
export default Access;
