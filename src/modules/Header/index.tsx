import { useRef, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import logo from "../../assets/img/HELPHIS_Trans.png";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import { FiAlignRight } from "react-icons/fi";
import logoD from "../../assets/img/HELPHIS_Trans_darkmode.png";
// import
import useHeaderShadow from "./../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
// icons
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
// context
import useContextProvider from "../../hooks/useAppContext";
// langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  const { darkMode, handleChangeTheme, language, handleSetLanguage } =
    useContextProvider();

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
            <a href="#iam">
              {language == "de"
                ? DE.navbar.im
                : language == "en"
                ? EN.navbar.im
                : ES.navbar.im}
            </a>
          </li>
          <li>
            <a href="#services">
              {language == "de"
                ? DE.navbar.services
                : language == "en"
                ? EN.navbar.services
                : ES.navbar.services}
            </a>
          </li>
          <li>
            <a href="#skills">
              {language == "de"
                ? DE.navbar.skills
                : language == "en"
                ? EN.navbar.skills
                : ES.navbar.skills}
            </a>
          </li>
          <li>
            <a href="#projects">
              {language == "de"
                ? DE.navbar.projects
                : language == "en"
                ? EN.navbar.projects
                : ES.navbar.projects}
            </a>
          </li>
          <li>
            <a href="#footer">
              {language == "de"
                ? DE.navbar.contactme
                : language == "en"
                ? EN.navbar.contactme
                : ES.navbar.contactme}
            </a>
          </li>
          <li onClick={handleChangeTheme}>
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </li>
          <li>
            <select
              className="bg-transparent"
              onChange={(e) => handleSetLanguage(e.target.value)}
              value={language}
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
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
