import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const About = () => {
  return (
    <div className="app__about app__section ">
      <div className="app__container app__about-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-start">
            <div></div>
            <p>Video</p>
          </div>

          <h1 className="app__subtitle-center">
            SMART AIR CONDITIONERS FOR AS EASY AS IT GETS
          </h1>
          <p className="app__about-description">
            Lorem ipsum dolor sit amet. Id commodi ipsa veritatis omnis vel
            voluptatem quaerat. A omnis animi non vitae cupiditate qui tempore
            ipsa eum consectetur nulla aut quasi Quis sit quas eius.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app__about-content"
        >
          <img src={images.hotel} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
