
import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import type { ExperienceItem } from '../types';

const TimelineItem: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-cyan-300 bg-cyan-900/50 rounded-full">{item.period}</time>
        <div className="text-xl font-bold text-white">{item.role} @ {item.company}</div>
      </div>
      <ul className="list-disc pl-5 mt-2 text-gray-400">
        {item.description.map((desc, index) => (
          <li key={index} className="mb-1">{desc}</li>
        ))}
      </ul>
    </div>
  );
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={`py-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        My <span className="text-cyan-400">Experience</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;