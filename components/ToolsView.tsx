
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Search, MoreVertical, Code2, Layers, Database, 
  ShieldCheck, Terminal, Globe, Zap, Box, Cloud, Settings, 
  Cpu, Heart, MessageSquare, Lightbulb, Users
} from 'lucide-react';

const MotionDiv = motion.div as any;

interface ToolItem {
  name: string;
  icon: React.ReactNode;
  iconColor: string;
  description: string;
}

interface ToolCategory {
  category: string;
  items: ToolItem[];
}

const TOOLS_DATA: ToolCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "TypeScript", icon: <Code2 size={20} />, iconColor: "bg-[#3178C6]", description: "Type-safe JavaScript development" },
      { name: "Python", icon: <Code2 size={20} />, iconColor: "bg-[#3776AB]", description: "General-purpose scripting & data" },
      { name: "Go", icon: <Globe size={20} />, iconColor: "bg-[#00ADD8]", description: "High-performance backend systems" },
      { name: "React", icon: <Layers size={20} />, iconColor: "bg-[#61DAFB] text-black", description: "Frontend UI library" },
      { name: "Next.js", icon: <Zap size={20} />, iconColor: "bg-white text-black", description: "Full-stack React framework" },
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "Docker", icon: <Box size={20} />, iconColor: "bg-[#2496ED]", description: "Containerization and environment isolation" },
      { name: "Kubernetes", icon: <Cloud size={20} />, iconColor: "bg-[#326CE5]", description: "Production-grade container orchestration" },
      { name: "Git & GitHub", icon: <Terminal size={20} />, iconColor: "bg-[#F05032]", description: "Version control and CI/CD pipelines" },
      { name: "Postman", icon: <Settings size={20} />, iconColor: "bg-[#FF6C37]", description: "API development and automated testing" },
      { name: "Terraform", icon: <Box size={20} />, iconColor: "bg-[#7B42BC]", description: "Infrastructure as Code (IaC)" },
    ]
  },
  {
    category: "Cyber & Network Tools",
    items: [
      { name: "Metasploit", icon: <ShieldCheck size={20} />, iconColor: "bg-[#FF5C5C]", description: "Penetration testing and exploit research" },
      { name: "Wireshark", icon: <Settings size={20} />, iconColor: "bg-[#1679A7]", description: "Deep packet inspection and analysis" },
      { name: "Burp Suite", icon: <ShieldCheck size={20} />, iconColor: "bg-[#FF6633]", description: "Web application security testing" },
      { name: "Nmap", icon: <Cpu size={20} />, iconColor: "bg-[#4B8BBE]", description: "Network discovery and security auditing" },
      { name: "Splunk", icon: <Search size={20} />, iconColor: "bg-[#000000] border border-white/20", description: "SIEM and log data analysis" },
    ]
  },
  {
    category: "My Soft Skills",
    items: [
      { name: "Problem Solving", icon: <Lightbulb size={20} />, iconColor: "bg-[#FBBC04] text-black", description: "Analytical thinking and root cause analysis" },
      { name: "Team Leadership", icon: <Users size={20} />, iconColor: "bg-[#34A853]", description: "Leading sprints and mentoring developers" },
      { name: "Communication", icon: <MessageSquare size={20} />, iconColor: "bg-[#4285F4]", description: "Technical writing and client relations" },
      { name: "Adaptability", icon: <Zap size={20} />, iconColor: "bg-[#A142F4]", description: "Quickly mastering new technologies" },
      { name: "Critical Thinking", icon: <Heart size={20} />, iconColor: "bg-[#EA4335]", description: "Objective analysis of complex security issues" },
    ]
  }
];

const ToolsView: React.FC = () => {
  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black min-h-screen flex flex-col"
    >
      {/* Pixel-style Header bar */}
      <div className="flex items-center justify-between p-4 md:p-6 sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-6">
          <ArrowLeft size={24} className="text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <Search size={24} className="text-white cursor-pointer" />
          <MoreVertical size={24} className="text-white cursor-pointer" />
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-14 pb-32">
        <h1 className="text-3xl md:text-4xl font-normal text-white mb-10 mt-2">
          Languages & tools
        </h1>

        <div className="space-y-12">
          {TOOLS_DATA.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h2 className="text-[#c2e7ff] text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-4 px-2">
                {cat.category}
              </h2>
              
              <div className="space-y-7">
                {cat.items.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-5 cursor-default group"
                  >
                    {/* Tool Icon Circle */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${tool.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                      {tool.icon}
                    </div>

                    {/* Tool Info */}
                    <div className="flex flex-col border-b border-white/5 pb-2 flex-1">
                      <span className="text-lg md:text-xl font-medium text-white leading-tight">
                        {tool.name}
                      </span>
                      <span className="text-sm md:text-base text-[#9aa0a6] font-normal mt-0.5">
                        {tool.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation pill indicator placeholder (standard Pixel OS) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full hidden md:block" />
    </MotionDiv>
  );
};

export default ToolsView;
