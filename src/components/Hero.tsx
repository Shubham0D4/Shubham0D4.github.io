import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.classList.add('animate-slide-up-fade');
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 
          ref={textRef} 
          className="text-4xl md:text-6xl font-bold text-white opacity-0 transform translate-y-10"
        >
          Hi, I'm <span className="text-indigo-500">Shubham Darekar</span>
        </h1>
        
        <div className="flex flex-col items-center justify-center space-y-6 opacity-0 animate-fade-in-delay">
          <p className="text-xl text-gray-300 max-w-2xl">
            A passionate software developer specializing in web development and backend solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-bounce-in-delay">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
              View Projects
            </button>
            <button className="px-6 py-3 bg-transparent border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;