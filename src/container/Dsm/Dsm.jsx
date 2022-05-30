import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Dsm.scss";

const Dsm = () => {
  return (
    <div className="app__dsm app__section">
      <div className="app__container app__dsm-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-start">
            <div></div>
            <p>What is DSM?</p>
          </div>
          <h1 className="app__subtitle-center">Demand Side Management</h1>
          <p className="app__dsm-description">
            DSM Contract between stakeholders in the power utility ecosystem to
            incentivize owners to create policies and adjust temperature
            settings in the peak hot months to minimize power interruption as a
            Corporate Social Responsibility (CSR) initiative; without building
            additional power plants that requires many years to complete and
            capital intensive.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app__dsm-content"
        >
          <img src={images.feature1} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Dsm;
