import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./Team.scss";

const data = [
  {
    id: 1,
    profile: images.romy_lingan,
    name: "Romualdo Lingan",
    description: "Chief Operating Officer",
  },
  {
    id: 2,
    profile: images.carlo_cachola,
    name: "Carlo Cachola",
    description: "Chief Information Officer",
  },
  {
    id: 3,
    profile: images.profile1,
    name: "Laurence Cortez",
    description: "Chief Technology Officer",
  },
  {
    id: 4,
    profile: images.profile2,
    name: "Jean Kurt De Austria",
    description: "Product Development Director",
  },

  {
    id: 5,
    profile: images.profile3,
    name: "Sheena Pelovello",
    description: "Customer Services Director",
  },
  {
    id: 6,
    profile: images.profile8,
    name: "Emilio Jaminola",
    description: "Chief Financial Officer",
  },
  {
    id: 7,
    profile: images.profile7,
    name: "Fernando Jaminola Jr.",
    description: "Chief Executive Officer",
  },
];

const Team = () => {
  return (
    <div id="About%20Us" className="app__team app__section">
      <div className="app__container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__title-center">
            {/* <div></div>
            <p>Team</p> */}
          </div>
          <h1 className="app__subtitle-center">CO-Founders</h1>
        </motion.div>
        <motion.div className="app__team-data">
          <Swiper
            // loop={true}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination]}
            // slidesPerColumn={3}
            // slidesPerColumnFill="row"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide image")}
            onSwiper={(swiper) => console.log(swiper)}
            className="app__team-swiper"
          >
            {data.map((user, key) => (
              <SwiperSlide key={user.id}>
                <img src={user.profile} alt="" />
                <p className="app__team-name">{user.name}</p>
                <p className="app__team-description">{user.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
