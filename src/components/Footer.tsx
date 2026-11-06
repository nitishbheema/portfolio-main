import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-[#25332B] bg-[#080B0A] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Copyright */}
          <div className="text-center md:text-left">
            <div className="font-mono font-bold text-lg text-[#F5F7F5] tracking-tight">
              {PERSONAL_INFO.navBrand}
            </div>
            <p className="text-xs text-[#A0AAA3] mt-1">
              Designed & Developed by <span className="text-[#F5F7F5] font-medium">{PERSONAL_INFO.name}</span>
            </p>
            <p className="text-[11px] font-mono text-[#627068] mt-0.5">
              © 2026 All Rights Reserved.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Intro Replay & Back to Top */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onReplayIntro}
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-mono text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 rounded-lg transition-colors cursor-pointer"
              title="Replay cinematic developer terminal intro"
            >
              <Terminal className="w-3.5 h-3.5 text-[#75F0A8]" />
              <span>Replay Intro</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 text-[#080B0A] bg-[#75F0A8] hover:bg-[#8bf3b6] rounded-lg transition-colors cursor-pointer shadow-sm"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
