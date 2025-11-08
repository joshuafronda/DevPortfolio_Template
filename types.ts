import type React from 'react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
}

export interface Skill {
  name: string;
  // Fix: Use React.ReactElement instead of JSX.Element to avoid namespace issues in a .ts file.
  icon: React.ReactElement;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}
