import React from "react";

import "../../styles/contactsection.css";

import AboutNavigation from "../../components/about/AboutNavigation";
import CoreValueCard from "./CoreValueCard";
import coreValueList from "../../data/coreValuesList";
import ContactSection from "../ContactSection";

const AboutValues: React.FC = () => {
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
            <AboutNavigation />
            {/* Core Values Section */}
            <section className='about-page__values-section'>
                <h2 className='about-page__values-headline'>Our Values</h2>
                {coreValueList.map((value, index) => (
                    <div key={index} className={index !== coreValueList.length - 1 ? "about-page__values-card" : ""}>
                        <CoreValueCard value={value} />
                    </div>
                ))}
            </section>
            {/* Contact Section */}
            <ContactSection />
        </>
    )
}

export default AboutValues;