import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        {/* You can add more routes here as needed */}
      </Routes>
      {/* Common components like Footer can stay outside the Routes to be always rendered */}
      {/* <Footer /> */}
    </Router>

    {/* <Home/> */}
  </React.StrictMode>
);
