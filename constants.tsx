
import React from 'react';
import { 
  User, 
  Settings, 
  FolderOpen, 
  Trophy, 
  Briefcase, 
  Code, 
  History, 
  Mail,
  Search
} from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'profile',
    label: 'About Profile',
    description: 'Short profile information and personality',
    icon: <User size={24} />,
    path: '/profile'
  },
  {
    id: 'expertise',
    label: 'Systems & Expertise',
    description: 'Technical, Non-Technical, In Progress',
    icon: <Settings size={24} />,
    path: '/expertise'
  },
  {
    id: 'projects',
    label: 'Explore Projects',
    description: 'Explore my portfolio of projects',
    icon: <FolderOpen size={24} />,
    path: '/projects'
  },
  {
    id: 'achievements',
    label: 'Achievements',
    description: 'Certifications, competitions, awards',
    icon: <Trophy size={24} />,
    path: '/achievements'
  },
  {
    id: 'experience',
    label: 'Professional Experience',
    description: 'Internships, freelance work, team projects',
    icon: <Briefcase size={24} />,
    path: '/experience'
  },
  {
    id: 'tools',
    label: 'Languages and Tools',
    description: 'My Development toolkits',
    icon: <Code size={24} />,
    path: '/tools'
  },
  {
    id: 'journey',
    label: 'Journey & Memorials',
    description: 'My Journey gallery',
    icon: <History size={24} />,
    path: '/journey'
  },
  {
    id: 'contact',
    label: 'Get in Touch',
    description: 'Stay on touch with me',
    icon: <Mail size={24} />,
    path: '/contact'
  },
];
