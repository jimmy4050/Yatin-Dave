
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-medical-50 dark:bg-medical-950/20 rounded-bl-[100px] md:rounded-bl-[200px]"></div>
      <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-medical-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-medical-100 dark:bg-medical-900/30 text-medical-700 dark:text-medical-400 rounded-full text-sm font-semibold tracking-wide uppercase">
              <CheckCircle className="w-4 h-4" />
              <span>Expert Medical Care</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Restore Your Mobility <br />
              <span className="text-medical-600">Revitalize Your Life.</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Dr. Yatin Dave provides personalized, evidence-based physiotherapy and rehabilitation services to help you recover faster and move better.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-medical-600 hover:bg-medical-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-medical-600/20 transform hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                Our Services
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-4 text-slate-500 dark:text-slate-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" 
                    alt="Patient" 
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold text-slate-900 dark:text-white">1,200+</span> patients treated this year
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/physio/800/1000" 
                alt="Dr. Yatin Dave in Clinic" 
                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-medical-600 font-bold uppercase text-xs tracking-widest mb-1">Founder & Lead Physiotherapist</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Dr. Yatin Dave</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">BPT, MPT (Orthopedics)</p>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(#4197a7_2px,transparent_2px)] [background-size:16px_16px] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
