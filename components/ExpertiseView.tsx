
import React from 'react';
import { motion } from 'framer-motion';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;

const ExpertiseView: React.FC = () => {
  const sections = [
    {
      title: "Core Competencies",
      items: [
        { label: "High-Performance Backend", subtitle: "Architecting systems with Go, Python, and TypeScript focused on low latency." },
        { label: "Defensive Security", subtitle: "Expertise in threat modeling, network hardening, and vulnerability assessments." },
        { label: "Cloud Infrastructure", subtitle: "Managing scalable deployments using Docker, Kubernetes, and Cloud Providers." }
      ]
    },
    {
      title: "Current Learning & Growth",
      items: [
        { label: "Zero-Trust Architecture", subtitle: "Implementing modern security frameworks in distributed environments." },
        { label: "Web3 & Smart Contracts", subtitle: "Exploring blockchain security and decentralized application development." }
      ]
    }
  ];

  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 md:p-12 lg:p-20 max-w-4xl pb-32"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">System & Expertise</h1>
      
      <div className="space-y-14">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-[#c2e7ff] text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-6">
              {section.title}
            </h2>
            <div className="space-y-10">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col border-b border-white/[0.04] pb-6">
                  <span className="text-xl md:text-2xl font-medium text-[#e3e3e3] mb-1">
                    {item.label}
                  </span>
                  <span className="text-[#9aa0a6] text-sm md:text-base leading-relaxed">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-[#1a1a1a] rounded-[2rem] border border-white/5">
        <p className="text-[#9aa0a6] text-center italic">
          Detailed toolsets and specific technical skills have been moved to the <span className="text-white font-medium">Languages & Tools</span> section.
        </p>
      </div>
    </MotionDiv>
  );
};

export default ExpertiseView;
