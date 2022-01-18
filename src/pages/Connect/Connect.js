import React from "react";
import './connect.css';

const Connect = () => {
    return (
        <section id="connect">
            <div className="connect-title">
                <h3>Connect With Me</h3>
            </div>
            <div className="connect-icons">
                <a href="https://github.com/dorvilsteven" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/steven-dorvil/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/Steve36O" target="_blank">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://www.instagram.com/_steve360/" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </section>
    );
}

export default Connect;