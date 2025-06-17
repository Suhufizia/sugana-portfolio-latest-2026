
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark theme background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating data visualization elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium mb-6 animate-glow">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for Work
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sri Sugana H
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mb-2">
            Agentic AI Data Scientist
          </h2>

          <div className="flex items-center justify-center text-slate-400 mb-6">
            <MapPin size={20} className="mr-2 text-cyan-400" />
            <span className="text-lg">Bangalore, India</span>
          </div>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Specializing in autonomous intelligent agents with <span className="text-cyan-400 font-semibold">LangGraph & LangChain</span> for real-world applications
          </p>
          
          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
            Building multi-agent systems, RAG agents, and task automation bots for search, research, and customer support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="/cv.pdf" 
              download
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 animate-glow"
            >
              <Download size={20} />
              Download CV
            </a>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:srisuhana19935@gmail.com" 
               className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all duration-300 group">
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/suhufizia" target="_blank" rel="noopener noreferrer" 
               className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all duration-300 group">
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/srisugana" target="_blank" rel="noopener noreferrer"
               className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all duration-300 group">
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('#about')} className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
