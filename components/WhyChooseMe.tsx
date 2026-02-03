
import React from 'react';
import SectionHeading from './SectionHeading';
import { ShieldCheck, Target, HeartPulse, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Evidence-Based Treatment',
    description: 'We use the latest research and clinical data to design effective treatment programs.',
    icon: <Target className="w-8 h-8" />
  },
  {
    title: 'Personalized Care Plans',
    description: 'No generic exercises. Every patient gets a customized plan tailored to their lifestyle.',
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: 'Modern Techniques',
    description: 'Utilizing advanced modalities including dry needling, taping, and shockwave therapy.',
    icon: <HeartPulse className="w-8 h-8" />
  },
  {
    title: 'Holistic Wellness',
    description: 'We don\'t just treat symptoms; we focus on overall physical health and injury prevention.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-me" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <SectionHeading 
              title="Why Choose Dr. Yatin Dave?" 
              subtitle="Exceptional care built on years of expertise and a passion for helping people heal."
              centered={false}
            />
            
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-50 dark:bg-slate-800 text-medical-600 dark:text-medical-400 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:bg-medical-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/a/400/500" className="rounded-2xl shadow-lg" alt="Clinic Interior" />
                  <img src="https://picsum.photos/seed/b/400/400" className="rounded-2xl shadow-lg" alt="Therapy Session" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://picsum.photos/seed/c/400/400" className="rounded-2xl shadow-lg" alt="Modern Equipment" />
                  <img src="https://picsum.photos/seed/d/400/500" className="rounded-2xl shadow-lg" alt="Dr. Yatin working" />
                </div>
             </div>
             {/* Abstract background blur */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-medical-500/10 blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
