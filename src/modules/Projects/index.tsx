import css from "./Projects.module.scss";
import {
  techHelphis,
  techEvo,
  techUptask,
  techBazar,
  techTrami,
  techEnvi,
} from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
// Context
import useContextProvider from "../../hooks/useAppContext";
// Langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";
// image
import project1 from "../../assets/img/project1-mathias.png";
import project2 from "../../assets/img/project2-mathias.png";
import project3 from "../../assets/img/project3-mathias.png";
// import project4 from "../../assets/img/project1-santiago.png";
// import project5 from "../../assets/img/project2-santiago.png";
// import project6 from "../../assets/img/project3-santiago.png";

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
          <motion.div
            variants={fadeIn("right", "tween", 2 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div style={{ flex: "0 0 60%" }}>
              <img src={project1} alt="Imagen" style={{ width: "100%" }} />
            </div>
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginLeft: "-15%",
                textAlign: "end",
                alignItems: "flex-start",
              }}
            >
              <p>project develop</p>
              <a
                href="https://helphistech.vercel.app"
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">HelphisTech</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginRight: "20px",
                  padding: "12px",
                  marginLeft: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infohelphisTech
                  : language == "en"
                  ? EN.projects.infohelphisTech
                  : ES.projects.infohelphisTech}
              </h4>
              <div className="my-6 mx-10 ">
                {techHelphis.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "tween", 3 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginRight: "-15%",
                textAlign: "start",
                alignItems: "flex-end",
              }}
            >
              <p>project develop</p>
              <a
                href={"https://evolution-react.vercel.app"}
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">Evolution</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginLeft: "20px",
                  padding: "12px",
                  marginRight: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infoEvolution
                  : language == "en"
                  ? EN.projects.infoEvolution
                  : ES.projects.infoEvolution}
              </h4>
              <div className="my-6 mx-10 ">
                {techEvo.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 60%" }}>
              <img src={project2} alt="Imagen" style={{ width: "100%" }} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "tween", 2 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div style={{ flex: "0 0 60%" }}>
              <img src={project3} alt="Imagen" style={{ width: "100%" }} />
            </div>
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginLeft: "-15%",
                textAlign: "end",
                alignItems: "flex-start",
              }}
            >
              <p>project develop</p>
              <a
                href="https://uptaskdev.netlify.app/"
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">UpTask</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginRight: "20px",
                  padding: "12px",
                  marginLeft: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infoUpTask
                  : language == "en"
                  ? EN.projects.infoUpTask
                  : ES.projects.infoUpTask}
              </h4>
              <div className="my-6 mx-10 ">
                {techUptask.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            variants={fadeIn("right", "tween", 3 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginRight: "-15%",
                textAlign: "start",
                alignItems: "flex-end",
              }}
            >
              <p>project develop</p>
              <a
                href={"https://www.bazar.network/"}
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">Bazar</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginLeft: "20px",
                  padding: "12px",
                  marginRight: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infoBazar
                  : language == "en"
                  ? EN.projects.infoBazar
                  : ES.projects.infoBazar}
              </h4>
              <div className="my-6 mx-10 ">
                {techBazar.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 60%" }}>
              <img src={project4} alt="Imagen" style={{ width: "100%" }} />
            </div>
          </motion.div> */}

          {/* <motion.div
            variants={fadeIn("right", "tween", 2 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div style={{ flex: "0 0 60%" }}>
              <img src={project5} alt="Imagen" style={{ width: "100%" }} />
            </div>
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginLeft: "-15%",
                textAlign: "end",
                alignItems: "flex-start",
              }}
            >
              <p>project develop</p>
              <a
                href="https://tramideudas.es/"
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">Tramideudas</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginRight: "20px",
                  padding: "12px",
                  marginLeft: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infoTrami
                  : language == "en"
                  ? EN.projects.infoTrami
                  : ES.projects.infoTrami}
              </h4>
              <div className="my-6 mx-10 ">
                {techTrami.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
          </motion.div> */}

          {/* <motion.div
            variants={fadeIn("right", "tween", 3 * 0.2, 1)}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginRight: "-15%",
                textAlign: "start",
                alignItems: "flex-end",
              }}
            >
              <p>project develop</p>
              <a
                href={"https://enviexpresslogistica.com/"}
                target="_blank"
                className="cursor-pointer"
              >
                <h2 className="text-4xl my-4 font-semibold">Enviexpress</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginLeft: "20px",
                  padding: "12px",
                  marginRight: "120px",
                }}
              >
                {language == "de"
                  ? DE.projects.infoEnvi
                  : language == "en"
                  ? EN.projects.infoEnvi
                  : ES.projects.infoEnvi}
              </h4>
              <div className="my-6 mx-10 ">
                {techEnvi.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 60%" }}>
              <img src={project6} alt="Imagen" style={{ width: "100%" }} />
            </div>
          </motion.div>  */}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
