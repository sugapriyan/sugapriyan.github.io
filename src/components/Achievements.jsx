import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: 'Best Performance Award - 2021',
            organization: 'Government of TamilNadu',
            icon: <Award className="icon-gold" />,
            desc: 'Recognized during the 2021 Independence day celebrations for outstanding work and contribution to the Government of TamilNadu during the COVID CORONA Virus outbreak.'
        },
        {
            title: 'National level Certifications',
            organization: 'Ministry of Rural Development and Panchayat Raj',
            icon: <Star className="icon-gold" />,
            desc: 'Attended many National and State level seminars and workshops conducted by the Central Government'
        },
        {
            title: 'Creator of Google Chrome Extension',
            organization: 'Google Chrome Extension',
            icon: <TrendingUp className="icon-gold" />,
            desc: 'Created several Google Chrome Extensions to help people manage their tabs more efficiently.'
        }
    ];

    return (
        <section id="achievements" className="achievements section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Achievements
            </motion.h2>
            <div className="title-underline"></div>

            <div className="achievements-grid">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="achievement-card glass"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="achievement-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <h4>{item.organization}</h4>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
