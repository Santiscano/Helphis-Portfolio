import css from "./Footer.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

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
            <p>
              Straße: Weidenweg 11 Stadt: München PLZ: 81547 Bundesland: Bayern
              Land: Deutschland (Germany)
            </p>
          </div>

          <div className={css.menu}>
            <li>I'm</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Projects</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
