import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <h1 className="hero-greeting">Hi, my name is</h1>
                <h2 className="hero-name">Livingstone Rwagatare.</h2>
                <h3 className="hero-subtitle">Embedding Empathy into Algorithms.</h3>
                <p className="hero-description">
                    I build scalable, human-centered technology to solve global challenges.
                    From developing offline-first AI for <span className="highlight">MIT Media Lab</span> to
                    optimizing data infrastructure, I design systems that walk beside the communities they serve.
                </p>
                <a href="mailto:lrwagatare@westmont.edu" className="cta-button">
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;
