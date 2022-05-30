import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { db } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Form submitted: `, formData);

    try {
      const docRef = await addDoc(collection(db, "messages"), formData);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div id="Contact%20Us" className="app__contact app__section">
      <div className="app__container app__contact-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-start">
            {/* <div></div>
            <p>Contact Us</p> */}
          </div>
          <h1 className="app__subtitle-center">Always Here to Help!</h1>
          <motion.div className="contact__data">
            <div className="contact__icon">
              <FaPhoneAlt />
              <p>09566699710</p>
            </div>
            <div className="contact__icon">
              <FaEnvelope />
              <p>fjaminola@gmail.com</p>
            </div>
            <div className="contact__icon">
              <FaMapMarkerAlt />
              <p>
                SpringLeaf, Maharlika Highway, Zone 2 Alimannao Hills,
                Peñablanca, Cagayan
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <form onSubmit={handleSubmit}>
            {/* <label>Full Name *</label> */}
            <input
              placeholder="Full Name"
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
            />
            {/* <label>Email *</label> */}
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {/* <label>Message *</label> */}
            <textarea
              placeholder="Message"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {/* <input type="submit" value="Submit" /> */}
            <button type="submit">Send</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
