```javascript
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Teachable Machine-V3',
            date: 'Jul 2025',
            tech: ['PWA', 'TensorFlow.js', 'Workbox'],
            shortDesc: 'Reengineering Google\'s transfer learning tool into an offline-first PWA.',
            fullDesc: 'I transformed Google\'s Teachable Machine V1 into a fully functional offline-capable PWA using Workbox service workers with CacheFirst strategies. This was critical for deploying AI literacy tools in regions with unstable internet. I implemented temporal smoothing with a 10-frame confidence buffer to improve prediction stability on low-end devices.',
            coverColor: 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
            images: [
                'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
                'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
            ],
            links: { github: '#' }
        },
        {
            id: 2,
            title: 'Ganza Mwari Initiative',
            date: 'Dec 2021 – Present',
            tech: ['Social Impact', 'Leadership', 'Vocational Training'],
            shortDesc: 'Co-founded initiative combating teen dropouts due to pregnancy in Rwanda.',
            fullDesc: 'Ganza Mwari (Advanced Woman) began as a response to rising female teen dropouts post-COVID. We partnered with local government and AEGIS Trust to provide a rent-free workspace, vocational training (sewing), and financial literacy for teen mothers. This project highlighted the need for scalable, culturally aware support systems—inspiring my research into empathetic AI.',
            coverColor: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
            images: [
                'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
                'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
                'linear-gradient(135deg, #20002c 0%, #cbb4d4 100%)'
            ],
            links: { external: '#' }
        },
        {
            id: 3,
            title: 'Catlab Faculty Directory',
            date: 'Summer 2024',
            tech: ['React', 'RBAC', 'React-Query'],
            shortDesc: 'Scalable directory and attendance dashboard for Westmont College.',
            fullDesc: 'Developed a scalable user/faculty directory using modular component-driven architecture. Key features included virtualized list rendering for performance, debounced search, and Role-Based Access Control (RBAC). I also built a client-side computed attendance dashboard consuming normalized time-series data.',
            coverColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            images: [
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
                'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
            ],
            links: { github: '#' }
        },
        {
            id: 4,
            title: 'ASYV Fundraiser',
            date: 'Jan 2025',
            tech: ['Public Speaking', 'Fundraising', 'Community'],
            shortDesc: 'Speaker at NYC Gala raising $650k+ for vulnerable youth.',
            fullDesc: 'Served as a speaker at the Agahozo Shalom Youth Village annual fundraising gala in New York City. By sharing personal and organizational stories, I helped advocate for vulnerable orphans in Rwanda, contributing to a campaign that raised nearly $650,000.',
            coverColor: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            images: [
                'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                'linear-gradient(135deg, #e6b980 0%, #eacda3 100%)',
                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
            ],
            links: {}
        },
        {
            id: 5,
            title: 'Estate Settlement App',
            date: 'Nov 2024',
            tech: ['Full Stack', 'Object Oriented', 'Legal Tech'],
            shortDesc: 'Web app simplifying the complex legal process of estate settlement.',
            fullDesc: 'Collaborated with a team to build a guided workflow for settling estates. We used object-oriented principles to structure the complex legal logic into a user-friendly multi-step form, making the process accessible to non-experts.',
            coverColor: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
            images: [
                'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            ],
            links: { github: '#' }
        }
    ];

    const handleCardClick = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Projects & Initiatives</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card interactive-card"
                        onClick={() => handleCardClick(project)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === 'Enter') handleCardClick(project); }}
                    >
                        <div className="card-image" style={{ background: project.coverColor }}>
                            <span className="card-overlay-text">View Details</span>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <h3 className="card-title">{project.title}</h3>
                                <span className="card-date">{project.date}</span>
                            </div>
                            <p className="card-short-desc">{project.shortDesc}</p>
                            <ul className="card-tags">
                                {project.tech.slice(0, 3).map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>

                        {/* Carousel Header */}
                        <div className="modal-carousel">
                            {selectedProject.images.map((img, index) => (
                                <div key={index} className="carousel-slide" style={{ background: img }}>
                                    {/* In real usage, this would be <img src={img} /> */}
                                    <span className="slide-number">{index + 1} / {selectedProject.images.length}</span>
                                </div>
                            ))}
                        </div>

                        <div className="modal-body">
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <p className="modal-date">{selectedProject.date}</p>
                            <div className="modal-tags">
                                {selectedProject.tech.map((t, i) => <span key={i} className="modal-tag">{t}</span>)}
                            </div>
                            <p className="modal-desc">{selectedProject.fullDesc}</p>
                            <div className="modal-links">
                                {selectedProject.links.github && <a href={selectedProject.links.github} className="modal-link">GitHub</a>}
                                {selectedProject.links.external && <a href={selectedProject.links.external} className="modal-link primary">External Link</a>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
```
