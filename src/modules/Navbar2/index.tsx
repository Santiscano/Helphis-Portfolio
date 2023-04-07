import { useEffect, useState } from "react";
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
    <header className="primary-header">
      <nav className="flex w-full justify-between items-center m-auto px-4 h-20 transition-all duration-250">
        <div className="logo">HELPHIS</div>
        <ul className="hidden md:flex justify-center items-center text-xl">
          <li className="mr-4 text-white mx-2">Home</li>
          <li className="mr-4 text-white mx-2">Services</li>
          <li className="mr-4 text-white mx-2">Pricing</li>
          <li className="mr-4 text-white mx-2">Testimonial</li>
          {/* <button className="bg-orange-500 px-4 py-2 text-white rounded-md">
            Button
          </button> */}
        </ul>
        <div className="flex md:hidden">
          <Button clicked={clicked} setClicked={setClicked} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
