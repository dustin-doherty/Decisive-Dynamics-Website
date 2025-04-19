import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/footer.css";

interface NavLinkItem {
    label: string;
    path: string;
}

const navLinks: NavLinkItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Expertise", path: "/expertise" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
];

interface FooterProps {
    onLinkClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick = () => {} }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change (if needed)
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <NavLink to="/" className="footer-brand">
                        Decisive Dynamics
                    </NavLink>
                    <div className="footer-contact">
                        <p>(614) 359-6321</p>
                        <p>dustin.doherty@decisivedynamics.com</p>
                    </div>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-link-list">
                        {navLinks.map(({ label, path }, index) => (
                            <li key={index} className="footer-nav-item">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `footer-nav-link ${isActive ? "active" : ""}`
                                    }
                                    onClick={onLinkClick}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="footer-social">
                    <i 
                        className="bi bi-linkedin"
                        onClick={() => window.open("https://www.linkedin.com/company/decisive-dynamics-llc", "_blank")}
                        style={{ cursor: "pointer" }}
                    />
                    <i 
                        className="bi bi-instagram"
                        onClick={() => window.open("https://www.instagram.com/decisivedynamics?igsh=eTEyejhmaG41eDJv", "_blank")}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Decisive Dynamics LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
