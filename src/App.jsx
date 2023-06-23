import React from "react";
import "./App.css"
import Hamburger from "./components/Hamburger";
import Background from "./components/Background-home"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Credits from "./components/Credits";
import Events from "./components/Events";
function App() {
  return (
    <div>
      <Hamburger />
      <Navbar />
      <Background />
      <Home/>
      <Intro/>
      <Credits/>
      <Footer/>
    </div>

/* <Events/> */

  );
}

export default App;
