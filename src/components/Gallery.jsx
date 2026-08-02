import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { src: '/gallery1.png', alt: 'Professional Workspace', title: 'Professional Workspace' },
        { src: '/gallery2.png', alt: 'Conference Hall', title: 'National Seminar' },
        { src: '/gallery2.png', alt: 'Government Event', title: 'Government Recognition' },
        { src: '/profile.png', alt: 'Sugapriyan Executive Photo', title: 'Executive Leadership' },
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.05 }}
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
                        viewport={{ once: true, amount: 0.05 }}
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
