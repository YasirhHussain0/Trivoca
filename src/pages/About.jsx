import LeadershipCards from "../components/LeadershipCard";
import IsaacRogers from "../assets/Images/IsaacRogers.webp";
import missionImage from "../assets/Images/missionImage.jpeg";

import { Link } from "react-router-dom";

function About() {
    const leadershipData = [
        {
            profileImage: IsaacRogers,
            name: "Issac Rogers",
            position: "CEO",
            linkedinUrl: "https://www.linkedin.com",
        },
        {
            profileImage: IsaacRogers,
            name: "Shannon Childs",
            position: "President",
            linkedinUrl: "https://www.linkedin.com",
        },
        {
            profileImage: IsaacRogers,
            name: "Ashley Wade",
            position: "Chief Revenue Officer",
            linkedinUrl: "https://www.linkedin.com",
        },
        {
            profileImage: IsaacRogers,
            name: "Barbara Riley",
            position: "SVP, Finance",
            linkedinUrl: "https://www.linkedin.com",
        },
    ]
    return (

        <>
            <section className="pageBanner" >
                <div className="container">
                    <div className="half-width">
                        <h1 className="title">About Trivoca Health</h1>
                        <p className="description">We make sustained healthcare engagement, informed decisions, and improved outcomes easier to reach with the right combination of voices, approaches, and experience.</p>
                    </div>
                </div>

            </section >

            <section className="mission-section">
                <div className="container">
                    <div className="mission-container">
                        <div className="mission-image">
                            <img src={missionImage} alt="Our Mission" />
                        </div>
                        <div className="mission-content">
                            <h2 className="section-title purple">Our Mission</h2>
                            <p className="mission-description">We believe in a world where every healthcare decision reflects the voices of those it affects most. Our team of healthcare experts is committed to finding the right approach to help every client achieve measurable impact.</p>
                            {/* <button className="orange-btn">Connect</button> */}
                            <Link to="/contact" className="orange-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="leadership-section">
                <div className="container inner-con">
                    <h2 className="section-title purple">TriVoca Health Leadership</h2>
                    <div className="leadership-cards responsive-grid">
                        {leadershipData.map((leadershipCard, index) => (
                            <LeadershipCards
                                key={index}
                                profileImage={leadershipCard.profileImage}
                                name={leadershipCard.name}
                                position={leadershipCard.position}
                                linkedinUrl={leadershipCard.linkedinUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
export default About;