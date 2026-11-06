import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onReplayIntro: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0A]/90 backdrop-blur-md border-b border-[#25332B] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center space-x-2 text-left focus:outline-none"
          >
            <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors">
              {PERSONAL_INFO.navBrand}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#75F0A8] group-hover:scale-150 transition-transform" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-[#75F0A8] bg-[#75F0A8]/10'
                      : 'text-[#A0AAA3] hover:text-[#F5F7F5] hover:bg-[#111714]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#75F0A8] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Replay Intro + Resume Download */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onReplayIntro}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono text-[#A0AAA3] hover:text-[#75F0A8] border border-[#25332B] hover:border-[#75F0A8]/40 bg-[#111714]/60 rounded-md transition-all duration-200"
              title="Replay cinematic terminal intro"
            >
              <Terminal className="w-3.5 h-3.5 text-[#75F0A8]" />
              <span className="hidden xl:inline">REPLAY</span> INTRO
            </button>

            <a
              href="/resume.pdf"
              download="Bheema_Nitish_Guru_Datha_Resume.pdf"
              className="flex items-center space-x-2 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#080B0A] bg-[#75F0A8] hover:bg-[#8bf3b6] rounded-md transition-all duration-200 font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(117,240,168,0.3)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onReplayIntro}
              className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] border border-[#25332B] rounded-md bg-[#111714]"
              title="Replay Intro"
            >
              <Terminal className="w-4 h-4 text-[#75F0A8]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F7F5] border border-[#25332B] rounded-md bg-[#111714] hover:border-[#75F0A8]/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0D1310]/95 backdrop-blur-xl border-b border-[#25332B] px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#75F0A8]' : 'text-[#A0AAA3] hover:text-[#F5F7F5]'
                  }`}
                >
                  <span className="tracking-wide uppercase">{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#75F0A8]' : 'text-[#25332B]'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#25332B] flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download="Bheema_Nitish_Guru_Datha_Resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080B0A] bg-[#75F0A8] rounded-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
