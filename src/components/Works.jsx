import { motion } from 'framer-motion';
import React from 'react';
import { Briefcase, Code, Globe } from 'lucide-react';

const Works = () => {
    const works = [
        {
            title: 'Enterprise ERP System',
            category: 'Software Development',
            icon: <Code size={24} />,
            desc: 'Architected a modular ERP for a Fortune 500 client, improving data flow efficiency.',
            skills: [
                { name: 'Systems Architecture', type: 'technical' },
                { name: 'Database Design', type: 'technical' },
                { name: 'React.js', type: 'tools' },
                { name: 'SQL', type: 'tools' },
                { name: 'Enterprise Software', type: 'technical' }
            ]
        },
        {
            title: 'Global Supply Chain Audit',
            category: 'Project Management',
            icon: <Briefcase size={24} />,
            desc: 'Led a cross-continental team to audit and optimize supply chain routes across 12 countries.',
            skills: [
                { name: 'Logistics Management', type: 'leadership' },
                { name: 'Risk Assessment', type: 'leadership' },
                { name: 'Operations Optimization', type: 'technical' },
                { name: 'Cross-cultural Leadership', type: 'leadership' }
            ]
        },
        {
            title: 'Digital Transformation 2.0',
            category: 'Strategic Consulting',
            icon: <Globe size={24} />,
            desc: 'Consulted on the migration of legacy systems to a modern cloud-native architecture.',
            skills: [
                { name: 'Cloud Migration', type: 'technical' },
                { name: 'Legacy Modernization', type: 'technical' },
                { name: 'Systems Integration', type: 'technical' },
                { name: 'Strategic Consulting', type: 'leadership' }
            ]
        }
    ];

    return (
        <section id="works" className="works section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Works Done
            </motion.h2>
            <div className="title-underline"></div>

            <div className="works-grid">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        className="work-card glass"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="work-header">
                            <div className="work-icon-bg">{work.icon}</div>
                            <span className="work-category">{work.category}</span>
                        </div>
                        <h3>{work.title}</h3>
                        <p>{work.desc}</p>
                        
                        <div className="skill-badges-container">
                            {work.skills.map((skill, sIdx) => (
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
                ))}
            </div>
        </section>
    );
};

export default Works;
