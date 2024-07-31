import React from "react";
import navroboimg from "../../assets/navrobo.png";
import dev_arena_logo from "../../assets/dev_arena_logo.png"
import "./footer.css";
import { Instagram,Youtube,Facebook } from 'iconsax-react';
function Footer() {
  return (
    <div className="footer">
      <div className="frame137">
        <div className="frame27">
          <img src={navroboimg}  alt="robo" />
          <img src={dev_arena_logo} id="logo-in-footer" alt="logo" />
        </div>
        <div className="frame88">
          <div className="link">
            <a href="">About us</a>
            <a href="">Contact us</a>
            <a href="">Resources</a>
            <a href="">Features</a>
            <a href="">Email</a>
            <a href="">Blog</a>
            <a href="">How it works</a>
            <a href="">FAQ</a>
            <a href="">Join us</a>
            <a href="">Support us</a>
            <a href="">Tutorials</a>
          </div>
        </div>
      </div>
      <br />
      <div className="frame93">
        <a href="">Privacy Policy | Terms of Service</a>
        <a href="">© 2024 Dev-Arena | All Rights Reserved</a>
        <div className="social-media">
        <Instagram size="24" color="#FFFFFF" variant="Bold"/>
        <Facebook size="24" color="#FFFFFF" variant="Bold"/>
        <Youtube size="24" color="#FFFFFF" variant="Bold"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
