import React from 'react';
import './nav.css';

function Nav(props) {
    const {
        setBioSelected,
        setPortfolioSelected,
        setConnectSelected
    } = props;

    const navMenu = document.querySelector("#nav-menu");
    const navButton = document.querySelector("#menu-bars");

    function showMenu() {
        navMenu.style.display = "flex";
        navButton.style.display = "none"
    }

    function hideMenu() {
        navMenu.style.display = "";
        navButton.style.display = "";
    }

    return (
        <nav>
            <div className="nav-left">
                <img src="https://via.placeholder.com/75x25" alt="logo" />
            </div>
            <div className="nav-right">
                <button id="menu-bars" onClick={showMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul id="nav-menu">
                    <li className="exit-button">
                        <button id="exit" onClick={hideMenu}>
                            <i className="fas fa-times"></i>
                        </button>
                    </li>
                    <li>
                        <a 
                            href="#bio"
                            onClick={() => {
                                setBioSelected(true);
                                setPortfolioSelected(false);
                                setConnectSelected(false);
                            }}
                        >About</a>
                    </li>
                    <li>
                        <a 
                            href="#portfolio"
                            onClick={() => {
                                setBioSelected(false);
                                setPortfolioSelected(true);
                                setConnectSelected(false);
                            }}
                        >Porfolio</a>
                    </li>
                    <li>
                        <a 
                            href="#connect"
                            onClick={() => {
                                setBioSelected(false);
                                setPortfolioSelected(false);
                                setConnectSelected(true);
                            }}
                        >Connect</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;