import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Rocket, Zap } from 'lucide-react';

const Ideas = () => {
  const [activeView, setActiveView] = useState<'creative' | 'tech'>('creative');

  const ideas = [
    {
      id: 1,
      title: 'AI-Powered Code Review',
      description: 'Intelligent code analysis with automated suggestions',
      category: 'AI/ML',
      icon: Brain,
      color: 'bg-purple-600',
      techDetails: ['Machine Learning', 'Natural Language Processing', 'Code Analysis']
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform using blockchain',
      category: 'Blockchain',
      icon: Zap,
      color: 'bg-blue-600',
      techDetails: ['Ethereum', 'Smart Contracts', 'Cryptography']
    },
    {
      id: 3,
      title: 'IoT Smart Home Hub',
      description: 'Centralized control system for smart home devices',
      category: 'IoT',
      icon: Rocket,
      color: 'bg-green-600',
      techDetails: ['IoT Protocols', 'Real-time Processing', 'Mobile App']
    },
    {
      id: 4,
      title: 'AR Learning Platform',
      description: 'Immersive educational experiences through AR',
      category: 'AR/VR',
      icon: Lightbulb,
      color: 'bg-orange-600',
      techDetails: ['WebAR', '3D Modeling', 'Interactive UI']
    }
  ];

  return (
    <section id="ideas" className="py-20 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-font">
              Innovation Lab
            </h2>
            <div className="w-32 h-2 bg-orange-400 mx-auto rounded-full mb-8"></div>
            
            <div className="flex justify-center space-x-4 mb-8">
              <motion.button
                onClick={() => setActiveView('creative')}
                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${
                  activeView === 'creative'
                    ? 'bg-orange-600 border-orange-400 text-white'
                    : 'bg-stone-700 border-stone-500 text-stone-300 hover:bg-stone-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Creative View
              </motion.button>
              <motion.button
                onClick={() => setActiveView('tech')}
                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${
                  activeView === 'tech'
                    ? 'bg-blue-600 border-blue-400 text-white'
                    : 'bg-stone-700 border-stone-500 text-stone-300 hover:bg-stone-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tech View
              </motion.button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                className={`${idea.color}/90 border-4 border-current rounded-lg p-6 text-white`}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: activeView === 'creative' ? 5 : -5
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <idea.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
                    <p className="text-white/90 mb-3">{idea.description}</p>
                    
                    {activeView === 'creative' ? (
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">
                          {idea.category}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <h4 className="font-bold text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {idea.techDetails.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-white/20 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-stone-800/90 border-4 border-stone-600 rounded-lg p-8 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4 pixel-font">
                🚀 Got an Idea?
              </h3>
              <p className="text-stone-300 mb-6">
                Let's collaborate and turn your vision into reality!
              </p>
              <motion.button
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-bold border-2 border-orange-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ideas;