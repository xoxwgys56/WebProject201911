import React, { Fragment } from "react";
import Visual from "../Main/Visual";
import Header from "../Main/Header";
import BestCourse from '../Main/BestCourse';
import BestDestination from '../Main/BestDestination';
import MyPage from '../Main/MyPage';
import Suggestion from '../Main/Suggestion';
import Footer from '../Main/Footer';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Visual />
      <BestCourse />
      <MyPage />
      <BestDestination />
      <Suggestion />
      <Footer />
    </Fragment>
  );
};

export default Main;
