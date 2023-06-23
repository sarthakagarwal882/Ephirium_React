import React, { useState } from "react";
import "./NavbarStyles.css"
function Navbar() {

// const[height,setHeight]=useState();

// const set=()=>{

//     setHeight(addEventListener(scrollY));
// };
// function log(){
//     console.log(height);
//     set();
// }

    return (
        <section id="navbar-main">
            <nav className="navbar sticky text-white" >
                <div className="navbar-brand">
                    <a href="." className="text-white">
                        <h2>Ephirium</h2>
                    </a>
                </div>
                <div className="hamburger">
                    <div className="nav-items">
                        <ul>
                            <li><a className="text-white" href="/">HOME</a></li>
                            <li><a className="text-white" href="/games">GAMES</a></li>
                            <li><a className="text-white" href="/events">EVENTS</a></li>
                            <li><a className="text-white" href="/team">OUR TEAM</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;