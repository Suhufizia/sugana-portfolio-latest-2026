
import React, { useMemo, useState } from 'react';

const Skills = () => {
  const skillCategories = [
  {
    title: 'GenAI / Agentic AI',
    skills: [
      { name: 'Agentic Workflows (LangGraph)', level: 95 },
      { name: 'LangChain (Agents & Tools)', level: 92 },
      { name: 'RAG (Chunking, Embeddings, Retrieval)', level: 92 },
      { name: 'Prompt Engineering & Guardrails', level: 90 },
      { name: 'LLM APIs (Groq, Gemini, Llama 3)', level: 88 },
    ]
  },
  {
    title: 'Machine Learning & Forecasting',
    skills: [
      { name: 'Feature Engineering & EDA', level: 93 },
      { name: 'XGBoost / LightGBM', level: 92 },
      { name: 'Classification & Regression', level: 90 },
      { name: 'Time Series (ARIMA, Forecasting)', level: 88 },
      { name: 'Model Evaluation & Baselines', level: 90 },
    ]
  },
  {
    title: 'Data Engineering & MLOps',
    skills: [
      { name: 'Databricks / Spark Pipelines', level: 90 },
      { name: 'MLflow Experiment Tracking', level: 88 },
      { name: 'Azure Data Lake Storage (ADLS)', level: 85 },
      { name: 'ETL / Data Prep (Pandas, SQL)', level: 92 },
      { name: 'APIs (FastAPI) & Integration', level: 84 },
    ]
  },
  {
    title: 'BI, Analytics & Survey Platforms',
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'Qualtrics (CX/EX) Analytics', level: 92 },
      { name: 'Medallia / Stats iQ', level: 85 },
      { name: 'Excel Dashboards', level: 88 },
    ]
  }
];

const [activeTab, setActiveTab] = useState(skillCategories[0]?.title);

const activeCategory = useMemo(
  () => skillCategories.find((c) => c.title === activeTab) || skillCategories[0],
  [activeTab, skillCategories]
);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Specialized expertise in <span className="text-cyan-400 font-semibold">Agentic AI frameworks</span> and comprehensive data science toolkit for building autonomous intelligent systems.
          </p>
        </div>

        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
  {/* Tabs */}
  <div className="flex flex-wrap gap-2 mb-6">
    {skillCategories.map((c) => {
      const isActive = c.title === activeTab;
      return (
        <button
          key={c.title}
          type="button"
          onClick={() => setActiveTab(c.title)}
          className={[
            "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
            isActive
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
              : "bg-slate-900/40 text-slate-300 border border-slate-700 hover:border-cyan-500/60 hover:text-cyan-200"
          ].join(" ")}
        >
          {c.title}
        </button>
      );
    })}
  </div>

  {/* Active panel */}
  <div className="grid lg:grid-cols-5 gap-8 items-start">
    <div className="lg:col-span-3">
      <h3 className="text-2xl font-bold text-white mb-1">{activeCategory.title}</h3>
      <p className="text-slate-400 text-sm mb-6">
      </p>

      <div className="space-y-5">
        {activeCategory.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-200 font-medium">{skill.name}</span>
              <span className="text-cyan-300 font-semibold tabular-nums">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700/70 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Side highlights (keeps it “attractive” but not busy) */}
    <div className="lg:col-span-2 space-y-4">
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5">
        <h4 className="text-white font-semibold mb-2">GenAI focus</h4>
        <p className="text-slate-300 text-sm">
          Agentic workflows, RAG pipelines, document intelligence, and production-ready deployments.
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
        <h4 className="text-white font-semibold mb-2">Data science focus</h4>
        <p className="text-slate-300 text-sm">
          EDA, feature engineering, forecasting, and model training with reproducible experiment tracking.
        </p>
      </div>
    </div>
  </div>
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
