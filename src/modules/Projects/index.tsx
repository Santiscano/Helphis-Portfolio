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
          <div className={css.pageContent}>
            {portfolioExp.map((client, i) => (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.card}
                key={i}
              >
                <div className={css.content}>
                  <h2 className={`${css.title}`}>{client.title}</h2>
                  <a
                    href={client.url}
                    target="_blank"
                    className="primaryButton"
                  >
                    View Trips
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
