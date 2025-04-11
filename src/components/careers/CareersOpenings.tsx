import React from "react";
import { Link } from "react-router-dom";

import CareersNavigation from "./CareersNavigation";
import CurrentOpening from "./CurrentOpening";
import currentOpeningsList from "../../data/currentOpeningsList";

const CareersOpenings: React.FC = () =>  {
    return (
        <>
            {/* Careers Page Header */}
            <section className='careers-page__header'>
                <h1 className='careers-page__headline'>Current Openings</h1>
                <p className='careers-page__subtext'>
                    Join a team where your future is built with innovation.
                </p>
            </section>

            {/* Careers Page Nav */}
            <CareersNavigation />

            {/* Opening Section */}
            <section className='careers-page__opening-section'>
                <h3 className='careers-page__opening-headline'>Bring Your Expertise. Build What Matters.</h3>
                <p className='careers-page__opening-subheadline'>
                    Join a team that values your skills and invests in your future.
                </p>
                <p className='careers-page__opening-text'>
                    We’re actively seeking talented professionals who are passionate about problem-solving and infrastructure development. 
                    From engineers to project managers, every role at Decisive Dynamics plays a vital part in delivering high-impact solutions. 
                    Browse our current openings below to see how you can contribute to our growing team. Don’t see a match? Reach out—we’re always 
                    looking to connect with forward-thinking individuals.
                </p>
            </section>

            {/* Positions Section */}
            <section className='careers-page__positions-section'>
                <h3 className='careers-page__positions-headline'>Explore our Open Positions</h3>
                {currentOpeningsList.map((opening, index) => (
                    <div key={index}>
                        <CurrentOpening opening={opening} />
                    </div>
                ))}
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

export default CareersOpenings;