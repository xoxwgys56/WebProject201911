import React, { Fragment } from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div id="pre-login">
        <p>모두의 여행 플래너</p>
        <p className="tit">떠나고</p>
        <h1>Login</h1>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="sns-login">
            <button type="submit" className="naver">
              N
            </button>
            <button type="submit" className="kakao">
              K
            </button>
            <button type="submit" className="google">
              G
            </button>
          </div>
        </form>
        <a href="#" className="non-member">
          비회원으로 입장하기
        </a>
      </div>
    </div>
  );
};

export default Login;
