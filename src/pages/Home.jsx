import { useState } from "react";
import { Link } from "react-router-dom";

import BlogCards from "../components/BlogCards";
import AccordionItem from "../components/Accordion";
import Post_loop_item from "../components/Post_loop_item.jsx";
import hero from "../assets/Images/hero.jpg";
import faqLogo from "../assets/Images/faq.webp";

import posts from "../assets/data/posts.jsx";

import { Link as ScrollLink } from "react-scroll";

function Home() {
    const cards = [
        {
            image: hero,
            title: "Voices",
            exerpt:
                "Hear from verified patients with over 380 pre-identified medical conditions, as well as a broad range of healthcare professionals (including KOLs, payers, nurses, and more), with our extensive proprietary panels.",

        },
        {
            image: hero,
            title: "Approaches",
            exerpt:
                "Easily capture the most important voices for your work using our digital, traditional or hybrid approaches for qualitative and quantitative research, all designed specifically with healthcare needs in mind.",
        },
        {
            image: hero,
            title: "Experience",
            excerpt:
                "Trust our team of healthcare experts to utilize the best approach and our understanding of technology to bring in the right voices, while helping you gain efficiency and maintain compliance in your research process.",
        },
    ];

    const Vertical_loop_items = [
        {
            featured_image: hero,
            title: "Why Purpose-Built Matters in Healthcare Market Research",
            excerpt:
                "Explore how a purpose-built partner creates ease, flexibility, and reliability in your healthcare market research",
        },
        {
            featured_image: hero,
            title: "Sago Health Announces Rebrand to TriVoca Health",
            excerpt:
                "Explore how a purpose-built partner creates ease, flexibility, and reliability in your healthcare market research",
        },
        {
            featured_image: hero,
            title: "Essential Strategies To Raise Response And Show Rates",
            excerpt:
                "Explore how a purpose-built partner creates ease, flexibility, and reliability in your healthcare market research",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            title: "How does TriVoca Health support qualitative research?",
            content:
                "TriVoca Health helps with any of your healthcare qualitative research needs, from patient and healthcare professional recruitment to in-person or online focus groups to in-depth interviews and diaries, and beyond.",
        },
        {
            title: "What does TriVoca Health offer for quantitative research?",
            content:
                "TriVoca Health supports your healthcare surveys at every stage. Whether you need help upfront with feasibility consulting, sampling, and programming and hosting, or down the line with data processing or analysis, we’ve got you covered.",
        },
        {
            title: "How does TriVoca Health ensure projects are compliant?",
            content:
                "The TriVoca Health team is deeply experienced in navigating regulatory and compliance requirements, and we employ advanced security techniques for data protection. We also have adverse event-trained staff to support legal requirements.",
        },
        {
            title: "Where do TriVoca Health respondents come from?",
            content:
                "TriVoca Health leverages our proprietary, leading patient and healthcare provider panel to deliver highly reliable, privacy-centric data. All respondents are deeply verified and go through rigorous respondent validation practices.",
        },
        {
            title: "How does TriVoca Health use AI in market research?",
            content:
                "TriVoca Health uses AI to enhance market research by supporting human expertise, not replacing it. We never train AI on client data, ensure full client control over AI use, and maintain strict safeguards for data privacy and ethical practices.",
        },
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="half-width inner-con">
                        <h1>Where Every Voice Shapes Healthcare</h1>
                        <p>
                            TriVoca Health brings together the voices that shape <br />
                            healthcare capturing quality data to turn information into action.
                        </p>
                        <div className="flex-box">
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="transparent-btn"
                            >
                                Services
                            </ScrollLink>
                            <Link to="/contact" className="white-btn">
                                Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="background-background">
                <div className="container">
                    <div className="inner-con half-width">
                        <h2 style={{ color: "var(--purple)" }}>
                            A Purpose-Built Market Research Partnership
                        </h2>
                        <p>
                            Put your market research in the hands of a partner with decades of
                            focused healthcare expertise. Trust the experienced TriVoca Health
                            team to effectively leverage our leading proprietary panels to
                            find you the right audiences and engage them in the right
                            environments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="card-section" id="services">
                <div className="container">
                    <div className="inner-con">
                        <h2 className="white">TriVoca Health Services</h2>
                        <div className="card-container responsive-grid">
                            {cards.map((card, index) => (
                                <BlogCards
                                    key={index}
                                    image={card.image}
                                    title={card.title}
                                    excerpt={card.exerpt || card.excerpt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="expertise-gradient">
                <div className="expertise">
                    <div className="container">
                        <div className="inner-con horizontal">
                            <div className="half-width">
                                <img src={hero} alt="hero" loading="lazy" />
                            </div>
                            <div className="half-width inner-con">
                                <h2 className="purple">Expertise You can Trust</h2>
                                <p>
                                    Each year, TriVoca supports nearly 500 pharmaceutical, medical
                                    device, and healthcare agency clients in completing more than
                                    4,000 research projects. We connect organizations like yours
                                    with over 33,000 patients, caregivers, and HCPs to uncover
                                    what matters most and drive measurable impact across their
                                    fields.
                                </p>
                                <Link to="/contact" className="orange-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-section">
                <div className="container">
                    <div className="inner-con">
                        <h2 className="purple">Resources</h2>
                        <div className="blog-container">
                            <div className="left-container inner-con">
                                <Post_loop_item
                                    key={0}
                                    featured_image={posts[0].featured_image}
                                    title={posts[0].title}
                                    excerpt={posts[0].excerpt}
                                    slug={posts[0].slug}
                                    content={posts[0].content}
                                />
                            </div>

                            <div className="right-container inner-con">
                                {posts.slice(1).map((post, index) => (
                                    <Post_loop_item
                                        key={index + 1}
                                        featured_image={post.featured_image}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        slug={post.slug}
                                        content={post.content}
                                    />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="inner-con">
                        <h2 className="faq-header purple">Frequently Asked Questions</h2>
                        <div className="faq-container inner-con">
                            <div className="callout-box">
                                <img src={faqLogo} alt="callout" />
                                <h3 className="callout-title">Additional Questions?</h3>
                                <p className="callout-content">
                                    Whatever you've got on your mind, our dedicated team is here
                                    to help find the answers.
                                </p>
                                <Link to="/contact" className="orange-btn">
                                    Get in Touch
                                </Link>
                            </div>
                            <div className="faq-accordions">
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={openIndex === index}
                                        onToggle={() => toggleItem(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="postSection" style={{ padding: "50px 0" }}>
                <div className="container">
                    <div className="inner-con">
                        <h2 className="purple">Latest from the TriVoca Health Blog</h2>
                        <div className="post-grid inner-con horizontal">
                            {posts.map((post) => (
                                <div className="post-card inner-con" key={post.id}>
                                    <img src={post.featured_image} alt={post.title} />
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="orange-btn">
                                        Read More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Home;
