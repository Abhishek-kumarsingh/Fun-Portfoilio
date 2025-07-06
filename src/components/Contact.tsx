import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-900/20 to-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-font">
              FUTURE QUESTS
            </h2>
            <div className="w-32 h-2 bg-cyan-400 mx-auto rounded-full mb-8"></div>
            
            <div className="bg-black/80 border-4 border-green-400 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <div className="text-green-400 font-mono text-left">
                <div className="mb-2">
                  <span className="text-yellow-400">system@career</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~/goals</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-400">cat aspirations.txt</span>
                </div>
                <div className="text-white space-y-2">
                  <div>► Build intelligent systems that solve real problems</div>
                  <div>► Join elite development teams creating cutting-edge solutions</div>
                  <div>► Contribute to open-source projects that impact millions</div>
                  <div>► Mentor next generation of developers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-stone-800/90 border-4 border-stone-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 pixel-font">
                  Join My Guild
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-300 mb-2">
                      Player Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-stone-700 border-2 border-stone-500 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-stone-300 mb-2">
                      Communication Portal
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-stone-700 border-2 border-stone-500 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-stone-300 mb-2">
                      Quest Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-stone-700 border-2 border-stone-500 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold border-2 border-cyan-400 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-purple-900/90 border-4 border-purple-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 pixel-font">
                  Connect with Me
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:abhishek@example.com"
                    className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail size={20} />
                    <span>abhishek@example.com</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={20} />
                    <span>GitHub Profile</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Twitter size={20} />
                    <span>Twitter/X</span>
                  </motion.a>
                </div>
              </div>

              <div className="bg-green-900/90 border-4 border-green-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 pixel-font">
                  Download Assets
                </h3>
                <div className="space-y-4">
                  <motion.button
                    className="w-full bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold border-2 border-green-400 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>📄</span>
                    <span>Download CV</span>
                  </motion.button>
                  <motion.button
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold border-2 border-blue-400 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>📁</span>
                    <span>Portfolio PDF</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;