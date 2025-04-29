import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="bg-indigo-600 rounded-lg w-full h-full absolute -top-4 -left-4"></div>
              <img 
                src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gray-800 rounded-lg flex items-center justify-center z-20">
                <span className="text-white font-bold text-xl">Web Dev</span>
              </div>
            </div>
          </div>

          <div className={`text-gray-300 transition-all duration-1000 delay-600 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
            <p className="mb-6">
              I'm Shubham, a passionate software developer currently pursuing my Bachelor of Engineering. I specialize in creating responsive and user-friendly web applications using modern technologies.
            </p>
            <p className="mb-6">
              With a strong foundation in both frontend and backend development, I enjoy building complete solutions from database design to user interfaces. My technical expertise includes Node.js, Express, React, and database management systems like MySQL and MongoDB.
            </p>
            <p className="mb-6">
              I'm constantly learning and expanding my skill set to stay current with emerging technologies and best practices in software development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-400">Name:</p>
                <p className="font-semibold text-white">Shubham Bhikaji Darekar</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="font-semibold text-white">darekarshubham2005@gmail.com.com</p>
              </div>
              <div>
                <p className="text-gray-400">Location:</p>
                <p className="font-semibold text-white">Pune, India</p>
              </div>
              <div>
                <p className="text-gray-400">Status:</p>
                <p className="font-semibold text-white">Available for projects</p>
              </div>
            </div>

            <button
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://drive.google.com/file/d/1XlOhk67TG4zcZPXDVrDWu8lgsVy29RhQ/view?usp=drive_link", "_blank")}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
