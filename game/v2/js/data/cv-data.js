/**
 * All CV content data — ported from v1 with cleaned-up text.
 */

export const profile = {
  name: 'Jevgeni Rumin',
  title: 'Senior Full-Stack Developer',
  summary: '8+ years of software engineering experience specializing in C#, JavaScript, and Python. Working in international teams building scalable web applications. From Estonia, currently based in the Netherlands.',
};

export const experience = [
  {
    id: 'travix',
    company: 'Travix',
    role: 'Senior Software Engineer',
    period: '2019 - Present',
    location: 'Amsterdam, Netherlands',
    tech: ['C#', '.NET Core', 'React', 'TypeScript', 'Azure', 'Kubernetes'],
    highlights: [
      'Implemented Google Pay and Apple Pay payment options, resulting in an increase in revenue.',
      'Delivered 3D Secure 2.0 (Strong Customer Authentication) standard, enhancing card-holder security.',
      'Contributed to GDPR-compliance work by masking sensitive data from the database.',
    ],
    building: 'exp-building-1',
  },
  {
    id: 'genius',
    company: 'Genius Sports',
    role: 'Software Engineer',
    period: '2017 - 2019',
    location: 'London, UK (Remote)',
    tech: ['C#', '.NET', 'RabbitMQ', 'SQL Server', 'Microservices'],
    highlights: [
      'Developed microservices for the risk management system, resulting in 3x fewer errors.',
      'Migrated business logic from stored procedures into the backend, covering with tests to reduce error-proneness.',
      'Oversaw multiple deployments as deployment manager, synchronizing versions of multiple microservices.',
    ],
    building: 'exp-building-2',
  },
  {
    id: 'finestmedia',
    company: 'Finestmedia',
    role: 'Software Developer',
    period: '2015 - 2017',
    location: 'Tallinn, Estonia',
    tech: ['C#', 'ASP.NET MVC', 'JavaScript', 'SQL Server', 'X-Road'],
    highlights: [
      'Developed integration with governmental systems using Estonian Data Exchange Layer (X-Road), enhancing data security.',
      'Developed multiple ASP MVC forms enabling scientists to create research funding applications.',
      'Created around 3,000 tests, making the codebase significantly less prone to errors.',
    ],
    building: 'exp-building-3',
  },
  {
    id: 'abb',
    company: 'ABB',
    role: 'Junior Software Developer',
    period: '2013 - 2015',
    location: 'Tallinn, Estonia',
    tech: ['C#', 'WPF', 'SQL Server', 'Desktop Applications'],
    highlights: [
      'Developed a desktop application providing overview of company accidents, resulting in a 50% reduction in incidents.',
      'Built and delivered a desktop application enabling communication of process statuses between multiple companies, resulting in significant time savings.',
    ],
    building: 'exp-building-4',
  },
];

export const projects = [
  {
    id: 'speyscloud',
    name: 'SpeysCloud',
    description: 'Package tracking system with a user-friendly SPA. Microservice architecture built with .NET and React, hosted in Azure. Created for practicing microservice patterns and modern frontend development.',
    tech: ['C#', '.NET Core', 'React', 'Azure', 'Docker', 'Microservices'],
    icon: 'project-cloud',
  },
  {
    id: 'triven',
    name: 'Triven',
    description: 'Startup platform for buying and selling vehicles. Built with a team of seven using Java Spring Boot and React. Focused on making vehicle transactions easier and more transparent.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    icon: 'project-laptop',
  },
];

export const skills = [
  { name: 'C#', level: 0.95, color: 0x9b59b6 },
  { name: 'JavaScript', level: 0.80, color: 0xf1c40f },
  { name: 'Python', level: 0.60, color: 0x3498db },
  { name: 'React', level: 0.75, color: 0x61dafb },
  { name: 'SQL', level: 0.85, color: 0xe67e22 },
  { name: '.NET', level: 0.90, color: 0x512bd4 },
  { name: 'Azure', level: 0.70, color: 0x0089d6 },
  { name: 'Docker', level: 0.65, color: 0x2496ed },
];

export const education = [
  {
    id: 'master',
    degree: 'Master of Computer Science',
    school: 'Tallinn University of Technology',
    period: '2015 - 2017',
  },
  {
    id: 'bachelor',
    degree: 'Bachelor of Computer Science',
    school: 'Tallinn University of Technology',
    period: '2011 - 2015',
  },
];

export const contact = {
  email: 'jevgeni.rumin@gmail.com',
  github: 'https://github.com/jackinf',
  linkedin: 'https://linkedin.com/in/jevgenirumin',
};

export const sections = [
  { id: 'intro', label: 'Introduction', startX: 0, endX: 1500 },
  { id: 'experience', label: 'Experience', startX: 1800, endX: 6000 },
  { id: 'projects', label: 'Projects', startX: 6300, endX: 8500 },
  { id: 'skills', label: 'Skills', startX: 8800, endX: 10500 },
  { id: 'education', label: 'Education', startX: 10800, endX: 12500 },
  { id: 'contact', label: 'Contact', startX: 12800, endX: 15000 },
];
