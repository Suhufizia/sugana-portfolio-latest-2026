
import React from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Deloitte Promotions FY26',
      subtitle: 'Associate to Analyst',
      description: 'Recognized for exceptional performance and leadership in data science projects, earning promotion ahead of schedule.',
      icon: TrendingUp,
      color: 'cyan',
      year: '2026'
    },
    {
      title: 'Deloitte Awards FY25',
      subtitle: 'Applause Recognition',
      description: 'Awarded for outstanding contributions to client projects and innovative solutions in GenAI implementation.',
      icon: Star,
      color: 'blue',
      year: '2025'
    },
    {
      title: 'Deloitte Awards FY24',
      subtitle: 'Applause Recognition',
      description: 'Recognized for excellence in analytics delivery and exceptional client satisfaction in CX/EX survey projects.',
      icon: Trophy,
      color: 'purple',
      year: '2024'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30',
      blue: 'from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30',
      purple: 'from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30';
  };

  return (
    <section id="awards" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Awards & Recognition</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional achievements and recognition for excellence in data science, analytics, and client delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r border rounded-full text-sm font-medium ${getColorClasses(award.color)}`}>
                {award.year}
              </div>
              
              <div className={`w-16 h-16 bg-gradient-to-r border rounded-full flex items-center justify-center mb-6 ${getColorClasses(award.color)}`}>
                <award.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <h4 className="text-lg font-semibold text-slate-200 mb-3">{award.subtitle}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
