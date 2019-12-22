import React, { Fragment } from "react"

const BestDestination = () => {
  return (
    <Fragment>
      <section id="rising">
        <article className="inner">
          <div className="left">
            <h2>급부상 중인 여행지</h2>
            <ul className="tag">
              <li className="on">
                <a href="#trip1">#나홀로여행</a>
              </li>
              <li>
                <a href="#trip2">#커플여행</a>
              </li>
              <li>
                <a href="#trip3">#우정여행</a>
              </li>
              <li>
                <a href="#trip4">#인생여행지</a>
              </li>
            </ul>
            <div className="pagination">
              <button type="button" className="btn-prev"></button>
              <button type="button" className="btn-next"></button>
            </div>
          </div>
          <div className="right">
            <ul className="sliderContainer">
              {/* <!-- 나홀로여행 --> */}
              <li className="slider-wrap" id="trip1">
                <div className="slide">
                  <a href="#">
                    <p>#01-01</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide">
                  <a href="#">
                    <p>#01-02</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide">
                  <a href="#">
                    <p>#01-03</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide">
                  <a href="#">
                    <p>#01-04</p>
                    <h3>여행지</h3>
                  </a>
                </div>
              </li>
              {/* <!-- 커플여행 --> */}
              <li className="slider-wrap" id="trip2">
                <div className="slide" style={{backgroundColor:'salmon'}}>
                  <a href="#">
                    <p>#02-01</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'salmon'}}>
                  <a href="#">
                    <p>#02-02</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'salmon'}}>
                  <a href="#">
                    <p>#02-03</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'salmon'}}>
                  <a href="#">
                    <p>#02-04</p>
                    <h3>여행지</h3>
                  </a>
                </div>
              </li>
              {/* <!-- 우정여행 --> */}
              <li className="slider-wrap" id="trip3">
                <div className="slide" style={{backgroundColor:'darkcyan'}}>
                  <a href="#">
                    <p>#03-01</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'darkcyan'}}>
                  <a href="#">
                    <p>#03-02</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'darkcyan'}}>
                  <a href="#">
                    <p>#03-03</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'darkcyan'}}>
                  <a href="#">
                    <p>#03-04</p>
                    <h3>여행지</h3>
                  </a>
                </div>
              </li>
              {/* <!-- 인생여행지 --> */}
              <li className="slider-wrap" id="trip4">
                <div className="slide" style={{backgroundColor:'lightpink'}}>
                  <a href="#">
                    <p>#04-01</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'lightpink'}}>
                  <a href="#">
                    <p>#04-02</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'lightpink'}}>
                  <a href="#">
                    <p>#04-03</p>
                    <h3>여행지</h3>
                  </a>
                </div>
                <div className="slide" style={{backgroundColor:'lightpink'}}>
                  <a href="#">
                    <p>#04-04</p>
                    <h3>여행지</h3>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  )
}

export default BestDestination
