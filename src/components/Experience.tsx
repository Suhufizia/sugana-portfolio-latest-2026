
import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Deloitte',
      location: 'Bangalore, India',
      period: '2023 - Present',
      description: 'Leading GenAI-powered solutions development and advanced analytics projects for enterprise clients across multiple industries.',
      achievements: [
        'Developed GenAI-powered solutions for transforming unstructured tagged data into structured formats',
        'Generated synthetic datasets for robust model training and validation',
        'Engineered advanced prompts for LLMs for industry-specific scenarios',
        'Delivered end-to-end analytics solutions for finance, healthcare, and retail sectors'
      ],
      color: 'blue'
    },
    {
      title: 'Data Analyst',
      company: 'Deloitte',
      location: 'Bangalore, India',
      period: '2022 - 2023',
      description: 'Specialized in customer experience analytics, survey design, and data visualization solutions for enterprise clients.',
      achievements: [
        'Designed and implemented customized Qualtrics CX and EX surveys using advanced HTML and JavaScript',
        'Streamlined data collection and reporting workflows, improving efficiency by 40%',
        'Built dashboards and visualizations in Qualtrics for 8+ clients',
        'Collaborated on MuleSoft integrations and optimized API data flows',
        'Used Stats iQ, Python, and R for advanced analytics and insights generation'
      ],
      color: 'teal'
    },
    {
      title: 'Data Science and Analytics Specialist',
      company: 'External Projects & Initiatives',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Independent data science projects focusing on financial analysis, business intelligence, and machine learning applications.',
      achievements: [
        'Classified fixed income securities by sector using machine learning algorithms',
        'Built comprehensive Tableau and Excel dashboards for sales analysis',
        'Implemented pandas, numpy, regression models, and classifier evaluation techniques',
        'Delivered actionable insights for business decision-making across multiple sectors'
      ],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-500 bg-blue-500',
      teal: 'border-teal-500 bg-teal-500',
      indigo: 'border-indigo-500 bg-indigo-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-blue-500 bg-blue-500';
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in data science and analytics, delivering impactful solutions across diverse industries and challenging problem domains.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${getColorClasses(exp.color)}`}></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className={`flex items-center text-sm font-medium mt-1 sm:mt-0 ${exp.color === 'blue' ? 'text-blue-600' : exp.color === 'teal' ? 'text-teal-600' : 'text-indigo-600'}`}>
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Building size={18} className={`mr-2 ${exp.color === 'blue' ? 'text-blue-600' : exp.color === 'teal' ? 'text-teal-600' : 'text-indigo-600'}`} />
                        <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${exp.color === 'blue' ? 'bg-blue-600' : exp.color === 'teal' ? 'bg-teal-600' : 'bg-indigo-600'}`}></div>
                          <p className="text-gray-700 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
