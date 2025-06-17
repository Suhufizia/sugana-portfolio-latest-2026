
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Data Science and Analytics',
      institution: 'Mount Carmel College',
      period: '2019 - 2022',
      description: 'Comprehensive program covering statistical analysis, machine learning, data mining, and business intelligence.',
      color: 'cyan'
    },
    {
      degree: 'Bachelor in Electronics',
      institution: 'Jyoti Nivas College',
      period: '2017 - 2019',
      description: 'Foundation in electronics and engineering principles, providing technical background for data science applications.',
      color: 'blue'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Academic foundation in data science, analytics, and engineering that supports my professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${edu.color === 'cyan' ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-blue-500/20 border border-blue-500/30'}`}>
                  <GraduationCap className={`${edu.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`} size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className={`flex items-center text-sm font-medium ${edu.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}>
                    <Calendar size={16} className="mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-slate-200 mb-3">{edu.institution}</h4>
              <p className="text-slate-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
