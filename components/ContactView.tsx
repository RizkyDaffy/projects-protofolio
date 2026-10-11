
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare, 
  ArrowLeft, 
  Search, 
  MoreVertical,
  ExternalLink
} from 'lucide-react';

const MotionDiv = motion.div as any;

const CONTACT_METHODS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "rizky.daffy@example.com",
    action: "mailto:rizky.daffy@example.com",
    color: "bg-[#EA4335]"
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/rizkydaffy",
    action: "https://linkedin.com/in/rizkydaffy",
    color: "bg-[#0A66C2]"
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/rizkydaffy",
    action: "https://github.com/rizkydaffy",
    color: "bg-[#333333]"
  },
  {
    icon: <MessageSquare size={20} />,
    label: "Discord",
    value: "daffy.rizky",
    action: "#",
    color: "bg-[#5865F2]"
  }
];

const ContactView: React.FC = () => {
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
          Get in touch
        </h1>

        {/* List of contact methods - Settings style */}
        <div className="space-y-8 mb-16">
          {CONTACT_METHODS.map((method, index) => (
            <a 
              key={index} 
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 cursor-default group"
            >
              {/* Icon Circle */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${method.color} flex items-center justify-center shrink-0 text-white shadow-lg`}>
                {method.icon}
              </div>

              {/* Info Container */}
              <div className="flex flex-col border-b border-white/5 pb-2 flex-1 relative">
                <span className="text-lg md:text-xl font-medium text-white leading-tight">
                  {method.label}
                </span>
                <span className="text-sm md:text-base text-[#9aa0a6] font-normal mt-0.5 truncate">
                  {method.value}
                </span>
                <ExternalLink size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9aa0a6] opacity-30" />
              </div>
            </a>
          ))}
        </div>

        {/* Collaboration CTA Section */}
        <div className="mt-12 bg-[#1a1a1a] p-10 rounded-[2.5rem] border border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to collaborate?</h2>
          <p className="text-[#9aa0a6] mb-8 text-lg max-w-lg mx-auto leading-relaxed">
            Send me a direct message on any of the platforms above or drop an email.
          </p>
          <a 
            href="mailto:rizky.daffy@example.com"
            className="inline-flex items-center gap-3 bg-[#C2E7FF] text-[#001D35] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#A8D7F0] transition-all active:scale-95 shadow-md"
          >
            <Mail size={22} />
            Send Email Now
          </a>
        </div>
      </div>

      {/* Navigation pill indicator placeholder (standard Pixel OS) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full hidden md:block" />
    </MotionDiv>
  );
};

export default ContactView;
