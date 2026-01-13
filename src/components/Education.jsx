import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Post Graduate (PG) Degree',
            institution: 'University of Madras',
            year: '2006 - 2009',
            details: 'Master of Computer Application with First Class.'
        },
        {
            degree: 'Under Graduate (UG) Degree',
            institution: 'University of Madras',
            year: '2003 - 2006',
            details: 'Bachelor of Computer Application.'
        }
    ];

    return (
        <section id="education" className="education section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Academic Background
            </motion.h2>
            <div className="title-underline"></div>

            <div className="education-grid">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        className="edu-card glass"
                        whileHover={{ y: -10, scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="edu-icon">
                            <GraduationCap size={32} color="#2563eb" />
                        </div>
                        <h3>{item.degree}</h3>
                        <h4>{item.institution}</h4>
                        <span className="edu-year">{item.year}</span>
                        <p>{item.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
