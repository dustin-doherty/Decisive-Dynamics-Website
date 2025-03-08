import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/expertisepage.css';

const ExpertisePage: React.FC = () => {
    const { type } = useParams<{ type: string }>();

    return (
        <>
            {type ? (
                <h1>{type.replace(/-/g, ' ')}</h1>
            ) : (
                <section className='expertise-page__header'>
                    <h1 className='expertise-page__headline'>Our Expertise</h1>
                    <p className='expertise-page__subtext'>
                        Some text.
                    </p>
                </section>
            )}
        </>
    );
};

export default ExpertisePage;