import React from "react";
import { Link } from "react-router-dom";

import CareersNavigation from "./CareersNavigation";

const CareersBenefits: React.FC = () =>  {
    return (
        <>
            {/* Careers Page Header */}
            <section className='careers-page__header'>
                <h1 className='careers-page__headline'>Benefits and Perks</h1>
                <p className='careers-page__subtext'>
                    Join a team where your future is built with innovation.
                </p>
            </section>

            {/* Careers Page Nav */}
            <CareersNavigation />

            {/* Opening Section */}
            <section className='careers-page__opening-section'>
                <h3 className='careers-page__opening-headline'>Rewarding Careers, Balanced Lives</h3>
                <p className='careers-page__opening-subheadline'>
                    Our comprehensive benefits support your health, well-being, and professional growth.
                </p>
                <p className='careers-page__opening-text'>
                    Decisive Dynamics prioritizes the well-being and satisfaction of our employees by offering 
                    a range of competitive benefits and perks. We understand that a healthy work-life balance 
                    is key to professional and personal success.
                </p>
            </section>

            {/* Key Benefits Section */}
            <section className='careers-page__highlights-section'>
                <h3 className="careers-page__highlights-headline">Key Benefits:</h3>
                <p className="careers-page__highlights-subheadline">Benefits Designed with Your Well-being in Mind.</p>
                <ul className="careers-page__highlights-list">
                    <li className="careers-page__highlights-list-item">Competitive salaries and performance-based incentives</li>
                    <li className="careers-page__highlights-list-item">Generous paid time off and flexible working arrangements.</li>
                    <li className="careers-page__highlights-list-item">Comprehensive insurance and retirement plans.</li>
                    <li className="careers-page__highlights-list-item">Professional development and continuous learning opportunities.</li> 
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

export default CareersBenefits;