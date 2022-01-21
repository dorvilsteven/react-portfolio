import React from "react";
import './portfolio.css';
import mainWork from '../../components/pictures/kitchensinkchef.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <section className="portfolio-title">
                <h2>Portfolio Works</h2>
            </section>
            <section className="portfolio-works">
                <article className="active-work">
                <div className="active-work-image">
                    <a href="https://dorvilsteven.github.io/kitchen-sink-chef/" target="_blank">
                    <img src={mainWork} alt="Kitchen sink chef image" />
                    </a>
                </div>
                <div className="active-work-text">
                    <h4>Most Recent Work:</h4>
                    <span className="work-title">Kitchen Sink Chef</span>
                </div>
                </article>
                <section className="side-works">
                    <a href="https://shmovies.herokuapp.com/" className="work shmovies" target="_blank"></a>
                    <a href="http://smagums.herokuapp.com/" className="work smagums" target="_blank"></a>
                    <a href="https://dorvilsteven.github.io/run-buddy/" className="work run-buddy" target="_blank"></a>
                    <a href="https://dorvilsteven.github.io/weather-app/" className="work weather-app" target="_blank"></a>
                    <a href="https://dorvilsteven.github.io/work-day-scheduler/" className="work workday" target="_blank"></a>
                    <a href="https://dorvilsteven.github.io/javascript-quiz-app/" className="work quiz" target="_blank"></a>
                    <a href="https://tech-blog-mvc-steven-dorvil.herokuapp.com/" className="work tech-blog" target="_blank"></a>
                </section>
            </section>
        </section>
    );
}

export default Portfolio;