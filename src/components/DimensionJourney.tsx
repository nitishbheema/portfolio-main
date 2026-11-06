import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/universeData';

export const DimensionJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative bg-[#090D0B]/60 border-t border-[#25332B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>DIMENSION 02 // JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            MY JOURNEY
          </h2>
          <div className="w-16 h-1 bg-[#38BDF8] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            The chronological road of education, personal evolution, college life at Vel Tech, and foundational discipline.
          </p>
        </div>

        {/* Chronological Timeline Stream */}
        <div className="relative border-l-2 border-[#25332B] ml-4 sm:ml-10 pl-6 sm:pl-10 space-y-12">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070A08] border-2 border-[#38BDF8] group-hover:bg-[#38BDF8] transition-colors shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#38BDF8]/40 transition-all duration-300">
                {/* Header Period and Score */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#25332B]">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#111714] border border-[#25332B] text-[#38BDF8]">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{item.period}</span>
                  </span>

                  {item.score && (
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#161F1A] border border-[#38BDF8]/30 text-xs font-mono">
                      <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span className="text-[#38BDF8] font-bold">{item.score}</span>
                    </div>
                  )}
                </div>

                {/* Title & Organization */}
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F7F5] group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#A0AAA3] mt-1 font-mono">
                    <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                    <span>{item.organization}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlight badges */}
                {item.highlights && (
                  <div className="mt-5 pt-3 border-t border-[#25332B]/60 flex flex-wrap gap-2">
                    {item.highlights.map(h => (
                      <span
                        key={h}
                        className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-mono bg-[#111714] border border-[#25332B] text-[#A0AAA3]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#38BDF8]" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
