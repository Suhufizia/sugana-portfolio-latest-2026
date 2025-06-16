
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With a background in both development and design, I bring a unique perspective to every project. 
              I believe in the power of clean code, intuitive design, and seamless user experiences.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while sketching out my next big idea.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Code className="mx-auto mb-3 text-blue-600" size={32} />
                <h3 className="font-semibold text-gray-900">Development</h3>
                <p className="text-sm text-gray-600 mt-1">Full-stack expertise</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Palette className="mx-auto mb-3 text-purple-600" size={32} />
                <h3 className="font-semibold text-gray-900">Design</h3>
                <p className="text-sm text-gray-600 mt-1">UI/UX focused</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                <Zap className="mx-auto mb-3 text-pink-600" size={32} />
                <h3 className="font-semibold text-gray-900">Performance</h3>
                <p className="text-sm text-gray-600 mt-1">Optimized solutions</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 p-8">
              <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-600 font-medium">Building the future, one line at a time</p>
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
