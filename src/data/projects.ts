import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'BloodHelp - BloodBank Tool',
    description: 'A platform for connecting blood donors and recipients, with real-time search, signaling, and notifications to streamline matching. Admin panel for managing donations.',
    date: 'Nov 2024',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Bootstrap'],
    imageUrl: 'https://images.pexels.com/photos/5723632/pexels-photo-5723632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Library Management System',
    description: 'A system for managing books, user registrations, and tracking inventory, with a responsive UI for desktop and mobile access. Includes an admin panel for user and book management.',
    date: 'Sept 2024',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    imageUrl: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Blogin - Blogging Web App',
    description: 'A blogging platform for creating, managing, and editing posts, with category tags, privacy settings, and user interactions (comments, likes, shares).',
    date: 'May 2024',
    technologies: ['Express.js', 'MySQL', 'Bootstrap'],
    imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Foodies - Bakery Platform',
    description: 'A bakery platform for placing orders, rating products, and tracking orders, with JWT-secured logins and an admin panel to manage product listings and sales.',
    date: 'Mar 2024',
    technologies: ['Express.js', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/4040646/pexels-photo-4040646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'URL Shortener',
    description: 'Developed a URL shortening tool that generates compact links for long URLs, with analytics tracking. RESTful API support and user-friendly dashboard.',
    date: 'Jan 2025',
    technologies: ['Node.js', 'ReactJs', 'Express.js', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/4068348/pexels-photo-4068348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Zion Site - Tech fest Web',
    description: "College Tech fest site. It was to represent college tech fest 'ZION-2k25'. It was build with various react libraries like GSAP etc. Also used Google map api.",
    date: 'Feb-Mar 2025',
    technologies: ['ReactJs', 'CSS3'],
    imageUrl: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    title: 'alpha-sql - Node module',
    description: 'It is a node module to simplify the connectivity of MySQL and node applications. It helps to avoid writing SQL queries and provides built in functions. It can be used by \'npm install alpha-sql\'.',
    date: 'Feb-Mar 2025',
    technologies: ['Javascript'],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];