import React from "react";
import Profile from "../../../src/assets/profile.jpeg";
import "./IdPage.css";
import CircularProgressBar from "./CircularProgressBar";
import Profile_badge from "../../../src/assets/profile_badge.png";
import Profile_star from "../../../src/assets/profile_star.png";
import Profile_fire from "../../../src/assets/streak_img.png";

const ProfilePicture = ({ src, alt }) => {
  return <img src={Profile} alt={alt} className="profile-image" />;
};

const IDName = ({ name }) => {
  return (
    // <h2>{name}</h2>
    <h2 id="user_name">Starwind</h2>
  );
};

const Bio = ({ text }) => {
  // return <p>{text}</p>;
  // returm <p>"Starwind: Empowering coders with rewards for continuous coding achievements"</p>
  return (
    <p className="bio-id-text">
      Starwind: Empowering coders with rewards for continuous coding
      achievements
    </p>
  );
};

function RSideId() {
  return (
    <div className="side-id">
      <div className="side-id-profile">
        <ProfilePicture />
      </div>
      <div className="sie-id-name-box-icon">
        <div className="glow-circle gc1"></div>
        <img src={Profile_badge} alt="img" className="side-id-icon" />
        <div className="side-id-name-bio">
          <IDName />
          <Bio />
        </div>
      </div>
      <div className="progress-circle">
        <div className="progress">
          <div className="glow-circle gc0"></div>
          <img src={Profile_star} alt="" className="progress_icon" />
          <CircularProgressBar size={45} progress={75} strokeWidth={5} />
        </div>
        <div className="progress">
          <div className="glow-circle gc0"></div>
          <img src={Profile_fire} alt="" className="progress_icon" />
          <CircularProgressBar size={45} progress={45} strokeWidth={5} />
        </div>
      </div>
    </div>
  );
}

export default RSideId;
