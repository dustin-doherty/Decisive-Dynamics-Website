import React from "react";
import { Link } from "react-router-dom";

import CareersNavigation from "./CareersNavigation";

const CareersApplications: React.FC = () =>  {
    return (
        <>
            {/* Careers Page Header */}
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
                    Decisive Dynamics is growing, and we’re actively seeking talented professionals to join our team.
                    Explore our current openings and discover opportunities that align with your skills and ambitions. 
                    We value initiative and curiosity — if you don’t see a perfect match, we still welcome you to reach 
                    out and start a conversation about how you can contribute to our shared success.
                </p>
            </section>

            {/* Applications Section */}
            <section className='careers-page__applications-section'>
                <h3 className="careers-page__applications-headline">Interested in joining us?</h3>
                <p className="careers-page__applications-subheadline">
                    We’re excited to learn more about you. 
                </p>
                <p className="careers-page__applications-text">
                    To start your application, visit our <Link to="/contact" className="careers-page__link">Contact Page</Link> to find our email address. 
                    Please send a brief introduction, your professional background, and the type of role you’re interested in. We recommend attaching a resume or portfolio if available.
                </p>
                <p className="careers-page__applications-list-heading">Once we receive your message, here’s what to expect:</p>
                <ol className="careers-page__applications-list">
                    <li className="careers-page__applications-list-item">
                        Our team reviews your email and responds with a follow-up to better understand your interests and availability.
                    </li>
                    <li className="careers-page__applications-list-item">
                        We schedule a personalized conversation to explore potential opportunities and ensure alignment on values and goals.
                    </li>
                    <li className="careers-page__applications-list-item">
                        You’ll receive timely updates throughout the process as we move forward.
                    </li>
                </ol>
            </section>

            {/* What to Expect Section */}
            <section className='careers-page__what-to-expect-section'>
                <h3 className="careers-page__what-to-expect-headline">What You Can Expect From Us</h3>
                <p className="careers-page__opening-text">
                    We’re committed to creating a respectful and responsive hiring experience. You’ll be treated as a valued professional from the first conversation — whether you’re exploring a role today or connecting for a future opportunity.
                </p>
            </section>

            {/* Next Steps Section */}
            <section className='careers-page__applications-section'>
                <h3 className="careers-page__what-to-expect-headline">Next Steps</h3>
                <p className="careers-page__applications-text">
                    Curious about current roles or what it’s like to work here? <Link to="/careers/openings" className="careers-page__link">View our openings</Link> or learn more <Link to="/careers/culture" className="careers-page__link">about our culture</Link>.
                </p>
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