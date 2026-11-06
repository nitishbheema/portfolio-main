import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Send, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { FUTURE_HORIZONS, UNIVERSE_META } from '../data/universeData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const DimensionFuture: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMessage.trim()) return;

    const subject = encodeURIComponent(formSubject.trim() || `Inquiry from ${formName || 'Digital Universe Visitor'}`);
    const body = encodeURIComponent(
      `Hello Nitish,\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`
    );
    window.location.href = `mailto:${UNIVERSE_META.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="future" className="py-24 relative bg-[#090D0B]/60 border-t border-[#25332B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#F472B6] uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>DIMENSION 06 // FUTURE HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7F5] font-sans">
            MY FUTURE
          </h2>
          <div className="w-16 h-1 bg-[#F472B6] mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A0AAA3] max-w-2xl leading-relaxed">
            The road ahead. Autonomous AI defense, independent media production, high-throughput cloud architectures, and a living digital universe built for lifelong evolution.
          </p>
        </div>

        {/* 4 Future Horizon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {FUTURE_HORIZONS.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#F472B6]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#25332B]">
                  <span className="text-xs font-mono font-bold text-[#F472B6] uppercase tracking-wider">
                    {goal.category}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#111714] text-[#A0AAA3] border border-[#25332B]">
                    {goal.horizon}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F5F7F5] mt-4 group-hover:text-[#F472B6] transition-colors">
                  {goal.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0AAA3] mt-2.5 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#25332B] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#627068]">HORIZON 0{idx + 1}</span>
                <span className={goal.inProgress ? 'text-[#75F0A8]' : 'text-[#F472B6]'}>
                  {goal.inProgress ? 'ACTIVE PURSUIT' : 'PLANNED VENTURE'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COLLABORATION & CONNECT HUB */}
        <div className="pt-10 border-t border-[#25332B]">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7F5]">
              Let's Build the Future Together
            </h3>
            <p className="text-xs sm:text-sm text-[#A0AAA3] mt-2 max-w-lg mx-auto">
              Whether you have an applied engineering challenge, a creative media vision, or an ambitious project to collaborate on—my digital universe is always open.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Information */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#627068]">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${UNIVERSE_META.email}`}
                      className="text-sm font-semibold text-[#F5F7F5] hover:text-[#75F0A8] transition-colors break-all"
                    >
                      {UNIVERSE_META.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(UNIVERSE_META.email, 'email')}
                  className="p-2 rounded-lg bg-[#111714] border border-[#25332B] text-[#A0AAA3] hover:text-[#75F0A8]"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#75F0A8]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#627068]">PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${UNIVERSE_META.phone}`}
                      className="text-sm font-semibold text-[#F5F7F5] hover:text-[#75F0A8] transition-colors"
                    >
                      {UNIVERSE_META.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(UNIVERSE_META.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#111714] border border-[#25332B] text-[#A0AAA3] hover:text-[#75F0A8]"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#75F0A8]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D1310] border border-[#25332B] flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#627068]">LOCATION</div>
                  <div className="text-sm font-semibold text-[#F5F7F5]">
                    {UNIVERSE_META.location}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={UNIVERSE_META.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-[#111714] border border-[#25332B] hover:border-[#75F0A8] text-xs font-mono text-[#F5F7F5] flex items-center justify-center space-x-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#75F0A8]" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={UNIVERSE_META.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-[#111714] border border-[#25332B] hover:border-[#75F0A8] text-xs font-mono text-[#F5F7F5] flex items-center justify-center space-x-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#75F0A8]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Quick Dispatcher Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1310] border border-[#25332B]">
                <h4 className="text-base font-bold text-[#F5F7F5] mb-1">
                  Send a Direct Message
                </h4>
                <p className="text-xs font-mono text-[#627068] mb-5">
                  Dispatches directly to nitishbheema@gmail.com
                </p>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#A0AAA3] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        placeholder="e.g. Collaborator / Team Lead"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-xs text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#A0AAA3] mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={e => setFormEmail(e.target.value)}
                        placeholder="e.g. hello@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-xs text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A0AAA3] mb-1">
                      Context / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={formSubject}
                      onChange={e => setFormSubject(e.target.value)}
                      placeholder="e.g. Creative Project / AI Systems / General Connection"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-xs text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A0AAA3] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formMessage}
                      onChange={e => setFormMessage(e.target.value)}
                      placeholder="Write your note, idea, or collaboration thought here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111714] border border-[#25332B] text-xs text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#75F0A8] hover:bg-[#8bf3b6] text-[#070A08] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send to Nitish</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
