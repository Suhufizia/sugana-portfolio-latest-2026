
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Agentic AI & Frameworks',
      skills: [
        { name: 'LangGraph (Multi-Agent)', level: 95 },
        { name: 'LangChain (Agent Dev)', level: 92 },
        { name: 'RAG Agents', level: 90 },
        { name: 'Task Automation Bots', level: 88 },
      ]
    },
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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Specialized expertise in <span className="text-cyan-400 font-semibold">Agentic AI frameworks</span> and comprehensive data science toolkit for building autonomous intelligent systems.
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
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Agentic AI Specializations</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">🤖 Autonomous Research Agents</h4>
              <p className="text-slate-300 text-sm">Multi-agent systems for automated research, data collection, and analysis using LangGraph orchestration</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">🔍 RAG-Powered Search Agents</h4>
              <p className="text-slate-300 text-sm">Retrieval-augmented generation systems for intelligent document search and knowledge extraction</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">⚡ Task Planning & Automation</h4>
              <p className="text-slate-300 text-sm">Intelligent workflow automation and task decomposition using advanced agent architectures</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/10 to-teal-500/10 border border-indigo-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">💬 Customer Support Agents</h4>
              <p className="text-slate-300 text-sm">Conversational AI agents with context awareness and multi-turn dialogue capabilities</p>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Core Technologies & Tools</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'LangGraph Multi-Agent', 'LangChain Agents', 'OpenAI Function Calling', 'Anthropic Claude',
                'Vector Databases', 'Pinecone', 'Chroma', 'FAISS', 'Pandas & NumPy', 'FastAPI',
                'Streamlit', 'Gradio', 'Docker', 'AWS/GCP', 'Prompt Engineering', 'Tool Integration'
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
      </div>
    </section>
  );
};

export default Skills;
