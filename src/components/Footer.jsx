import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../assets/images/footer-logo.svg"
import insight_logo from "../assets/images/Insights-Association_Company-Member.svg"
import intellus_logo from "../assets/images/intellus-logo_white.webp"
// import { scroller } from "react-scroll";

import useScrollToSection from '../hooks/useScrollToSection';

function Footer() {
    const scrollToSection = useScrollToSection();

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <footer>
            <div className="container">
                <div className="inner-con">
                    <div className="footer-navbar horizontal">
                        <div className="footer-left inner-con">
                            <Link to="/">
                                <img src={logo} alt="TriVoca Health Logo" style={{ width: "210px" }} />
                            </Link>
                            <p>
                                TriVoca Health brings together the voices that shape healthcare<br />
                                — capturing quality data to turn information into action.
                            </p>
                            <Link to="/" className="linkedin-link">
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                        </div>
                        <div className="footer-right inner-con">
                            <nav className='footer-nav'>
                                <Link to="/">Home</Link>
                                <a className='scroll-link' smooth="true" duration="500" offset="-70" onClick={() => scrollToSection("services")}>Services</a>
                                <Link to="/About">About Us</Link>
                                <Link to="/Blog">Resource Center</Link>
                                <Link to="/Contact">Contact Us</Link>
                            </nav>
                            <div className="logo-container inner-con horizontal">
                                <Link to="https://www.intellus.org/" target="_blank" rel="noopener noreferrer">
                                    <img src={intellus_logo} alt="Intellus Logo" />
                                </Link>
                                <Link to="https://www.insightsassociation.org/" target="_blank" rel="noopener noreferrer">
                                    <img src={insight_logo} alt="Insights Association Company Member Logo" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="copyright-container">
                        <p>&copy; 2024 TriVoca Health. All rights reserved.</p>
                        <nav className='footer-nav'>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Washington State Privacy</Link>
                            <Link to="/">Business Ethics & Conduct</Link>
                            <Link to="/">Site Disclaimer</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={`scroll-up ${showScroll ? "show" : "hide"}`}>
                <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <i className="fa-solid fa-angle-up"></i>
                </a>
            </div>
        </footer>
    )
}
export default Footer