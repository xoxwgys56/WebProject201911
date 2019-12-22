import React, { Fragment } from "react";

const MyPage = () => {
  return (
    <Fragment>
      <section id="mypage">
        <article className="inner">
          <div className="mypage_box">
            <ul>
              <li className="profile">
                <a href="#" className="img">
                  프로필이미지
                </a>
                <p>
                  <strong>떠나고</strong>님은
                  <br />
                  지금 여행 중!
                </p>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default MyPage;
