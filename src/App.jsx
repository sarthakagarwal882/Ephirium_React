import React from "react";
import "./App.css"
import Hamburger from "./components/Hamburger";
import Background from "./components/Background-home"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Hamburger />
      <Navbar />
      <Background />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
