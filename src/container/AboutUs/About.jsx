import React from "react";

import images from "../../constants/images";

import "./About.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.letter} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="paragraph">
          Welcome to TastyEats, where culinary excellence meets a warm embrace.
          At TastyEats, we take pride in crafting unforgettable dining
          experiences. Our commitment to using premium, locally-sourced
          ingredients ensures every dish is a masterpiece. Join us on a journey
          of flavors, where each bite tells a story of passion and dedication.
          Discover the art of dining at TastyEats—where great taste meets
          genuine hospitality.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">What we offer</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="paragraph">
          At TastyEats, we offer a delightful fusion of local and global flavors
          crafted with care. Our menu is a celebration of culinary diversity,
          ensuring every dish is a savory masterpiece. We are known for our
          first-class cocktails that elevate your dining experience. Experience
          extraordinary tastes at TastyEats—where simplicity meets exceptional
          flavor
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
