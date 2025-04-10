import React from "react";
import { Link } from "react-router-dom";

import CareersNavigation from "./CareersNavigation";

const CareersApplications: React.FC = () =>  {
    return (
        <>
            <section className='careers-page__header'>
                <h1 className='careers-page__headline'>Applications</h1>
                <p className='careers-page__subtext'>
                    Join a team where your future is built with innovation.
                </p>
            </section>

            {/* Careers Page Nav */}
            <CareersNavigation />

            {/* Opening Section */}
            <section className='careers-page__opening-section'>
                <h3 className='careers-page__opening-headline'>Your Career Begins Here</h3>
                <p className='careers-page__opening-subheadline'>
                    Let's Connect About Your Future
                </p>
                <p className='careers-page__opening-text'>
                    Decisive Dynamics is always looking to connect with driven professionals who share our passion for excellence and innovation. 
                    While we don't list specific openings directly on our site, we encourage you to reach out and start a conversation about your 
                    career aspirations and how you can contribute to our growing team.
                </p>
            </section>

            {/* Applications Section */}
            <section className='careers-page__highlights-section'>
                <h3 className="careers-page__highlights-headline">Interested in joining us?</h3>
                <p className="careers-page__highlights-subheadline">
                    Please visit our Contact page and share a little about yourself, including your professional background and interests.
                </p>
                <p className="careers-page__applications-list-headline">After reaching out, you can expect:</p>
                <ul className="careers-page__highlights-list">
                    <li className="careers-page__highlights-list-item">A quick initial follow-up to learn more about your skills and interests.</li>
                    <li className="careers-page__highlights-list-item">A personalized conversation with one of our team members to discuss potential roles and opportunities.</li>
                    <li className="careers-page__highlights-list-item">Regular communication throughout the process to ensure transparency and clarity.</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className='contact-section__contact-section'>
                <h2 className='contact-section__contact-headline'>
                    Interested in Joining Our Team?
                </h2>
                <p className='contact-section__contact-subheadline'>
                    Reach out today to explore career opportunities with Decisive Dynamics.
                </p>
                <button className='contact-section__contact-button'>
                    <Link to='/contact'>Contact</Link>
                </button>
            </section>
        </>
    );
};

export default CareersApplications;