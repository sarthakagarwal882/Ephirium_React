import React from "react";
import {AiOutlineInstagram,AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
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


            <section id="credits" className="text-white">
                <h2>Contributors</h2>
                <div className="credit-main">
                    <div className="credit-item credit-item-1">
                        <img className="credit-img" src="https://i.imgur.com/7RhlMrM.jpg" alt="" />
                        <hr />
                        <div>
                            <h3>Sarthak Agarwal</h3>
                            <p className="credit-role">Web Developer & Designer</p>
                        </div>
                        <div>
                            <a className="credit-links" href="https://www.instagram.com/its_sarthak_ag/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="social-icons"/></a>
                            <a className="credit-links" href="https://www.linkedin.com/in/sarthak-agarwal-ab6308245" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="social-icons"/></a>
                            <a className="credit-links" href="https://github.com/sarthakagarwal882" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className="social-icons"/></a>
                        </div>
                    </div>
                    <div className="credit-item credit-item-2">
                        <img className="credit-img" src="https://i.imgur.com/EStmz7g.jpg" alt="" />
                        <hr />
                        <div>
                            <h3>Sanwik Sagar</h3>
                            <p className="credit-role">Web Designer</p>

                        </div>
                        <div>
                            <a className="credit-links" href="https://instagram.com/sanwiksagar" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="social-icons"/></a>
                            <a className="credit-links" href="https://www.linkedin.com/in/sanwik-sagar-7ab180230" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="social-icons"/></a>
                            <a className="credit-links" href="https://github.com/SanwikSagar" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className="social-icons"/></a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="text-white" style={{opacity:"0.3"}} />

        </>
    );
}

export default Home;