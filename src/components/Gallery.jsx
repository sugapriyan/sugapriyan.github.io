import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { src: '/gallery1.png', alt: 'Modern Office', title: 'Professional Workspace' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'Global Summits' },
        { src: '/profile.png', alt: 'Portrait', title: 'Executive Presence' },
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Photo Highlights
            </motion.h2>
            <div className="title-underline"></div>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="gallery-item"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="gallery-img-wrapper">
                            <img src={img.src} alt={img.alt} />
                            <div className="gallery-overlay">
                                <span>{img.title}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
