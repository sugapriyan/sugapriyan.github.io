import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Works from './components/Works';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Gallery />
        <Achievements />
        <Works />
      </main>
      <Footer />
    </div>
  );
}

export default App;
