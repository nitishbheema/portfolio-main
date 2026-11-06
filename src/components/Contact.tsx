import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
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

    const subject = encodeURIComponent(formSubject.trim() || `Portfolio Inquiry from ${formName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Nitish,\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0F0D]/60 border-t border-[#25332B]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#111714] border border-[#25332B] text-xs font-mono text-[#75F0A8] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7F5] font-sans">
            LET'S CONNECT
          </h2>
          <div className="w-12 h-1 bg-[#75F0A8] mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-[#A0AAA3] max-w-lg">
            Have an interesting idea, collaboration opportunity, or project in mind? I'd love to connect and explore possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                      EMAIL ADDRESS
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-[#F5F7F5] hover:text-[#75F0A8] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] rounded-lg transition-colors"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#75F0A8]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#0D1310] border border-[#25332B] hover:border-[#75F0A8]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                      PHONE NUMBER
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-semibold text-[#F5F7F5] hover:text-[#75F0A8] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-[#A0AAA3] hover:text-[#75F0A8] bg-[#111714] border border-[#25332B] rounded-lg transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#75F0A8]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#0D1310] border border-[#25332B]">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-[#75F0A8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#627068]">
                    LOCATION
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#F5F7F5]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons & Socials */}
            <div className="p-5 rounded-xl bg-[#0D1310] border border-[#25332B] space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-3 px-4 rounded-lg bg-[#75F0A8] text-[#080B0A] font-semibold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-[#8bf3b6] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 text-xs font-mono text-[#F5F7F5] flex items-center justify-center space-x-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#75F0A8]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#111714] border border-[#25332B] hover:border-[#75F0A8]/40 text-xs font-mono text-[#F5F7F5] flex items-center justify-center space-x-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#75F0A8]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#0D1310] border border-[#25332B] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#25332B] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7F5]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#A0AAA3] mt-0.5 font-mono">
                    Direct dispatcher to nitishbheema@gmail.com
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#75F0A8]" />
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A0AAA3] mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      placeholder="e.g. Dr. Ramesh / Team Lead"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-sm text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A0AAA3] mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      placeholder="e.g. colleague@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-sm text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A0AAA3] mb-1.5 uppercase">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    required
                    value={formSubject}
                    onChange={e => setFormSubject(e.target.value)}
                    placeholder="e.g. Internship Opportunity / Tech Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-sm text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A0AAA3] mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={e => setFormMessage(e.target.value)}
                    placeholder="Write your note or project requirements here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111714] border border-[#25332B] text-sm text-[#F5F7F5] placeholder-[#627068] focus:outline-none focus:border-[#75F0A8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg bg-[#111714] border border-[#75F0A8]/60 hover:bg-[#75F0A8] hover:text-[#080B0A] text-[#75F0A8] font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Email to Nitish</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
