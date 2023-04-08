import React from "react";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import bazar from "../../assets/img/Project1-santiago.png";
import tramideudas from "../../assets/img/project2-santiago.png";
import enviexpress from "../../assets/img/project3-santiago.png";

const Projects = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          {/* <span className="secondaryText">
          Explore More Works
        </span> */}
        </div>

        <div className={`${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={bazar}
            alt="landing page bazar network"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            src={tramideudas}
            alt="dashboard admin tramideudas"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={enviexpress}
            alt="dashboard admin exnviexpress"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
