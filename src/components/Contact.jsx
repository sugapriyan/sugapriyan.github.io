import { motion } from 'framer-motion';
import React from 'react';
import { Mail, Linkedin, FileText, Send, ExternalLink, Download } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                Get In Touch
            </motion.h2>
            <div className="title-underline"></div>

            <motion.p
                className="contact-subtitle"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                Open for high-impact leadership roles, project relationship management, and strategic IT initiatives.
            </motion.p>

            <div className="contact-grid">
                {/* Email Card */}
                <motion.div
                    className="contact-card glass"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="contact-icon-bg">
                        <Mail size={28} className="contact-icon" />
                    </div>
                    <h3>Direct Email</h3>
                    <p>sugapriyan.g@gmail.com</p>
                    <a
                        href="mailto:sugapriyan.g@gmail.com"
                        className="contact-btn btn-email"
                    >
                        Send Email <Send size={16} />
                    </a>
                </motion.div>

                {/* LinkedIn Card */}
                <motion.div
                    className="contact-card glass"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="contact-icon-bg">
                        <Linkedin size={28} className="contact-icon" />
                    </div>
                    <h3>LinkedIn Profile</h3>
                    <p>Connect professionally & view recommendations</p>
                    <a
                        href="https://www.linkedin.com/in/sugapriyan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn btn-linkedin"
                    >
                        View Profile <ExternalLink size={16} />
                    </a>
                </motion.div>

                {/* Resume Download Card */}
                <motion.div
                    className="contact-card glass"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="contact-icon-bg">
                        <FileText size={28} className="contact-icon" />
                    </div>
                    <h3>Curriculum Vitae</h3>
                    <p>Comprehensive overview of experience & milestones</p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn btn-resume"
                    >
                        Download Resume <Download size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
