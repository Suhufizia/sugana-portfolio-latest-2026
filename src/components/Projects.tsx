
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and featuring smooth animations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className={`group ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''} bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300`}>
              <div className={`relative ${project.featured ? 'aspect-video md:aspect-auto' : 'aspect-video'} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className={`p-6 ${project.featured ? 'md:p-8 md:flex md:flex-col md:justify-center' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200"
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
