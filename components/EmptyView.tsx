
import React from 'react';
import { motion } from 'framer-motion';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;

interface EmptyViewProps {
  title: string;
}

const EmptyView: React.FC<EmptyViewProps> = ({ title }) => {
  return (
    <MotionDiv 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full text-center p-8 opacity-40"
    >
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl">Information for this section will be coming soon.</p>
    </MotionDiv>
  );
};

export default EmptyView;
