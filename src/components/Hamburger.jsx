import React from "react";
import "./HamburgerStyles.css"
function Hamburger() {
    return (
        <>
            <input className="nav-input" type="checkbox"/>
                <div className="hamburger-lines">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
        </>
    );
}

export default Hamburger;