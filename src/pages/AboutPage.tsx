import React from "react";
import { useParams, Link } from "react-router-dom";

import AboutGeneral from "../components/about/AboutGeneral";
import AboutValues from "../components/about/AboutValues";
import "../styles/aboutpage.css";

const AboutPage: React.FC = () => {
    const { section } = useParams<{ section?: string }>();

    if (!section) {
        return (
            <>
                <AboutGeneral />
            </>
        );
    }

    switch (section) {
        case "values":
            return (
                <AboutValues />
            );
        default:
            return (
                <section className="careers-page__notfound">
                    <h1>Section Not Found</h1>
                    <Link to="/about">Back to About</Link>
                </section>
            );
    }
};

export default AboutPage;