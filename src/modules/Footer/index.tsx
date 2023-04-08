import React from "react";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={css.pageContent}>
      <div className={css.card}>
        <div className={css.content}>
          <h2 className={`${css.title}`}>Mountain View</h2>
          <p className={`${css.copy}`}>
            Check out all of these gorgeous mountain trips with beautiful views
            of, you guessed it, the mountains
          </p>
          <button className="primaryButton">View Trips</button>
        </div>
      </div>
      <div className={css.card}>
        <div className={css.content}>
          <h2 className={`${css.title}`}>To The Beach</h2>
          <p className={`${css.copy}`}>
            Plan your next beach trip with these fabulous destinations
          </p>
          <button className="primaryButton">View Trips</button>
        </div>
      </div>
      <div className={css.card}>
        <div className={css.content}>
          <h2 className={`${css.title}`}>Desert Destinations</h2>
          <p className={`${css.copy}`}>
            It's the desert you've always dreamed of
          </p>
          <button className="primaryButton">Book Now</button>
        </div>
      </div>
      <div className={css.card}>
        <div className={css.content}>
          <h2 className={`${css.title}`}>Explore The Galaxy</h2>
          <p className={`${css.copy}`}>
            Seriously, straight up, just blast off into outer space today
          </p>
          <button className="primaryButton">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
