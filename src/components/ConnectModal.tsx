import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail, MapPin } from 'lucide-react';
import { PROFILE_INFO } from '../data';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState<string>('Agentic AI & SDD');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  const topics = [
    'Agentic AI & SDD',
    'Enterprise Frontend (Angular/React)',
    'Backend & Microservices',
    'Software Architecture',
    'General Inquiry',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#191c1d] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#191c1d]">
              Message Received
            </h3>
            <p className="text-sm text-[#545f73] max-w-sm mx-auto">
              Thank you for getting in touch. {PROFILE_INFO.name} will review your inquiry regarding{' '}
              <strong className="text-[#3525cd]">{topic}</strong> and respond shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3525cd]/10 text-[#3525cd] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start A Conversation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191c1d]">
                Connect with {PROFILE_INFO.name}
              </h2>
              <p className="text-xs text-[#545f73] mt-1">
                Direct inquiry line for AI Engineering, SDD Workflows & Fullstack Software Architecture.
              </p>
            </div>

            {/* Quick Email & Location info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#545f73] bg-[#f8f9fa] p-3 rounded-xl border border-black/5">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#3525cd]" />
                <span>{PROFILE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7e3000]" />
                <span>{PROFILE_INFO.location}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Topic */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-2">
                  Inquiry Topic
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                        topic === t
                          ? 'bg-[#3525cd] text-white'
                          : 'bg-[#f3f4f5] text-[#545f73] hover:bg-black/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email input row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] text-xs outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.jenkins@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-1">
                  Project Context / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your timeline, scope, or technical challenges..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] text-xs outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
