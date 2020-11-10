import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <h3 className="contacttitle">
        <a id="contact">CONTACT</a>
      </h3>
      <h4 className="contacttitle1">説明会お申し込み・お問い合わせ</h4>
      <p className="contacttext">
        ぜひ1度、足を運んでみませんか。説明会は随時開催中。
        <br />
        その他、お問い合わせもお気軽にどうぞ。お待ちしております。
        <br />
      </p>
      <p className="contacttext">
        ※チーズアカデミーは実際には存在しません。
        <br />
        間違っても問い合わせしないようお願いいたします。
        <br />
      </p>

      <div className="contact-wrapper">
        <div className="jikken">
          <form action="#" method="POST">
            <dl className="form-inner">
              <div className="formset">
                <dt className="form-title">名前</dt>
                <dd className="form-item">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-parts"
                  />
                </dd>
              </div>
              <div className="formset">
                <dt className="form-title">カナ</dt>
                <dd className="form-item">
                  <input
                    type="text"
                    name="kana"
                    id="kana"
                    className="form-parts"
                  />
                </dd>
              </div>
              <div className="formset">
                <dt className="form-title">メールアドレス</dt>
                <dd className="form-item">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-parts"
                  />
                </dd>
              </div>
              <div className="formset">
                <dt className="form-title">
                  チーズアカデミーを
                  <br />
                  知ったきっかけ
                </dt>
                <dd className="form-item">
                  <select name="kikkake" className="form-parts">
                    <option value=""></option>
                    <option value="google検索">google検索</option>
                    <option value="SNS">SNS</option>
                    <option value="紹介">紹介</option>
                    <option value="たまたま通りかかった">
                      たまたま通りかかった
                    </option>
                    <option value="その他">その他</option>
                  </select>
                </dd>
              </div>
              <div className="formset">
                <dt className="form-title radio-check">志望動機</dt>
                <dd className="form-item">
                  <div className="form-label-wrap">
                    <label for="making" className="form-label">
                      <input
                        type="radio"
                        name="kind"
                        id="making"
                        value="起業をしたい"
                      />
                      起業をしたい
                    </label>
                    <br />
                    <label for="event" className="form-label">
                      <input
                        type="radio"
                        name="kind"
                        id="event"
                        value="チーズ系企業に就職・転職したい"
                      />
                      チーズ系企業に就職・転職したい
                    </label>
                    <br />
                    <label for="event" className="form-label">
                      <input
                        type="radio"
                        name="kind"
                        id="event"
                        value="チーズと関わる仕事をしており、仕事に生かしたい"
                      />
                      チーズと関わる仕事をしており、仕事に生かしたい
                    </label>
                    <br />
                    <label for="other" className="form-label">
                      <input
                        type="radio"
                        name="kind"
                        id="other"
                        value="チーズの教養を身につけたい"
                      />
                      チーズの教養を身につけたい
                    </label>
                  </div>
                </dd>
              </div>
              <div className="formset">
                <dt className="form-title">詳細</dt>
                <dd className="form-item">
                  <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    className="form-parts2"
                  ></textarea>
                </dd>
              </div>
            </dl>
            <div className="submit-wrap">
              <input type="submit" value="送信" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
