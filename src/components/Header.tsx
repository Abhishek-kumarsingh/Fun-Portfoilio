import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Lightbulb, Mail, Award } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { icon: Home, label: 'Home', id: 'hero' },
    { icon: User, label: 'About', id: 'about' },
    { icon: Award, label: 'Skills', id: 'skills' },
    { icon: Code, label: 'Projects', id: 'projects' },
    { icon: Lightbulb, label: 'Ideas', id: 'ideas' },
    { icon: Mail, label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-900/95 backdrop-blur-md shadow-lg border-b-4 border-amber-600' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-white pixel-font"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-400">ABHISHEK</span>
            <span className="text-amber-400">.DEV</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-stone-600 hover:bg-stone-500 text-white transition-colors border-2 border-stone-400 hover:border-stone-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              className="w-8 h-8 bg-stone-600 border-2 border-stone-400 rounded"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-full h-full bg-stone-400 rounded-sm"></div>
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;