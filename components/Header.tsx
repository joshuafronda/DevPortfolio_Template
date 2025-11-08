
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => (
  <a href={href} className={`block md:inline-block px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}>
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section as Element);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section as Element);
      });
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-white">
            Dev<span className="text-cyan-400">Folio</span>
          </a>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} isActive={activeSection === link.href}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                 <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-md transition-colors duration-300 ${activeSection === link.href ? 'text-cyan-400 bg-gray-800' : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'}`}>{link.label}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;