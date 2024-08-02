import navroboimg from "../../assets/navrobo.png";
import backgroundVideo from "../../assets/bg_v1.mp4";
import mascot from "../../assets/marcot.png";
import dev_arena_logo from "../../assets/dev_arena_logo.png";
import { Link } from 'react-router-dom';


export default function Landing_page() {
  return (
    <>
         <div className="App">
        {/* Video Background */}
        <video className="video-background" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="content">
          <nav>   
            <img src={dev_arena_logo} id="logo" alt="logo" />
            {/* <img src={navroboimg} alt="robo" /> */}
         <div className="nav-links-container flex">
         <a href="">Home</a>
            {/* <a href="">About Us</a> */}
            <a href="">Our Vision</a>
            <a href="">Features</a>
            {/* <a href="">How it Works</a> */}
            <a href="">Testimonials</a>
            {/* <a href="">Blog</a> */}
            <a href="">Contact Us</a>
          
         </div>
         <a href="" id="signin">Sign Up/Login</a>
          </nav>

          <div className="play">
            <div className="text1">
              Revolutionize Team Building Through Project Collaboration!
            </div>
            <div className="text1">Dev-Arena: Unite, Create, Conquer!</div>
          </div>
          <div className="text1" id="playnow">
          <Link to="/home">PLAY NOW</Link>
          </div>
        </div>
      </div>
      <div className="app2">
        <div className="content2">
          <div>
            <h1>
              Welcome To Dev-Arena: Where Team Building Meets Coding Mastery!
            </h1>
            <p>
              Dev-Arena Is An Innovative Web Development Gaming Platform That
              Makes Coding Engaging And Fun. Earn Cool Tech Tags, Collaborate
              With A Global Community, And Build Real-Life Projects—All While
              Leveling Up Your Web Development Skills. Join CodePlay And Turn
              Coding Into An Exciting Adventure!
            </p>
            </div>
            <img src={mascot} alt="robot" className="robot-image" />
        
        </div>
        <div class="glow-circle gc0"></div>
        <div class="glow-circle gc1"></div>
        <div class="glow-circle gc2"></div>
      </div>
    </>
  )
}
