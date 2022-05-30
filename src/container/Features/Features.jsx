import React from "react";
import { motion } from "framer-motion";
// import { Fade } from "react-reveal";
import { images } from "../../constants";
// import { createRoot } from "react-dom/client";
// import { default as Feature } from "./Feature";

import { default as Feat } from "./Feat";

import "./Features.scss";

const data = [
  {
    id: 1,
    img: images.smartiq,
    name: "SmartIQ",
    description:
      "Saves energy through your preferred comfort level for any time of day and activity; and control it anywhere on your mobile devices and computers, with quick Return of Investment (ROI) of less than 2.20 years. Coldsmart model UNO costs ₱7,500 each.",
    show: "Smart Schedule for quick ROI with weather tracking, geofencing, cycle fan-mode, eco-mode and compressor cool modes through occupancy and gas detection technology.",

    // button: "More",
    // moreDescription:
    //   "Smart Schedule for quick ROI with weather tracking, geofencing, cycle fan-mode, eco-mode and compressor cool modes through occupancy and gas detection technology.",
    // showDescription: true,
    // metricsCode: "SMART_IQ",
  },
  {
    id: 2,
    img: images.sleepiq,
    name: "SleepIQ",
    description:
      "Balances comfort and energy conservation when the user does not use the space or while sleeping. ",
    show: "Using occupancy sensing, Artificial Intelligence (AI), and Predictive Analytics, Coldsmart auto-adjusts your aircon settings for quick and easy energy conservation in the cool comfort of your sleep.",
    // showDescription: true,
    // moreDescription:
    //   "Using occupancy sensing, Artificial Intelligence (AI), and Predictive Analytics, Coldsmart auto-adjusts your aircon settings for quick and easy energy conservation in the cool comfort of your sleep.",
    // metricsCode: "SLEEP_IQ",
    // button: ""
  },
  {
    id: 3,
    img: images.wearlink,
    name: "WearLinQ",
    description:
      "Auto-regulates your Aircon's personal and customized settings through wearable devices.",
    show: "Based on wearable devices readings like heart rate, sleep level, body temperature and others, Coldsmart provides personalized and customized Aircon comfort settings.",
    // showDescription: true,
    // moreDescription:
    //   "Based on wearable devices readings like heart rate, sleep level, body temperature and others, Coldsmart provides personalized and customized Aircon comfort settings.",
    // // button: ""
    // metricsCode: "WEAR_LINQ",
  },
  {
    id: 4,
    img: images.templay,
    name: "TempIQ",
    description:
      "Hotel and Condotel facility managers can unobtrusively control group of 10 rooms when guests leave the units while aircon is on or in case of power interruptions.",
    show: "For non-intrusive Hotel and Condotel facility management for group of 10 units, easy Energy Conservation to manage guest activity using occupancy sensing, Artificial Intelligence (AI), and Predictive Analytics, to balance comfort and energy conservation ₱6, 000 yearly Subscription Fee.",
    // button: "More",
    // moreDescription:
    //   "For non-intrusive Hotel and Condotel facility management for group of 10 units, easy Energy Conservation to manage guest activity using occupancy sensing, Artificial Intelligence (AI), and Predictive Analytics, to balance comfort and energy conservation ₱6, 000 yearly Subscription Fee.",
    // showDescription: true,
    // metricsCode: "TEMP_IQ",
  },
];

const Features = () => {
  return (
    <div id="Features" className="app__features app__section">
      <div className="app__container app__features-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-center">
            <div></div>
            <p>Features</p>
          </div>
          <h1 className="app__subtitle-center">
            Manage your air conditioners hands-free
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app__features-content"
        >
          {data.map((item, index) => {
            return <Feat key={index} item={item} />;
          })}
          {/* {data.map((feature, key) => (
            <Feature
              key={key}
              feature={feature}
              className="app__features-data"
            ></Feature>
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};
export default Features;
