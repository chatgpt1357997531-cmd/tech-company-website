import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__inner container">
                <div className="header__branding">
                    <NavLink
                        to="/"
                        className="header__logo"
                        aria-label={
                            '\u0634\u0631\u0643\u0629\u0020\u0627\u0644\u0646\u0647\u0636\u0629\u0020\u0644\u0644\u062d\u0644\u0648\u0644\u0020\u0627\u0644\u062a\u0642\u0646\u064a\u0629'
                        }
                    >
                        <video
                            className="header__logo-video header__logo-img"
                            src="/logo.mp4"
                            poster="/logo.svg"
                            width={64}
                            height={64}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            aria-hidden="true"
                        >
                            {'\u062c\u0647\u0627\u0632\u0643\u0020\u0644\u0627\u0020\u064a\u062f\u0639\u0645\u0020\u062a\u0634\u063a\u064a\u0644\u0020\u0627\u0644\u0641\u064a\u062f\u064a\u0869\u0020\u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627\u002e'}
                        </video>
                        <span className="header__logo-text">
                            <strong>
                                {'\u0634\u0631\u0643\u0629\u0020\u0627\u0644\u0646\u0647\u0636\u0629\u0020\u0644\u0644\u062d\u0644\u0648\u0644\u0020\u0627\u0644\u062a\u0642\u0646\u064a\u0629'}
                            </strong>
                            <small>
                                {
                                    '\u0634\u0631\u064a\u0643\u062a\u0643\u0020\u0644\u0644\u0627\u0628\u062a\u0643\u0627\u0631\u0020\u0648\u0627\u0644\u062a\u062d\u0648\u0644\u0020\u0627\u0644\u0631\u0642\u0645\u064a'
                                }
                            </small>
                        </span>
                    </NavLink>
                 
                </div>
                <button
                    className="header__menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav
                    className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}
                    aria-label={'\u0627\u0644\u062a\u0646\u0642\u0644\u0020\u0627\u0644\u0631\u0626\u064a\u0633\u064a'}
                >
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="is-active" onClick={toggleMenu}>
                                {'\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="is-active" onClick={toggleMenu}>
                                {'\u0639\u0646\u0020\u0627\u0644\u0634\u0631\u0643\u0629'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" activeClassName="is-active" onClick={toggleMenu}>
                                {'\u062e\u062f\u0645\u0627\u062a\u0646\u0627'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="is-active" onClick={toggleMenu}>
                                {'\u062a\u0648\u0627\u0635\u0644\u0020\u0645\u0639\u0646\u0627'}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
