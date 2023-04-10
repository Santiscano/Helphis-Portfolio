import React from "react";
import helphis from "../../assets/img/person.png";
import certificated from "../../assets/img/certificated.jpg";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <a className="anchor" id="iam"></a>
        {/* upper elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Gelfis.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            create the application <br /> you can imagine, beautiful <br /> and
            simple to use
          </motion.span>
        </div>

        {/* person */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={helphis}
            alt="i'm"
          />
        </motion.div>

        {/* email */}
        <a className={css.email} href="mailto:Helphis.tech@gmail.com">
          Helphis.tech@gmail.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src={certificated} alt="certificated" />
            <span>FULL STACK MERN</span>
            <span>WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
