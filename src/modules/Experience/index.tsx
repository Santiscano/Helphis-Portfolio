import React from "react";
import css from "./Experience.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Experience = () => {
  return (
    <motion.section
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => (
            <motion.div
              variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
              className={css.exp}
              key={i}
            >
              <div className="fleCenter" style={{ background: exp.bg }}>
                <exp.icon size={25} color="white" />
              </div>

              <div>
                <span>{exp.name}</span>
                <span className="secondaryText">{exp.projects} Projects</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={textVariant(0.5)} className={css.RightSide}>
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">70+</span>
              <span className="secondaryText">Projects Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">20+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;