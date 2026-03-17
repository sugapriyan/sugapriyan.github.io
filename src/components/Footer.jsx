import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-content">
                <div className="footer-logo">
                    <span>MY</span>PORTFOLIO
                </div>
                
                <div className="footer-nav">
                    <a href="#home" className="footer-nav-link">Home</a>
                    <a href="#about" className="footer-nav-link">About</a>
                    <a href="#experience" className="footer-nav-link">Experience</a>
                    <a href="#projects" className="footer-nav-link">Projects</a>
                </div>

                <div className="footer-links">
                    <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="#" className="social-link" aria-label="GitHub"><Github size={20} /></a>
                    <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
                    <a href="#" className="social-link" aria-label="Email"><Mail size={20} /></a>
                </div>
                
                <p className="copyright">
                    © {new Date().getFullYear()} Professional Portfolio. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
