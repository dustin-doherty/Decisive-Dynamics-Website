import React from "react";
import { Link } from "react-router-dom";
import "../styles/contactsection.css";

const ContactSection: React.FC = () => {
    return (
        <>
            <section className='contact-section__contact-section'>
                <h2 className='contact-section__contact-headline'>
                    Ready to Build Together?
                </h2>
                <p className='contact-section__contact-subheadline'>
                    Contact us now and discover how our expertise can drive your project forward.
                </p>
                <button className='contact-section__contact-button'>
                    <Link to='/contact'>Contact</Link>
                </button>
            </section>
        </>
    );
};

export default ContactSection;