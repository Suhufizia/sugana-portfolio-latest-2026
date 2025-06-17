
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundations of Data Science',
      issuer: 'PadhAI, IIT Madras',
      year: '2022',
      description: 'Comprehensive foundation in data science principles and applications',
      color: 'blue'
    },
    {
      title: 'Technology Consultant - CX Engage Professional',
      issuer: 'Qualtrics',
      year: '2022',
      description: 'Advanced customer experience platform management and analytics',
      color: 'teal'
    },
    {
      title: 'Agentic AI Bootcamp',
      issuer: 'Udemy',
      year: '2023',
      description: 'Specialized training in agentic AI systems and implementation',
      color: 'indigo'
    },
    {
      title: 'Google Analytics for Beginners',
      issuer: 'Google Analytics Academy',
      year: '2021',
      description: 'Web analytics fundamentals and digital marketing insights',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-blue-100 text-blue-600 border-blue-200';
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and specialized training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(cert.color)}`}>
                  <Award size={24} />
                </div>
                <span className="text-sm text-gray-500 font-medium">{cert.year}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{cert.issuer}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
