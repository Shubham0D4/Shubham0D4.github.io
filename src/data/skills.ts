import { Skill } from '../types';
import { Code2, Server, Database, Wrench } from 'lucide-react';

export const skills: Skill[] = [
  // Languages
  { id: 1, name: 'C++', category: 'languages', icon: 'Code2' },
  { id: 2, name: 'JavaScript', category: 'languages', icon: 'Code2' },
  { id: 3, name: 'HTML5', category: 'languages', icon: 'Code2' },
  { id: 4, name: 'CSS3', category: 'languages', icon: 'Code2' },
  { id: 5, name: 'Java', category: 'languages', icon: 'Code2'},
  { id: 6, name: 'Bash', category: 'languages', icon: 'Code2'},
  
  // Frameworks/Libraries
  { id: 5, name: 'Node.js', category: 'frameworks', icon: 'Server' },
  { id: 6, name: 'Express.js', category: 'frameworks', icon: 'Server' },
  { id: 7, name: 'React.js', category: 'frameworks', icon: 'Server' },
  { id: 8, name: 'JWT', category: 'frameworks', icon: 'Server' },
  { id: 9, name: 'REST API', category: 'frameworks', icon: 'Server' },
  { id: 10, name: 'Bootstrap', category: 'frameworks', icon: 'Server' },
  
  // Databases
  { id: 11, name: 'MySQL', category: 'databases', icon: 'Database' },
  { id: 12, name: 'MongoDB', category: 'databases', icon: 'Database' },
  
  // Tools
  { id: 13, name: 'Visual Studio Code', category: 'tools', icon: 'Wrench' },
  { id: 14, name: 'MongoDB Atlas', category: 'tools', icon: 'Wrench' },
  { id: 15, name: 'MySQL CLI and Workbench', category: 'tools', icon: 'Wrench' },
  { id: 16, name: 'Git and GitHub', category: 'tools', icon: 'Wrench' },
  { id: 17, name: 'Debian, Ubuntu, Linux terminal', category: 'tools', icon: 'Wrench' },
  { id: 18, name: 'Docker, Docker cmd', category: 'tools', icon: 'Wrench'}
];

export const getIconComponent = (iconName: string | undefined) => {
  if (!iconName) return null;
  
  switch (iconName) {
    case 'Code2':
      return Code2;
    case 'Server':
      return Server;
    case 'Database':
      return Database;
    case 'Wrench':
      return Wrench;
    default:
      return null;
  }
};
