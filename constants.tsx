
import React from 'react';
import type { Project, Skill, ExperienceItem } from './types';

// SVG Icons for Skills
const HtmlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11v4.5a1.5 1.5 0 0 1-3 0V11"/><path d="m12 11-2 5"/><path d="m9 11 2 5"/><path d="M12 19.5a7.5 7.5 0 0 1-7.2-5.1C4.5 13.8 4 12.7 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 .7-.1 1.4-.3 2.1"/><path d="M12 21a2.5 2.5 0 0 1-2.5-2.5c0-.6.2-1.1.6-1.5"/><path d="M12 11.5a2.5 2.5 0 0 1 2.5 2.5c0 .6-.2 1.1-.6 1.5"/></svg>;
const CssIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 11-1-5-5 1-2.07-5.18a1 1 0 0 0-1.86 0L7 7l-5 1 4 4-1 5 5-1 2.07 5.18a1 1 0 0 0 1.86 0L15 17l5-1-4-4Z"/><path d="m12 12-1.4-2.8a1 1 0 0 0-1.72-.42L6.3 12.3a1 1 0 0 0 .42 1.72L9.5 15"/><path d="M15.5 15 18 12"/></svg>;
const JsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9.5a2.5 2.5 0 0 1 0 5"/><path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v14a2.5 2.5 0 0 1 0-5Z"/></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>;
const TypeScriptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 9.5a2.5 2.5 0 0 1 0 5"/><path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v14a2.5 2.5 0 0 1 0-5Z"/><path d="M19 21V5l-5 5"/></svg>;
const NodeJsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/><path d="m2 14 1.25-2.5.8-2.5 2.5-1.25 1.5-1 1-1.5L10 4l.5-1.5 2.5.5 1 2 .5 2 1.5 1v1.5l1 1.5 1 2.5.5 2.5.5 1-1.5.5-1.5 1-2.5 1-2 .5h-1l-2-.5-2.5-1-1.5-1Z"/><path d="M6.5 11.5 8 13l3-1.5-3-1.5.5-3L7 8l-1.5 2Z"/></svg>;
const TailwindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-3.333 0-5-1.667-5-5 0-2.5 1.25-4 5-4s5 1.5 5 4c0 3.333-1.667 5-5 5z"/><path d="M19 12c-3.333 0-5 1.667-5 5 0 2.5 1.25 4 5 4s5-1.5 5-4c0-3.333-1.667-5-5-5z"/><path d="M5 12c-3.333 0-5 1.667-5 5 0 2.5 1.25 4 5 4s5-1.5 5-4c0-3.333-1.667-5-5-5z"/></svg>;
const GitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>;

// Portfolio Data
export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with React and Node.js.',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring dynamic charts and filters. Built using D3.js and React.',
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    tags: ['React', 'D3.js', 'TypeScript', 'CSS3'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, user authentication, and a drag-and-drop interface.',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: <HtmlIcon /> },
  { name: 'CSS3', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JsIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodeJsIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Git', icon: <GitIcon /> },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Innovate Solutions Inc.',
    period: '2021 - Present',
    description: [
      'Led the development of a high-traffic web application using React and TypeScript.',
      'Improved application performance by 30% through code optimization and bundle splitting.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'TechCrafters Co.',
    period: '2018 - 2021',
    description: [
      'Developed and maintained client websites using JavaScript, HTML, and CSS.',
      'Collaborated with designers to translate UI/UX designs into functional web pages.',
      'Implemented responsive designs to ensure cross-browser compatibility and mobile-friendliness.',
    ],
  },
];
