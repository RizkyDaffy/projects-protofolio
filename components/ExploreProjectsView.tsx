
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListFilter, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

// Use any to bypass Framer Motion type issues in this environment
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
const MotionPicture = (motion as any).picture;

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Socialites',
    description: 'Boost your social media and gain more follower, or try our micro-payment system for every task.',
    desktopImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/socialites.png?raw=true',
    mobileImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/socialites.png?raw=true',
    thumbnail: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/socialites.png?raw=true',
  },
  {
    id: '2',
    title: 'Better Youtube Music',
    description: 'A DOM Projects, where you can transform your youtube music ui into apple music ui with dom manipulations',
    desktopImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/yt.jpg?raw=true',
    mobileImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/yt.jpg?raw=true',
    thumbnail: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/yt.jpg?raw=true',
  },
  {
    id: '3',
    title: 'Ingetin Woy',
    description: 'Sometimes a tons of task and homework can be forgoted, thats why i make this task remember apps.',
    desktopImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/ingat.jpg?raw=true',
    mobileImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/ingat.jpg?raw=true',
    thumbnail: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/ingat.jpg?raw=true',
  },
  {
    id: '4',
    title: 'Votings And CRUDs',
    description: 'A PHP Based app that mean to take a survey using php and mysql (its my school projects hehe)',
    desktopImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/crud.jpg?raw=true',
    mobileImage: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/crud.jpg?raw=true',
    thumbnail: 'https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/crud.jpg?raw=true',
  },
  
];

const ExploreProjectsView: React.FC = () => {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeProject = useMemo(() => 
    PROJECTS.find(p => p.id === activeId) || PROJECTS[0]
  , [activeId]);

  // Center the active project in the scroll container on mobile when selected
  useEffect(() => {
    if (!isExpanded && scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-id="${activeId}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId, isExpanded]);

  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 md:p-12 lg:p-16 max-w-6xl mx-auto space-y-6 md:space-y-10 pb-24"
    >
      <h1 className="text-3xl md:text-5xl font-bold">Explore Projects</h1>

      {/* Main Preview Card */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#1a1a1a]">
        <AnimatePresence mode="wait">
          <MotionPicture
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <source media="(max-width: 768px)" srcSet={activeProject.mobileImage} />
            <img 
              src={activeProject.desktopImage} 
              alt={activeProject.title} 
              className="w-full h-full object-cover"
            />
          </MotionPicture>
        </AnimatePresence>
      </div>

      {/* Project Info Block */}
      <div className="bg-[#1a1a1a] p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] min-h-[140px]">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{activeProject.title}</h2>
            <p className="text-[#C4C7C5] text-base md:text-lg leading-relaxed max-w-3xl opacity-80">
              {activeProject.description}
            </p>
          </MotionDiv>
        </AnimatePresence>
      </div>

      {/* Project List with Slider */}
      <div className="bg-[#1a1a1a] p-4 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative flex flex-col items-center">
        <div 
          ref={scrollContainerRef}
          className={`
            w-full flex gap-3 md:gap-4 transition-all duration-500 pb-4 no-scrollbar
            ${isExpanded ? 'flex-wrap justify-center overflow-visible' : 'flex-nowrap overflow-x-auto snap-x snap-mandatory'}
          `}
        >
          {PROJECTS.map((project) => {
            const isActive = project.id === activeId;
            return (
              <MotionButton
                key={project.id}
                data-id={project.id}
                onClick={() => setActiveId(project.id)}
                layout
                className={`
                  relative h-16 md:h-20 shrink-0 rounded-2xl overflow-hidden focus:outline-none snap-center
                  ${isActive ? 'w-36 md:w-56' : 'w-16 md:w-20'}
                `}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {isActive && (
                  <MotionDiv
                    layoutId="active-stroke"
                    className="absolute inset-0 border-2 border-white rounded-2xl z-20 pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className={`
                    w-full h-full object-cover transition-opacity duration-300
                    ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-60'}
                  `}
                />
              </MotionButton>
            );
          })}
        </div>

        {/* See All Toggle Pill */}
        <div className="mt-4 md:mt-8">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 text-[#E3E3E3] transition-all py-3 px-6 rounded-full bg-[#2a2a2a] hover:bg-[#333] active:scale-95"
          >
            <ListFilter size={20} className="text-[#C4C7C5]" />
            <span className="font-medium text-sm md:text-base">
              {isExpanded ? 'See less projects' : 'See all projects'}
            </span>
            <MotionDiv
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-[#C4C7C5]" />
            </MotionDiv>
          </button>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ExploreProjectsView;
