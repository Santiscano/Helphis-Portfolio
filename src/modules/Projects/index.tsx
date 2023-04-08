import css from "./Projects.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      className={css.pageContent}
    >
      {portfolioExp.map((client, i) => (
        <motion.div
          variants={fadeIn("right", "tween", (i + 1) * 0.4, 1)}
          className={css.card}
          key={i}
        >
          <div className={css.content}>
            <h2 className={`${css.title}`}>{client.title}</h2>
            <p className={`${css.copy}`}>{client.info}</p>
            <a href={client.url} target="_blank" className="primaryButton">
              View Trips
            </a>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
