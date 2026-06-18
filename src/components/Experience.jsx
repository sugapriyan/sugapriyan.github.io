import { motion } from 'framer-motion';
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Muthu Soft Labs Pvt Ltd',
            role: 'Project Relationship Manager',
            period: '2023 - Present',
            description: 'Managing project execution for Banking and various Government initiatives with focus on security, compliance and reliability.',
            skills: [
                { name: 'Stakeholder Management', type: 'leadership' },
                { name: 'Risk & Compliance', type: 'leadership' },
                { name: 'Client & Vendor Relations', type: 'leadership' },
                { name: 'Agile/Scrum', type: 'leadership' },
                { name: 'Banking IT', type: 'technical' }
            ]
        },
        {
            company: 'NIC (Rural Development & Panchayat Raj Department)',
            role: 'State Project Manager',
            period: '2017 - 2023',
            description: 'Co-ordinated and implemented various new projects in the State Rural Development Department.',
            skills: [
                { name: 'E-Governance', type: 'technical' },
                { name: 'Project Coordination', type: 'leadership' },
                { name: 'Budget & Resource Management', type: 'leadership' },
                { name: 'Government IT Systems', type: 'technical' },
                { name: 'Cross-functional Leadership', type: 'leadership' }
            ]
        },
        {
            company: 'NIC (Rural Development & Panchayat Raj Department)',
            role: 'Assistant Programmer',
            period: '2012 - 2017',
            description: 'Started the journey in professional excellence, focusing on technical implementation and client satisfaction.',
            skills: [
                { name: 'Software Development', type: 'technical' },
                { name: 'SQL Databases', type: 'tools' },
                { name: 'System Integration', type: 'technical' },
                { name: 'Technical Documentation', type: 'tools' }
            ]
        }
    ];

    return (
        <section id="experience" className="experience section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Career Journey (2009 – Present)
            </motion.h2>
            <div className="title-underline"></div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <motion.div
                            className={`timeline-content glass ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="period">{exp.period}</span>
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                            
                            <div className="skill-badges-container">
                                {exp.skills.map((skill, sIdx) => (
                                    <motion.span 
                                        key={sIdx} 
                                        className={`skill-badge ${skill.type}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: (index * 0.1) + (sIdx * 0.05) }}
                                        viewport={{ once: true }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
