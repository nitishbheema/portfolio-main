import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#0B0F0D]/60 border-t border-[#25332B]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            ACADEMIC JOURNEY
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] max-w-md">
            Formal education, academic foundations, and consistent records of excellence.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#25332B] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EDUCATION_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080B0A] border-2 border-[#75F0A8] group-hover:bg-[#75F0A8] transition-colors shadow-[0_0_10px_rgba(117,240,168,0.4)]" />

              {/* Timeline Card */}
              <div className="p-6 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all duration-300">
                {/* Year Pill & Score */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#25332B]">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                    <Calendar className="w-3.5 h-3.5 text-[#75F0A8]" />
                    <span>{item.period}</span>
                  </span>

                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#161F1A] border border-[#75F0A8]/30 text-xs font-mono">
                    <Award className="w-3.5 h-3.5 text-[#75F0A8]" />
                    <span className="text-[#A0AAA3]">{item.scoreLabel}:</span>
                    <span className="text-[#75F0A8] font-bold">{item.score}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <div className="mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors">
                    {item.institution}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#A0AAA3] mt-1.5">
                    <GraduationCap className="w-4 h-4 text-[#75F0A8]" />
                    <span>{item.degree}</span>
                  </div>
                  {item.location && (
                    <div className="text-xs text-[#627068] mt-1 font-mono">
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
