import React from "react";
import "./HomeStyles.css"

function Home() {
    return (
        <>

            <section id="home" className="text-white">
                <h1>EPHIRIUM</h1>
                <p>Gaming Club of School of Engineering, JNU.</p>
                <a href="#intro">
                    <button type="button">Introduction<span style={{ fontSize: "20px" }}>➔</span></button>
                </a>
            </section>



        </>
    );
}

export default Home;