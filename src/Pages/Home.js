import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default Home;
