import React from "react";
import "./IntroStyles.css";

const Intro=()=>{
    return(
        <section id="intro">
        <div>
            <h2 className="text-white">What Ephirium covers?</h2>
            <div className="text-white intro-info">
                <div>
                    <h3>E-sports</h3>
                    <hr />
                    <p>Thrilling tournaments and events to compete, rise through the ranks, and experience the
                        adrenaline rush of professional gaming.</p>
                </div>
                <div>
                    <h3>Game Development</h3>
                    <hr />
                    <p>Providing a platform for game developers to learn, collaborate and showcase their talent.
                    </p>
                </div>
                <div>
                    <h3>Casual Gaming</h3>
                    <hr />
                    <p>Embrace joy and relaxation with multiplayer adventures, co-op challenges, and casual
                        mobile
                        games.</p>
                </div>
                <div>
                    <h3>Community Support</h3>
                    <hr />
                    <p>Foster a welcoming and inclusive space for gamers to connect, share experiences, and form
                        lasting
                        friendships.</p>
                </div>

            </div>
        </div>
        <div>
            <img className="intro-img" src="https://i.imgur.com/V7SNXCv.png" alt="" />
        </div>

    </section>
    );
};

export default Intro;