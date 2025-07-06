import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Abhishek – Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-black/80 border-4 border-green-400 rounded-lg p-6 mb-8 font-mono">
              <div className="text-green-400 text-left">
                <div className="mb-2">
                  <span className="text-yellow-400">abhishek@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">echo</span>
                </div>
                <div className="text-2xl md:text-4xl font-bold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-amber-900/90 border-4 border-amber-600 rounded-lg p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                🎮 Welcome to My Digital World
              </h2>
              <p className="text-amber-100 text-lg leading-relaxed">
                I craft intelligent systems, build scalable applications, and turn complex problems 
                into elegant solutions. Ready to explore my creations?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg border-4 border-green-400 transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg border-4 border-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;