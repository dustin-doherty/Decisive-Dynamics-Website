import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';

// Hero Page Videos
import hero1 from '../assets/videos/hero1.mp4';
import hero2 from '../assets/videos/hero2.mp4';
import hero3 from '../assets/videos/hero3.mp4';
import joinUsImg from '../assets/images/joinUs.jpg';
const heroVideos = [hero1, hero2, hero3];

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
                    className={`hero-video ${showFirst ? 'top-video' : 'bottom-video'} ${
                        showFirst && fade ? 'fade-out' : ''
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
                    className={`hero-video ${!showFirst ? 'top-video' : 'bottom-video'} ${
                        !showFirst && fade ? 'fade-out' : ''
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
                    <h2>Dynamic solutions.</h2>
                    <h2>Decisive results.</h2>
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
