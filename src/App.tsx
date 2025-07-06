import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Ideas from './components/Ideas';
import Contact from './components/Contact';
import MinecraftBackground from './components/MinecraftBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-200 to-green-200 overflow-x-hidden">
      <MinecraftBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Ideas />
        <Contact />
      </div>
    </div>
  );
}

export default App;