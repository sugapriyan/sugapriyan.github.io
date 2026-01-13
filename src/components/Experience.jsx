import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Current Organization',
            role: 'Senior Lead / Principal Specialist',
            period: '2019 - Present',
            description: 'Leading global teams to deliver mission-critical infrastructure and software solutions.'
        },
        {
            company: 'Mid-Career Venture',
            role: 'Senior Project Manager',
            period: '2014 - 2019',
            description: 'Scaled operations by 40% and implemented lean methodologies across the department.'
        },
        {
            company: 'Early Career Growth',
            role: 'System Analyst',
            period: '2009 - 2014',
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
