//
import React from "react";
import "./App.css";
import Landing_page from "./Components/LandingPage/Landing_page";
import Footer from "./Components/LandingPage/footer";
import OurMission from "./Components/LandingPage/OurMission";
import Features from "./Components/LandingPage/Features";
import FAQ_page from "./Components/LandingPage/FAQ_page";
import Testimonial_page from "./Components/LandingPage/Testimonial_page";

function App() {

  return (
    <>
    <Landing_page/>
    <Features/>
<FAQ_page/>
<Testimonial_page/>
<OurMission/>
<Footer/>
  

    </>
  );
}

export default App;
