import css from "../Skills.module.scss";
// @ts-ignore
import Slider from "react-slick";
import { sliderData, sliderSettings } from "../../../utils/data";

export const Slider = () => {
  return (
    <>
      <div className={`yPadding ${css.cards}`}>
        {/* @ts-ignore */}
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
    </>
  );
};
