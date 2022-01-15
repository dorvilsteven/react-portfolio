import React from 'react';
import './nav.css';

function Nav() {
    return (
        <nav>
            <div className="nav-left">
                <img src="https://via.placeholder.com/75x25" alt="logo" />
            </div>
            <div className="nav-right">
                <button id="menu-bars">
                    <i className="fas fa-bars"></i>
                </button>
                <ul id="nav-menu">
                    <li className="exit-button">
                        <button id="exit">
                        <i className="fas fa-times"></i>
                        </button>
                    </li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Porfolio</a></li>
                    <li><a href="/">Connect</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;