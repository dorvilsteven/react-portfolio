import React from 'react';
import headerProfile from '../pictures/profile-small.jpg';
import './hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="title">
                <h1 className="header-hero-title">Steven Dorvil</h1>
                <p>Front-End, Back-End, Full-Stack</p>
            </div>
            <div className="header-image">
                <img src={headerProfile} alt="header profile" />
            </div>
        </section>
    );
}

export default Hero;