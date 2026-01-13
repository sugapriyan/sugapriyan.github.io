import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="hero section-padding">
            <div className="hero-container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="hero-title">Professional Profile</h1>
                    <div className="title-underline"></div>
                    <p className="hero-description">
                        Senior Professional with over 15 years of experience in excellence.
                        Driven by innovation and academic rigor, I specialize in delivering
                        world-class solutions and leading transformative projects.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">Years Exp</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">UG & PG</span>
                            <span className="stat-label">Education</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="profile-img-container">
                        <img src="/profile.png" alt="Profile" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
