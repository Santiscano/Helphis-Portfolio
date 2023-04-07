import { useState, useEffect } from "react";
import "./style.css";
import Button from "../../components/Button";

const Navbar = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleScroll = () => {
    const windowPosition = window.scrollY > 250;
    setIsHeaderActive(windowPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`primary-header ${
        isHeaderActive ? "active" : "bg-indigo-700"
      }`}
    >
      <nav className="navbar">
        <a href="" className="logo">
          HELPHIS
        </a>

        <Button clicked={clicked} setClicked={setClicked} />

        <ul className={!clicked ? "nav-links" : "ul__response--active"}>
          <li>
            <a href="#" className="nav-link ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link ">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Testimonials
            </a>
          </li>
        </ul>

        <button className="button inline-block bg-white text-gray-700 py-3 px-8 rounded-3xl transition duration-300 ease-in-out hover:bg-gray-100">
          Buy Now
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
