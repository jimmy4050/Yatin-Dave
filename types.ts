
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
