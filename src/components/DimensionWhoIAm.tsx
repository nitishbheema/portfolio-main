import React from 'react';
import { motion } from 'framer-motion';
import { User, HeartHandshake, Brain } from 'lucide-react';
import { IDENTITY_PILLARS } from '../data/universeData';

export const DimensionWhoIAm: React.FC = () => {
  return (
    <section id="identity" className="py-24 relative border-t border-[#25332B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>DIMENSION 01 // IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            WHO I AM
          </h2>
          <div className="w-16 h-1 bg-[#75F0A8] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            The core individual behind the screen. Not just a software engineer or a student, but an eclectic thinker curious about human expression, creative craft, and living fully.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-[#0D1310] border border-[#25332B] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#75F0A8]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center space-x-2 text-xs font-mono text-[#75F0A8] mb-3">
                <Brain className="w-4 h-4" />
                <span>MY PHILOSOPHY</span>
              </div>
              <h3 className="text-xl font-bold text-[#F5F7F5] mb-3">
                "Code is the engine. Storytelling is the soul."
              </h3>
              <p className="text-sm text-[#A0AAA3] leading-relaxed">
                I am Bheema Nitish Guru Datha. Based in Avadi, Tamil Nadu, I navigate the world with an open mindset. I love writing clean software systems, but I also love framing cinematic shots, cutting engaging videos, acting on stage, and organizing community initiatives.
              </p>
              <p className="text-sm text-[#A0AAA3] leading-relaxed mt-3">
                I believe the most impactful people aren't confined to a single specialty. They are bridges between logic and imagination.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111714] border border-[#25332B] flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-[#070A08] border border-[#25332B] text-[#75F0A8]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#627068] uppercase">CORE VALUES</div>
                <div className="text-sm font-bold text-[#F5F7F5] mt-0.5">
                  Authenticity • Empathy • Boundless Curiosity
                </div>
                <div className="text-xs text-[#A0AAA3] mt-0.5">
                  Constant learning without fearing the unfamiliar.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Distinct Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IDENTITY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#75F0A8] uppercase tracking-wider mb-2">
                    {pillar.subtitle}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F5F7F5] group-hover:text-[#75F0A8] transition-colors mb-2.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A0AAA3] leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#25332B]/60 text-[10px] font-mono text-[#627068]">
                  <span>PILLAR 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
