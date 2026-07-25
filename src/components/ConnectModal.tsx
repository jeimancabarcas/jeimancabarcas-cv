import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail, MapPin } from 'lucide-react';
import { BASE_PROFILE } from '../data';
import { useLanguage } from '../LanguageContext';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
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
              {t('successTitle')}
            </h3>
            <p className="text-sm text-[#545f73] max-w-sm mx-auto">
              {t('successMsg')}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3525cd]/10 text-[#3525cd] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('connectBtn')}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191c1d]">
                {t('connectTitle')}
              </h2>
              <p className="text-xs text-[#545f73] mt-1">
                {t('connectSub')}
              </p>
            </div>

            {/* Quick Email & Location info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#545f73] bg-[#f8f9fa] p-3 rounded-xl border border-black/5">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#3525cd]" />
                <span>{BASE_PROFILE.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7e3000]" />
                <span>{BASE_PROFILE.location}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Topic */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-2">
                  {t('topicLabel')}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {topics.map((tItem) => (
                    <button
                      type="button"
                      key={tItem}
                      onClick={() => setTopic(tItem)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                        topic === tItem
                          ? 'bg-[#3525cd] text-white'
                          : 'bg-[#f3f4f5] text-[#545f73] hover:bg-black/10'
                      }`}
                    >
                      {tItem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email input row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#545f73] mb-1">
                    {t('nameLabel')} *
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
                    {t('emailLabel')} *
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
                  {t('messageLabel')} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] text-xs outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t('sendBtn')}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
