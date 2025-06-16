
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer crafting digital experiences that make a difference
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com"
               className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('#about')} className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
