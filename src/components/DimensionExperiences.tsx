import React from 'react';
import { motion } from 'framer-motion';
import { Theater, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_COLLECTION } from '../data/universeData';

export const DimensionExperiences: React.FC = () => {
  return (
    <section id="experiences" className="py-24 relative border-t border-[#25332B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#C084FC] uppercase tracking-wider mb-3">
            <Theater className="w-3.5 h-3.5" />
            <span>DIMENSION 05 // EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            MY EXPERIENCES
          </h2>
          <div className="w-16 h-1 bg-[#C084FC] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            Stepping onto the stage with the Arts & Drama Club, capturing the electric pulse of college festivals, and collaborating across multidisciplinary teams.
          </p>
        </div>

        {/* Experience Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES_COLLECTION.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group p-6 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#C084FC]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C084FC]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C084FC]/10 transition-colors" />

              <div>
                {/* Header Tag & Period */}
                <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                  <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <span className="text-xs font-mono text-[#627068]">
                    {exp.period}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-bold text-[#F5F7F5] mt-4 group-hover:text-[#C084FC] transition-colors">
                  {exp.title}
                </h3>
                <div className="text-xs font-mono text-[#A0AAA3] mt-1">
                  ROLE: <span className="text-[#F5F7F5] font-medium">{exp.role}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#A0AAA3] mt-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key takeaways */}
                <div className="mt-4 space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono text-[#627068] uppercase tracking-wider">
                    KEY TAKEAWAYS & MEMORIES:
                  </div>
                  {exp.takeaways.map((t, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#F5F7F5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-[#25332B] flex items-center justify-between text-[11px] font-mono text-[#627068]">
                <span>ENGAGEMENT</span>
                <span className="text-[#C084FC] font-semibold">{exp.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arts & Drama Club Highlight Spotlight */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#140F1B] via-[#0D1310] to-[#140F1B] border border-[#C084FC]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C084FC]">
              <Theater className="w-4 h-4" />
              <span>THEATRICAL ARTS & STAGE CRAFT</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#F5F7F5]">
              "Being on stage taught me how to communicate with raw presence."
            </h4>
            <p className="text-xs sm:text-sm text-[#A0AAA3] max-w-2xl leading-relaxed">
              Drama is not separate from engineering—it is empathy in real-time. Crafting scripts and performing under spotlights sharpened my clarity, spontaneous problem-solving, and emotional awareness.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#070A08] border border-[#25332B] shrink-0 text-center font-mono">
            <div className="text-[10px] text-[#627068] uppercase">COMMUNITY</div>
            <div className="text-base font-bold text-[#C084FC] mt-0.5">Vel Tech Campus</div>
            <div className="text-[11px] text-[#A0AAA3] mt-0.5">Stage & Culture</div>
          </div>
        </div>

      </div>
    </section>
  );
};
