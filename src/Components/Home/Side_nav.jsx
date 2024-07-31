import React from 'react'
import "./Home.css";
import { FaHome, FaUser, FaChartBar,FaBattleNet, FaUsers, FaGamepad, FaQuestionCircle, FaCog, FaSignOutAlt, FaBars, FaArrowLeft } from 'react-icons/fa';



function Side_nav() {
  return (
    <div className="sideNav">
      <div className="menuHeader">
        <FaBars className="menuIcon" />
        <span>Menu</span>
        <FaArrowLeft className="menuIcon" />
      </div>
      <ul className="menuList">
        <li className="menuItem active">
          <FaHome className="menuIcon" />
          <span>Home</span>
        </li>
        <li className="menuItem">
          <FaUser className="menuIcon" />
          <span>Profile</span>
        </li>
        <li className="menuItem">
          <FaChartBar className="menuIcon" />
          <span>Dashboard</span>
        </li>
        <li className="menuItem">
          <FaUsers className="menuIcon" />
          <span>Team</span>
        </li>
        <li className="menuItem">
          <FaBattleNet className="menuIcon" />
          <span>Battlefield</span>
        </li>
        <li className="menuItem">
          <FaGamepad className="menuIcon" />
          <span>Game</span>
        </li>
        <div className="menuFooter">
            
          <li className="menuItem">
            <FaQuestionCircle className="menuIcon" />
            <span>Support</span>
          </li>
          <li className="menuItem">
            <FaCog className="menuIcon" />
            <span>Setting</span>
          </li>
          <li className="menuItem">
            <FaSignOutAlt className="menuIcon" />
            <span>Logout</span>
          </li>
        </div>
      </ul>
    </div>
  );
}



export default Side_nav;