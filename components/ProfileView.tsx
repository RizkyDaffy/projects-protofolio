
import React from 'react';
import { motion } from 'framer-motion';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;

const ProfileView: React.FC = () => {
  const sections = [
    {
      title: "Basic Info",
      items: [
        { label: "Profile Full Name", subtitle: "Rizky Daffy Al Fajr" },
        { label: "Profile Taglines", subtitle: "Backend Developer, Cybersecurity Analyst, Network Enthusiast" }
      ]
    },
    {
      title: "Profile Summary",
      items: [
        { label: "About my Role", subtitle: "I'm a dedicated Backend Developer focusing on scalable systems and security." },
        { label: "Identity & Background", subtitle: "Born and raised in Indonesia, driven by a curiosity for how complex systems interact." },
        { label: "Quick Information", subtitle: "Passionate about open-source, automation, and proactive security measures." },
        { label: "Skills Snapshot", subtitle: "Expertise in TypeScript, Python, and Go with a strong foundation in networking." },
        { label: "Experience Level", subtitle: "Over 5 years of hands-on experience in software development and security auditing." }
      ]
    },
    {
      title: "Additional Information",
      items: [
        { label: "Current Focus", subtitle: "Currently mastering cloud-native architectures and zero-trust security implementations." },
        { label: "Future Goals", subtitle: "Aspiring to architect secure, global-scale digital infrastructures." },
        { label: "Availability & activity", subtitle: "Open for innovative projects, freelance collaborations, and full-time opportunities." }
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
      <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">About Profile</h1>
      
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

      {/* Standard Pixel Footer Indicator */}
      <div className="mt-20 flex justify-center opacity-20">
        <div className="w-16 h-1 bg-white rounded-full" />
      </div>
    </MotionDiv>
  );
};

export default ProfileView;
