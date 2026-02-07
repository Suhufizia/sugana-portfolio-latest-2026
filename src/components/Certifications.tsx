import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Gen AI Leader',
      issuer: 'Google Certified',
      year: '2025',
      description: 'Credential demonstrating GenAI leadership fundamentals, value framing, and responsible adoption.',
      tags: ['GenAI', 'Strategy', 'Responsible AI'],
      color: 'cyan'
    },
    {
      title: 'Complete Agentic AI Bootcamp (LangGraph & LangChain)',
      issuer: 'Udemy',
      year: '2025',
      description: 'Practical training in agentic workflows, tool-use patterns, and multi-step orchestration.',
      tags: ['Agentic AI', 'LangGraph', 'LangChain'],
      color: 'purple'
    },
    {
      title: 'Foundations of Data Science',
      issuer: 'PadhAI, IIT Madras',
      year: '2023',
      description: 'Strong grounding in data science concepts including statistics, modeling, and applied problem-solving.',
      tags: ['Data Science', 'Statistics', 'Machine Learning'],
      color: 'blue'
    },
    {
      title: 'Qualtrics EX Consultant',
      issuer: 'Qualtrics Partner Academy',
      year: '2024',
      description: 'Expertise in employee experience (EX) program setup, survey design, and insights reporting.',
      tags: ['Qualtrics', 'EX', 'Analytics'],
      color: 'teal'
    },
    {
      title: 'The Complete SAP Analytics Cloud Course',
      issuer: 'Udemy',
      year: '2022',
      description: 'Hands-on capability in SAP Analytics Cloud for dashboards, planning, and reporting workflows.',
      tags: ['SAP', 'BI', 'Dashboards'],
      color: 'indigo'
    },
    {
      title: 'Google Analytics for Beginners',
      issuer: 'Google Analytics Academy',
      year: '2022',
      description: 'Foundation in web analytics measurement, reporting, and insight generation for digital experiences.',
      tags: ['Web Analytics', 'Measurement', 'Reporting'],
      color: 'slate'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
      blue: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
      teal: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
      purple: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
      indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
      slate: 'bg-slate-500/10 text-slate-200 border-slate-500/20'
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${cert.issuer}-${index}`}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${getColorClasses(cert.color)}`}>
                  <Award size={22} />
                </div>
                <span className="text-sm text-slate-400 font-medium">{cert.year || '—'}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <h4 className="text-lg font-semibold text-slate-200 mb-3">{cert.issuer}</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {(cert.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border ${getColorClasses(cert.color)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
