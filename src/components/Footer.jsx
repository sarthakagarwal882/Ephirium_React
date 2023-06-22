import React from "react";
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import "./FooterStyles.css";

function Footer() {
    return (
        <>
            <footer id="footer" className="text-white">
                <div className="footer-main">
                    <div className="footer-about">
                        <h3>About Us</h3>
                        <p>Welcome to Ephirium, the JNU E-Sports Club! Our community is dedicated to game development, e-sports,
                            casual gaming, and fostering a vibrant gaming community. Join us to explore the exciting world of
                            gaming, compete in e-sports tournaments, and connect with like-minded gamers. Let's level up together!
                        </p>
                    </div>
                    <div className="footer-games">
                        <h3>Games</h3>
                        <p>BGMI</p>
                        <p>Valorant</p>
                        <p>CSGO</p>
                        <p>Among Us</p>
                        <p>COD mobile</p>
                        <p>Fall Guys</p>
                        <p>Apex Legends</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact us</h3>
                        <div>
                            <a href="https://instagram.com/ephirium_jnu" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="social-icons" /></a>
                            <a href="https://twitter.com/Ephirium160726" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className="social-icons" /></a>
                            <a href="https://www.linkedin.com/company/ephirium/" target="_blank" rel="noopener noreferrer" ><AiFillLinkedin className="social-icons" /></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">
                    <p>© 2023 All rights reserved | Ephirium</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;