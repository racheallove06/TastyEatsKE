import React from "react";

import { Chef, FindUs, Footer, Gallery, Intro, Laurels } from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import AboutUs from "./container/AboutUs/About";
import SpecialMenu from "./container/Menu/SpecialMenu";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
  </div>
);

export default App;
