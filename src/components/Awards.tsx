
import React from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Deloitte Promotions FY26',
      subtitle: 'Associate to Analyst',
      description: 'Recognized for exceptional performance and leadership in data science projects, earning promotion ahead of schedule.',
      icon: TrendingUp,
      color: 'blue',
      year: '2026'
    },
    {
      title: 'Deloitte Awards FY25',
      subtitle: 'Applause Recognition',
      description: 'Awarded for outstanding contributions to client projects and innovative solutions in GenAI implementation.',
      icon: Star,
      color: 'teal',
      year: '2025'
    },
    {
      title: 'Deloitte Awards FY24',
      subtitle: 'Applause Recognition',
      description: 'Recognized for excellence in analytics delivery and exceptional client satisfaction in CX/EX survey projects.',
      icon: Trophy,
      color: 'indigo',
      year: '2024'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 text-blue-600 border-blue-200',
      teal: 'from-teal-50 to-teal-100 text-teal-600 border-teal-200',
      indigo: 'from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-blue-50 to-blue-100 text-blue-600 border-blue-200';
  };

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional achievements and recognition for excellence in data science, analytics, and client delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${getColorClasses(award.color)} rounded-full text-sm font-medium`}>
                {award.year}
              </div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(award.color)} rounded-full flex items-center justify-center mb-6`}>
                <award.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{award.subtitle}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
