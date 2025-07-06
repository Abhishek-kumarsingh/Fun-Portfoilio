import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React/TypeScript', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 90, color: 'bg-green-500' },
    { name: 'Python/Django', level: 85, color: 'bg-yellow-500' },
    { name: 'PostgreSQL/MongoDB', level: 80, color: 'bg-purple-500' },
    { name: 'AWS/Docker', level: 75, color: 'bg-orange-500' },
    { name: 'UI/UX Design', level: 70, color: 'bg-pink-500' }
  ];

  const achievements = [
    { icon: Trophy, title: 'Built LMS Platform', desc: 'Full-stack learning management system' },
    { icon: Star, title: 'Open Source Contributor', desc: 'Active in React community' },
    { icon: Zap, title: 'Performance Optimizer', desc: 'Improved app speed by 40%' },
    { icon: Target, title: 'Problem Solver', desc: 'Complex algorithms specialist' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-amber-900/20 to-green-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-font">
              Skills & Achievements
            </h2>
            <div className="w-32 h-2 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-stone-800/90 border-4 border-stone-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-8 pixel-font flex items-center">
                  <Zap className="mr-3" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-stone-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-stone-700 rounded-full h-6 border-2 border-stone-500 overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} flex items-center justify-center`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        >
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-900/90 border-4 border-green-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-8 pixel-font flex items-center">
                  <Trophy className="mr-3" />
                  Achievements Unlocked
                </h3>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      className="flex items-start space-x-4 bg-green-800/50 border-2 border-green-600 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-green-400 p-2 rounded-lg">
                        <achievement.icon size={24} className="text-green-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-200 mb-1">{achievement.title}</h4>
                        <p className="text-green-300 text-sm">{achievement.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;