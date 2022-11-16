import React from "react";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";
import FeaturedWorks from "./FeaturedWorks/FeaturedWorks";
import Footer from "./Footer/Footer";

import "./App.module.css";

function App() {
  return (
    <div id="#Home">
      <Header />
      <Introduction />
      <AboutMe />
      <MySkills />
      <FeaturedWorks />
      <Footer />
    </div>
  );
}

export default App;
