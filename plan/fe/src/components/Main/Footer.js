import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <article class="inner">
          <p class="copyright">&copy; LETSGO. All rights reserved</p>
          <ul>
            <li>상호명 (주)떠나고</li>
            <li>대표 떠나고</li>
            <li>개인정보보호책임자 떠나고</li>
            <li>
              <a href="#">사업자등록번호 129-12-20190 사업자정보확인</a>
            </li>
            <li>통신판매업신고번호 2019-수원양평-2020</li>
          </ul>
          <p>
            *떠나고는 무단 복제 무단 사용을 금하고 있습니다. 떠나고는 여행
            플래너를 가이드 해주는 사이트 이 이용자에게 당사의 웹사이트에 대한
            서비스 이용료를 일절 청구하지 않습니다.
          </p>
        </article>
      </footer>
    </Fragment>
  );
};

export default Footer;
