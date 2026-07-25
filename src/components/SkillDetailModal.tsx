import React from 'react';
import { SkillCategory } from '../types';
import { useLanguage } from '../LanguageContext';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface SkillDetailModalProps {
  skill: SkillCategory | null;
  onClose: () => void;
  onNavigateToExperience: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skill,
  onClose,
  onNavigateToExperience,
}) => {
  const { t } = useLanguage();

  if (!skill) return null;

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

        {/* Skill Title Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#e2dfff] text-[#3525cd] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3525cd]">
              {skill.level} • {skill.percentage}%
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#191c1d]">
              {skill.title}
            </h2>
            <p className="text-xs text-[#545f73]">{skill.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#545f73] leading-relaxed">
          {skill.description}
        </p>

        {/* Tag Pills */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#545f73] mb-2">
            {t('tagsLabel')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#f3f4f5] text-[#191c1d] text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#545f73] mb-2">
            {t('projectsLabel')}
          </h3>
          <ul className="space-y-2">
            {skill.keyProjects.map((proj, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#191c1d]">
                <CheckCircle2 className="w-4 h-4 text-[#3525cd]" />
                <span>{proj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-black/10 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onNavigateToExperience();
            }}
            className="flex items-center gap-2 text-xs font-bold text-[#3525cd] hover:underline"
          >
            <span>{t('viewExperienceBtn')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-xs font-medium text-[#191c1d]"
          >
            {t('closeBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};
