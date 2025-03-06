import React, { useState, useEffect } from 'react';
import '../styles/homepage.css';

// Hero Page Videos
import hero1 from '../assets/videos/hero1.mp4';
import hero2 from '../assets/videos/hero2.mp4';
import hero3 from '../assets/videos/hero3.mp4';
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

            {/* Content */}
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
        </>
    );
};

export default HomePage;
