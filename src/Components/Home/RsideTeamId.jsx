import React from "react";
import Profile from "../../../src/assets/team_profile.jpeg";
import "./IdPage.css";
import CircularProgressBar from "./CircularProgressBar";
import Profile_badge from "../../../src/assets/team_badge.png";
import Profile_star from "../../../src/assets/profile_star.png";
import Profile_fire from "../../../src/assets/streak_img.png";

const ProfilePicture = ({ src, alt }) => {
  return (
    <img
      src={Profile}
      alt={alt}
      className="profile-image"
      id="profile-image-team"
    />
  );
};

const IDName = ({ name }) => {
  return (
    // <h2>{name}</h2>
    <h2 id="user_name_team">Archons</h2>
  );
};

const LeaderName = ({ leaderName }) => {
  return <h2 id="leader-name-team">Leader : Zoro</h2>;
};

const Bio = ({ text }) => {
  // return <p>{text}</p>;
  // returm <p>"Starwind: Empowering coders with rewards for continuous coding achievements"</p>
  return (
    <p className="bio-id-text">
      beginners into coding heroes with a supportive environment, hands-on
      projects.
    </p>
  );
};

function RsideTeamId() {
  return (
    <div className="side-id-team">
      <div className="profile-badge">
        <div className="glow-circle gc1" id="glow-circle gc1 team"></div>
        <img src={Profile_badge} alt="img" className="side-idTeam-icon" />
        <ProfilePicture />
      </div>

      <div className="name-bio-star-team">
        <div className="name-bio">
          <IDName />
          <Bio />
        </div>

        <div className="progress-team">
          <div className="glow-circle-gc0-team"></div>
          <img src={Profile_star} alt="" className="progress_icon-team" />
          <CircularProgressBar size={45} progress={75} strokeWidth={5} />
        </div>
      </div>
      <div className="leader-team-streak">
        <LeaderName />
        <div className="progress-team" id="progress-team-streak">
          <div
            className="glow-circle-gc0-team"
            id="glow-circle-gc0-team-star"
          ></div>
          <img
            src={Profile_fire}
            alt=""
            className="progress_icon-team"
            id="progress_icon-team-streak"
          />
          <CircularProgressBar size={45} progress={45} strokeWidth={5} />
        </div>
      </div>
    </div>
  );
}

export default RsideTeamId;
