import React from 'react';
import { BarChart, Brain, Database, Bot } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Analytical and collaborative Data Science professional specializing in <span className="text-cyan-400 font-semibold">Agentic AI</span> with proven expertise in delivering autonomous intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in building <span className="text-cyan-400 font-semibold">autonomous intelligent agents</span> using 
              <span className="text-blue-400 font-semibold"> LangGraph, LangChain, LlamaIndex, Transformers Agents, DSPy</span>, creating multi-agent systems 
              that solve real-world challenges in research, task automation, and customer support.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans from <span className="text-purple-400 font-semibold">RAG agents</span> and 
              <span className="text-teal-400 font-semibold"> task planning systems</span> to complete agentic applications 
              that integrate advanced statistical modeling, machine learning, and GenAI-powered data transformation across 
              finance, healthcare, and retail sectors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <Bot className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="font-semibold text-white">Agentic AI</h3>
                <p className="text-sm text-slate-400 mt-1">Multi-agent systems & automation</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <Brain className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-semibold text-white">LangGraph/LangChain</h3>
                <p className="text-sm text-slate-400 mt-1">Advanced agent orchestration</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <BarChart className="mx-auto mb-3 text-purple-400" size={32} />
                <h3 className="font-semibold text-white">RAG Systems</h3>
                <p className="text-sm text-slate-400 mt-1">Retrieval-augmented generation</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 border border-indigo-500/20 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <Database className="mx-auto mb-3 text-indigo-400" size={32} />
                <h3 className="font-semibold text-white">Task Automation</h3>
                <p className="text-sm text-slate-400 mt-1">Intelligent workflow agents</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-8 border border-cyan-500/30">
              <div className="w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Agentic AI visualization background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-4 grid-rows-4 h-full w-full gap-2 p-4">
                    {Array.from({
                    length: 16
                  }).map((_, i) => <div key={i} className={`rounded-sm animate-pulse ${i % 4 === 0 ? 'bg-cyan-400' : i % 4 === 1 ? 'bg-blue-400' : i % 4 === 2 ? 'bg-purple-400' : 'bg-teal-400'}`} style={{
                    animationDelay: `${i * 100}ms`
                  }}></div>)}
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-slate-300 font-medium">Building Intelligent Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;