import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Award, User, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-[#25332B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            A LITTLE ABOUT ME
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#A0AAA3] leading-relaxed"
          >
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="bg-[#111714]/40 p-3.5 rounded-lg border border-[#25332B]/60">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex items-center space-x-3 text-xs font-mono text-[#75F0A8]">
              <Sparkles className="w-4 h-4" />
              <span>Dedicated to writing robust, maintainable code & exploring applied AI.</span>
            </div>
          </motion.div>

          {/* Three Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Card 1: Education */}
            <div className="group p-5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068] group-hover:text-[#75F0A8] transition-colors">
                    EDUCATION
                  </div>
                  <div className="mt-1.5 text-base sm:text-lg font-bold text-[#F5F7F5]">
                    B.Tech – Computer Science Engineering
                  </div>
                  <div className="text-xs text-[#A0AAA3] mt-0.5">2023 – 2027 • Full-time Undergraduate</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 2: University */}
            <div className="group p-5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068] group-hover:text-[#75F0A8] transition-colors">
                    UNIVERSITY
                  </div>
                  <div className="mt-1.5 text-base sm:text-lg font-bold text-[#F5F7F5]">
                    Vel Tech University
                  </div>
                  <div className="text-xs text-[#A0AAA3] mt-0.5">
                    Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 3: CGPA */}
            <div className="group p-5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-[#75F0A8]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068] group-hover:text-[#75F0A8] transition-colors">
                    ACADEMIC SCORE
                  </div>
                  <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#75F0A8] font-mono">
                    8.54 <span className="text-sm font-normal text-[#A0AAA3]">/ 10 CGPA</span>
                  </div>
                  <div className="text-xs text-[#A0AAA3] mt-0.5">Consistent academic performance</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
