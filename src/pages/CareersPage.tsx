import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/careerspage.css";

import CareersNavigation from "../components/careers/CareersNavigation";
import CareersCulture from "../components/careers/CareersCulture";
import CareersBenefits from "../components/careers/CareersBenefits";
import CareersApplications from "../components/careers/CareersApplications";

const CareersPage: React.FC = () => {
    const { section } = useParams<{ section?: string }>();
    
    if (!section) {
        return (
            <>
                {/* Careers Page Header*/}
                <section className='careers-page__header'>
                    <h1 className='careers-page__headline'>Careers</h1>
                    <p className='careers-page__subtext'>
                        Join a team where your future is built with innovation.
                    </p>
                </section>

                {/* Careers Page Nav */}
                <CareersNavigation />

                {/* Opening Section */}
                <section className='careers-page__opening-section'>
                    <h3 className='careers-page__opening-headline'>Shape Your Future at Decisive Dynamics</h3>
                    <p className='careers-page__opening-subheadline'>
                        At Decisive Dynamics, our people are our greatest asset. Join our growing team where your innovation, talent, and dedication drive the success of our clients and communities.
                    </p>
                    <p className='careers-page__opening-text'>
                        Decisive Dynamics, LLC is committed to delivering innovative engineering and architectural solutions across Ohio. 
                        We foster a collaborative, responsive, and inclusive environment that empowers our employees to grow professionally 
                        and personally. Explore our culture, comprehensive benefits, and the application process, 
                        and discover why Decisive Dynamics is an ideal place to build your career.
                    </p>
                </section>

                {/* Why Us Section */}
                <section className='careers-page__why-us-section'>
                    <h3 className='careers-page__why-us-headline'>Why Join Us?</h3>
                    <ul className='careers-page__why-us-list'>
                        <li className='careers-page__why-us-list-item'>
                            <span className='careers-page__why-us-bold'>Innovative Projects: </span>
                            Engage in cutting-edge projects that challenge the status quo and drive sustainable solutions.
                        </li>
                        <li className='careers-page__why-us-list-item'>
                            <span className='careers-page__why-us-bold'>Collaborative Environment: </span>
                            Be part of a team that values diverse perspectives and fosters open communication.
                        </li>
                        <li className='careers-page__why-us-list-item'>
                            <span className='careers-page__why-us-bold'>Professional Growth: </span>
                            Access continuous learning opportunities and clear career progression paths.
                        </li>
                        <li className='careers-page__why-us-list-item'>
                            <span className='careers-page__why-us-bold'>Community Engagement: </span>
                            Contribute to initiatives that positively impact the communities we serve.
                        </li>
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
    }

    switch (section) {
        case "culture":
            return (
                <CareersCulture />
            );
        case "benefits":
            return (
                <CareersBenefits />
            );
        case "applications":
            return (
                <CareersApplications />
            );
        default:
            return (
                <section className="careers-page__notfound">
                    <h1>Section Not Found</h1>
                    <Link to="/careers">Back to Careers</Link>
                </section>
            );
    }

    
};

export default CareersPage;