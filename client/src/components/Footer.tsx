import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/footer.css'

interface NavLinkItem {
    label: string;
    path: string;
}

const navLinks: NavLinkItem[] = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
];

const Footer: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (

        <footer className="custom-footer py-lg-5">
            <div className='d-flex flex-column flex-lg-row justify-content-lg-between align-items-center'>
                <div className='d-lg-flex align-items-center mt-3 mb-5 mt-lg-0 mb-lg-0'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `navbar-brand ${isActive ? 'active-brand' : 'inactive-brand'}`
                        }
                    >
                        Connor Dailey
                    </NavLink>
                    <div className='d-flex flex-column'>
                        <p>(614) 439-5529</p>
                        <p>dustin.doherty@decisivedynamics.com</p>
                    </div>
                </div>
                
                <ul className="d-flex flex-column flex-lg-row align-items-center p-0 mb-5 mb-lg-0">
                    {navLinks.map(({ label, path }, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${index === navLinks.length ? '' : 'pb-3 pb-lg-0'}`}
                        >
                            <NavLink
                                to={path}
                                className={({ isActive }) => 
                                    `nav-link me-lg-4 ${isActive ? 'active' : 'inactive'}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    <li className='nav-link'>
                        <a 
                            className='resume-link' 
                            href="/ConnorDailey-Resume(MASTER).pdf" 
                            download="ConnorDailey_Resume"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;