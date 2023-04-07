import { useState } from "react";
import "./MenuBurguer.css";

const Button = ({ menuOpened, setMenuOpened }: any) => {
  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div
      className={`menu-burguer ${menuOpened ? "open" : ""}`}
      onClick={handleClick}
    >
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </div>
  );
};

export default Button;
