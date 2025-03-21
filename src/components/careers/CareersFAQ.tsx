import React from "react";

import CareersNavigation from "./CareersNavigation";

const CareersFAQ: React.FC = () =>  {
    return (
        <>
            <section className='careers-page__header'>
                <h1 className='careers-page__headline'>FAQs</h1>
                <p className='careers-page__subtext'>
                    Join a team where your future is built with innovation.
                </p>
            </section>
            <CareersNavigation />
        </>
    );
};

export default CareersFAQ;