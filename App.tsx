
import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

/**
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * Vercel:
 * 1. Push this code to a GitHub repository.
 * 2. Connect the repository to Vercel (https://vercel.com/new).
 * 3. Ensure Build Command is `npm run build` and Output Directory is `dist`.
 * 4. Click Deploy.
 * 
 * Netlify:
 * 1. Push code to GitHub.
 * 2. Create a new site on Netlify (https://app.netlify.com/start).
 * 3. Connect to GitHub and select your repo.
 * 4. Build command: `npm run build`, Publish directory: `dist`.
 * 5. Click Deploy.
 */
