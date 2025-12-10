import React from 'react';
import './Education.css';

const Education = () => {
    const activities = [
        {
            organization: 'Ganza Mwali (Advanced Women)',
            role: 'Co-founder',
            date: 'Dec 2021 – Present',
            description: 'Co-founded Ganza Mwari to combat public health challenges of teen dropouts due to pregnancy post-covid. Worked with local government and AEGIS Trust to provide vocational skills training and support.'
        },
        {
            organization: 'Agahozo Shalom Youth Village',
            role: 'Fundraiser',
            date: 'Jan 2025 – Present',
            description: 'Served as a speaker at the annual ASYV New York City fundraising event. Contributed to raising nearly $650,000 at the 2025 January gala.'
        },
        {
            organization: 'Global and International Students Association',
            role: 'Co-president',
            date: 'May 2023 – May 2024',
            description: 'Led planning and execution of International Food Market attracting 300+ students. Organized International Trivia Night.'
        },
        {
            organization: 'African Students Union',
            role: 'Co-president | Co-founder',
            date: 'May 2023 – May 2024',
            description: 'Co-founded ASU to assist new African students. Organized a trip to Yale Africa Symposium II.'
        },
        {
            organization: 'ASYV Critical Thinking for Peace',
            role: 'Co-president | Co-founder',
            date: 'July 2017 – Aug 2018',
            description: 'Co-founded CTP Club to engage with community issues. Over 100 student-led community service projects have been delivered.'
        }
    ];

    return (
        <section id="education" className="section container">
            <div className="education-grid">
                <div className="edu-column">
                    <h2 className="section-title">Education</h2>
                    <div className="edu-card">
                        <h3>Westmont College</h3>
                        <p className="edu-degree">B.S Computer Science and B.S Data Analytics</p>
                        <p className="edu-date">Aug 2022 - May 2026</p>
                        <p className="edu-location">Santa Barbara, CA</p>
                    </div>

                    <h3 className="sub-title">Awards & Honors</h3>
                    <ul className="awards-list">
                        <li>Wheaton Innovation and Leadership Laboratory</li>
                        <li>Westmont College Honors Program (Augustinian Scholar)</li>
                        <li>Bridge2Rwanda Scholar</li>
                        <li>LeFrak-Friedberg Scholar</li>
                        <li>Up-to-US Leadership Network</li>
                    </ul>
                </div>

                <div className="edu-column">
                    <h2 className="section-title">Volunteering & Leadership</h2>
                    <div className="volunteering-list">
                        {activities.map((activity, index) => (
                            <div key={index} className="vol-item">
                                <h4 className="vol-role">{activity.role}</h4>
                                <div className="vol-org">{activity.organization}</div>
                                <div className="vol-date">{activity.date}</div>
                                <p className="vol-desc">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
