
import React from 'react';
import { ExternalLink, Github, Brain, TrendingUp, Smartphone, Video } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ResumeForge – An Agentic AI Application',
      description: 'Personal portfolio project featuring advanced AI-powered resume generation and optimization. Built with modern GenAI techniques for personalized career document creation.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      technologies: ['Python', 'GenAI', 'Machine Learning', 'NLP'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Brain
    },
    {
      title: 'Walmart Sales Forecasting',
      description: 'Comprehensive retail sales forecasting solution using advanced time series analysis and machine learning models to predict sales trends and optimize inventory management.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop',
      technologies: ['Python', 'Time Series', 'Forecasting', 'Retail Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: TrendingUp
    },
    {
      title: 'Vivid – App Showcase',
      description: 'Mobile application showcase platform featuring interactive demonstrations, user engagement analytics, and modern UI/UX design principles.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'UI/UX', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Smartphone
    },
    {
      title: 'Capture – Video Agency',
      description: 'Professional video agency platform with content management, client portfolio showcase, and integrated booking system for creative services.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      technologies: ['Web Development', 'CMS', 'Portfolio Management'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Video
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of data science and development projects showcasing expertise in AI, analytics, and full-stack development.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className={`group ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''} bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className={`relative ${project.featured ? 'aspect-video md:aspect-auto' : 'aspect-video'} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <project.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${project.featured ? 'md:p-8 md:flex md:flex-col md:justify-center' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
