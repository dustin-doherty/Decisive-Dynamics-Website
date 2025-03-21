import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimonials from "../data/testimonialsList";
import TestemonialCard from "../components/TestimonialCard";
import "../styles/homepage.css";

// Hero Page Videos
import hero1 from "../assets/videos/hero1.mp4";
import hero2 from "../assets/videos/hero2.mp4";
import hero3 from "../assets/videos/hero3.mp4";
const heroVideos = [hero1, hero2, hero3];

// Images
import joinUsImg from "../assets/images/joinUs.webp";
import amazingServiceImg from "../assets/images/amazingService.webp";

const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFirst, setShowFirst] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {
        if (fade) {
            const nextIndex = (currentIndex + 1) % heroVideos.length;
            setCurrentIndex(nextIndex);
            setShowFirst((prev) => !prev);
            setFade(false);
        }
    };

    const nextIndex = (currentIndex + 1) % heroVideos.length;

    return (
        <>
            {/* Hero Page */}
            <section className="hero-section">
                {/* Video Element A */}
                <video
                    className={`hero-video ${showFirst ? "top-video" : "bottom-video"} ${
                        showFirst && fade ? "fade-out" : ""
                    }`}
                    src={showFirst ? heroVideos[currentIndex] : heroVideos[nextIndex]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onTransitionEnd={showFirst && fade ? handleTransitionEnd : undefined}
                />
                {/* Video Element B */}
                <video
                    className={`hero-video ${!showFirst ? "top-video" : "bottom-video"} ${
                        !showFirst && fade ? "fade-out" : ""
                    }`}
                    src={!showFirst ? heroVideos[currentIndex] : heroVideos[nextIndex]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onTransitionEnd={!showFirst && fade ? handleTransitionEnd : undefined}
                />
            </section>

            {/* Impact Section */}
            <section className='impact-section'>
                <div className="impact-section__headline">
                    <h2><span className='impact-section__text-highlight'>Dynamic</span> strategies.</h2>
                    <h2><span className='impact-section__text-highlight'>Decisive</span> execution.</h2>
                </div>
                <div className="impact-section__description">
                    <p>
                        We combine our diverse engineering expertise, longstanding relationships, 
                        and a genuine passion for solving challenges to deliver the infrastructure 
                        solutions our clients need.
                    </p>
                </div>
            </section>

            {/* Expertise Section */}
            <section className='expertise-section'>
                <h2 className='expertise-section__headline'>Expertise</h2>
                <p className='expertise-section__subheadline'>$200M+ Projects & Programs Managed</p>
                <p className='expertise-section__text'>
                    Our firm is uniquely positioned to deliver exceptional value by leveraging 
                    extensive technical expertise, a commitment to responsiveness, and a proven 
                    track record of delivering successful projects across Ohio.
                </p>
                <div className='expertise-section__links'>
                    <div className="expertise-section__links-col1">
                        <Link to="/expertise/utility-design">Utility Design</Link>
                        <Link to="/expertise/stormwater-management">Stormwater Management</Link>
                        <Link to="/expertise/water-and-wastewater">Water and Wastewater</Link>
                        <Link to="/expertise/parks-and-recreation">Parks and Recreation</Link>
                        <Link to="/expertise/civil-engineering">Civil Engineering</Link>
                    </div>
                    <div className="expertise-section__links-col2">
                        <Link to="/expertise/due-diligence">Due Diligence</Link>
                        <Link to="/expertise/planning">Planning</Link>
                        <Link to="/expertise/transportation-engineering">Transportation Engineering</Link>
                        <Link to="/expertise/construction-services">Construction Services</Link>
                    </div>
                </div>
            </section>
            
            {/* Service Section */}
            <section className="service-section">
                <div className="service-section__content">
                    <h2 className="service-section__headline">
                        <span className="service-section__minimize">Amazing</span> <span className="service-section__highlight">Service</span>. 
                        <span> </span> 
                        <span className="service-section__minimize">Unmatched</span> <span className="service-section__highlight">Expertise</span>.
                    </h2>
                    <p className="service-section__text1">
                        Decisive Dynamics is unmatched in providing services for engineering and 
                        construction projects. Our success is built on extensive program management 
                        experience, real-world insights, a deep understanding of the design and 
                        construction process, meticulous attention to detail, and a commitment to 
                        professional care.
                    </p>
                    {/* Mobile-only image placed between paragraphs */}
                    <div className="service-section__image-container mobile-only">
                    <img 
                        src={amazingServiceImg} 
                        alt="Amazing Service Image" 
                        className="service-section__image"
                    />
                    </div>
                    <p className="service-section__text2">
                        Our expertise in managing complex construction details and our in-depth knowledge 
                        of cost and scheduling enable us to offer expert support when critical issues 
                        arise. We blend this know-how with keen insight to achieve your project goals 
                        while mitigating risk.
                    </p>
                </div>
            {/* Desktop-only image placed on the right */}
            <div className="service-section__image-container desktop-only">
                <img 
                src={amazingServiceImg} 
                alt="Amazing Service Image" 
                className="service-section__image"
                />
            </div>
            </section>

            {/* Testimonials Section */}
            <section className='testimonials-section'>
                <h2 className='testimonials-section__headline'>Awards and Testimonials</h2>
                <p className='testimonials-section__subheadline'>What Our Clients Say</p>
                <div className='testimonials-section__main-content'>
                    <p className='testimonials-section__description'>
                        Decisive Dynamics has earned high praise from
                        clients and stakeholders for their technical
                        expertise, effective communication, and ability to
                        deliver quality results on time and within budget.
                        Reviews often highlight their ability to anticipate
                        challenges, propose innovative solutions, and
                        maintain seamless coordination across
                        multidisciplinary teams.
                    </p>
                    <div className='testimonials-section__cards'>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={index !== testimonials.length - 1 ? "testimonial-card__margin" : ""}>
                                <TestemonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section className='careers-section'>
                    <div className='careers-section__image-content'>
                        <img 
                            className='careers-section__image' 
                            src={joinUsImg} 
                            alt="Join Us Image" 
                        />
                    </div>
                    <div className='careers-section__text-content'>
                        <h3 className='careers-section__text-heading'>Looking for a Career?</h3>
                        <p className='careers-section__text-main'>
                            Immerse yourself in an environment that elevates your potential 
                            while empowering you to shape its future.
                        </p>
                        <button className='careers-section__button'>
                            <Link to='careers'> Explore Careers at Decisive Dynamics</Link>
                        </button>
                    </div>
            </section>
        </>
    );
};

export default HomePage;
