import { useState } from "react";
import "./App.css";
import css from "./sass/app.module.scss";
import Navbar from "./modules/Navbar";
import Headers from "./modules/Headers";
import Navbar2 from "./modules/Navbar2";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Experience from "./modules/Experience";
import Works from "./modules/Works";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      {/* <div className="app__header-navbar">
        <Navbar2 />
        <Headers />
      </div> */}
      {/* <header className="aqui">hola mundo</header> */}
      {/* <Portfolio /> */}
      {/* <FeaturesBenefits/> */}
      {/* <Price/> */}
      {/* <FAQs/> */}
      {/* <Footer/> */}
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Experience />
        <Works />
      </div>
    </div>
  );
}

export default App;
