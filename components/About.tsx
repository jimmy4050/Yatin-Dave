
import React from 'react';
import SectionHeading from './SectionHeading';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/doctor/800/1000" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-medical-600 p-8 rounded-3xl text-white shadow-2xl hidden md:block transform -rotate-3 hover:rotate-0 transition-transform">
              <p className="text-5xl font-black">12</p>
              <p className="text-xl font-medium opacity-90">Years of Experience</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeading 
              title="Meet Mr. Yatin Dave" 
              subtitle="Providing compassionate care through modern physiotherapy techniques."
              centered={false}
            />
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Dr. Yatin Dave is a highly skilled Physiotherapy Doctor with over a decade of experience in the field of physical rehabilitation. He specializes in orthopedic and sports-related injuries, helping patients return to their peak performance and pain-free living.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              His patient-centric approach combines hands-on manual therapy with personalized exercise programs and patient education. He believes that understanding the root cause of pain is key to sustainable recovery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-medical-100 dark:bg-medical-900/40 text-medical-600 dark:text-medical-400 rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
