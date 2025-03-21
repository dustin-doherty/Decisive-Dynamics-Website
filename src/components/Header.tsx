import React, { memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { useNavigation } from '../contexts/NavigationContext';
import '../styles/header.css';

const Header: React.FC = () => {
    const { menuOpen, setMenuOpen } = useNavigation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            // If switching to desktop view, ensure the menu is closed.
            if (width > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setMenuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="site-header">
            <nav>
                <div className="header-container">
                    <NavLink
                        to="/"
                        className='brand'
                    >
                        Decisive Dynamics
                    </NavLink>
                    {windowWidth < 768 && (
                        <button
                            className="menu-toggle"
                            type="button"
                            onClick={handleMenuToggle}
                            aria-label="Toggle navigation"
                        >
                            {menuOpen ? '✖' : '☰'}
                        </button>
                    )}
                    {windowWidth >= 768 && (
                        <div className="nav-menu">
                            <Navigation onLinkClick={handleLinkClick} />
                        </div>
                    )}
                </div>
            </nav>
            {windowWidth < 768 && menuOpen && (
                <div className="nav-menu overlay">
                    <Navigation onLinkClick={handleLinkClick} />
                </div>
            )}
        </header>
    );
};

export default memo(Header);
