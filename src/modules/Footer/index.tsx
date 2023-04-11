import css from "./Footer.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import useContextProvider from "../../hooks/useAppContext";

interface FooterColumn {
  title: string;
  children: any;
}

const Footer = () => {
  const { darkMode } = useContextProvider();
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${css.wrapper} ${darkMode ? "bg-darkMode" : "bg-white"}`}
    >
      <a className="anchor" id="footer"></a>
      <motion.div variants={footerVariants} className={``}>
        <div className=" lazy-load-4">
          <div className="flex flex-col items-start gap-16 py-16 px-16 xl:px-0 max-w-6xl w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-0 w-full">
              <FooterColumn title={"Redes sociales"}>
                <div className="flex flex-col gap-2">
                  <a
                    className="flex items-center gap-2 hover:text-[#2B8C88] transition-colors"
                    href={"https://linkedin.com"}
                    target="_blank"
                  >
                    <div className="grid place-content-center w-4">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>Linkedin</div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-[#2B8C88] transition-colors"
                    href={"https://github.com"}
                    target="_blank"
                  >
                    <div className="grid place-content-center w-4">
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div>GitHub</div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-[#2B8C88] transition-colors"
                    href={"https://youtube.com/@HelphisTech"}
                    target="_blank"
                  >
                    <div className="grid place-content-center w-4">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div>Youtube</div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-[#2B8C88] transition-colors"
                    href={"https://instagram.com"}
                    target="_blank"
                  >
                    <div className="grid place-content-center w-4">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div>Instagram</div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-[#2B8C88] transition-colors"
                    href={"https://twitter.com/"}
                    target="_blank"
                  >
                    <div className="grid place-content-center w-4">
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div>Twitter</div>
                  </a>
                </div>
              </FooterColumn>
              <FooterColumn title={"Contact"}>
                <div className="flex flex-col gap-2">
                  <div>
                    <a
                      className="flex items-center gap-2 hover:text-[#2B8C88]"
                      href="mailto:helphis.tech@gmail.com"
                    >
                      <i className="fa-regular fa-envelope text-[#216B68] w-4"></i>
                      <span>helphis.tech@gmail.com</span>
                    </a>
                  </div>
                  <div className="text-[.92rem]">
                    <a
                      className="flex items-center gap-2 hover:text-[#2B8C88]"
                      href="tel:+490101010101"
                    >
                      <i className="fa-regular fa-phone text-[#216B68] w-4"></i>
                      <span>+49 0101 01 01 01</span>
                    </a>
                  </div>
                </div>
              </FooterColumn>
            </div>
          </div>
          <div className=" text-center border-t border-neutral-200 py-3">
            <div className="text-sm">©Helphis Tech 2023</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

function FooterColumn({ title, children }: FooterColumn) {
  return (
    <div className="flex flex-col gap-5 md:w-fit md:mx-auto">
      <div className="text-2xl font-semibold">{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default Footer;
