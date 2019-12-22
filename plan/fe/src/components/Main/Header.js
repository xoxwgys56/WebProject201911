import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header id="header">
        <div className="header-wrap">
          <h1>
            <a href="index.html">떠나고</a>
          </h1>
          <article className="util">
            <button className="search-button" type="button">
              검색
            </button>
            <div className="search-box">
              <input type="text" placeholder="어디로 떠날까요?" />
              <button className="search-button-b" type="submit">
                검색
              </button>
            </div>
            <button className="wish-list" type="button">
              장바구니
            </button>
            <button className="mypage-button" type="button">
              마이페이지
            </button>
          </article>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
