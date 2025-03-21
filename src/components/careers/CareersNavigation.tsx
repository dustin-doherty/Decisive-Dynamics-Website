import React from "react";
import { NavLink } from "react-router-dom";

const CareersNavigation: React.FC = () => {
    return (
        <section>
            <nav className="careers-page__nav">
                <NavLink 
                    to="/careers"
                    end
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    Careers
                </NavLink>
                <NavLink 
                    to="/careers/culture"
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    Our Culture
                </NavLink>
                <NavLink 
                    to="/careers/openings"
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    Current Openings
                </NavLink>
                <NavLink 
                    to="/careers/benefits"
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    Benefits & Perks
                </NavLink>
                <NavLink 
                    to="/careers/applications"
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    Application Process
                </NavLink>
                <NavLink 
                    to="/careers/faq"
                    className={({ isActive }) => 
                        `careers-page__nav-link${isActive ? " careers-page__nav-link--active" : ""}`
                    }
                >
                    FAQs
                </NavLink>
            </nav>
        </section>
    );
};

export default CareersNavigation;