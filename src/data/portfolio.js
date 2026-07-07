import collegeLifeImg from '../assets/projects/college-life.png';
import courierTrackingImg from '../assets/projects/courier-tracking.png';
import attendanceImg from '../assets/projects/attendance.png';

export const personalInfo = {
  name: 'Vinoth S',
  role: 'Aspiring Software Engineer',
  location: 'Chennai, India',
  email: 'itz.vinoth04@gmail.com',
  phone: '+91 9003253824',
  tagline: 'I build modern software that solves real-world problems.',
  bio: [
    "I'm a Computer Science student passionate about software engineering, full-stack development, AI, and creating impactful digital products.",
    "I enjoy solving real-world problems through clean code, intuitive user experiences, and modern technologies.",
    "I'm continuously learning, building projects, and preparing myself for software engineering roles."
  ],
  social: {
    github: 'https://github.com/itzvinoth04-design',
    linkedin: 'https://www.linkedin.com/in/vinoth-s-132ba6330/',
    leetcode: 'https://leetcode.com/u/vinoth427/',
    email: 'mailto:itz.vinoth04@gmail.com'
  }
};

export const education = {
  degree: 'B.E Computer Science and Engineering',
  institution: 'Rajalakshmi Engineering College',
  duration: '2024 – 2028',
  cgpa: '8.9/10'
};

export const stats = [
  { label: 'Projects Built', value: 3, suffix: '+' },
  { label: 'LeetCode Problems', value: 180, suffix: '+' },
  { label: 'Years Learning', value: 2, suffix: '+' },
  { label: 'Certifications', value: 5, suffix: '+' }
];

export const achievements = [
  '180+ LeetCode Problems Solved',
  'Participant – Smart India Hackathon',
  'Google AI & Business Strategy',
  'Python Data Analysis Certification',
  'NPTEL Certifications',
  'Generative AI Learning'
];

export const skills = {
  languages: [
    { name: 'Python', icon: 'SiPython' },
    { name: 'Java', icon: 'SiOpenjdk' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'C', icon: 'SiC' }
  ],
  frontend: [
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'FaCss3Alt' },
    { name: 'React', icon: 'SiReact' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' }
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs' }
  ],
  database: [
    { name: 'SQLite', icon: 'SiSqlite' },
    { name: 'MySQL', icon: 'SiMysql' }
  ],
  tools: [
    { name: 'Git', icon: 'SiGit' },
    { name: 'GitHub', icon: 'SiGithub' },
    { name: 'VS Code', icon: 'SiVscodium' }
  ],
  design: [
    { name: 'UI Design', icon: 'SiFigma' },
    { name: 'Responsive Design', icon: 'FaCss3Alt' }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'College Life Management System',
    description: 'A comprehensive platform for managing college activities, schedules, assignments, and academic resources — streamlining the entire student experience.',
    highlights: [
      'Full-stack web application with intuitive dashboard',
      'Real-time schedule and assignment management',
      'Secure authentication and role-based access'
    ],
    tech: ['React', 'Node.js', 'SQLite', 'JavaScript', 'HTML', 'CSS'],
    image: collegeLifeImg,
    github: 'https://github.com/itzvinoth04-design',
    demo: null
  },
  {
    id: 2,
    title: 'Smart Courier Tracking System',
    description: 'An intelligent courier tracking solution with QR code scanning, real-time location tracking via OpenStreetMap, and automated delivery status updates.',
    highlights: [
      'QR code-based package identification and tracking',
      'Interactive map integration with OpenStreetMap',
      'Automated status updates and delivery notifications'
    ],
    tech: ['Python', 'Flask', 'SQLite', 'QR Code', 'OpenStreetMap', 'JavaScript'],
    image: courierTrackingImg,
    github: 'https://github.com/itzvinoth04-design',
    demo: null
  },
  {
    id: 3,
    title: 'Smart Attendance System',
    description: 'An AI-powered attendance system using computer vision and facial recognition to automate classroom attendance tracking with high accuracy.',
    highlights: [
      'Real-time face detection and recognition using OpenCV',
      'Automated attendance logging with database integration',
      'High accuracy facial recognition pipeline'
    ],
    tech: ['Python', 'OpenCV', 'SQLite'],
    image: attendanceImg,
    github: 'https://github.com/itzvinoth04-design',
    demo: null
  }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const typewriterStrings = [
  'Tech Enthusiast',
  'Problem Solver',
  'Aspiring Software Engineer',
  
];
