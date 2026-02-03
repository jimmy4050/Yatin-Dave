import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Theme } from '../types';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'services', 'why-me', 'contact'];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div 
        id="scroll-progress"
        className="absolute top-0 left-0 h-[3px] bg-medical-500 transition-transform duration-75 ease-out z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={() => handleNavClick('#home')}
            className="flex-shrink-0"
          >
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isActive 
                      ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-900/20' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-medical-600 dark:bg-medical-400 rounded-full"></span>
                  )}
                </a>
              );
            })}
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <a 
              href="#contact"
              className="ml-4 bg-medical-600 hover:bg-medical-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-t dark:border-slate-800 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-2">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all duration-300 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                } ${
                  isActive
                    ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                {isActive && <div className="w-2 h-2 bg-medical-600 dark:bg-medical-400 rounded-full"></div>}
              </a>
            );
          })}
          <div className={`pt-4 transform transition-all duration-500 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a 
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="block w-full bg-medical-600 text-white px-6 py-4 rounded-2xl font-black text-center shadow-lg shadow-medical-600/20 active:scale-95"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;