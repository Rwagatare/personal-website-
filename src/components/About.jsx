import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => {
            if (revealRef.current) observer.unobserve(revealRef.current);
        };
    }, []);

    return (
        <section id="about" className="section container about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content" ref={revealRef}>
                <div className="about-text">
                    <p className="lead-text">
                        I dream of a future where technology begins and ends with us.
                    </p>
                    <p>
                        My journey into technology didn't start with code—it started in a small room in Rwamagana, Rwanda.
                        Through the <strong>Ganza Mwari Initiative</strong>, I saw firsthand how human-led interventions, while powerful,
                        often struggle to scale to meet the depth of need in our communities.
                    </p>
                    <p>
                        This realization sparked a question that drives my work today:
                        <em>Could AI companions designed with cultural awareness and empathy extend the support we try to provide?</em>
                    </p>
                    <p>
                        Today, I bridge the gap between high-performance engineering and social impact. From building
                        <strong>offline-first AI tools</strong> at MIT Media Lab to developing scalable
                        <strong>data infrastructure</strong> at CATLAB, I aim to leverage technical tools to tackle social problems
                        in high-volume contexts. My goal is to design technologies that walk beside the communities they serve.
                    </p>
                </div>
                <div className="about-image-wrapper">
                    {/* Placeholder for a profile image, can add later if user provides one */}
                    <div className="about-image-placeholder">
                        <span>LR</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
