
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundations of Data Science',
      issuer: 'PadhAI, IIT Madras',
      year: '2022',
      description: 'Comprehensive foundation in data science principles and applications',
      color: 'cyan'
    },
    {
      title: 'Technology Consultant - CX Engage Professional',
      issuer: 'Qualtrics',
      year: '2022',
      description: 'Advanced customer experience platform management and analytics',
      color: 'blue'
    },
    {
      title: 'Agentic AI Bootcamp',
      issuer: 'Udemy',
      year: '2023',
      description: 'Specialized training in agentic AI systems and implementation',
      color: 'purple'
    },
    {
      title: 'Google Analytics for Beginners',
      issuer: 'Google Analytics Academy',
      year: '2021',
      description: 'Web analytics fundamentals and digital marketing insights',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and specialized training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${getColorClasses(cert.color)}`}>
                  <Award size={24} />
                </div>
                <span className="text-sm text-slate-400 font-medium">{cert.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <h4 className="text-lg font-semibold text-slate-200 mb-3">{cert.issuer}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
