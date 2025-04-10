import React from "react";
import { useParams } from "react-router-dom";
import "../styles/expertisepage.css";
import "../styles/contactsection.css";
import expertiseList from "../data/expertiseList";
import ExpertiseComponent from "../components/Expertise";
import ExpertiseLinkCard from "../components/ExpertiseLinkCard";
import ContactSection from "../components/ContactSection";

const ExpertisePage: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const expertise = expertiseList.find((item) => item.id === type);

    return (
        <>
            {type && expertise ? (
                <ExpertiseComponent expertise={expertise} />
            ) : (
                <>
                    {/* Page Header */}
                    <section className='expertise-page__header'>
                        <h1 className='expertise-page__headline'>Our Expertise</h1>
                        <p className='expertise-page__subtext'>
                            Our experts assist you in bringing challenging projects online, on time, and under budget.
                        </p>
                    </section>
                    <section className='expertise-page__expertise-link-cards'>
                        {expertiseList.map((expertise, index) => (
                            <div key={index}>
                                <ExpertiseLinkCard expertise={expertise} />
                            </div>
                        ))}
                    </section>
                    {/* Contact Section */}
                    <ContactSection />
                </>
            )}
        </>
    );
};

export default ExpertisePage;