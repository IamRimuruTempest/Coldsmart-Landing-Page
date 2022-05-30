import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookSquare,
} from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__footer app__section">
      <div className="app__container app__footer-container">
        <motion.div className="footer__content">
          <img src={images.coldsmart} alt="" />
          <p>Save energy while maintaining your comfort</p>
        </motion.div>

        <motion.div className="footer__content">
          <h4>Explore</h4>
          <ul className="">
            {["Home", "Features", "About Us", "Contact Us"].map((item) => (
              <li className="" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="footer__content">
          <h4>Visit</h4>
          <div className="">
            <p>
              <FaMapMarkerAlt /> SpringLeaf, Maharlika Highway Zone 2 Alimanao
              Hills , Peñablanca, Cagayan, Philippines
            </p>
          </div>
          <div className="">
            <p>
              <FaPhoneAlt />
              09566699710
            </p>
            <p>
              <FaEnvelope /> fjaminola@gmail.com
            </p>
          </div>
        </motion.div>

        <motion.div className="footer__content">
          {/* <h4>Follow</h4>
          <ul className="">
            {["Facebook", "Instagram", "Linkedin"].map((item) => (
              <li className="" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
