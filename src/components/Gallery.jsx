import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { src: '/gallery1.png', alt: 'Modern Office', title: 'Professional Workspace' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'Global Summits' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'National Seminor1' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'National Seminor1' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'Government Award' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'National Seminor1' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'National Seminor1' },
        { src: '/profile.png', alt: 'Portrait', title: 'Executive Presence' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'Global Summits' },
        { src: '/profile.png', alt: 'Portrait', title: 'Executive Presence' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'Global Summits' },
        { src: '/profile.png', alt: 'Portrait', title: 'Executive Presence' },
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

            <div className="gallery-masonry">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="gallery-item"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImg(img)}
                    >
                        <img src={img.src} alt={img.alt} />
                        <div className="gallery-overlay">
                            <span>{img.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={() => setSelectedImg(null)} aria-label="Close Lightbox">
                                <X size={24} />
                            </button>
                            <img src={selectedImg.src} alt={selectedImg.alt} />
                            <h3>{selectedImg.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
