import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, light = false }) => {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Icon Container */}
      <div className="relative flex-shrink-0">
        <div className="w-11 h-11 bg-gradient-to-br from-medical-500 to-medical-700 rounded-xl flex items-center justify-center shadow-lg shadow-medical-500/30 group-hover:shadow-medical-500/50 transition-all duration-500 group-hover:scale-105 group-active:scale-95 overflow-hidden">
          {/* Abstract Motion Cross SVG */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-7 h-7 text-white transform group-hover:rotate-12 transition-transform duration-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4V20M4 12H20" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              className="opacity-20"
            />
            <path 
              d="M12 6C12 6 14 9 14 12C14 15 12 18 12 18" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M10 6C10 6 8 9 8 12C8 15 10 18 10 18" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6 10C6 10 9 8 12 8C15 8 18 10 18 10" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6 14C6 14 9 16 12 16C15 16 18 14 18 14" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute -inset-1 border border-medical-500/20 rounded-2xl scale-90 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            DR. YATIN <span className="text-medical-600 dark:text-medical-400">DAVE</span>
          </span>
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${light ? 'text-medical-300' : 'text-medical-600/70 dark:text-medical-400/70'}`}>
            Physiotherapy
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;