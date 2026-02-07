import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Deloitte',
      location: 'Bangalore, India',
      period: '2024 - Present',
      description:
        'Driving full-cycle data science and machine learning projects for Kaiser Foundations, focused on churn prediction and scalable analytics pipelines.',
      achievements: [
        'Built Databricks pipeline for automated churn prediction',
        'Delivered EDA and feature engineering for business insights',
        'Managed feature store tables for scalable model reuse',
        'Created automated file flow (SFTP to ADLS) for secure data ingestion',
        'Developed XGBoost and LightGBM models, tracked via MLflow',
        'Produced deployable baseline model for client use',
        'Defined analytics logic in collaboration with stakeholders'
      ],
      color: 'blue'
    },
    {
      title: 'Data Scientist',
      company: 'Deloitte',
      location: 'Bangalore, India',
      period: '2023 - 2024',
      description:
        'Leading GenAI-powered solutions development and advanced analytics projects for enterprise clients across multiple industries.',
      achievements: [
        'Developed GenAI-powered solutions for transforming unstructured tagged data into structured formats',
        'Generated synthetic datasets for robust model training and validation',
        'Engineered advanced prompts for LLMs for industry-specific scenarios',
        'Delivered end-to-end analytics solutions for finance, healthcare, and retail sectors'
      ],
      color: 'teal'
    },
    {
      title: 'Data Analyst',
      company: 'Deloitte',
      location: 'Bangalore, India',
      period: '2022 - 2023',
      description:
        'Specialized in customer experience analytics, survey design, and data visualization solutions for enterprise clients.',
      achievements: [
        'Designed and implemented customized Qualtrics CX and EX surveys using advanced HTML and JavaScript',
        'Streamlined data collection and reporting workflows, improving efficiency by 40%',
        'Built dashboards and visualizations in Qualtrics for 8+ clients',
        'Collaborated on MuleSoft integrations and optimized API data flows',
        'Used Stats iQ, Python, and R for advanced analytics and insights generation'
      ],
      color: 'indigo'
    },
    {
      title: 'Agentic AI & Conversational Intelligence Projects',
      company: 'External Projects & Initiatives',
      location: 'Remote',
      period: '2025',
      description:
        'Independently designed, built, and deployed advanced AI applications using agentic design and generative LLMs—led requirements, architecture, coding, integration, and deployment.',
      achievements: [
        'Developed the Agentic Intelligence Platform – PDF Agent for PDF Q&A, summarization, and web search using Python + Streamlit',
        'Integrated Groq LLM, LangGraph, and multi-agent orchestration for grounded document intelligence',
        'Created a cloud-deployed, multi-turn Conversational AI Chatbot using Llama 3 via Groq API with a modern Streamlit UI',
        'Published live demos with open-source code, showcasing AI integration and scalable user experience',
        'Pioneered agentic workflow automation, prompt engineering, and multi-agent coordination'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'border-blue-500 bg-blue-500',
      teal: 'border-teal-500 bg-teal-500',
      indigo: 'border-indigo-500 bg-indigo-500',
      purple: 'border-purple-500 bg-purple-500'
    };
    return colorMap[color] || 'border-blue-500 bg-blue-500';
  };

  const getTextColor = (color) => {
    const textMap = {
      blue: 'text-blue-600',
      teal: 'text-teal-600',
      indigo: 'text-indigo-600',
      purple: 'text-purple-600'
    };
    return textMap[color] || 'text-blue-600';
  };

  const getDotColor = (color) => {
    const dotMap = {
      blue: 'bg-blue-600',
      teal: 'bg-teal-600',
      indigo: 'bg-indigo-600',
      purple: 'bg-purple-600'
    };
    return dotMap[color] || 'bg-blue-600';
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExternal = exp.company === 'External Projects & Initiatives';

              return (
                <div
                  key={`${exp.title}-${exp.period}-${index}`}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot (smaller for External Projects) */}
                  <div
                    className={[
                      'hidden md:block absolute left-1/2 transform -translate-x-1/2 rounded-full border-white z-10',
                      isExternal ? 'w-3 h-3 border-2 shadow-md' : 'w-4 h-4 border-4 shadow-lg',
                      getColorClasses(exp.color)
                    ].join(' ')}
                  />

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <div className={`flex items-center text-sm font-medium mt-1 sm:mt-0 ${getTextColor(exp.color)}`}>
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Building size={18} className={`mr-2 ${getTextColor(exp.color)}`} />
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
                          <div key={`${exp.period}-${achIndex}`} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${getDotColor(exp.color)}`} />
                            <p className="text-gray-700 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;