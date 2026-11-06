import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative border-t border-[#25332B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            CERTIFICATIONS & LEARNING
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] max-w-lg">
            Professional certifications, specialized coursework, and industry simulations completed across cloud, networking, mainframe, and software engineering.
          </p>
        </div>

        {/* 6 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle issuer badge glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#75F0A8]/5 rounded-bl-full pointer-events-none group-hover:bg-[#75F0A8]/10 transition-colors" />

              <div>
                {/* Issuer Badge & Category */}
                <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                  <span className="text-xs font-mono font-bold text-[#75F0A8] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#75F0A8]" />
                </div>

                {/* Certification Title */}
                <h3 className="mt-4 text-sm sm:text-base font-bold text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Sub-category */}
                <p className="text-xs text-[#A0AAA3] mt-2 font-mono">
                  {cert.category}
                </p>
              </div>

              {/* Card Footer: Date & Verified Status */}
              <div className="mt-6 pt-3 border-t border-[#25332B] flex items-center justify-between text-xs font-mono text-[#627068]">
                <div className="flex items-center space-x-1.5 text-[#A0AAA3]">
                  <Calendar className="w-3.5 h-3.5 text-[#75F0A8]" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-[#75F0A8]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
