import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileDown, Radio, ChevronRight } from 'lucide-react';
import { CHAPTERS, UNIVERSE_META } from '../data/universeData';

interface UniverseNavProps {
  activeChapter: string;
  onSelectChapter: (id: string) => void;
}

export const UniverseNav: React.FC<UniverseNavProps> = ({ activeChapter, onSelectChapter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live time in Avadi / IST
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    onSelectChapter(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A08]/90 backdrop-blur-xl border-b border-[#25332B] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Telemetry Indicator */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center space-x-2.5 text-left focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111714] border border-[#25332B] group-hover:border-[#75F0A8] flex items-center justify-center transition-colors">
                <Sparkles className="w-4 h-4 text-[#75F0A8] group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <span className="font-mono text-xl font-black tracking-tight text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors block leading-none">
                  {UNIVERSE_META.brand}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#A0AAA3] uppercase">
                  DIGITAL UNIVERSE
                </span>
              </div>
            </button>

            {/* Time & Location Pill */}
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111714]/80 border border-[#25332B] text-[11px] font-mono text-[#A0AAA3]">
              <Radio className="w-3 h-3 text-[#75F0A8] animate-pulse" />
              <span>AVADI, IN</span>
              <span className="text-[#25332B]">•</span>
              <span className="text-[#F5F7F5]">{currentTime}</span>
            </div>
          </div>

          {/* Desktop Dimension Chapter Bar */}
          <div className="hidden lg:flex items-center space-x-1 p-1 rounded-xl bg-[#111714]/90 border border-[#25332B] backdrop-blur-md">
            {CHAPTERS.map(ch => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleNavClick(ch.id)}
                  className={`group relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-[#070A08] font-bold shadow-sm'
                      : 'text-[#A0AAA3] hover:text-[#F5F7F5] hover:bg-[#161F1A]'
                  }`}
                  style={{
                    backgroundColor: isActive ? ch.themeColor : 'transparent'
                  }}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#070A08]' : 'text-[#627068] group-hover:text-[#75F0A8]'}`}>
                    {ch.num}
                  </span>
                  <span>{ch.title}</span>
                </button>
              );
            })}
          </div>

          {/* Action: Resume & Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            <a
              href={UNIVERSE_META.resumeUrl}
              download="Bheema_Nitish_Guru_Datha_Resume.pdf"
              className="hidden sm:inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#070A08] bg-[#75F0A8] hover:bg-[#8bf3b6] transition-all shadow-sm hover:shadow-[0_0_15px_rgba(117,240,168,0.3)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>ARCHIVE RESUME</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#111714] border border-[#25332B] text-[#F5F7F5] hover:border-[#75F0A8]"
              aria-label="Toggle Dimension Navigator"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070A08]/98 backdrop-blur-2xl border-b border-[#25332B] px-6 py-6 shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#627068] mb-3">
            EXPLORE UNIVERSE DIMENSIONS:
          </div>
          <div className="flex flex-col space-y-2">
            {CHAPTERS.map(ch => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleNavClick(ch.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    isActive
                      ? 'bg-[#111714] border-[#75F0A8] text-[#F5F7F5]'
                      : 'border-[#25332B] bg-[#0D1310] text-[#A0AAA3] hover:text-[#F5F7F5]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: ch.themeColor }}
                    />
                    <div>
                      <div className="text-xs font-mono font-bold tracking-wider">
                        {ch.num}. {ch.title}
                      </div>
                      <div className="text-[11px] text-[#627068] font-sans">
                        {ch.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#75F0A8]" />
                </button>
              );
            })}

            <div className="pt-3">
              <a
                href={UNIVERSE_META.resumeUrl}
                download="Bheema_Nitish_Guru_Datha_Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-mono font-bold text-[#070A08] bg-[#75F0A8]"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
