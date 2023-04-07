import { useState } from "react";
import "./App.css";
// import Navbar from "./modules/Navbar";
// import Headers from "./modules/Headers";
// import Portfolio from "./modules/Portfolio";
// import Navbar2 from "./modules/Navbar2";
import Header from "./modules/Header";
import css from "./sass/app.module.scss";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      {/* <div className="app__header-navbar"> */}
      {/* <Navbar2 /> */}
      {/* <Headers /> */}
      {/* </div> */}
      {/* <header className="aqui">hola mundo</header> */}
      {/* <Portfolio /> */}
      {/* <FeaturesBenefits/> */}
      {/* <Price/> */}
      {/* <FAQs/> */}
      {/* <Footer/> */}
      <div className={`bg-primary ${css.container}`}>
        <Header />
      </div>
    </div>
  );
}

export default App;
