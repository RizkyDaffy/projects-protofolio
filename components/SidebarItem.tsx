
import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;

interface SidebarItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] transition-colors group mb-2 text-left focus:outline-none`}
    >
      {isActive && (
        <MotionDiv
          layoutId="active-pill"
          className="absolute inset-0 bg-[#C2E7FF] rounded-[2rem] z-0"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      <div className={`relative z-10 flex-shrink-0 ${isActive ? 'text-[#001D35]' : 'text-[#E3E3E3]'}`}>
        {item.icon}
      </div>
      
      <div className="relative z-10 flex flex-col overflow-hidden">
        <span className={`text-lg font-medium truncate ${isActive ? 'text-[#001D35]' : 'text-[#E3E3E3]'}`}>
          {item.label}
        </span>
        <span className={`text-sm truncate opacity-70 ${isActive ? 'text-[#001D35]' : 'text-[#C4C7C5]'}`}>
          {item.description}
        </span>
      </div>
    </button>
  );
};

export default SidebarItem;
