import React from "react";
import "./style.css";
import manBusiness from "../../assets/img/business.png";

const Header = () => {
  return (
    <div className="header__view">
      <div className="header__layout-flex">
        <div className="header__info">
          <div className="header__info--card">
            <p className="header__info--hello">Hello i´m</p>
            <h1 className="header__info--name">Helphis</h1>
            <h3 className="header__info--title">Professional Web Developer</h3>
            <h5 className="header__info--presentation"></h5>
            <button className="header__info--button">Contact us</button>
          </div>
        </div>
        <div className="header__image-container">
          <img
            src={manBusiness}
            alt="man Business"
            className="header__image-business"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
