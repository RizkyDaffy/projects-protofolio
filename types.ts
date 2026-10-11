
import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
  path: string;
}

export interface ProfileSection {
  title: string;
  content: {
    label: string;
    value?: string;
    isNavigation?: boolean;
    path?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  thumbnail: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  category: string;
}
