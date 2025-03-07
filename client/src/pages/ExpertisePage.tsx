import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/expertisepage.css';

const ExpertisePage: React.FC = () => {
    const { type } = useParams<{ type: string }>();

    return (
        <>
            <h1>{type ? type.replace(/-/g, ' ') : 'Expertise'}</h1>
            {/* Render content tailored to the 'type' */}
        </>
    );
};

export default ExpertisePage;