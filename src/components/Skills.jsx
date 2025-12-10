import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'Ruby', 'SQL'] },
        { category: 'Frameworks', items: ['TensorFlow', 'React / React Native', 'Ruby on Rails', 'Expo'] },
        { category: 'Tools', items: ['Git', 'CLI Tools', 'HTML', 'CSS'] },
        { category: 'Data & Research', items: ['Quantitative Research', 'Big Data', 'Information Retrieval'] },
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skillGroup, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="skill-category-title">{skillGroup.category}</h3>
                        <ul className="skill-list">
                            {skillGroup.items.map((skill, idx) => (
                                <li key={idx} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
