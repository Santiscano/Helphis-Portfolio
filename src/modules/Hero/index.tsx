import helphis from "../../assets/img/gelfis.png";
import helphisHappy from "../../assets/img/gelfis-alegre.png";
import certificated from "../../assets/img/certificated.jpg";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
// context
import useContextProvider from "../../hooks/useAppContext";
// langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Hero = () => {
  const { language } = useContextProvider();

  return (
    <section className={`paddings ${css.wrapper}`} id="iam">
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container} flex flex-col gap-3`}
      >
        <div
          className={`flex flex-col gap-5 lg:gap-0 lg:flex-row items-center lg:items-start justify-between`}
        >
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex flex-col primaryText text-center lg:text-left"
          >
            {language == "de"
              ? DE.hero.title1
              : language == "en"
              ? EN.hero.title1
              : ES.hero.title1}{" "}
            <br />
            {language == "de"
              ? DE.hero.title2
              : language == "en"
              ? EN.hero.title2
              : ES.hero.title2}
          </motion.span>
          <div className="flex flex-col items-center lg:items-end gap-6 lg:w-[25rem] text-center lg:text-right">
            <motion.span
              variants={fadeIn("left", "tween", 0.4, 1)}
              className="secondaryText text-lg"
            >
              {language == "de"
                ? DE.hero.sidetext
                : language == "en"
                ? EN.hero.sidetext
                : ES.hero.sidetext}
            </motion.span>
          </div>

          <a className="block lg:hidden " href="mailto:helphis.tech@gmail.com">
            <div className="bg-[#0D2F3F] hover:bg-[#194F68] transition-colors text-zinc-200 w-fit px-6 py-3 rounded-lg">
              <span className="text-lg">
                {language == "de"
                  ? DE.hero.button
                  : language == "en"
                  ? EN.hero.button
                  : ES.hero.button}
              </span>
            </div>
          </a>
        </div>

        {/* person */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={helphisHappy}
            alt="i'm"
            className={`${css.bottom} ${css.image}`}
          />
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={helphis}
            alt="i'm"
            className={`${css.top} ${css.image}`}
          />
        </motion.div>

        {/* lower elements */}
        <a
          className="hidden lg:block absolute top-1/2 -translate-y-1/2"
          href="mailto:helphis.tech@gmail.com"
        >
          <div className="bg-[#0D2F3F] hover:bg-[#194F68] transition-colors text-zinc-200 w-fit px-6 py-2 rounded-lg">
            <span className="text-lg">
              {language == "de"
                ? DE.hero.button
                : language == "en"
                ? EN.hero.button
                : ES.hero.button}
            </span>
          </div>
        </a>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">
              {language == "de"
                ? DE.hero.years
                : language == "en"
                ? EN.hero.years
                : ES.hero.years}
            </div>
            <div className="secondaryText">
              <div>
                {language == "de"
                  ? DE.hero.yearstext1
                  : language == "en"
                  ? EN.hero.yearstext1
                  : ES.hero.yearstext1}
              </div>
              <div>
                {language == "de"
                  ? DE.hero.yearstext2
                  : language == "en"
                  ? EN.hero.yearstext2
                  : ES.hero.yearstext2}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src={certificated} alt="certificated" />
            <span>FULL STACK MERN</span>
            <span>WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
