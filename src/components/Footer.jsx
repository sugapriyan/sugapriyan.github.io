import { motion } from 'framer-motion';
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-content">
                <div className="footer-logo">
                    <span>SUGA</span>PRIYAN
                </div>
                
                <div className="footer-nav">
                    <a href="#hero" className="footer-nav-link">Profile</a>
                    <a href="#education" className="footer-nav-link">Education</a>
                    <a href="#experience" className="footer-nav-link">Experience</a>
                    <a href="#gallery" className="footer-nav-link">Gallery</a>
                    <a href="#achievements" className="footer-nav-link">Achievements</a>
                    <a href="#works" className="footer-nav-link">Works</a>
                    <a href="#contact" className="footer-nav-link">Contact</a>
                </div>

                <div className="footer-links">
                    <a 
                        href="https://www.linkedin.com/in/sugapriyan" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link" 
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a 
                        href="mailto:sugapriyan.g@gmail.com" 
                        className="social-link" 
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
                
                <p className="copyright">
                    © {new Date().getFullYear()} Sugapriyan. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
