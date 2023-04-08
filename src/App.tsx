import { useState } from "react";
import "./App.css";
import css from "./sass/app.module.scss";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Experience from "./modules/Experience";
import Works from "./modules/Works";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Footer from "./modules/Footer";

function App() {
  return (
    <div className="app">
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Experience />
        {/* <Works /> */}
        <Skills />
        {/* <Projects /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
