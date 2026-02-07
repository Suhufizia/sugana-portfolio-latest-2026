
import React from 'react';
import { ExternalLink, Github, Brain, TrendingUp, Smartphone, Video, Bot, Search } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Agentic Intelligence Platform – PDF Agent',
      description: 'A production-grade autonomous agent platform built in Python and Streamlit. Enables intelligent PDF Q&A, document summarization, and agentic web search using Groq LLM and LangGraph. This demo showcases advanced multi-agent workflows, tool integrations, and custom streamlit UI for agentic document intelligence.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['LangGraph', 'LangChain', 'Multi-Agent Systems', 'RAG', 'Python'],
      liveUrl: 'https://sugana-agentic-intelligence-platform.streamlit.app/',
      githubUrl: 'https://github.com/Suhufizia/Agentic-Intelligence-Platform',
      featured: true,
      icon: Bot,
      agenticFeatures: ['Intelligent PDF Q&A', 'Document Summarization', 'Agentic Tool Integration', 'Streamlit UI', 'Customizable LLM Selection', 'Web Search using Tavern API']
    },
    {
      title: 'Conversational AI Chatbot',
      description: 'Experience seamless, intelligent interaction with our Conversational AI Chatbot—powered by Streamlit, LangChain, and Llama 3 via the Groq API. Delivers real-time, multi-turn, context-aware conversations in a secure, modern interface. Combines state-of-the-art NLP with robust cloud deployment for reliable, scalable, and engaging AI-driven experiences.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
      technologies: ['LangGraph', 'Multi-Agent Architecture', 'RAG', 'Vector Search', 'Task Automation'],
      liveUrl: 'https://sugana-langchain-chatbot.streamlit.app/',
      githubUrl: 'https://github.com/Suhufizia/Langchain-Chatbot',
      featured: true,
      icon: Search,
      agenticFeatures: ['Multi-turn Conversation', 'Context-Aware Responses', 'Modern Streamlit UI', 'Real-Time NLP via Groq/Llama 3']
    },
    {
      title: 'Walmart Sales Forecasting',
      description: 'Comprehensive retail sales forecasting solution enhanced with agentic components for automated data preprocessing, feature engineering, and model optimization using intelligent agent workflows.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop',
      technologies: ['Python', 'Time Series', 'Forecasting', 'Agent-Based Preprocessing', 'Retail Analytics'],
      githubUrl: 'https://github.com/Suhufizia/Store-Wise-Sales-Forecasting-for-a-Major-Retailer-in-US',
      featured: true,
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Agentic AI Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world applications of <span className="text-cyan-400 font-semibold">autonomous intelligent agents</span> showcasing expertise in LangGraph, LangChain, and multi-agent systems.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className={`group ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''} bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1`}>
              <div className={`relative ${project.featured ? 'aspect-video md:aspect-auto' : 'aspect-video'} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center">
                    <project.icon className="text-cyan-400" size={24} />
                  </div>
                </div>
                {project.agenticFeatures && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2">
                      <p className="text-cyan-300 text-xs font-semibold mb-1">Agentic Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.agenticFeatures.map((feature) => (
                          <span key={feature} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`p-6 ${project.featured ? 'md:p-8 md:flex md:flex-col md:justify-center' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        tech.includes('LangGraph') || tech.includes('LangChain') || tech.includes('Multi-Agent') || tech.includes('RAG') 
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 text-cyan-200' 
                          : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agentic AI Expertise Highlight */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Agentic AI Expertise</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Practical, hands-on experience building production-ready autonomous agents for diverse domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="text-cyan-400" size={32} />
              </div>
              <h4 className="font-semibold text-white mb-2">Multi-Agent Systems</h4>
              <p className="text-slate-400 text-sm">Orchestrated agent collaboration using LangGraph</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-400" size={32} />
              </div>
              <h4 className="font-semibold text-white mb-2">Research Automation</h4>
              <p className="text-slate-400 text-sm">Autonomous data collection and analysis agents</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-purple-400" size={32} />
              </div>
              <h4 className="font-semibold text-white mb-2">RAG Agents</h4>
              <p className="text-slate-400 text-sm">Context-aware retrieval and generation systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-indigo-400" size={32} />
              </div>
              <h4 className="font-semibold text-white mb-2">Task Planning</h4>
              <p className="text-slate-400 text-sm">Intelligent workflow decomposition and execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
