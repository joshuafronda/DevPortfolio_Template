
import React, { useState, useEffect } from 'react';

const SUBTITLE = "I build things for the web.";

const Hero: React.FC = () => {
  const [subtitleText, setSubtitleText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (subtitleText.length === SUBTITLE.length) {
      setTimeout(() => setIsTypingComplete(true), 1000); // Wait 1s then cursor disappears
      return;
    }

    const typingInterval = setTimeout(() => {
      setSubtitleText(SUBTITLE.substring(0, subtitleText.length + 1));
    }, 100);

    return () => clearTimeout(typingInterval);
  }, [subtitleText]);


  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Hi, I'm <span className="text-cyan-400">Alex Doe</span>.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 min-h-[3rem] md:min-h-[4rem]">
          {subtitleText}
          {!isTypingComplete && <span className="cursor-blink text-cyan-400">|</span>}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          I'm a passionate web developer specializing in creating modern, high-performance web applications. My philosophy is centered around writing clean, efficient code to solve complex problems and deliver exceptional user experiences.
        </p>
        <a 
          href="#projects" 
          className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;