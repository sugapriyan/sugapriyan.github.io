import { motion } from 'framer-motion';
import React from 'react';
import { Award, Briefcase, ChevronRight } from 'lucide-react';

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
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge-dot"></span> Available for Opportunities
                    </motion.div>

                    <h1 className="hero-title">
                        Driving Innovation as a{' '}
                        <span>Senior Executive</span>
                    </h1>

                    <p className="hero-description">
                        With over 15 years of proven excellence, I specialize in transforming
                        complex challenges into scalable, world-class solutions. Driven by academic rigor
                        and strategic vision.
                    </p>

                    <div className="hero-actions">
                        <a href="#works" className="btn-primary">
                            View Portfolio <ChevronRight size={18} />
                        </a>
                        <div className="hero-stats-inline">
                            <div className="stat">
                                <span className="stat-value">15+</span>
                                <span className="stat-label">Years Exp</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <span className="stat-value">UG & PG</span>
                                <span className="stat-label">Education</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="hero-visuals">
                    <motion.div
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Glowing background blob */}
                        <div className="glow-blob"></div>

                        <div className="profile-img-container">
                            <img src="/profile.png" alt="Profile" />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="floating-card float-1 glass"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Award className="float-icon" />
                            <div>
                                <span className="float-title">Top Rated</span>
                                <span className="float-sub">Professional</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-card float-2 glass"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Briefcase className="float-icon" />
                            <div>
                                <span className="float-title">15+ Years</span>
                                <span className="float-sub">Experience</span>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
