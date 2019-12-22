import React, { Fragment } from "react";
import Food from "./Suggestion/Food";
import Room from "./Suggestion/Room";

const Suggestion = () => {
  return (
    <Fragment>
      <section id="food-room">
        <article class="inner">
          <Food />
          <Room />
        </article>
      </section>
    </Fragment>
  );
};

export default Suggestion;
