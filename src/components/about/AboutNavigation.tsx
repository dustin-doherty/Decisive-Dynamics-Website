import React from "react";
import { NavLink } from "react-router-dom";

const AboutNavigation: React.FC = () => {
    return (
        <section>
            <nav className="about-page__nav">
                <NavLink 
                    to="/about"
                    end
                    className={({ isActive }) => 
                        `about-page__nav-link ${isActive ? "about-page__nav-link--active" : ""}`
                    }
                >
                    About Us
                </NavLink>
                <NavLink 
                    to="/about/values"
                    className={({ isActive }) => 
                        `about-page__nav-link ${isActive ? "about-page__nav-link--active" : ""}`
                    }
                >
                    Our Values
                </NavLink>
            </nav>
        </section>
    );
};

export default AboutNavigation;