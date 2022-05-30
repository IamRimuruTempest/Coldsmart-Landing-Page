import React from "react";
import "./Brands.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="app__brands app__section">
      <div className="app__container app__brands-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-start">
            <div></div>
            <p>Worldwide Compatibility</p>
          </div>
          <h1 className="app__subtitle-center">Wireless remote control</h1>
          <p className="app__brands-description">
            {/* Supports any air conditioner or heat pump with wireless remote
            control. */}
            Coldsmart thermostats are compatible with all brands of
            airconditioners and heat pumps through world standard infrared
            remote controls.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app__brands-content"
        >
          <img src={images.brands} alt="brands" />
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
