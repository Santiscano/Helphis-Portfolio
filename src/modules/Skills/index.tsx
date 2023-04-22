import css from "./Skills.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
// @ts-ignore
import Slider from "react-slick";
import { sliderSettings } from "../../utils/data";
import angular from "../../assets/img/technologies/angular.png";
import astro from "../../assets/img/technologies/astro.png";
import astroD from "../../assets/img/technologies/darkmode/astro.png";
import react from "../../assets/img/technologies/react.png";
import next from "../../assets/img/technologies/nextJs.png";
import nextD from "../../assets/img/technologies/darkmode/nextjs.png";
import mongo from "../../assets/img/technologies/mongodb.png";
import mysql from "../../assets/img/technologies/mysql.png";
import nodejs from "../../assets/img/technologies/nodejs.png";
import nodejsD from "../../assets/img/technologies/darkmode/nodejs.png";
import socketIo from "../../assets/img/technologies/socketIo.png";
import socketIoD from "../../assets/img/technologies/darkmode/socketio.png";
import useContextProvider from "../../hooks/useAppContext";
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Skills = () => {
  const { darkMode, language } = useContextProvider();
  return (
    <motion.section
      // @ts-ignore
      variant={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="skills"></a>
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText text-center">
            {language == "de"
              ? DE.skills.title
              : language == "en"
              ? EN.skills.title
              : ES.skills.title}
          </span>
        </div>

        <div className={css.cards}>
          <Slider {...sliderSettings} className={``}>
            <div className="imageSlider">
              <img src={angular} alt="" />
            </div>
            <div className="imageSlider">
              <img src={darkMode ? astroD : astro} alt="" />
            </div>
            <div className="imageSlider">
              <img src={react} alt="" />
            </div>
            <div className="imageSlider">
              <img src={darkMode ? nextD : next} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={mongo} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={mysql} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={darkMode ? nodejsD : nodejs} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={darkMode ? socketIoD : socketIo} alt="" />
            </div>
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
