import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/careerspage.css";

import CareersNavigation from "../components/careers/CareersNavigation";
import CareersCulture from "../components/careers/CareersCulture";
import CareersOpenings from "../components/careers/CareersOpenings";
import CareersBenefits from "../components/careers/CareersBenefits";
import CareersApplications from "../components/careers/CareersApplications";
import CareersFAQ from "../components/careers/CareersFAQ";

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
                    <p>
                        At Decisive Dynamics LLC, we are more than just an engineering and architectural consulting firm—we are a community 
                        of innovators, problem-solvers, and forward-thinkers dedicated to shaping a sustainable future. Our commitment to 
                        excellence drives us to seek individuals who are not only skilled but also passionate about making a meaningful impact.
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
            </>
        );
    }

    switch (section) {
        case "culture":
            return (
                <CareersCulture />
            );
        case "openings":
            return (
                <CareersOpenings />
            );
        case "benefits":
            return (
                <CareersBenefits />
            );
        case "applications":
            return (
                <CareersApplications />
            );
        case "faq":
            return (
                <CareersFAQ />
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