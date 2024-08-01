//
import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/LandingPage/footer";
import OurMission from "./Components/LandingPage/OurMission";
import Features from "./Components/LandingPage/Features";
import FAQPage from "./Components/LandingPage/FAQPage";
import TestimonialPage from "./Components/LandingPage/TestimonialPage";

function App() {
  return (
    <>
      <LandingPage />
      <Features />
      <FAQPage />
      <TestimonialPage />
      <OurMission />
      <Footer />
    </>
  );
}

export default App;
