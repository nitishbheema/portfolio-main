import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldAlert,
  Radio,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { TECH_PROJECTS } from '../data/universeData';
import { CyberVisual } from './CyberVisual';
import { GithubIcon } from './Icons';

export const DimensionTech: React.FC = () => {
  const [showSchematic, setShowSchematic] = useState(false);
  const [activePhishTab, setActivePhishTab] = useState<'overview' | 'architecture' | 'phishchain'>('overview');

  const phishsense = TECH_PROJECTS.find(p => p.id === 'phishsense')!;
  const nextrole = TECH_PROJECTS.find(p => p.id === 'nextrole')!;
  const smartKitchen = TECH_PROJECTS.find(p => p.id === 'smart-kitchen')!;
  const finlytics = TECH_PROJECTS.find(p => p.id === 'finlytics')!;

  return (
    <section id="tech" className="py-24 relative bg-[#070A08]/95 border-t border-[#25332B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4ADE80]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-[#10B981]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111714] border border-[#25332B] text-xs font-mono text-[#4ADE80] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>DIMENSION 04 // TECH REALM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            MY TECH WORLD
          </h2>
          <div className="w-16 h-1 bg-[#4ADE80] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            Engineering robust digital systems: from AI-driven behavioral phishing detection to India-first recruitment technology, physical IoT hardware, and relational apps.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. FLAGSHIP PROJECT: PHISHSENSE                             */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl bg-gradient-to-b from-[#0D1511] via-[#09100D] to-[#070A08] border-2 border-[#4ADE80]/50 hover:border-[#4ADE80] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_-10px_rgba(74,222,128,0.25)] relative overflow-hidden"
        >
          {/* Subtle top scanline */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#4ADE80] to-transparent opacity-75" />

          {/* Flagship Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#25332B]">
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#4ADE80] text-[#070A08] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <ShieldAlert className="w-4 h-4" />
                FLAGSHIP TECHNICAL PROJECT
              </span>
              <span className="text-xs font-mono text-[#A0AAA3] border border-[#25332B] px-3 py-1 rounded-lg bg-[#111714]">
                {phishsense.year} • AI & CYBERSECURITY
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#4ADE80]">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
              <span>DEFENSE ENGINE: ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Left: PhishSense Breakdown */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#F5F7F5] tracking-tight">
                  {phishsense.title}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#4ADE80] mt-1.5">
                  {phishsense.tagline}
                </p>
              </div>

              <p className="text-sm text-[#A0AAA3] leading-relaxed">
                {phishsense.description}
              </p>

              {/* Sub-tab navigation */}
              <div className="flex items-center space-x-2 pt-1 border-b border-[#25332B] pb-2 text-xs font-mono">
                <button
                  onClick={() => setActivePhishTab('overview')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activePhishTab === 'overview'
                      ? 'bg-[#4ADE80] text-[#070A08] font-bold'
                      : 'text-[#A0AAA3] hover:text-[#F5F7F5]'
                  }`}
                >
                  Core Capabilities
                </button>
                <button
                  onClick={() => setActivePhishTab('architecture')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activePhishTab === 'architecture'
                      ? 'bg-[#4ADE80] text-[#070A08] font-bold'
                      : 'text-[#A0AAA3] hover:text-[#F5F7F5]'
                  }`}
                >
                  My Contribution
                </button>
                <button
                  onClick={() => setActivePhishTab('phishchain')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activePhishTab === 'phishchain'
                      ? 'bg-[#4ADE80] text-[#070A08] font-bold'
                      : 'text-[#A0AAA3] hover:text-[#F5F7F5]'
                  }`}
                >
                  PhishChain Ledger
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[140px]">
                {activePhishTab === 'overview' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phishsense.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 text-xs text-[#F5F7F5] bg-[#111714]/90 p-2.5 rounded-xl border border-[#25332B]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activePhishTab === 'architecture' && (
                  <div className="space-y-2">
                    {phishsense.myContributions?.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 text-xs text-[#F5F7F5] bg-[#111714]/90 p-2.5 rounded-xl border border-[#25332B]"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activePhishTab === 'phishchain' && (
                  <div className="p-3.5 rounded-xl bg-[#070A08] border border-[#25332B] font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[#4ADE80] pb-1 border-b border-[#25332B] text-[11px]">
                      <span>BLOCKCHAIN THREAT LOG // SHA-256</span>
                      <span>TAMPER-EVIDENT</span>
                    </div>
                    <div className="text-[11px] text-[#A0AAA3] leading-relaxed">
                      PhishSense records verified malicious signatures, domain fingerprints, and QR threat payloads onto a decentralized audit ledger, guaranteeing threat persistence without centralized point-of-failure.
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-[#627068] uppercase mb-1.5">STACK & ARCHITECTURE:</div>
                <div className="flex flex-wrap gap-1.5">
                  {phishsense.techStack.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-[#111714] text-[#4ADE80] border border-[#25332B] rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Working Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {phishsense.liveUrl && (
                  <a
                    href={phishsense.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#070A08] bg-[#4ADE80] hover:bg-[#86efac] transition-all shadow-md hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                  >
                    <Globe className="w-4 h-4" />
                    <span>EXPLORE LIVE PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={phishsense.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold text-[#F5F7F5] bg-[#111714] hover:bg-[#161F1A] border border-[#25332B] hover:border-[#4ADE80]/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#4ADE80]" />
                  <span>VIEW SOURCE CODE</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Cyber Visual Neural Threat Radar */}
            <div className="lg:col-span-5">
              <CyberVisual threatScore={96} />
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. NEXTROLE INDIA                                            */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl bg-gradient-to-b from-[#0C1612] via-[#09110E] to-[#070A08] border-2 border-[#10B981]/50 hover:border-[#10B981] p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] relative overflow-hidden"
        >
          {/* Top Green Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-75" />

          {/* NextRole Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#25332B]">
            <div className="flex items-center space-x-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981] text-[#070A08] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Briefcase className="w-4 h-4" />
                RECRUITMENT PLATFORM & CYBERSECURITY
              </span>
              <span className="text-xs font-mono text-[#A0AAA3] border border-[#25332B] px-3 py-1 rounded-lg bg-[#111714]">
                {nextrole.year} • INDIA-FIRST
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>PHISHSENSE SCREENING: INTEGRATED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Left: NextRole Branding & Media Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#25332B] bg-[#070A08] p-4 group">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A120E] flex items-center justify-center p-4">
                  <img
                    src={nextrole.mediaUrl}
                    alt="NextRole India Branding"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Integrated Screening Telemetry Card */}
              <div className="p-4 rounded-xl bg-[#111714] border border-[#25332B] font-mono text-xs">
                <div className="flex items-center justify-between text-[#10B981] font-bold text-[11px] pb-2 border-b border-[#25332B]">
                  <span>PHISHSENSE URL RISK SCREENING</span>
                  <span>ACTIVE DEFENSE</span>
                </div>
                <div className="pt-2 text-[11px] text-[#A0AAA3] space-y-1">
                  <div>• Application link domain validation</div>
                  <div>• Malicious redirect & fake job detection</div>
                  <div>• Submission reference IDs with admin review status</div>
                </div>
              </div>
            </div>

            {/* Right: NextRole India Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#F5F7F5] tracking-tight">
                  {nextrole.title}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#10B981] mt-1.5 font-semibold">
                  "{nextrole.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#A0AAA3] leading-relaxed">
                {nextrole.description}
              </p>

              {/* Key Features */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                  PLATFORM CAPABILITIES & WORKFLOWS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {nextrole.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-2 text-xs text-[#F5F7F5] bg-[#111714] p-2.5 rounded-xl border border-[#25332B]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                  MY KEY CONTRIBUTIONS:
                </div>
                <div className="space-y-1">
                  {nextrole.myContributions?.map((c, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#A0AAA3]">
                      <span className="text-[#10B981] font-mono">❯</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {nextrole.techStack.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-[#111714] text-[#10B981] border border-[#25332B] rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                {nextrole.liveUrl && (
                  <a
                    href={nextrole.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#070A08] bg-[#10B981] hover:bg-[#34d399] transition-all shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    <Globe className="w-4 h-4" />
                    <span>EXPLORE LIVE PLATFORM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={nextrole.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold text-[#F5F7F5] bg-[#111714] hover:bg-[#161F1A] border border-[#25332B] hover:border-[#10B981]/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#10B981]" />
                  <span>VIEW SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3 & 4. SMART KITCHEN (IOT) & FINLYTICS (FINANCE TRACKER)     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Smart Kitchen with Real Hardware & Circuit Schematic Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl bg-[#0D1310] border border-[#25332B] hover:border-[#38BDF8]/50 p-6 sm:p-7 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  {smartKitchen.category}
                </span>
                <span className="text-xs font-mono text-[#627068]">
                  {smartKitchen.year}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-[#F5F7F5] mt-4 group-hover:text-[#38BDF8] transition-colors">
                {smartKitchen.title}
              </h4>
              <p className="text-xs font-mono text-[#A0AAA3] mt-1">
                {smartKitchen.tagline}
              </p>

              {/* Hardware Media Preview with Toggle */}
              <div className="mt-4 rounded-xl overflow-hidden border border-[#25332B] bg-[#070A08] relative">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#111714] border-b border-[#25332B] text-[10px] font-mono text-[#A0AAA3]">
                  <span>{showSchematic ? 'Circuit Schematic' : 'Prototype Hardware'}</span>
                  <button
                    onClick={() => setShowSchematic(!showSchematic)}
                    className="text-[#38BDF8] hover:underline cursor-pointer"
                  >
                    {showSchematic ? 'View Hardware Photo ➔' : 'View Circuit Diagram ➔'}
                  </button>
                </div>

                <div className="relative aspect-[16/9] w-full bg-[#070A08]">
                  <img
                    src={showSchematic ? '/media/smart-kitchen-schematic.png' : '/media/smart-kitchen-hardware.jpg'}
                    alt="Smart Kitchen Prototype"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#A0AAA3] leading-relaxed">
                {smartKitchen.description}
              </p>

              <div className="mt-4 space-y-1.5">
                {smartKitchen.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#F5F7F5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25332B] flex items-center justify-between">
              <a
                href={smartKitchen.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#F5F7F5] hover:text-[#38BDF8] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>View Hardware Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-[#627068]">RC522 + ESP32</span>
            </div>
          </motion.div>

          {/* Finlytics: Expense Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-3xl bg-[#0D1310] border border-[#25332B] hover:border-[#FBBF24]/50 p-6 sm:p-7 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FBBF24] flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  {finlytics.category}
                </span>
                <span className="text-xs font-mono text-[#627068]">
                  {finlytics.year}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-[#F5F7F5] mt-4 group-hover:text-[#FBBF24] transition-colors">
                {finlytics.title}
              </h4>
              <p className="text-xs font-mono text-[#A0AAA3] mt-1">
                {finlytics.tagline}
              </p>

              {/* Ledger Interactive Visual Preview */}
              <div className="mt-4 p-4 rounded-xl bg-[#070A08] border border-[#25332B] font-mono text-xs">
                <div className="flex items-center justify-between text-[#A0AAA3] pb-2 border-b border-[#25332B] text-[11px]">
                  <span className="text-[#FBBF24] font-bold">SQL TRANSACTION LOG</span>
                  <span>NORMALIZED: 3NF</span>
                </div>
                <div className="space-y-1.5 pt-2 text-[11px]">
                  <div className="flex justify-between p-2 rounded bg-[#111714]">
                    <span className="text-[#A0AAA3]">Monthly Inflow / Budget</span>
                    <span className="text-[#FBBF24] font-bold">Categorized Aggregation</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#111714]">
                    <span className="text-[#A0AAA3]">Relational Entities</span>
                    <span className="text-[#F5F7F5]">User ⇄ Account ⇄ Ledger</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#A0AAA3] leading-relaxed">
                {finlytics.description}
              </p>

              <div className="mt-4 space-y-1.5">
                {finlytics.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#F5F7F5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FBBF24] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25332B] flex items-center justify-between">
              <a
                href={finlytics.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#F5F7F5] hover:text-[#FBBF24] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FBBF24]" />
                <span>View Web App Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-[#627068]">MYSQL RELATIONAL</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
