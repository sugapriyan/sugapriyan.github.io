import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Globe } from 'lucide-react';

const Works = () => {
    const works = [
        {
            title: 'Enterprise ERP System',
            category: 'Software Development',
            icon: <Code size={24} />,
            desc: 'Architected a modular ERP for a Fortune 500 client, improving data flow efficiency.'
        },
        {
            title: 'Global Supply Chain Audit',
            category: 'Project Management',
            icon: <Briefcase size={24} />,
            desc: 'Led a cross-continental team to audit and optimize supply chain routes across 12 countries.'
        },
        {
            title: 'Digital Transformation 2.0',
            category: 'Strategic Consulting',
            icon: <Globe size={24} />,
            desc: 'Consulted on the migration of legacy systems to a modern cloud-native architecture.'
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Works;
