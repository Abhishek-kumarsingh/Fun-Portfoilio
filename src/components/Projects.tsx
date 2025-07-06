import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Learning Management System',
      description: 'Full-stack LMS with video streaming, quizzes, and progress tracking',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      longDescription: 'A comprehensive learning management system built for educational institutions. Features include video streaming, interactive quizzes, progress tracking, and administrative dashboards.',
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Analytics', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      github: 'https://github.com',
      demo: 'https://example.com',
      longDescription: 'A scalable e-commerce platform with modern UI/UX, secure payment processing, and real-time inventory management.',
      features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Customer Analytics']
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing capabilities',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://example.com',
      longDescription: 'An AI-powered chat assistant that provides intelligent responses and can be integrated into various applications.',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'API Integration']
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      longDescription: 'A collaborative task management application that enables teams to work together efficiently with real-time updates and notifications.',
      features: ['Real-time Collaboration', 'Task Prioritization', 'Team Management', 'Progress Tracking']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-green-900/20 to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-font">
              My Projects
            </h2>
            <div className="w-32 h-2 bg-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-stone-800/90 border-4 border-stone-600 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-stone-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-600 text-white text-xs rounded border border-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-stone-300 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-stone-800 border-4 border-stone-600 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="text-stone-300 mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="text-stone-300 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600 text-white text-sm rounded border border-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-stone-700 hover:bg-stone-600 text-white px-4 py-2 rounded-lg border-2 border-stone-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg border-2 border-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;