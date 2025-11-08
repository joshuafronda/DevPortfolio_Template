
import React, { useRef, useState, useEffect } from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg text-center transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1">
    <div className="text-cyan-400 mb-3 h-10 w-10 flex items-center justify-center">{React.cloneElement(skill.icon, { width: '40', height: '40' })}</div>
    <p className="font-semibold text-white">{skill.name}</p>
  </div>
);

const Skills: React.FC = () => {
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
    <section id="skills" ref={sectionRef} className={`py-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My <span className="text-cyan-400">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;