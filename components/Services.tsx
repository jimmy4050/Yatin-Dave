
import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Specialized Services" 
          subtitle="We offer a wide range of physiotherapy treatments tailored to your specific needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-medical-100 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-medical-600 dark:text-medical-400 font-bold hover:underline"
              >
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
          
          {/* Appointment CTA Card */}
          <div className="bg-medical-600 p-8 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center text-white transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Plan?</h3>
            <p className="mb-8 opacity-90 leading-relaxed">
              Every body is different. Get a personalized assessment and recovery roadmap.
            </p>
            <a 
              href="#contact" 
              className="w-full bg-white text-medical-600 px-6 py-4 rounded-xl font-bold hover:bg-medical-50 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
