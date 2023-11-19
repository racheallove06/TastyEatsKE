import React from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Taste the Difference at TastyEats</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Savor the unique flavors at TastyEats and experience the difference in
        every bite. Our commitment to quality ingredients ensures that each dish
        stands out, inviting you to enjoy something special. Come and taste the
        difference at TastyEats, where every meal is a delicious adventure{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
