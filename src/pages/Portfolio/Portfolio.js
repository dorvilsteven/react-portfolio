import React from "react";
import './portfolio.css';
import mainWork from '../../components/pictures/kitchensinkchef.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <section class="portfolio-title">
                <h2>Portfolio Works</h2>
            </section>
            <section class="portfolio-works">
                <article class="active-work">
                <div class="active-work-image">
                    <a href="https://dorvilsteven.github.io/kitchen-sink-chef/" target="_blank">
                    <img src={mainWork} alt="Kitchen sink chef image" />
                    </a>
                </div>
                <div class="active-work-text">
                    <h4>Most Recent Work:</h4>
                    <span class="work-title">Kitchen Sink Chef</span>
                </div>
                </article>
                <section class="side-works">
                <a href="http://smagums.herokuapp.com/" class="work smagums" target="_blank"></a>
                <a href="https://dorvilsteven.github.io/run-buddy/" class="work run-buddy" target="_blank"></a>
                <a href="https://dorvilsteven.github.io/weather-app/" class="work weather-app" target="_blank"></a>
                <a href="https://dorvilsteven.github.io/work-day-scheduler/" class="work workday" target="_blank"></a>
                <a href="https://dorvilsteven.github.io/javascript-quiz-app/" class="work quiz" target="_blank"></a>
                <a href="https://tech-blog-mvc-steven-dorvil.herokuapp.com/" class="work tech-blog" target="_blank"></a>
                </section>
            </section>
        </section>
    );
}

export default Portfolio;