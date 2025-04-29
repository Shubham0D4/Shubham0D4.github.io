import React, { useRef } from 'react';
import { skills, getIconComponent } from '../data/skills';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const categories = [
    { id: 'languages', title: 'Languages' },
    { id: 'frameworks', title: 'Frameworks/Libraries' },
    { id: 'databases', title: 'Databases' },
    { id: 'tools', title: 'Tools' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with to build modern web applications.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category.id}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4">{category.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => {
                    const IconComponent = skill.icon ? getIconComponent(skill.icon) : null;
                    
                    return (
                      <div 
                        key={skill.id}
                        className={`bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center transition-all duration-300 delay-${index * 100}`}
                      >
                        {IconComponent && <IconComponent className="w-6 h-6 text-indigo-500 mr-3" />}
                        <span className="text-gray-200">{skill.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;