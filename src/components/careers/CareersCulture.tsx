import React from "react";
import { Link } from "react-router-dom";

import CareersNavigation from "./CareersNavigation";

const CareersCulture: React.FC = () =>  {
    return (
        <>
            {/* Careers Page Header */}
            <section className='careers-page__header'>
                <h1 className='careers-page__headline'>Our Culture</h1>
                <p className='careers-page__subtext'>
                    Join a team where your future is built with innovation.
                </p>
            </section>

            {/* Careers Page Nav */}
            <CareersNavigation />

            {/* Opening Section */}
            <section className='careers-page__opening-section'>
                <h3 className='careers-page__opening-headline'>A Collaborative, People-First Workplace</h3>
                <p className='careers-page__opening-subheadline'>
                    Collaboration and accountability define who we are.
                </p>
                <p className='careers-page__opening-text'>
                    At Decisive Dynamics, collaboration isn’t just encouraged—it’s essential. 
                    Our multidisciplinary teams integrate diverse perspectives to tackle complex 
                    challenges creatively and effectively. Each employee contributes uniquely to 
                    our culture of excellence, and together we uphold accountability as a cornerstone 
                    of our success. As employee-owners, we’re personally invested in every decision, 
                    fostering a unified team environment where innovation thrives.
                </p>
            </section>

            {/* Highlights Section */}
            <section className='careers-page__highlights-section'>
                <h3 className="careers-page__highlights-headline">Highlights:</h3>
                <p className="careers-page__highlights-subheadline">A Culture Built on Collaboration and Excellence.</p>
                <ul className="careers-page__highlights-list">
                    <li className="careers-page__highlights-list-item">Collaborative and inclusive work environment.</li>
                    <li className="careers-page__highlights-list-item">Employee ownership model that promotes accountability and personal investment.</li>
                    <li className="careers-page__highlights-list-item">Commitment to safety, innovation, and continuous professional growth.</li>
                    <li className="careers-page__highlights-list-item">Transparent communication at every organizational level.</li>
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

export default CareersCulture;