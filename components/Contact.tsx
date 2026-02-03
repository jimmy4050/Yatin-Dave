
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Ready to start your recovery? Contact us to schedule an appointment."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Clinic Info</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-medical-100 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-medical-100 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-medical-100 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-medical-100 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Opening Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Map Integration */}
            <div className="h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-100 dark:border-slate-800 group shadow-lg">
              <iframe
                title="Clinic Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 contrast-[0.85] group-hover:contrast-100"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-4 right-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20 flex items-center gap-2 text-xs font-bold text-medical-600 dark:text-medical-400 hover:bg-medical-600 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-md">
                    Thank you for reaching out. Dr. Yatin Dave's team will get back to you within 24 hours to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-medical-600 dark:text-medical-400 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-500 outline-none transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-500 outline-none transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-500 outline-none transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-500 outline-none transition-all text-slate-900 dark:text-white">
                        <option>General Inquiry</option>
                        <option>New Appointment</option>
                        <option>Follow-up Visit</option>
                        <option>Sports Injury Rehab</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your concern..."
                        rows={5}
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-medical-500 outline-none transition-all text-slate-900 dark:text-white resize-none"
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2 pt-4">
                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full bg-medical-600 hover:bg-medical-700 disabled:bg-slate-400 text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-medical-600/20 active:scale-95"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
