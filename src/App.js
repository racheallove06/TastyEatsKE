import React from "react";

import {
  Chef,
  FindUs,
  Footer,
  Gallery,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import AboutUs from "./container/AboutUs/About";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
  </div>
);

export default App;
