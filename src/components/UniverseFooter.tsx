import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import { UNIVERSE_META, CHAPTERS } from '../data/universeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface UniverseFooterProps {
  onWarpToDimension: (id: string) => void;
}

export const UniverseFooter: React.FC<UniverseFooterProps> = ({ onWarpToDimension }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#25332B] bg-[#070A08] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dimensional Quick Bar */}
        <div className="pb-12 border-b border-[#25332B]/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#A0AAA3]">
            <Compass className="w-4 h-4 text-[#75F0A8]" />
            <span className="text-[#F5F7F5] font-semibold">DIMENSIONAL PORTALS:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CHAPTERS.map(ch => (
              <button
                key={ch.id}
                onClick={() => onWarpToDimension(ch.id)}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#111714] border border-[#25332B] hover:border-[#75F0A8] text-[#A0AAA3] hover:text-[#75F0A8] transition-colors"
              >
                {ch.num}. {ch.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-mono text-xl font-black text-[#F5F7F5] tracking-tight">
                {UNIVERSE_META.brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#75F0A8]" />
              <span className="text-xs font-mono text-[#75F0A8]">MY DIGITAL UNIVERSE</span>
            </div>
            <p className="text-xs text-[#A0AAA3] mt-1.5">
              A living chronicle of software, creative media, college experiences, and personal vision.
            </p>
            <p className="text-[11px] font-mono text-[#627068] mt-0.5">
              Designed & Built by Bheema Nitish Guru Datha • © 2026 All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={UNIVERSE_META.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-[#A0AAA3] hover:text-[#75F0A8] hover:border-[#75F0A8] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={UNIVERSE_META.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-[#A0AAA3] hover:text-[#75F0A8] hover:border-[#75F0A8] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#75F0A8] hover:bg-[#8bf3b6] text-[#070A08] transition-all cursor-pointer shadow-md"
              title="Return to Universe Summit"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
