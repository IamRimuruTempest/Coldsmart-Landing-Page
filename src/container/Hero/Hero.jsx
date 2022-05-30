import React from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Hero.scss";

const Hero = () => {
  return (
    <div id="Home" className="app__home ">
      <div className="app__home-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__home-info"
        >
          <div className="app__home-data ">
            <h1 className="app__home-title">
              Smart Air conditioner Thermostat
            </h1>
            <p className="app__home-subtitle">
              Coldsmart is a Wi-Fi enabled air conditioner controller that is
              compatible with world standard infrared remote controls, it helps
              you convert your mini-split, portable or window ACs to smart air
              conditioners that consume an average of 40% of power utility
              expenses.
              <br></br>
              <br></br>
              Control your new or old, inverter and conventional AC from
              anywhere through your smartphone. Enjoy the convenience and save
              money by reducing your electricity bills.
            </p>

            <div className="app__home-buttons">
              <a href="#Contact%20Us">Try Now</a>
              <a href="#Features">Learn More</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="app__home-img app__flex"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={images.thermostat1} alt="thermostat" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
