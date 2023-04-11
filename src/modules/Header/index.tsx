import { useRef, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import logo from "../../assets/img/HELPHIS_Trans.png";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import Button from "../../components/Button";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import logoD from "../../assets/img/HELPHIS_Trans_darkmode.png";
// import
import useHeaderShadow from "./../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
// icons
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
// context
import useContextProvider from "../../hooks/useAppContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  const { darkMode, handleChangeTheme } = useContextProvider();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings_header ${darkMode ? "bg-[#272b33]" : "bg-primary"} ${
        css.wrapper
      }`}
      // @ts-ignore
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <img
          src={darkMode ? logoD : logo}
          style={{ width: "140px" }}
          alt="logo"
        />

        <ul
          // @ts-ignore
          ref={menuRef}
          // @ts-ignore
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu} ${
            darkMode
              ? "bg-navbarDark lg:bg-transparent"
              : "bg-white lg:bg-transparent "
          }`}
        >
          <li>
            <a href="#iam">I´m</a>
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
          <li>
            <a href="#footer">Contact me</a>
          </li>
          <li onClick={handleChangeTheme}>
            {darkMode ? <CiLight /> : <MdDarkMode />}
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
