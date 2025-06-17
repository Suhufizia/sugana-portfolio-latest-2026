
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Analytics',
      skills: [
        { name: 'Python (GenAI)', level: 95 },
        { name: 'R (Statistical Computing)', level: 90 },
        { name: 'SQL (Data Manipulation)', level: 92 },
        { name: 'JavaScript (Web Forms)', level: 85 },
      ]
    },
    {
      title: 'Data Visualization & BI',
      skills: [
        { name: 'Power BI', level: 90 },
        { name: 'Tableau', level: 85 },
        { name: 'Qualtrics Analytics', level: 92 },
        { name: 'Excel Dashboards', level: 88 },
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Statistical Modeling', level: 90 },
        { name: 'GenAI Implementation', level: 88 },
        { name: 'Classification Models', level: 85 },
        { name: 'Regression Analysis', level: 92 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, and business intelligence across multiple industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Pandas & NumPy', 'Qualtrics CX/EX', 'MuleSoft Integration', 'Stats iQ',
              'HTML/CSS/JavaScript', 'API Data Flows', 'Dashboard Creation', 'Survey Analytics',
              'Fixed Income Analysis', 'Synthetic Data Generation', 'LLM Prompt Engineering'
            ].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium rounded-full hover:shadow-md hover:shadow-cyan-500/25 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
