import React from 'react';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="footer-content">
                <div className="footer-logo">
                    <span>MY</span>PORTFOLIO
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Professional Portfolio. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
