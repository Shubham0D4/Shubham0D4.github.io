import React, { useRef } from 'react';
import { educations } from '../data/education';
import { certifications, hackathons } from '../data/certifications';
import { useInView } from '../hooks/useInView';
import { Award, BookOpen, Medal } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4">Education</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-500/30 rounded-full"></div>
            
            {educations.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative mb-12 md:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center mb-2 gap-2 justify-start md:justify-end">
                        <BookOpen className={`text-indigo-500 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      </div>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-2">{edu.date}</p>
                      {edu.score && (
                        <div className="inline-block bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                          Score: {edu.score}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className={`bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:scale-105 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-indigo-500" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                    <p className="text-gray-300">{cert.organization}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-2">{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-gray-400 text-sm">
                    <span className="text-indigo-400">Credential ID:</span> {cert.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4">Hackathons & Contests</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hack, index) => (
              <div 
                key={hack.id}
                className={`bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:scale-105 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Medal className="text-indigo-500" size={24} />
                  <h4 className="text-xl font-bold text-white">{hack.name}</h4>
                </div>
                <p className="text-gray-300">{hack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;