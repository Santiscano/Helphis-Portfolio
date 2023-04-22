import css from "./Experience.module.scss";
import "../../sass/constants.scss";
import { projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
// context
import useContextProvider from "../../hooks/useAppContext";
// langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Experience = () => {
  const { darkMode, language } = useContextProvider();

  return (
    <motion.section
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${
        darkMode ? "bg-darkMode" : "bg-white"
      }`}
    >
      <a className="anchor" id="services"></a>
      <div
        className={`sm:px-5 md:paddings py-16 flexCenter innerWidth text-left flex-col`}
      >
        <motion.div
          variants={textVariant(0.5)}
          className={`${css.RightSide} flex flex-col gap-8`}
        >
          <h2 className="primaryText text-[#286F6C] no-underline leading-[2.8rem] pt-2 text-center">
            {language == "de"
              ? DE.experience.title
              : language == "en"
              ? EN.experience.title
              : ES.experience.title}
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-2/6 py-2 md:p-10 ">
              <hr style={{ border: "none", borderTop: "5PX solid #eec048" }} />
            </div>
            <div className="">
              <div className="flex flex-col items-center gap-8 md:max-w-2/3">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      language == "de"
                        ? DE.experience.span1
                        : language == "en"
                        ? EN.experience.span1
                        : ES.experience.span1,
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      language == "de"
                        ? DE.experience.span2
                        : language == "en"
                        ? EN.experience.span2
                        : ES.experience.span2,
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      language == "de"
                        ? DE.experience.span3
                        : language == "en"
                        ? EN.experience.span3
                        : ES.experience.span3,
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className={css.card}></div>
        </motion.div>
        <motion.div
          className={css.leftSide}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {projectExperience.map((exp, i) => (
            <motion.div
              variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
              className="m-4 md:mt-8"
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E7E7E7",
                borderRadius: "20px",
                padding: "1.5rem",
                gap: "2rem",
                transition: "all 0.2s ease-out",
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0px 21px 13px rgba(0, 0, 0, 0.04)",
              }}
              key={i}
            >
              <div
                className="fleCenter"
                style={{
                  background: exp.bg,
                  padding: "10px",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "999px",
                }}
              >
                <exp.icon size={25} color="white" />
              </div>

              <div>
                <span>{exp.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
