import React from 'react';
import { ExperienceItem } from '../types';
import { useLanguage } from '../LanguageContext';
import { X, BarChart3, CheckCircle2, Cpu, Server } from 'lucide-react';

interface CaseStudyModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
  onOpenConnect: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  experience,
  onClose,
  onOpenConnect,
}) => {
  const { t } = useLanguage();

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-10 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#191c1d] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Company & Role Header */}
        <div>
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#3525cd] mb-2">
            <span>{experience.year}</span>
            <span>•</span>
            <span className="uppercase">{experience.company}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#191c1d]">
            {experience.role}
          </h2>

          <p className="text-sm text-[#545f73] mt-2 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Hero Image Preview */}
        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm max-h-72 bg-[#191c1d]/5">
          <img
            src={experience.image}
            alt={experience.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quantifiable Impact Metrics */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#545f73] mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>{t('metricsTitle')}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {experience.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-black/5 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#3525cd] flex items-center gap-2">
            <Server className="w-4 h-4" />
            <span>{t('archTitle')}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#191c1d] font-mono leading-relaxed">
            {experience.architectureOverview}
          </p>
        </div>

        {/* Detailed Key Accomplishments */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#545f73] mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3525cd]" />
            <span>{t('highlightsTitle')}</span>
          </h3>
          <ul className="space-y-3">
            {experience.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#191c1d]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd] shrink-0 mt-2" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#545f73] mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#7e3000]" />
            <span>{t('techStackLabel')}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#e2dfff]/50 text-[#3525cd] text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenConnect();
            }}
            className="px-6 py-2.5 rounded-full bg-[#3525cd] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#271ab1] transition-colors"
          >
            {t('scheduleBtn')}
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#191c1d] text-xs font-medium transition-colors"
          >
            {t('closeBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};
