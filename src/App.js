import React from "react";

import {
  AboutUs,
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
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
  </div>
);

export default App;
