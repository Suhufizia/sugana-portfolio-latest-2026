
import React from 'react';
import { BarChart, Brain, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Analytical and collaborative Data Science professional with a proven track record in delivering end-to-end analytics solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in leveraging advanced statistical modeling, machine learning, and GenAI-powered data transformation 
              to extract actionable insights from complex datasets across finance, healthcare, and retail sectors.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              With experience at Deloitte and a strong educational foundation in Data Science, I bring both technical expertise 
              and business acumen to solve real-world challenges through data-driven solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <BarChart className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="font-semibold text-white">Analytics</h3>
                <p className="text-sm text-slate-400 mt-1">Statistical modeling & insights</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <Brain className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-semibold text-white">Machine Learning</h3>
                <p className="text-sm text-slate-400 mt-1">Advanced ML & GenAI</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Database className="mx-auto mb-3 text-purple-400" size={32} />
                <h3 className="font-semibold text-white">Data Engineering</h3>
                <p className="text-sm text-slate-400 mt-1">ETL & data transformation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-8 border border-cyan-500/30">
              <div className="w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Data visualization background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-1 p-4">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-cyan-400 rounded-sm animate-pulse" 
                        style={{ animationDelay: `${i * 50}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-slate-300 font-medium">Transforming Data into Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
