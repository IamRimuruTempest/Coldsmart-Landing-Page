import React, { useState, useEffect } from "react";

import "./App.scss";

import {
  About,
  Application,
  Brands,
  Contact,
  Dsm,
  Features,
  Proof,
  Footer,
  Hero,
  Team,
  Team1,
} from "./container";
import { Navbar } from "./components";
import { listenToMetricsFromFirestore } from "./redux/metrics/metricsAction";
import { connect } from "react-redux";

const App = (props) => {
  const { listenToMetricsFromFirestore } = props;

  // setup listener to changes in metrics on firestore
  useEffect(() => {
    listenToMetricsFromFirestore();
  }, []);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Dsm />
      <Brands/>
      {/* <Proof /> */}
      {windowDimenion.winWidth <= 700 ? <Team1 /> : <Team />}
      <Application />
      <Contact />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    listenToMetricsFromFirestore: () => {
      dispatch(listenToMetricsFromFirestore());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
