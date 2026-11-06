import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-[#75F0A8]" />;
    case 'Globe':
      return <Globe className="w-5 h-5 text-[#75F0A8]" />;
    case 'Database':
      return <Database className="w-5 h-5 text-[#75F0A8]" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-[#75F0A8]" />;
    default:
      return <Terminal className="w-5 h-5 text-[#75F0A8]" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#0B0F0D]/60 border-t border-[#25332B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            MY TECHNICAL ARSENAL
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] max-w-lg">
            Core programming languages, systems, and foundational engineering knowledge developed through academic study and hands-on projects.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-xl bg-[#0D1310] border border-[#25332B] p-6 hover:border-[#75F0A8]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#75F0A8]/10 to-transparent pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#25332B]/80 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[#111714] border border-[#25332B] group-hover:border-[#75F0A8]/40 transition-colors">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wide text-[#F5F7F5]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#627068]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/50 hover:bg-[#161F1A] text-xs sm:text-sm text-[#F5F7F5] font-medium transition-all duration-200 group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#75F0A8]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="mt-6 pt-3 border-t border-[#25332B]/50 flex items-center justify-between text-[11px] font-mono text-[#627068]">
                <span>MODULE VERIFIED</span>
                <span className="text-[#75F0A8]">READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
