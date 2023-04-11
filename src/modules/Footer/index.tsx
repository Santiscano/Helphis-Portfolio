import css from "./Footer.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="footer"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:Helphis.tech@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <div className={css.socialMedia}>
              <a href="https://github.com/GelfisHorn" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/gelfishorn/" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="mailto:Helphis.tech@gmail.com">
                <SiGmail />
              </a>
            </div>
          </div>

          <div className={css.menu}>
            <li>
              <a href="#iam">I'm</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
