import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowDownRight,
  Sparkles,
  MapPin,
  Film,
  Cpu,
  Theater,
  GraduationCap,
  Rocket
} from 'lucide-react';
import { UNIVERSE_META, CHAPTERS } from '../data/universeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface UniverseHeroProps {
  onWarpToDimension: (id: string) => void;
}

export const UniverseHero: React.FC<UniverseHeroProps> = ({ onWarpToDimension }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      {/* Dimensional Ambient Background Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-[#75F0A8]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#38BDF8]/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C084FC]/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Universe Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111714] border border-[#25332B] text-xs font-mono text-[#F5F7F5] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#75F0A8] animate-pulse" />
            <span className="text-[#A0AAA3]">WELCOME TO</span>
            <span className="text-[#75F0A8] font-bold">NITISH'S UNIVERSE</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#111714]/80 border border-[#25332B] text-xs font-mono text-[#A0AAA3]">
            <MapPin className="w-3.5 h-3.5 text-[#75F0A8]" />
            <span>Avadi, Tamil Nadu, India</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#111714]/80 border border-[#25332B] text-xs font-mono text-[#75F0A8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>6 Dimensions</span>
          </div>
        </motion.div>

        {/* Main Two-Column Gateway */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Kinetic Statement & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-[#F5F7F5] leading-[1.08]">
                BHEEMA <span className="text-[#75F0A8]">NITISH</span> GURU DATHA
              </h1>
              <div className="mt-3 flex items-center gap-2 text-sm sm:text-lg font-mono text-[#A0AAA3]">
                <span className="w-6 h-0.5 bg-[#75F0A8]" />
                <span className="text-[#F5F7F5] font-semibold">Creator</span> •
                <span className="text-[#75F0A8] font-semibold">Engineer</span> •
                <span className="text-[#38BDF8] font-semibold">Visual Storyteller</span> •
                <span className="text-[#C084FC] font-semibold">Performer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A0AAA3] leading-relaxed max-w-2xl font-sans"
            >
              {UNIVERSE_META.quote}
            </motion.p>

            {/* Dimensional Dimension Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2"
            >
              <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono">
                <Cpu className="w-4 h-4 text-[#4ADE80] shrink-0" />
                <span className="truncate text-[#F5F7F5]">PhishSense & NextRole</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono">
                <Film className="w-4 h-4 text-[#FB923C] shrink-0" />
                <span className="truncate text-[#F5F7F5]">4VUE Media Collective</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono">
                <GraduationCap className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="truncate text-[#F5F7F5]">Vel Tech CSE (8.54)</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono">
                <Theater className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span className="truncate text-[#F5F7F5]">Arts & Drama Club</span>
              </div>
            </motion.div>

            {/* Quick Actions & Social Coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onWarpToDimension('identity')}
                className="group flex items-center space-x-2.5 px-6 py-3 rounded-xl text-sm font-mono font-bold text-[#070A08] bg-[#75F0A8] hover:bg-[#8bf3b6] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(117,240,168,0.4)] cursor-pointer"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>EXPLORE MY WORLD</span>
              </button>

              <button
                onClick={() => onWarpToDimension('future')}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-mono text-[#F5F7F5] bg-[#111714] hover:bg-[#161F1A] border border-[#25332B] hover:border-[#75F0A8]/50 transition-all cursor-pointer"
              >
                <Rocket className="w-4 h-4 text-[#F472B6]" />
                <span>Future Vision</span>
              </button>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={UNIVERSE_META.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] hover:border-[#75F0A8] text-[#A0AAA3] hover:text-[#75F0A8] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={UNIVERSE_META.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] hover:border-[#75F0A8] text-[#A0AAA3] hover:text-[#75F0A8] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Authentic Portrait Universe Centerpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Multidimensional Radial Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#75F0A8]/20 via-[#38BDF8]/10 to-[#C084FC]/15 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              {/* Portrait Container with floating motion */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden bg-[#0D1310] border-2 border-[#25332B] hover:border-[#75F0A8]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all group"
              >
                {/* Header title */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#111714] border-b border-[#25332B]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#75F0A8] animate-pulse" />
                    <span className="text-[11px] font-mono text-[#F5F7F5] font-bold tracking-wider">
                      NITISH
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A0AAA3]">
                    B.Tech CSE • 2023–2027
                  </span>
                </div>

                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070A08]">
                  <img
                    src={UNIVERSE_META.photoUrl}
                    alt={UNIVERSE_META.fullName}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: '46% 30%' }}
                  />

                  {/* Gradient Depth Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A08] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Overlay Identity Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-[#0D1310]/85 backdrop-blur-md border border-[#25332B]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#F5F7F5]">
                          Bheema Nitish Guru Datha
                        </div>
                        <div className="text-[11px] font-mono text-[#75F0A8] mt-0.5">
                          Computer Science • Arts • Visual Media
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-mono text-[#A0AAA3]">LOCATION</div>
                        <div className="text-[11px] font-mono font-medium text-[#38BDF8]">Avadi, TN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* 6 Dimension Quick-Warp Portal Cards (ToyFight / Resn inspired) */}
        <div className="mt-16 pt-8 border-t border-[#25332B]/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#A0AAA3]">
              <Compass className="w-4 h-4 text-[#75F0A8]" />
              <span className="text-[#F5F7F5] font-bold uppercase tracking-wider">
                EXPLORE THE 6 DIMENSIONS:
              </span>
            </div>
            <span className="text-xs font-mono text-[#627068] hidden sm:inline">
              SELECT A DIMENSION TO ENTER
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CHAPTERS.map(ch => (
              <button
                key={ch.id}
                onClick={() => onWarpToDimension(ch.id)}
                className="group p-3.5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/60 text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div
                  className="w-2 h-2 rounded-full mb-2.5"
                  style={{ backgroundColor: ch.themeColor }}
                />
                <div className="text-[10px] font-mono text-[#627068] group-hover:text-[#75F0A8] transition-colors">
                  DIMENSION {ch.num}
                </div>
                <div className="text-xs font-mono font-bold text-[#F5F7F5] mt-1 group-hover:text-[#75F0A8] transition-colors">
                  {ch.title}
                </div>
                <div className="mt-2.5 flex items-center text-[10px] font-mono text-[#A0AAA3] group-hover:text-[#75F0A8] transition-colors">
                  <span>ENTER</span>
                  <ArrowDownRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
