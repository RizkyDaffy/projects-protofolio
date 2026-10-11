
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Map, History } from 'lucide-react';

const MotionDiv = motion.div as any;

const JOURNEY_ITEMS = [
  {
    year: "2024",
    events: [
      {
        title: "Cyber Summit Speaker",
        description: "Shared insights on AI-driven threat detection at the National Cybersecurity Forum.",
        image: "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=800",
        location: "Jakarta, ID"
      },
      {
        title: "Google DevFest",
        description: "Networking with global developers and exploring future tech stacks.",
        image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80&w=800",
        location: "Singapore"
      }
    ]
  },
  {
    year: "2023",
    events: [
      {
        title: "Regional Hackathon Winner",
        description: "Developed a distributed healthcare system that won 1st place in the innovation track.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        location: "Online"
      }
    ]
  }
];

const JourneyView: React.FC = () => {
  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 md:p-12 lg:p-16 max-w-6xl mx-auto pb-32"
    >
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Journey & Memorials</h1>
        <History className="text-[#C4C7C5] opacity-20" size={48} />
      </div>

      <div className="space-y-20">
        {JOURNEY_ITEMS.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-black text-[#C2E7FF]/20 italic">{section.year}</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.events.map((event, i) => (
                <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-[#C4C7C5] text-xs font-semibold uppercase tracking-widest mb-2 opacity-60">
                      <Map size={14} /> {event.location}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-[#C4C7C5] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
};

export default JourneyView;
