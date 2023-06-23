import React from "react";
import "./CreditsStyles.css";
import {AiOutlineInstagram,AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
const Credits = () => {
    return (
        <>
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
                            <a className="credit-links" href="https://www.instagram.com/its_sarthak_ag/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="social-icons" /></a>
                            <a className="credit-links" href="https://www.linkedin.com/in/sarthak-agarwal-ab6308245" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="social-icons" /></a>
                            <a className="credit-links" href="https://github.com/sarthakagarwal882" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className="social-icons" /></a>
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
                            <a className="credit-links" href="https://instagram.com/sanwiksagar" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="social-icons" /></a>
                            <a className="credit-links" href="https://www.linkedin.com/in/sanwik-sagar-7ab180230" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="social-icons" /></a>
                            <a className="credit-links" href="https://github.com/SanwikSagar" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className="social-icons" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="text-white" style={{ opacity: "0.3" }} />
        </>
    );
};

export default Credits;