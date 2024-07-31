import React from "react";
import "./Home.css";
// import upbf from "../../../src/assets/update_bg.jpeg"

function Update_box() {
  return (
    <div className="updatebox">
      <div className="innerupdate">
        <div className="contest">
          <h1>Upcoming Contest: Food Travels Project</h1>
          <p1>
            Create an innovative project that explores global cuisines. Showcase
            your coding skills and win amazing prizes!
          </p1>
        </div>
        <div className="detail">
          <p1 className="theme">Theme: Food Travels - Explore global cuisines through your coding skills.</p1>
          <br />
          
          <p1 className="duration">Duration: 4 weeks (starting August 1st, ending August 28th)</p1>
        </div>
      </div>
    </div>
  );
}

export default Update_box;
