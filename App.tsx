
import React, { useState, useMemo, useEffect } from 'react';
import { MemoryRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from './constants';
import SidebarItem from './components/SidebarItem';
import ProfileView from './components/ProfileView';
import ExpertiseView from './components/ExpertiseView';
import ExploreProjectsView from './components/ExploreProjectsView';
import AchievementsView from './components/AchievementsView';
import ExperienceView from './components/ExperienceView';
import ToolsView from './components/ToolsView';
import JourneyView from './components/JourneyView';
import ContactView from './components/ContactView';
import EmptyView from './components/EmptyView';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track the selected ID to persist the highlight even when route is at root '/'
  const [selectedId, setSelectedId] = useState('profile');

  // Sync selectedId with current path
  useEffect(() => {
    const currentItem = NAV_ITEMS.find(item => location.pathname.startsWith(item.path));
    if (currentItem) {
      setSelectedId(currentItem.id);
    }
  }, [location.pathname]);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return NAV_ITEMS;
    return NAV_ITEMS.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    setSelectedId(item.id);
    navigate(item.path);
  };

  const isMobileDetail = location.pathname !== '/' && location.pathname !== '';
  
  const activeItemLabel = useMemo(() => {
    return NAV_ITEMS.find(item => item.id === selectedId)?.label || 'Menu';
  }, [selectedId]);

  return (
    <div className="flex h-screen bg-black overflow-hidden text-[#E3E3E3]">
      {/* Sidebar - Desktop Sidebar or Mobile List View */}
      <aside className={`
        ${isMobileDetail ? 'hidden md:flex' : 'flex'}
        flex-col w-full md:w-[400px] lg:w-[480px] shrink-0 border-r border-[#2a2a2a] p-4 bg-[#0a0a0a] overflow-hidden
      `}>
        {/* Search Header */}
        <div className="flex items-center gap-4 mb-6 mt-2 px-2">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4C7C5] group-focus-within:text-[#C2E7FF]" size={20} />
            <input 
              type="text"
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1f1f1f] rounded-full py-4 pl-12 pr-4 outline-none border border-transparent focus:border-[#C2E7FF]/50 transition-all text-lg placeholder:text-[#888]"
            />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 cursor-pointer border border-[#333]">
            <img src="https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/tentang.jpg?raw=true" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Nav List */}
        <div className="flex-1 overflow-y-auto px-2 pb-10 space-y-1 no-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <SidebarItem 
                key={item.id}
                item={item}
                isActive={selectedId === item.id}
                onClick={() => handleNavClick(item)}
              />
            ))}
          </AnimatePresence>
          {filteredItems.length === 0 && (
            <div className="text-center py-20 opacity-40 text-lg">No matching sections found</div>
          )}
        </div>
      </aside>

      {/* Content Area - Detail View */}
      <main className={`
        ${isMobileDetail ? 'flex' : 'hidden md:flex'}
        flex-col flex-1 relative bg-black overflow-hidden
      `}>
        {/* Mobile Detail Header */}
        <div className="md:hidden flex items-center p-4 border-b border-[#2a2a2a] sticky top-0 bg-black z-30">
          <button 
            onClick={() => navigate('/')} 
            className="p-3 -ml-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <span className="ml-4 font-semibold text-xl">{activeItemLabel}</span>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
          <Routes>
            <Route path="/" element={<div className="h-full flex items-center justify-center opacity-20 text-2xl font-light italic">Select a category to view details</div>} />
            <Route path="/profile/*" element={<ProfileView />} />
            <Route path="/expertise/*" element={<ExpertiseView />} />
            <Route path="/projects" element={<ExploreProjectsView />} />
            <Route path="/achievements" element={<AchievementsView />} />
            <Route path="/experience" element={<ExperienceView />} />
            <Route path="/tools" element={<ToolsView />} />
            <Route path="/journey" element={<JourneyView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/profile']}>
      <MainLayout />
    </MemoryRouter>
  );
};

export default App;
