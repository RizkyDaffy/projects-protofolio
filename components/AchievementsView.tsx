
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, Award } from 'lucide-react';
import { Certificate } from '../types';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;

const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    date: 'Dec 2024',
    imageUrl: 'https://images.unsplash.com/photo-1568992687345-269c6743f177?auto=format&fit=crop&q=80&w=800',
    category: 'Cybersecurity'
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: 'Oct 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: 'Development'
  },
  {
    id: '3',
    title: 'IBM Cloud Devops',
    issuer: 'IBM',
    date: 'Aug 2024',
    imageUrl: 'https://images.unsplash.com/photo-1667372333374-0d449bc2bb8a?auto=format&fit=crop&q=80&w=800',
    category: 'Cloud'
  },
  {
    id: '4',
    title: 'Network Defense Essentials',
    issuer: 'EC-Council',
    date: 'Jun 2024',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    category: 'Cybersecurity'
  },
  {
    id: '5',
    title: 'Certified AppSec Professional',
    issuer: 'Practical DevSecOps',
    date: 'Apr 2024',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    category: 'Cybersecurity'
  },
  {
    id: '6',
    title: 'Python for Data Science',
    issuer: 'DeepLearning.AI',
    date: 'Feb 2024',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    category: 'Development'
  }
];

const AchievementsView: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const groupedCertificates = useMemo(() => {
    return CERTIFICATES.reduce((acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = [];
      acc[cert.category].push(cert);
      return acc;
    }, {} as Record<string, Certificate[]>);
  }, []);

  return (
    <div className="p-4 md:p-12 lg:p-16 max-w-7xl mx-auto pb-32">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Achievements</h1>
        <div className="hidden md:flex items-center gap-4 text-[#C4C7C5]">
          <span className="bg-[#1a1a1a] px-4 py-2 rounded-full border border-white/5 text-sm flex items-center gap-2">
            <Award size={16} className="text-[#C2E7FF]" />
            {CERTIFICATES.length} Credentials
          </span>
        </div>
      </div>

      <div className="space-y-16">
        {/* Fix: Explicitly cast Object.entries result to resolve 'unknown' type error for 'items' */}
        {(Object.entries(groupedCertificates) as [string, Certificate[]][]).map(([category, items]) => (
          <section key={category} className="space-y-6">
            <div className="flex items-center gap-4 sticky top-0 z-20 bg-black py-4 -mx-4 px-4 border-b border-white/5 md:border-none">
              <h2 className="text-xl font-semibold text-[#E3E3E3]">{category}</h2>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {items.map((cert) => (
                <MotionDiv
                  key={cert.id}
                  layoutId={`cert-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative aspect-square rounded-lg md:rounded-2xl overflow-hidden cursor-pointer bg-[#1a1a1a]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium line-clamp-1">{cert.title}</span>
                    <span className="text-[#C4C7C5] text-xs opacity-80">{cert.issuer}</span>
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </MotionDiv>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <MotionDiv
              layoutId={`cert-${selectedCert.id}`}
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh] border border-white/10"
            >
              <div className="flex-1 relative bg-[#1a1a1a] flex items-center justify-center p-4 md:p-8">
                <img 
                  src={selectedCert.imageUrl} 
                  alt={selectedCert.title} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              <div className="w-full md:w-[320px] lg:w-[400px] p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-[#C2E7FF] text-xs font-semibold uppercase tracking-widest">{selectedCert.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedCert.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-white/5">
                        <Award size={24} className="text-[#C4C7C5]" />
                      </div>
                      <div>
                        <p className="text-[#C4C7C5] text-sm mb-1 opacity-60">Issuer</p>
                        <p className="text-lg font-medium">{selectedCert.issuer}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-white/5">
                        <Calendar size={24} className="text-[#C4C7C5]" />
                      </div>
                      <div>
                        <p className="text-[#C4C7C5] text-sm mb-1 opacity-60">Issued Date</p>
                        <p className="text-lg font-medium">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedCert(null)}
                  className="mt-12 w-full py-4 rounded-full bg-[#C2E7FF] text-[#001D35] font-semibold text-lg hover:bg-[#A8D7F0] transition-colors"
                >
                  Close Preview
                </button>
              </div>

              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
              >
                <X size={24} />
              </button>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsView;
