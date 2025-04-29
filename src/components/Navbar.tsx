import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 100 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white">Shubham<span className="text-indigo-500">.</span></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 shadow-lg">
          <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>
          <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Education</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</button>
          <div className="flex space-x-4 px-3 py-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="text-gray-300 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;