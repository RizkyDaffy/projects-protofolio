
import React from 'react';

interface NavButtonProps {
  title: string;
  subtitle?: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ title, subtitle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-left w-full hover:bg-white/5 py-4 px-4 -mx-4 rounded-2xl transition-all group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#C2E7FF]/20"
    >
      <span className="text-xl md:text-2xl font-normal block mb-1 group-hover:translate-x-1 transition-transform text-[#E3E3E3]">
        {title}
      </span>
      {subtitle && (
        <span className="text-[#C4C7C5] text-sm md:text-base font-normal opacity-70 group-hover:translate-x-1 transition-transform">
          {subtitle}
        </span>
      )}
    </button>
  );
};

export default NavButton;
