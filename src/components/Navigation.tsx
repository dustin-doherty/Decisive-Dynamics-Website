import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
    label: string;
    path: string;
}

interface NavigationProps {
    onLinkClick: () => void;
}

const navLinks: NavLinkItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
    return (
        <ul className="nav-list">
            {navLinks.map(({ label, path }, index) => (
                <li key={index} className="nav-item">
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={onLinkClick}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default memo(Navigation);

