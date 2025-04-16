import React from "react";

import AboutNavigation from "../../components/about/AboutNavigation";
import ContactSection from "../ContactSection";

import introImg from "../../assets/images/aboutUs_introduction.webp";
import historyImg from "../../assets/images/aboutUs_history.webp";
import leadershipImg from "../../assets/images/aboutUs_leadership.webp";

const AboutGeneral: React.FC = () => {
    return (
        <>
            {/* About Us Page Header */}
            <section className='about-page__header'>
                <h1 className='about-page__headline'>About Us</h1>
                <p className='about-page__subtext'>
                    Decisive Dynamics is unparalleled in providing services for projects in the
                    engineering and construction industry.
                </p>
            </section>

            {/* About Us Page Nav */}
            <AboutNavigation />

            {/* Introduction Section */}
            <section className='about-page__intro-section'>
                <div className='about-page__intro-main-container'>
                    <h2 className='about-page__intro-headline'>Who We Are</h2>
                    <div className='about-page__intro-text-container'>
                        <p className='about-page__intro-text'>
                            Decisive Dynamics, LLC is a leading engineering and architectural consulting
                            firm dedicated to delivering innovative, reliable, and
                            sustainable solutions to meet the complex challenges
                            of modern infrastructure and development. With a
                            team of experienced professionals specializing in
                            diverse disciplines, our firm is uniquely positioned to
                            provide comprehensive services tailored to public
                            and private sector needs.
                        </p>
                        <p className='about-page__intro-text'>
                            Our commitment to excellence is underscored by
                            decades of expertise, a client-centric approach, and a
                            proven track record of success. We focus on
                            delivering high-quality results on time and within
                            budget, fostering long-term relationships built on
                            trust and reliability.
                        </p>
                    </div>
                </div>
                <div className='about-page__intro-image-container'>
                    <img 
                        src={introImg}
                        alt='Introduction Image'
                        className='about-page__intro-image'
                    />
                </div>
            </section>

            {/* Leadership Section */}
            <section className='about-page__leadership-section'>
                <div className='about-page__leadership-main-container'>
                    <h2 className='about-page__leadership-headline'>Our Leadership</h2>
                    <div className='about-page__leadership-text-container'>
                        <p className='about-page__leadership-text'>
                            Dustin Doherty, P.E., CPESC, MS4-SCP, serves as the owner and driving force behind 
                            Decisive Dynamics, LLC. With over 20 years of professional experience, Mr. Doherty 
                            brings extensive expertise in civil engineering, project management, and infrastructure 
                            development. His background includes leading complex site design projects, hydraulic 
                            modeling, public infrastructure assessment, and private commercial and residential 
                            developments. Throughout his career, Dustin has successfully guided projects involving 
                            roadway reconstruction, water and wastewater systems, stormwater management, and 
                            ADA-compliant recreational trails.
                        </p>
                        <p className='about-page__leadership-text'>
                            Mr. Doherty’s leadership is characterized by his commitment to collaboration, innovation, 
                            and sustainable solutions, earning him accolades from clients and peers alike. Recognized 
                            for his proactive problem-solving skills, technical excellence, and effective stakeholder 
                            communication, Dustin has consistently delivered projects ahead of schedule and within 
                            budget. He maintains active professional affiliations, including roles as President of 
                            the Ohio Society of Professional Engineers, Franklin County Chapter (2019-2021), and the 
                            Engineers Club of Columbus (2024-2025). His leadership ensures Decisive Dynamics remains 
                            a trusted partner known for quality, responsiveness, and client satisfaction.
                        </p>
                    </div>
                </div>
                <div className='about-page__leadership-image-container'>
                    <img 
                        src={leadershipImg}
                        alt='Firm History Image'
                        className='about-page__leadership-image'
                    />
                </div>
            </section>

            {/* Firm History Section */}
            <section className='about-page__history-section'>
                <div className='about-page__history-main-container'>
                    <h2 className='about-page__history-headline'>Firm History</h2>
                    <div className='about-page__history-text-container'>
                        <p className='about-page__history-text'>
                            Decisive Dynamics, LLC was founded in 2024 with a clear vision 
                            of providing innovative engineering and architectural consulting 
                            services that emphasize quality, responsiveness, and client 
                            satisfaction. Headquartered in Ohio, the firm quickly established 
                            itself as a trusted partner by leveraging the extensive expertise 
                            of its leadership team, who bring decades of experience in project 
                            management, civil engineering, and infrastructure development. 
                            This expertise has enabled Decisive Dynamics to deliver sustainable, 
                            high-quality solutions tailored to diverse public and private sector needs.
                        </p>
                        <p className='about-page__history-text'>
                            The firm's core specialties include roadway reconstruction, stormwater management, 
                            utility infrastructure, and ADA-compliant multiuse paths and recreational facilities. 
                            Decisive Dynamics is distinguished by a collaborative and client-centric approach, 
                            prioritizing meaningful partnerships, responsiveness, and meticulous project execution. 
                            Through proactive problem-solving, innovation, and a strong commitment to accountability 
                            and excellence, the company consistently achieves exceptional outcomes, positively 
                            impacting community infrastructure and development across Ohio.
                        </p>
                    </div>
                </div>
                <div className='about-page__history-image-container'>
                    <img 
                        src={historyImg}
                        alt='Firm History Image'
                        className='about-page__history-image'
                    />
                </div>
            </section>
            
            {/* Contact Section */}
            <ContactSection />
        </>
    );
};

export default AboutGeneral;