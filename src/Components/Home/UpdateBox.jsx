import React from "react";
import "./Home.css";
// import upbf from "../../../src/assets/update_bg.jpeg"

function UpdateBox() {
  return (
    <div className="updatebox">
      <div className="innerupdate">
        <div className="contest">
          <h1>Upcoming Contest: Food Travels Project</h1>
          <p>
            Create an innovative project that explores global cuisines. Showcase
            your coding skills and win amazing prizes!
          </p>
        </div>
        <div className="detail">
          <p className="theme">
            Theme: Food Travels - Explore global cuisines through your coding
            skills.
          </p>
          <br />

          <p className="duration">
            Duration: 4 weeks (starting August 1st, ending August 28th)
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpdateBox;
