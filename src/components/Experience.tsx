
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions for 100k+ users.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create engaging user experiences. Specialized in React ecosystem and modern JavaScript frameworks.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved user engagement by 35% through UX enhancements',
        'Implemented automated testing reducing bugs by 50%'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Worked on various client projects ranging from small business websites to complex web applications. Gained experience in full-stack development and agile methodologies.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Learned and implemented 5+ new technologies',
        'Collaborated with cross-functional teams of 10+ members'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my expertise in web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 text-sm font-medium mt-1 sm:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
