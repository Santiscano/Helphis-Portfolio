import { useState } from "react";
import "./App.css";
import css from "./sass/app.module.scss";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Experience from "./modules/Experience";
import Works from "./modules/Works";

function App() {
  return (
    <div className="app">
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Experience />
        {/* <Works /> */}
      </div>
    </div>
  );
}

export default App;
