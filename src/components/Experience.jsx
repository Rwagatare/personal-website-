import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const jobs = [
        {
            company: 'Day of AI',
            role: 'Software Engineering Intern',
            period: 'July 2025 – Aug 2025',
            location: 'Cambridge, MA',
            description: [
                'Spearheaded the development and launch of an AI chatbot (AI not AI bot, Teachable Machine Bot, and Module Review Bot) tutoring system for a nationwide AI literacy program in Rwanda.',
                'Facilitated deep learning for over 80 educators through interactive, session (avg. 10-minute session per user).'
            ]
        },
        {
            company: 'Center For Applied Technology Lab (CATLAB)',
            role: 'Summer Intern (Mobile Developer)',
            period: 'May 2024 – Aug 2024',
            location: 'Santa Barbara, CA',
            description: [
                'Developed a scalable user/faculty directory using component driven architecture with virtualized list rendering, debounced search queries, and a clean API abstraction layer.',
                'Built an attendance dashboard that consumes normalized time-series data via a dedicated API layer and performs a client-side computation of attendance matrix.',
                'Optimized data fetching using Role-Based access control (RBAC) leveraging react-query.'
            ]
        },
        {
            company: 'Westmont College',
            role: 'Academic Technology Technician',
            period: 'Aug 2022 – Present',
            location: 'Santa Barbara, CA',
            description: [
                'Supports diverse user populations (i.e 1200+ Student, and Faculty) for effective utilization of AV technologies for teaching, learning, and event context.',
                'Troubleshoots and maintains classroom technology infrastructure, diagnosing hardware and software issues to ensure smooth user experience.'
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Where I've Worked</h2>
            <div className="experience-inner">
                <div className="experience-tabs">
                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {job.company.split(' ')[0]} {/* Simplified name for tab */}
                        </button>
                    ))}
                </div>
                <div className="experience-content">
                    <div className="job-header">
                        <h3>
                            {jobs[activeTab].role} <span className="company">@ {jobs[activeTab].company}</span>
                        </h3>
                        <p className="job-period">{jobs[activeTab].period}</p>
                    </div>
                    <ul className="job-description">
                        {jobs[activeTab].description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
