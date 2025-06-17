
import React from 'react';
import { BarChart, Brain, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Analytical and collaborative Data Science professional with a proven track record in delivering end-to-end analytics solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in leveraging advanced statistical modeling, machine learning, and GenAI-powered data transformation 
              to extract actionable insights from complex datasets across finance, healthcare, and retail sectors.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience at Deloitte and a strong educational foundation in Data Science, I bring both technical expertise 
              and business acumen to solve real-world challenges through data-driven solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <BarChart className="mx-auto mb-3 text-blue-600" size={32} />
                <h3 className="font-semibold text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600 mt-1">Statistical modeling & insights</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Brain className="mx-auto mb-3 text-teal-600" size={32} />
                <h3 className="font-semibold text-gray-900">Machine Learning</h3>
                <p className="text-sm text-gray-600 mt-1">Advanced ML & GenAI</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Database className="mx-auto mb-3 text-indigo-600" size={32} />
                <h3 className="font-semibold text-gray-900">Data Engineering</h3>
                <p className="text-sm text-gray-600 mt-1">ETL & data transformation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 via-teal-200 to-indigo-200 p-8">
              <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Data visualization background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-1 p-4">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-blue-500 rounded-sm animate-pulse" 
                        style={{ animationDelay: `${i * 50}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">Transforming Data into Insights</p>
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
