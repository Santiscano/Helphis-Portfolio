import css from "./Projects2.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
// Context
import useContextProvider from "../../hooks/useAppContext";
// Langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Projects = () => {
  const { darkMode, language } = useContextProvider();
  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        className={`paddings ${css.wrapper} ${
          darkMode ? "bg-darkMode" : "bg-primary"
        }`}
      >
        <a className="anchor" id="projects"></a>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <h1 className="primaryText flexCenter text-center">
            {language == "de"
              ? DE.projects.title
              : language == "en"
              ? EN.projects.title
              : ES.projects.title}
          </h1>
          <div className={css.pageContent}>
            {portfolioExp.map((client, i) => (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={`${css.card} shadow-md`}
                key={i}
              >
                <div className={css.content}>
                  <h2 className={`${css.title}`}>{client.title}</h2>
                  <a
                    href={client.url}
                    target="_blank"
                    className="primaryButton"
                  >
                    {language == "de"
                      ? DE.projects.button
                      : language == "en"
                      ? EN.projects.button
                      : ES.projects.button}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
