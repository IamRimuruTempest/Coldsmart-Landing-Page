import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Proof.scss";

const Proof = () => {
    return(
        <div className="app__application app__section">
    <div className="app__container app__application-container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__title-start">
          <div></div>
          <p>Proof</p>
        </div>
        <h1 className="app__subtitle-center">
          Proof
        </h1>

        <p className="app__application-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laudantium maiores non reprehenderit, voluptates quas.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="app__application-content"
      >
        <img className="app__mobile-img" src={images.a} alt="proof" />

        <div>
          {/* <img className="app__mobile-store" src={images.appstore} alt="" />
          <img className="app__mobile-store" src={images.googleplay} alt="" /> */}
        </div>
      </motion.div>
    </div>
  </div>
    )
  };

export default Proof;