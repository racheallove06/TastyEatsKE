import React from "react";

import { FindUs, Footer, Gallery, Intro, Laurels } from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import AboutUs from "./container/AboutUs/About";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
  </div>
);

export default App;
