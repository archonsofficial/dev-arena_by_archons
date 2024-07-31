import React from "react";
import logo from "../../../src/assets/dev_arena_logo.png";
import lng from "../../../src/assets/language_btn_img.png";
import credits from "../../../src/assets/credits_btn_iimg.png";
import dark from "../../../src/assets/dark_mode_btn.png";
import premium from "../../../src/assets/premium_btn_img.png";
import profile from "../../../src/assets/profile.jpeg";

import "./Home.css";

function Top_nav() {
  return (
    <nav className="top_nav">
      <div className="frame1" id="frame11">
        <img src={logo} alt="log" className="logo" />
        <button id="lngbtn">
          <img src={lng} alt="." />
          Lang.
        </button>
      </div>
      {/* <div className="frame1" id="frame12"></div> */}

      <div className="frame1"  id="frame12">
        <button id="credits">
          Credits
          <img src={credits} alt="" />
        </button>
        <button type="button" id="premium">
          Premium
          <img src={premium} alt="" />
        </button>
        <button id="darkmode">
          <div className="mode">
            <img src={dark} alt="" />
          </div>
          Dark Mode
        </button>
        <img id="nav_profile" src={profile} alt="" />
      </div>
    </nav>
  );
}

export default Top_nav;
