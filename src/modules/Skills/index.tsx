import css from "./Skills.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
// @ts-ignore
import Slider from "react-slick";
import { sliderData, sliderSettings, sliderSettings2 } from "../../utils/data";
import angular from "../../assets/img/technologies/angular.png";
import astro from "../../assets/img/technologies/astro.png";
import react from "../../assets/img/technologies/react.png";
import next from "../../assets/img/technologies/nextJs.png";
import mongo from "../../assets/img/technologies/mongodb.png";
import mysql from "../../assets/img/technologies/mysql.png";
import nodejs from "../../assets/img/technologies/nodejs.png";
import socketIo from "../../assets/img/technologies/socketIo.png";
import sass from "../../assets/svg/sass.svg";
import solidity from "../../assets/img/technologies/solidity.png";
import illustrator from "../../assets/img/technologies/Illustrator.png";
import photoShop from "../../assets/img/technologies/PhotoShop.png";

const Skills = () => {
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
          <span className="primaryText">My Skills</span>
        </div>

        {/* carousel option 1 */}
        {/* carousel option 2 */}
        <div className={css.cards}>
          <Slider {...sliderSettings2} className={``}>
            <div className="imageSlider">
              <img src={angular} alt="" />
            </div>
            <div className="imageSlider">
              <img src={astro} alt="" />
            </div>
            <div className="imageSlider">
              <img src={react} alt="" />
            </div>
            <div className="imageSlider">
              <img src={next} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={mongo} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={mysql} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={nodejs} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={socketIo} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={sass} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={solidity} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img style={{ width: "90px" }} src={illustrator} alt="" />
            </div>
            <div className="imageSlider flexCenter">
              <img src={photoShop} alt="" />
            </div>
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
