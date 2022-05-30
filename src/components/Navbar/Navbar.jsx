import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { IoGridOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi";

import "./Navbar.scss";

const Nabvar = () => {
  const [toggle, setToggle] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 48) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="app__navbar-logo">
        {/* <a href="">coldsmart</a> */}
        <a href="">
          <img src={images.coldsmartlogo} alt="" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About Us", "Features", "Contact Us"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <IoGridOutline onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About Us", "Features", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nabvar;
