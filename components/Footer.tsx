import React from 'react';
import { NAV_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo light />
            <p className="leading-relaxed text-slate-500">
              Expert physiotherapy and rehabilitation services dedicated to restoring your mobility and helping you live a pain-free life.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-medical-600 hover:text-white transition-all text-slate-400 group"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-5 h-5 border border-current rounded-sm group-hover:scale-110 transition-transform"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-medical-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-medical-500 transition-colors">Orthopedic Physiotherapy</a></li>
              <li><a href="#services" className="hover:text-medical-500 transition-colors">Sports Rehabilitation</a></li>
              <li><a href="#services" className="hover:text-medical-500 transition-colors">Pain Management</a></li>
              <li><a href="#services" className="hover:text-medical-500 transition-colors">Neuro Physiotherapy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="mb-6 text-slate-500">Subscribe to get health tips and clinic updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-xl p-4 pr-12 focus:ring-1 focus:ring-medical-500 outline-none text-white transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-medical-600 px-4 rounded-lg text-white font-bold hover:bg-medical-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Dr. Yatin Dave. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for healthy living</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;