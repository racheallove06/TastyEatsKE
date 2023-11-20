import React from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            I bring the professional chef experience to people wherever they are
            through my YouTube channel.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          I also bring a cross-continental perspective to my craft, after
          spending years working in Orlando, London and on cruise ships in the
          UK with mostly Filipino and Indian chefs{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Rafael King'ori</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
