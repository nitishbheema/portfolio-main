import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Film,
  Camera,
  Users,
  ArrowUpRight,
  ExternalLink,
  PlusCircle,
  Clapperboard,
  CheckCircle2
} from 'lucide-react';
import { COLLECTIVE_4VUE, CREATIVE_COLLECTION, UNIVERSE_META } from '../data/universeData';
import { GithubIcon } from './Icons';

const PERSONAL_CATEGORIES = ['All', 'Photography', 'Video Editing', 'Media Initiatives', 'Design & Media', 'Visual Storytelling'];

export const DimensionCreative: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const filteredPersonalItems = selectedCat === 'All'
    ? CREATIVE_COLLECTION
    : CREATIVE_COLLECTION.filter(item => item.category === selectedCat);

  return (
    <section id="creative" className="py-24 relative bg-[#070A08] border-t border-[#25332B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FB923C]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F43F5E]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111714] border border-[#25332B] text-xs font-mono text-[#FB923C] uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>DIMENSION 03 // CREATIVE REALM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            MY CREATIVE WORLD
          </h2>
          <div className="w-16 h-1 bg-[#FB923C] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            Collaborative cinematic productions with 4VUE, live music concert visuals, commercial brand films, and personal photographic studies.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. 4VUE — CREATIVE COLLECTIVE (COLLABORATIVE TEAM INITIATIVE) */}
        {/* ============================================================ */}
        <motion.div
          id="creative-4vue"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl bg-gradient-to-b from-[#18110D] via-[#100C09] to-[#070A08] border-2 border-[#FB923C]/50 hover:border-[#FB923C] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_-10px_rgba(251,146,60,0.25)] relative overflow-hidden"
        >
          {/* Film Strip Top Border Glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FB923C] to-transparent opacity-80" />

          {/* 4VUE Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#25332B]">
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FB923C] text-[#070A08] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Clapperboard className="w-4 h-4" />
                CREATIVE COLLECTIVE // TEAM INITIATIVE
              </span>
              <span className="text-xs font-mono text-[#A0AAA3] border border-[#25332B] px-3 py-1 rounded-lg bg-[#111714]">
                SEPARATE COLLABORATIVE BRAND
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#FB923C]">
              <span className="w-2 h-2 rounded-full bg-[#FB923C] animate-pulse" />
              <span>4 CORE MINDS // WE SHOOT • WE EDIT • WE CREATE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
            
            {/* Left: 4VUE Story, Contributions & Team */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-3xl sm:text-5xl font-black text-[#F5F7F5] tracking-tight font-sans">
                    {COLLECTIVE_4VUE.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FB923C]/10 border border-[#FB923C]/30 text-[#FB923C]">
                    CO-FOUNDED BY NITISH
                  </span>
                </div>
                <p className="text-sm sm:text-base font-mono font-bold text-[#FB923C] tracking-wide">
                  "{COLLECTIVE_4VUE.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#A0AAA3] leading-relaxed">
                {COLLECTIVE_4VUE.overview}
              </p>

              {/* My Role & Contributions */}
              <div className="p-4 rounded-2xl bg-[#111714] border border-[#25332B] space-y-2">
                <div className="text-[11px] font-mono uppercase text-[#FB923C] tracking-wider font-bold">
                  MY CONTRIBUTIONS TO 4VUE:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F5F7F5]">
                  {COLLECTIVE_4VUE.myContributions.map((c, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FB923C] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Work Badges */}
              <div>
                <div className="text-[10px] font-mono text-[#627068] uppercase tracking-wider mb-2">
                  AREAS OF PRODUCTION:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {COLLECTIVE_4VUE.areasOfWork.map(area => (
                    <span
                      key={area}
                      className="px-2.5 py-1 text-xs font-mono bg-[#111714] text-[#A0AAA3] border border-[#25332B] rounded-lg"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Team Showcase (Preserving 4-Core-Minds + Collaborator) */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[#F5F7F5] font-bold flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#FB923C]" />
                    THE FOUR CORE MINDS:
                  </span>
                  <span className="text-[#627068]">+ COLLABORATORS</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {COLLECTIVE_4VUE.coreTeam.map(member => (
                    <div
                      key={member.name}
                      className="p-2.5 rounded-xl bg-[#0D1310] border border-[#25332B] text-center group/member"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 border border-[#25332B] group-hover/member:border-[#FB923C] transition-colors">
                        <img
                          src={member.avatarUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs font-bold text-[#F5F7F5]">{member.name}</div>
                      <div className="text-[10px] font-mono text-[#A0AAA3] truncate mt-0.5">{member.role}</div>
                    </div>
                  ))}
                </div>

                {/* Additional Collaborators (displayed separately to honor brand rules) */}
                {COLLECTIVE_4VUE.collaborators && (
                  <div className="mt-3 flex items-center space-x-3 p-2 rounded-xl bg-[#111714] border border-[#25332B]/60 text-xs font-mono">
                    <span className="text-[#627068] text-[10px] uppercase">CREATIVE SUPPORT:</span>
                    {COLLECTIVE_4VUE.collaborators.map(c => (
                      <span key={c.name} className="text-[#F5F7F5] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C]" />
                        {c.name} ({c.role})
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={COLLECTIVE_4VUE.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#070A08] bg-[#FB923C] hover:bg-[#fdba74] transition-all shadow-md hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VISIT 4VUE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={COLLECTIVE_4VUE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold text-[#F5F7F5] bg-[#111714] hover:bg-[#161F1A] border border-[#25332B] hover:border-[#FB923C]/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#FB923C]" />
                  <span>EXPLORE CREATIVE WORK</span>
                </a>
              </div>

            </div>

            {/* Right: Interactive 4VUE Works Showreel (Anuv Jain, Milano, Event Videography) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border-2 border-[#25332B] bg-[#070A08] shadow-2xl">
                {/* Active Work Visual Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D0B] group">
                  <img
                    src={COLLECTIVE_4VUE.featuredWorks[activeWorkIndex].posterUrl}
                    alt={COLLECTIVE_4VUE.featuredWorks[activeWorkIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A08] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FB923C] text-[#070A08] uppercase">
                    4VUE PRODUCTION REEL
                  </div>

                  <div className="absolute bottom-4 inset-x-4">
                    <div className="text-[10px] font-mono text-[#FB923C] uppercase tracking-wider">
                      {COLLECTIVE_4VUE.featuredWorks[activeWorkIndex].type}
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#F5F7F5] mt-1">
                      {COLLECTIVE_4VUE.featuredWorks[activeWorkIndex].title}
                    </div>
                    <p className="text-xs text-[#A0AAA3] mt-1 line-clamp-2">
                      {COLLECTIVE_4VUE.featuredWorks[activeWorkIndex].description}
                    </p>
                  </div>
                </div>

                {/* Work Selector Tabs */}
                <div className="p-3 bg-[#111714] border-t border-[#25332B] grid grid-cols-3 gap-2">
                  {COLLECTIVE_4VUE.featuredWorks.map((work, idx) => (
                    <button
                      key={work.title}
                      onClick={() => setActiveWorkIndex(idx)}
                      className={`p-2 rounded-xl text-left font-mono text-xs transition-all ${
                        activeWorkIndex === idx
                          ? 'bg-[#18110D] border border-[#FB923C] text-[#FB923C]'
                          : 'bg-[#0D1310] border border-[#25332B] text-[#A0AAA3] hover:text-[#F5F7F5]'
                      }`}
                    >
                      <div className="text-[9px] uppercase tracking-wider text-[#627068]">
                        WORK 0{idx + 1}
                      </div>
                      <div className="font-bold truncate mt-0.5">{work.title.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. PERSONAL CREATIVE WORK (PHOTOGRAPHY, EDITS, POSTERS)      */}
        {/* ============================================================ */}
        <div className="pt-8 border-t border-[#25332B]/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#FB923C] mb-1">
                <Camera className="w-4 h-4" />
                <span>PERSONAL CRAFT & EXPLORATIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7F5]">
                Photography, Visuals & Media Experiments
              </h3>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {PERSONAL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedCat === cat
                      ? 'bg-[#FB923C] text-[#070A08] font-bold'
                      : 'bg-[#111714] text-[#A0AAA3] border border-[#25332B] hover:text-[#F5F7F5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Real Portrait Card in Photography Context */}
            <div className="group rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#FB923C]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-[#070A08] overflow-hidden">
                <img
                  src={UNIVERSE_META.photoUrl}
                  alt="Natural light portraiture"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: '46% 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1310] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FB923C] text-[#070A08] uppercase">
                  FEATURED PHOTOGRAPHY
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#FB923C] uppercase tracking-wider">
                    LIGHT & EXPRESSION
                  </div>
                  <h4 className="text-base font-bold text-[#F5F7F5] mt-1 group-hover:text-[#FB923C] transition-colors">
                    Natural Portrait & Ambient Light Framing
                  </h4>
                  <p className="text-xs text-[#A0AAA3] mt-2 leading-relaxed">
                    Focusing on candid natural daylight, depth of field, and authentic human emotion without heavy post-processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Collection Items */}
            {filteredPersonalItems.map(item => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#FB923C]/50 p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                    <span className="text-xs font-mono font-semibold text-[#FB923C]">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#627068]">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#F5F7F5] mt-4 group-hover:text-[#FB923C] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A0AAA3] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#25332B] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111714] text-[#A0AAA3] border border-[#25332B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Expandable Drop-In Container for Future Creative Projects */}
            <div className="rounded-2xl bg-[#111714]/40 border-2 border-dashed border-[#25332B] hover:border-[#FB923C]/40 p-6 flex flex-col items-center justify-center text-center transition-all group min-h-[260px]">
              <div className="p-3 rounded-full bg-[#111714] border border-[#25332B] text-[#FB923C] group-hover:scale-110 transition-transform mb-3">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#F5F7F5]">
                New Creative Drops In Progress
              </h4>
              <p className="text-xs text-[#A0AAA3] mt-1.5 max-w-xs">
                As 4VUE and my independent projects shoot new music concerts, edit cinematic aftermovies, or design college posters, they plug directly into this collection.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
