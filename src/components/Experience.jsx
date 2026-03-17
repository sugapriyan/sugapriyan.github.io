import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Muthu Soft Labs Pvt Ltd',
            role: 'Project Relationship Manager',
            period: '2023 - Present',
            description: 'Managing project execution for Banking and various Government initiatives with focus on security, compliance and reliability.'
        },
        {
            company: 'NIC (Rural Development & Panchayat Raj Department)',
            role: 'State Project Manager',
            period: '2017 - 2023',
            description: 'Co-ordinated and implemented various new projects in the State Rural Development Department.'
        },
        {
            company: 'NIC (Rural Development & Panchayat Raj Department)',
            role: 'Assistant Programmer',
            period: '2012 - 2017',
            description: 'Started the journey in professional excellence, focusing on technical implementation and client satisfaction.'
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
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
