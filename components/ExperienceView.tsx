
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const MotionDiv = motion.div as any;

const EXPERIENCES = [
  {
    company: "TechNexus Solutions",
    role: "Senior Backend Developer",
    period: "Jan 2023 - Present",
    location: "Remote / Jakarta",
    description: "Leading the architectural design of microservices and optimizing database performance for high-traffic applications.",
    achievements: [
      "Reduced server latency by 40% through Redis implementation.",
      "Architected a real-time notification system serving 1M+ users.",
      "Mentored a team of 5 junior developers in secure coding practices."
    ]
  },
  {
    company: "CyberGuard Systems",
    role: "Cybersecurity Analyst Intern",
    period: "Jun 2022 - Dec 2022",
    location: "Bandung, Indonesia",
    description: "Performed vulnerability assessments and assisted in incident response for financial sector clients.",
    achievements: [
      "Identified 12 critical vulnerabilities in client web applications.",
      "Automated log analysis using Python, saving 10 hours per week.",
      "Contributed to the development of the company's internal security framework."
    ]
  },
  {
    company: "Freelance Projects",
    role: "Fullstack Web Developer",
    period: "2020 - 2022",
    location: "Remote",
    description: "Developed various custom web solutions for startups and local businesses.",
    achievements: [
      "Built an e-commerce platform with integrated local payment gateways.",
      "Developed a custom CRM for a local logistics company.",
      "Successfully delivered over 15+ projects with high client satisfaction."
    ]
  }
];

const ExperienceView: React.FC = () => {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto pb-32"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Professional Experience</h1>
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 border-l border-[#2a2a2a] group">
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#C2E7FF] border-4 border-black group-hover:scale-125 transition-transform" />
            
            <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#C2E7FF] transition-colors">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-[#C4C7C5] mt-1">
                    <span className="font-medium text-lg">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-[#C4C7C5] opacity-60">
                  <div className="flex items-center gap-2"><Calendar size={14} /> {exp.period}</div>
                  <div className="flex items-center gap-2 mt-1"><MapPin size={14} /> {exp.location}</div>
                </div>
              </div>
              
              <p className="text-[#E3E3E3] text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex gap-3 text-[#C4C7C5]">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C2E7FF] shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
};

export default ExperienceView;
