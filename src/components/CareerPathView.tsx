import React from 'react';
import { getExperiences } from '../data';
import { useLanguage } from '../LanguageContext';
import { Sparkles, ArrowUpRight, CheckCircle2, BarChart3 } from 'lucide-react';

interface CareerPathViewProps {
  onSelectExperience: (id: string) => void;
  onOpenConnect: () => void;
}

export const CareerPathView: React.FC<CareerPathViewProps> = ({
  onSelectExperience,
  onOpenConnect,
}) => {
  const { lang, t } = useLanguage();
  const experiences = getExperiences(lang);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#3525cd] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('timelineHeader')}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#191c1d]">
          {t('navExperience')}
        </h1>

        <p className="text-base sm:text-lg text-[#545f73] max-w-2xl mx-auto font-light leading-relaxed">
          {t('timelineSub')}
        </p>
      </section>

      {/* ASYMMETRIC PEBBLE CARDS FOR EXPERIENCES */}
      <section className="max-w-5xl mx-auto px-4 space-y-12 sm:space-y-16">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.id}
              onClick={() => onSelectExperience(exp.id)}
              className="group glass-card bg-white rounded-3xl p-6 sm:p-10 border border-black/5 hover:border-[#3525cd]/30 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text Content */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#3525cd] bg-[#e2dfff]/50 px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                    <span className="text-xs font-semibold text-[#545f73] uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191c1d] group-hover:text-[#3525cd] transition-colors">
                      {exp.role}
                    </h2>
                    <p className="text-sm font-medium text-[#545f73] mt-1">
                      {exp.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#191c1d]">
                        <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-mono font-semibold flex items-center gap-1.5"
                      >
                        <BarChart3 className="w-3 h-3 text-emerald-600" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack & Action CTA */}
                  <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-[#f3f4f5] text-[11px] font-medium text-[#545f73]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-1.5 text-xs font-bold text-[#3525cd] group-hover:underline">
                      <span>{t('openCaseStudyBtn')}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hotlinked Image Mockup */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-md bg-[#191c1d]/5">
                      <img
                        src={exp.image}
                        alt={exp.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CONNECT PROMPT */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#191c1d] text-white shadow-2xl space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl">
            {t('getInTouchHeading')}
          </h2>
          <p className="text-sm text-white/70 max-w-lg mx-auto font-light">
            {t('getInTouchSub')}
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenConnect}
              className="px-8 py-3.5 rounded-full bg-white text-[#191c1d] hover:bg-[#e2dfff] text-xs font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-95"
            >
              {t('contactMeBtn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
