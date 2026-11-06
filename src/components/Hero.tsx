import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
  Award,
  Code2,
  Layers,
  FastForward
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { DecryptedText } from './DecryptedText';

interface HeroProps {
  onExploreClick: () => void;
  replayTrigger?: number;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, replayTrigger = 0 }) => {
  // Steps 1 to 10
  // 1: HELLO, I'M
  // 2: Name
  // 3: Subtitle
  // 4: Intro paragraph
  // 5: Education
  // 6: CGPA
  // 7: Skills
  // 8: Projects
  // 9: CTA Buttons
  // 10: Socials
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSkipped, setIsSkipped] = useState<boolean>(false);

  // Reset when replayTrigger updates
  useEffect(() => {
    setIsSkipped(false);
    setCurrentStep(1);
  }, [replayTrigger]);

  // Keyboard shortcut to skip animation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        setIsSkipped(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStepComplete = (step: number) => {
    if (isSkipped) return;
    setTimeout(() => {
      setCurrentStep(prev => Math.max(prev, step + 1));
    }, 120);
  };

  const handleSkip = () => {
    setIsSkipped(true);
    setCurrentStep(11);
  };

  const isStepActive = (step: number) => isSkipped || currentStep >= step;
  const isDone = isSkipped || currentStep >= 10;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Interactive Ambient Grid and Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[600px] h-[450px] bg-[#75F0A8]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1B2620]/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Skip Animation Floating Pill (Visible while decoding) */}
      {!isDone && (
        <div className="absolute top-20 right-4 sm:right-8 z-20">
          <button
            onClick={handleSkip}
            className="group flex items-center space-x-2 px-3 py-1.5 text-xs font-mono text-[#A0AAA3] hover:text-[#080B0A] bg-[#111714]/80 hover:bg-[#75F0A8] border border-[#25332B] hover:border-[#75F0A8] rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer"
            title="Press Esc to skip typing animation"
          >
            <span>Skip Animation</span>
            <FastForward className="w-3.5 h-3.5 text-[#75F0A8] group-hover:text-[#080B0A]" />
            <span className="hidden sm:inline text-[10px] text-[#627068] group-hover:text-[#080B0A] px-1 bg-[#161F1A] border border-[#25332B] rounded">
              ESC
            </span>
          </button>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: Hero content decrypted and typed line-by-line */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            
            {/* 1. Status Pill: HELLO, I'M */}
            <div className="min-h-[38px] mb-4">
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#111714] border border-[#25332B] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#75F0A8] animate-pulse" />
                <span className="text-xs font-mono text-[#A0AAA3] uppercase tracking-wider">
                  <DecryptedText
                    text="HELLO, I'M"
                    start={true}
                    speed={25}
                    instant={isSkipped}
                    onComplete={() => handleStepComplete(1)}
                  />
                </span>
                <span className="text-[#25332B]">|</span>
                <span className="text-xs font-mono text-[#75F0A8] flex items-center gap-1">
                  <MapPin className="w-3 h-3 inline" /> Avadi, Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* 2. Main Name Heading: Bheema Nitish Guru Datha */}
            <div className="min-h-[52px] sm:min-h-[72px]">
              {isStepActive(2) && (
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7F5] font-sans leading-[1.15]">
                  <DecryptedText
                    text={PERSONAL_INFO.name}
                    start={isStepActive(2)}
                    speed={20}
                    instant={isSkipped}
                    onComplete={() => handleStepComplete(2)}
                  />
                </h1>
              )}
            </div>

            {/* 3. Subtitle: Computer Science Engineering Student | Aspiring Software Developer */}
            <div className="min-h-[28px] mt-2 sm:mt-3">
              {isStepActive(3) && (
                <div className="flex items-center gap-2 text-sm sm:text-lg text-[#75F0A8] font-mono font-medium">
                  <Sparkles className="w-4 h-4 text-[#75F0A8] shrink-0" />
                  <DecryptedText
                    text={PERSONAL_INFO.subtitle}
                    start={isStepActive(3)}
                    speed={15}
                    instant={isSkipped}
                    onComplete={() => handleStepComplete(3)}
                  />
                </div>
              )}
            </div>

            {/* 4. Professional Introduction Paragraph */}
            <div className="min-h-[72px] mt-4">
              {isStepActive(4) && (
                <p className="text-sm sm:text-base text-[#A0AAA3] leading-relaxed font-sans max-w-xl">
                  <DecryptedText
                    text={PERSONAL_INFO.heroDescription}
                    start={isStepActive(4)}
                    speed={8}
                    instant={isSkipped}
                    onComplete={() => handleStepComplete(4)}
                  />
                </p>
              )}
            </div>

            {/* Steps 5, 6, 7, 8: Compact Quick-Credential Metrics (Education, CGPA, Skills, Projects) */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
              {/* 5. Education Information */}
              {isStepActive(5) && (
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono text-[#F5F7F5]">
                  <GraduationCap className="w-4 h-4 text-[#75F0A8] shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-[#627068] block uppercase">Education</span>
                    <DecryptedText
                      text="Vel Tech University • B.Tech CSE (2023–2027)"
                      start={isStepActive(5)}
                      speed={12}
                      instant={isSkipped}
                      onComplete={() => handleStepComplete(5)}
                    />
                  </div>
                </div>
              )}

              {/* 6. CGPA: 8.54 / 10 */}
              {isStepActive(6) && (
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono text-[#75F0A8]">
                  <Award className="w-4 h-4 text-[#75F0A8] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#627068] block uppercase">Academic Score</span>
                    <DecryptedText
                      text="CGPA: 8.54 / 10"
                      start={isStepActive(6)}
                      speed={18}
                      instant={isSkipped}
                      onComplete={() => handleStepComplete(6)}
                    />
                  </div>
                </div>
              )}

              {/* 7. Technical Skills */}
              {isStepActive(7) && (
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono text-[#A0AAA3]">
                  <Code2 className="w-4 h-4 text-[#75F0A8] shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-[#627068] block uppercase">Core Tech</span>
                    <DecryptedText
                      text="Java • C • SQL • Web • DBMS"
                      start={isStepActive(7)}
                      speed={14}
                      instant={isSkipped}
                      onComplete={() => handleStepComplete(7)}
                    />
                  </div>
                </div>
              )}

              {/* 8. Project Highlights */}
              {isStepActive(8) && (
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] flex items-center space-x-2 text-xs font-mono text-[#A0AAA3]">
                  <Layers className="w-4 h-4 text-[#75F0A8] shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-[#627068] block uppercase">Featured Systems</span>
                    <DecryptedText
                      text="PhishSense • Finlytics • RFID Kitchen"
                      start={isStepActive(8)}
                      speed={14}
                      instant={isSkipped}
                      onComplete={() => handleStepComplete(8)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 9. CTA Buttons: Explore My Work & Download Resume */}
            <div className="min-h-[50px] mt-7">
              <AnimatePresence>
                {isStepActive(9) && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap items-center gap-4"
                  >
                    <button
                      onClick={onExploreClick}
                      className="group flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-[#080B0A] bg-[#75F0A8] hover:bg-[#8bf3b6] rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(117,240,168,0.35)] cursor-pointer"
                    >
                      <span>Explore My Work</span>
                      <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>

                    <a
                      href="/resume.pdf"
                      download="Bheema_Nitish_Guru_Datha_Resume.pdf"
                      className="group flex items-center space-x-2 px-6 py-3 text-sm font-medium text-[#F5F7F5] bg-[#111714] hover:bg-[#161F1A] border border-[#25332B] hover:border-[#75F0A8]/50 rounded-lg transition-all duration-200"
                    >
                      <FileDown className="w-4 h-4 text-[#75F0A8]" />
                      <span>Download Resume</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 10. Social Links: GitHub, LinkedIn, Email */}
            <div className="min-h-[44px] mt-6">
              <AnimatePresence>
                {isStepActive(10) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center space-x-4"
                  >
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>

                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="p-2.5 rounded-lg text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 transition-colors"
                      aria-label="Send Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT COLUMN: Real Photograph reveal in place */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <AnimatePresence>
              {isStepActive(4) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-sm sm:max-w-md"
                >
                  {/* Subtle green ambient glow behind portrait */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#75F0A8]/20 via-[#75F0A8]/5 to-transparent rounded-3xl blur-2xl opacity-75 pointer-events-none" />
                  <div className="absolute -inset-0.5 bg-[#75F0A8]/30 rounded-2xl blur-md opacity-40 pointer-events-none" />

                  {/* Gentle floating motion container */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative rounded-2xl overflow-hidden bg-[#0D1310] border-2 border-[#25332B] hover:border-[#75F0A8]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 group"
                  >
                    {/* Portrait Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#111714] border-b border-[#25332B]">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#75F0A8] animate-pulse" />
                        <span className="text-[11px] font-mono text-[#F5F7F5] font-semibold tracking-wider uppercase">
                          NITISH
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#A0AAA3]">
                        B.Tech CSE
                      </span>
                    </div>

                    {/* Portrait Image Container */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#080B0A]">
                      <img
                        src={PERSONAL_INFO.photoUrl}
                        alt={PERSONAL_INFO.name}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        style={{
                          objectPosition: '46% 30%'
                        }}
                      />

                      {/* Subtle inner gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent opacity-80 pointer-events-none" />

                      {/* Corner accents */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#75F0A8]/70 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#75F0A8]/70 pointer-events-none" />
                      <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-[#75F0A8]/70 pointer-events-none" />
                      <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-[#75F0A8]/70 pointer-events-none" />

                      {/* Identity Card Overlay at bottom */}
                      <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#0D1310]/85 backdrop-blur-md border border-[#25332B] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#F5F7F5] tracking-wide">
                            Bheema Nitish Guru Datha
                          </div>
                          <div className="text-[10px] font-mono text-[#75F0A8] mt-0.5">
                            B.Tech CSE • Vel Tech University
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-mono text-[#A0AAA3]">BATCH</div>
                          <div className="text-[11px] font-mono font-bold text-[#F5F7F5]">2023–2027</div>
                        </div>
                      </div>
                    </div>

                    {/* Portrait Footer */}
                    <div className="px-4 py-2 bg-[#111714] border-t border-[#25332B] flex items-center justify-between text-[10px] font-mono text-[#627068]">
                      <span>Bheema Nitish Guru Datha</span>
                      <span className="text-[#75F0A8]">Vel Tech</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
