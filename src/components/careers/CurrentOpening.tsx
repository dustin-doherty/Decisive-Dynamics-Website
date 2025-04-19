import React from 'react';
import { Opening } from '../../data/currentOpeningsList';

interface CurrentOpeningProps {
    opening: Opening;
}

const CurrentOpening: React.FC<CurrentOpeningProps> = ({ opening }) => {
    const subject = encodeURIComponent(`Application for ${opening.title}`);
    return (
        <div className="careers-page__positions-card">
            <h3 className="careers-page__positions-card-title">{opening.title}</h3>
            <p className="careers-page__positions-card-experience">
                <span className="careers-page__positions-card-bold">Experience:</span> {opening.experience}
            </p>
            <p className="careers-page__positions-card-type">
                <span className="careers-page__positions-card-bold">Type:</span> {opening.type}
            </p>
            <p className="careers-page__positions-card-description">
                <span className="careers-page__positions-card-bold">Description:</span> {opening.description}
            </p>
            <div className='careers-page__positions-card-button-container'>
                <button className='contact-section__contact-button'>
                    <a
                        href={`mailto:info@decisivedynamics.com?subject=${subject}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        Apply Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default CurrentOpening;