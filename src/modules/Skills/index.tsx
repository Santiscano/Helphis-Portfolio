import css from "./Skills.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
// @ts-ignore
import Slider from "react-slick";
import { sliderData, sliderSettings } from "../../utils/data";

const Skills = () => {
  return (
    <motion.section
      // @ts-ignore
      variant={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">my skills</span>
          <p style={{ marginTop: "2rem" }}>I got a job ....</p>
          <p>the process of submitting ...</p>
        </div>

        {/* carousel */}
        <div className={`yPadding ${css.cards}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {sliderData.map((skill, i) => (
              <div className={`flexCenter ${css.skills}`} key={i}>
                <h3 className={`secondaryText ${css.name}`}>{skill.name}</h3>
                <div className={css.list}>
                  {skill.skills.map((list, i) => (
                    <div key={i} className={`${css.containerList}`}>
                      {/* @ts-ignore */}
                      {list.img && (
                        <div
                          className="flexCenter"
                          style={{
                            background: list.bg,
                            color: "#E7E7E7",
                            padding: ".3rem",
                            borderRadius: "50%",
                          }}
                        >
                          <list.img className={css.imgSkill} />{" "}
                        </div>
                      )}
                      {/* @ts-ignore */}
                      <span className={css.nameSkill}>{list.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
