import { useEffect, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import Button from "../../components/Button";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Helphis Dev</div>

        <ul
          // @ts-ignore
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p> +49 1525 3409644</p>
            <BiPhoneCall size={"30px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {!menuOpened ? (
            <FiAlignRight size={"30px"} />
          ) : (
            <FiXCircle size={"30px"} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
