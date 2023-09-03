/** @format */

import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="Home">
      <div className="landingSection">
        <h1 className="motto">Go Down The Musical Rabbit Hole</h1>
        <button className="tosignup" onClick={navSignup}>
          Start Journeying
        </button>
      </div>
      <div className="valueproposition">
        <h3>
          We consolidate all the information you need about your favorite songs.
        </h3>
        <p>
          With music at the tip of our fingers, we always want to learn more
          about the songs we listen to and the artists who create them.
          Unfortunately, we often have to scour tens of thousands of different
          sources and websites to acquire that information. That's why EZMuzik
          exists. To make learning about your favorite songs and artists easier
          than getting excited to <a>Nonstop by Drake</a> or relaxing to{" "}
          <a>Daylight by David Kushner.</a>
        </p>
      </div>
      <div className="footer">
        <h4>EZMuzik</h4>
        <h6>By Aadit Juneja</h6>
      </div>
    </div>
  );
}

export default Home;
