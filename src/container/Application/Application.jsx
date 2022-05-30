import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Application.scss";

const Application = () => {
  return (
    <div className="app__application app__section">
      <div className="app__container app__application-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-start">
            {/* <div></div>
            <p>ColdSmart Mobile App</p> */}
          </div>
          <h1 className="app__subtitle-center">
            Your comfort is at your fingertips
          </h1>

          <p className="app__application-description">
          With ColdSmart you can control and manage the climate in your rooms.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app__application-content"
        >
          <img className="app__mobile-img" src={images.mobileapp} alt="" />

          <div>
            {/* <img className="app__mobile-store" src={images.appstore} alt="" />
            <img className="app__mobile-store" src={images.googleplay} alt="" /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Application;
