import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Wallet,
  Cpu,
  Calendar,
  Layers,
  ArrowUpRight,
  Radio,
  BarChart3,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { CyberVisual } from './CyberVisual';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const flagshipProject = PROJECTS.find(p => p.isFlagship) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="py-24 relative border-t border-[#25332B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            THINGS I'VE BUILT
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] max-w-lg">
            Selected engineering applications spanning cybersecurity threat intelligence, financial analytics, and IoT inventory monitoring.
          </p>
        </div>

        {/* FLAGSHIP PROJECT: PHISHSENSE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl bg-gradient-to-b from-[#0F1713] to-[#0A0E0C] border-2 border-[#75F0A8]/40 hover:border-[#75F0A8]/70 p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_-10px_rgba(117,240,168,0.15)] relative overflow-hidden transition-all duration-300"
        >
          {/* Flagship Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#25332B]">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#75F0A8] text-[#080B0A] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <ShieldAlert className="w-3.5 h-3.5" />
                FLAGSHIP PROJECT
              </span>
              <span className="text-xs font-mono text-[#A0AAA3] border border-[#25332B] px-2.5 py-1 rounded bg-[#111714]">
                {flagshipProject.category}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#627068]">
              <Calendar className="w-3.5 h-3.5 text-[#75F0A8]" />
              <span>{flagshipProject.duration}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F5] font-sans tracking-tight">
                  {flagshipProject.title}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#75F0A8] mt-1">
                  {flagshipProject.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#A0AAA3] leading-relaxed">
                {flagshipProject.description}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#627068]">
                  KEY CONTRIBUTIONS & ARCHITECTURE:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {flagshipProject.contributions.map((contribution, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start space-x-2 text-xs sm:text-sm text-[#F5F7F5] bg-[#111714]/80 p-2.5 rounded-lg border border-[#25332B]/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#75F0A8] shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {flagshipProject.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-[#161F1A] text-[#75F0A8] border border-[#25332B] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center space-x-4">
                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#080B0A] bg-[#75F0A8] hover:bg-[#8bf3b6] rounded-lg transition-all duration-200 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#627068]">
                  <Lock className="w-3.5 h-3.5 text-[#75F0A8]" />
                  <span>Research & Intelligence Platform</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Neural Threat Intelligence Map */}
            <div className="lg:col-span-5">
              <CyberVisual threatScore={96} />
            </div>
          </div>
        </motion.div>

        {/* SECONDARY PROJECTS: FINLYTICS & SMART KITCHEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/50 p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Header Tag & Duration */}
                <div className="flex items-center justify-between pb-4 border-b border-[#25332B]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#75F0A8] bg-[#111714] px-2.5 py-1 rounded border border-[#25332B] flex items-center gap-1.5">
                    {project.visualType === 'finance' ? (
                      <Wallet className="w-3.5 h-3.5 text-[#75F0A8]" />
                    ) : (
                      <Cpu className="w-3.5 h-3.5 text-[#75F0A8]" />
                    )}
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#627068]">
                    {project.duration}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#A0AAA3] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Visual Feature Banner */}
                {project.visualType === 'finance' && (
                  <div className="mt-4 p-3 rounded-lg bg-[#080B0A] border border-[#25332B] text-xs font-mono text-[#A0AAA3]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-1.5 text-[#75F0A8]">
                        <BarChart3 className="w-3.5 h-3.5" /> TRANSACTION_LEDGER
                      </span>
                      <span className="text-[#627068]">SQL_SYNC: ACTIVE</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between py-1 px-2 rounded bg-[#111714]">
                        <span>Expense Categorization</span>
                        <span className="text-[#75F0A8] font-bold">100% Normalized</span>
                      </div>
                      <div className="flex justify-between py-1 px-2 rounded bg-[#111714]">
                        <span>Relational Schema</span>
                        <span className="text-[#F5F7F5]">Users ⇄ Transactions</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visualType === 'iot' && (
                  <div className="mt-4 p-3 rounded-lg bg-[#080B0A] border border-[#25332B] text-xs font-mono text-[#A0AAA3]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-1.5 text-[#75F0A8]">
                        <Radio className="w-3.5 h-3.5" /> RFID_TELEMETRY
                      </span>
                      <span className="text-[#627068]">HW_LINK: CONNECTED</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between py-1 px-2 rounded bg-[#111714]">
                        <span>Ingredient Tracking</span>
                        <span className="text-[#75F0A8] font-bold">Auto-Stock Sync</span>
                      </div>
                      <div className="flex justify-between py-1 px-2 rounded bg-[#111714]">
                        <span>Live Dashboard</span>
                        <span className="text-[#F5F7F5]">Telemetry Metrics</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#A0AAA3] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Contributions List */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                    KEY DELIVERABLES:
                  </div>
                  {project.contributions.map((c, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#F5F7F5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#75F0A8] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack + GitHub Button */}
              <div className="mt-6 pt-4 border-t border-[#25332B] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono bg-[#111714] text-[#A0AAA3] border border-[#25332B] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-[#F5F7F5] hover:text-[#75F0A8] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#75F0A8]" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[10px] font-mono text-[#627068]">
                    PROJECT 0{idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
