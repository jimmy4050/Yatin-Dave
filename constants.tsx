
import React from 'react';
import { Activity, Heart, ShieldCheck, Zap, Users, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'ortho',
    title: 'Orthopedic Physiotherapy',
    description: 'Specialized treatment for bone and joint issues, including arthritis, fractures, and back pain.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 'sports',
    title: 'Sports Injury Rehabilitation',
    description: 'Expert care for athletes to recover quickly and safely from tears, sprains, and muscle injuries.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'post-surg',
    title: 'Post-Surgery Rehabilitation',
    description: 'Personalized recovery programs after orthopedic surgeries to regain mobility and strength.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'neuro',
    title: 'Neurological Physiotherapy',
    description: 'Therapy for conditions affecting the nervous system, such as stroke, MS, and Parkinson\'s.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: 'pain',
    title: 'Pain Management Therapy',
    description: 'Evidence-based techniques to alleviate chronic pain and improve quality of daily life.',
    icon: <Users className="w-6 h-6" />,
  },
];

export const STATS = [
  { label: 'Years Experience', value: '12+', icon: <Award className="w-5 h-5" /> },
  { label: 'Happy Patients', value: '5k+', icon: <Users className="w-5 h-5" /> },
  { label: 'Certifications', value: '15+', icon: <ShieldCheck className="w-5 h-5" /> },
];

export const CONTACT_INFO = {
  address: 'Plot No. 363, 1 & 364, Housing Sector, GIDC, Vapi, Chharwada, Gujarat 396191',
  phone: '+91 98251 12345',
  email: 'yatin.dave@physiotherapy.com',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
];
