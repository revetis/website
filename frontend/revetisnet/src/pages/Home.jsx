import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BigTitle from "../components/BigTitle/BigTitle";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <div>
    
      <BigTitle />
      <About />
      <Projects />
      
    </div>
  );
}

export default Home;
