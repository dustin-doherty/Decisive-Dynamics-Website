import React from 'react';
import { Opening } from '../../data/currentOpeningsList';

interface CurrentOpeningProps {
    opening: Opening;
}

const CurrentOpening: React.FC<CurrentOpeningProps> = ({ opening }) => {
    return (
        <div className="careers-page__positions-card">
            <h3 className="careers-page__positions-card-title">{opening.title}</h3>
            <p className="careers-page__positions-card-experience">Experience: {opening.experience}</p>
            <p className="careers-page__positions-card-type">Type: {opening.type}</p>
            <p className="careers-page__positions-card-description">Description: {opening.description}</p>
        </div>
    );
};

export default CurrentOpening;