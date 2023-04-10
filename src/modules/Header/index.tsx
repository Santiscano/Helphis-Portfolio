import { useEffect, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import logo from "../../assets/img/HELPHIS_Trans.png";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import Button from "../../components/Button";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
// import
import useHeaderShadow from "./../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings_header bg-primary ${css.wrapper}`}
      // @ts-ignore
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <img src={logo} style={{ width: "140px" }} alt="logo" />

        <ul
          // @ts-ignore
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div className={css.menuIcon}>
          <FiAlignRight
            size={"30px"}
            onClick={() => setMenuOpened((prev) => !prev)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
