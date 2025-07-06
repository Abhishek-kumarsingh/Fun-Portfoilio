import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Cloud } from 'lucide-react';

const About = () => {
  const techStack = [
    { icon: Code, label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind'] },
    { icon: Database, label: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: Cloud, label: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes'] },
    { icon: Terminal, label: 'Tools', items: ['Git', 'VS Code', 'Linux'] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-amber-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-font">
              About Me
            </h2>
            <div className="w-32 h-2 bg-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-stone-800/90 border-4 border-stone-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-4 pixel-font">
                  My Journey
                </h3>
                <p className="text-stone-200 leading-relaxed mb-6">
                  I'm a passionate full-stack developer who loves building innovative solutions. 
                  My journey began with curiosity about how things work, and evolved into a 
                  career crafting digital experiences that make a difference.
                </p>
                <p className="text-stone-200 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or playing strategy games that challenge my 
                  problem-solving skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    className="bg-amber-900/90 border-4 border-amber-600 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <tech.icon size={32} className="mx-auto mb-3 text-amber-200" />
                    <h4 className="font-bold text-amber-200 mb-2">{tech.label}</h4>
                    <div className="space-y-1">
                      {tech.items.map((item) => (
                        <div key={item} className="text-sm text-amber-100 bg-amber-800/50 px-2 py-1 rounded">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;