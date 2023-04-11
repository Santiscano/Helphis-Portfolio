import css from "./Projects.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="projects"></a>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <h1 className="primaryText flexCenter">My Projects</h1>
          <p className="secondaryText">
            learn more about my MERN projects developed
          </p>
          <div className={css.pageContent}>
            {portfolioExp.map((client, i) => (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.card}
                key={i}
              >
                <div className={css.content}>
                  <h2 className={`${css.title}`}>{client.title}</h2>
                  {/* <p className={`${css.copy}`}>{client.info}</p> */}
                  <a
                    href={client.url}
                    target="_blank"
                    className="primaryButton"
                  >
                    View Trips
                  </a>
                  {/* <div>
                    <img
                      src="../../assets/img/technologies/mongodb.png"
                      alt=""
                      width="50px"
                    />
                    <img
                      src={`../../assets/img/technologies/expressjs.png`}
                      alt=""
                    />
                    <img
                      src={`../../assets/img/technologies/react.png`}
                      alt=""
                    />
                    <img
                      src={`../../assets/img/technologies/nodejs.png`}
                      alt=""
                    />
                  </div> */}
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
