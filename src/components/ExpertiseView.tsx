import React, { useState } from 'react';
import {
  PROFILE_INFO,
  CORE_COMPETENCIES,
  STRATEGIC_IMPACT,
  SKILL_CATEGORIES,
  EDUCATION_ITEMS,
  CERTIFICATION_ITEMS,
  BENTO_ITEMS,
} from '../data';
import { SkillCategory } from '../types';
import { Sparkles, ArrowUpRight, CheckCircle2, Award, Terminal, Code2, ShieldCheck, ChevronRight, MapPin } from 'lucide-react';

interface ExpertiseViewProps {
  onSelectSkill: (skill: SkillCategory) => void;
  onOpenConnect: () => void;
  onNavigateToExperience: () => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  onSelectSkill,
  onOpenConnect,
  onNavigateToExperience,
}) => {
  const [selectedTagFilter, setSelectedTagFilter] = useState<string | null>(null);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-12 flex flex-col items-center justify-center min-h-[520px] text-center overflow-hidden">
        {/* Soft Background Radial Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3525cd]/10 to-[#545f73]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Floating Interactive Tech Chips */}
        <div className="hidden lg:block absolute inset-0 max-w-5xl mx-auto pointer-events-none">
          <div className="pointer-events-auto absolute top-8 left-8 float-slow shadow-sm bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-semibold text-[#3525cd] flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-[#3525cd]" />
            TypeScript 5.8
          </div>
          <div className="pointer-events-auto absolute top-12 right-12 float-slow [animation-delay:1.5s] shadow-sm bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-semibold text-[#191c1d] flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            React 19 & Next.js
          </div>
          <div className="pointer-events-auto absolute bottom-16 left-12 float-slow [animation-delay:3s] shadow-sm bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-semibold text-[#545f73] flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Node.js & Express
          </div>
          <div className="pointer-events-auto absolute bottom-20 right-16 float-slow [animation-delay:2s] shadow-sm bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-semibold text-[#7e3000] flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Tailwind CSS v4
          </div>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold tracking-wider text-[#545f73] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#3525cd]" />
          <span>Technical Skills & Architecture</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#191c1d] max-w-4xl leading-[1.1] mb-6">
          A technical <em className="italic font-normal text-[#3525cd]">precision.</em>
        </h1>

        <p className="text-base sm:text-lg text-[#545f73] max-w-2xl mx-auto leading-relaxed px-4 font-light">
          {PROFILE_INFO.bioShort}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onNavigateToExperience}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:shadow-[#3525cd]/25 active:scale-95"
          >
            <span>Explore Case Studies</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={onOpenConnect}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-black/5 text-[#191c1d] text-xs font-semibold tracking-wider uppercase transition-all border border-black/10"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </section>

      {/* CENTRAL ORGANIC BLOB CARD: CORE COMPETENCIES & STRATEGIC IMPACT */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative glass-card bg-white/90 rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xl shadow-black/5 overflow-hidden">
          {/* Decorative organic background shape */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#e2dfff]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Core Competencies */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3525cd] mb-4">
                <Code2 className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <ul className="space-y-3">
                {CORE_COMPETENCIES.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#191c1d] group">
                    <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Impact */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7e3000] mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Strategic Impact</span>
              </div>
              <ul className="space-y-3">
                {STRATEGIC_IMPACT.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#191c1d] group">
                    <CheckCircle2 className="w-4 h-4 text-[#7e3000] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience Level Quick Pills */}
          <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#3525cd]/10 text-[#3525cd] font-semibold">
                Senior Technical Architect
              </span>
              <span className="px-3 py-1 rounded-full bg-[#545f73]/10 text-[#545f73] font-semibold">
                Creative Engineer
              </span>
              <span className="px-3 py-1 rounded-full bg-[#7e3000]/10 text-[#7e3000] font-semibold">
                Full-Stack Capability
              </span>
            </div>
            <span className="text-[#545f73] font-mono text-[11px]">
              LOCATION: LONDON • REMOTE-READY
            </span>
          </div>
        </div>
      </section>

      {/* DEEP TECH STACK METERS */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191c1d]">
              Deep Tech Stack Mastery
            </h2>
            <p className="text-xs text-[#545f73] uppercase tracking-wider font-semibold mt-1">
              Production-tested frameworks & architecture patterns
            </p>
          </div>
          {selectedTagFilter && (
            <button
              onClick={() => setSelectedTagFilter(null)}
              className="text-xs font-medium text-[#3525cd] underline"
            >
              Clear Filter ({selectedTagFilter})
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectSkill(cat)}
              className="group glass-card bg-white p-6 rounded-2xl border border-black/5 hover:border-[#3525cd]/30 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e2dfff]/60 text-[#3525cd] flex items-center justify-center">
                    <span className="material-symbols-outlined">{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#191c1d] group-hover:text-[#3525cd] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#545f73]">{cat.subtitle}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#3525cd]/10 text-[#3525cd] text-[10px] font-mono font-bold tracking-wider">
                  {cat.level}
                </span>
              </div>

              <p className="text-xs text-[#545f73] mb-4 line-clamp-2">
                {cat.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-1.5 mb-5">
                <div className="flex justify-between text-[11px] font-mono text-[#545f73]">
                  <span>Proficiency</span>
                  <span className="font-bold text-[#191c1d]">{cat.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3525cd] to-[#4f46e5] rounded-full transition-all duration-1000"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTagFilter(tag === selectedTagFilter ? null : tag);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      selectedTagFilter === tag
                        ? 'bg-[#3525cd] text-white'
                        : 'bg-[#f3f4f5] text-[#191c1d] hover:bg-[#e2dfff]/60'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#3525cd] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Full Skill Breakdown</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC BACKGROUND & CERTIFICATIONS */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#545f73] mb-6">
              <Award className="w-4 h-4 text-[#3525cd]" />
              <span>Academic Background</span>
            </div>
            <div className="space-y-6 relative border-l-2 border-black/10 pl-6 ml-2">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#3525cd] group-hover:scale-125 transition-transform" />
                  <span className="text-[11px] font-mono text-[#3525cd] font-semibold">
                    {edu.year}
                  </span>
                  <h4 className="font-bold text-base text-[#191c1d] mt-0.5">
                    {edu.title}
                  </h4>
                  <p className="text-xs font-medium text-[#545f73]">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-xs text-[#545f73]/80 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Cards */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#545f73] mb-6">
              <Award className="w-4 h-4 text-[#7e3000]" />
              <span>Professional Certifications</span>
            </div>
            <div className="space-y-3">
              {CERTIFICATION_ITEMS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-black/5 hover:border-black/15 shadow-sm flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${cert.colorBg} ${cert.colorText} flex items-center justify-center shrink-0`}
                    >
                      <span className="material-symbols-outlined">{cert.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#191c1d]">{cert.title}</h4>
                      <p className="text-xs text-[#545f73]">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#545f73]">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL QUOTE DIVIDER */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#e2dfff]/30 via-white to-[#d5e0f8]/30 border border-black/5">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#191c1d] leading-relaxed">
            "{PROFILE_INFO.techQuote}"
          </p>
          <span className="block mt-4 text-xs font-mono uppercase tracking-widest text-[#545f73]">
            — Alex Rivers • Principal Architect
          </span>
        </div>
      </section>

      {/* QUANTIFIABLE RESULTS / PERFORMANCE PHILOSOPHY BENTO GRID */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#191c1d]">
            Performance Philosophy
          </h2>
          <p className="text-xs text-[#545f73] uppercase tracking-wider font-semibold mt-1">
            Quantifiable results driven by intentional engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Data-Driven Development */}
          <div className="md:col-span-2 glass-card bg-white p-6 sm:p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <h3 className="font-bold text-lg text-[#191c1d] mb-2">
                Data-Driven Development
              </h3>
              <p className="text-sm text-[#545f73] leading-relaxed">
                Utilizing analytics and user feedback loops to prioritize technical features that drive the highest business value and user satisfaction.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-6 text-xs text-[#545f73] font-mono">
              <div>
                <span className="block text-lg font-bold text-[#3525cd] font-sans">99.9%</span>
                <span>Crash-free rate</span>
              </div>
              <div className="h-6 w-px bg-black/10" />
              <div>
                <span className="block text-lg font-bold text-[#191c1d] font-sans">&lt;100ms</span>
                <span>TTFB Response</span>
              </div>
            </div>
          </div>

          {/* Card 2: Lighthouse 100 */}
          <div className="bg-[#3525cd] text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <span className="font-serif text-5xl font-bold tracking-tight block mb-1">
                100
              </span>
              <p className="text-xs uppercase tracking-widest text-white/80 font-mono font-semibold mb-3">
                Lighthouse Best Practices
              </p>
              <p className="text-xs text-white/80 leading-relaxed">
                Uncompromising standard for Core Web Vitals, accessibility, and zero-runtime bloat.
              </p>
            </div>
          </div>

          {/* Card 3: CLI Tooling */}
          <div className="bg-[#f3f4f5] p-6 sm:p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black/10 text-[#191c1d] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <h3 className="font-bold text-base text-[#191c1d] mb-2">
                CLI Tooling & Automation
              </h3>
              <p className="text-xs text-[#545f73] leading-relaxed">
                Automating internal workflows with custom scripts to save engineering teams hundreds of hours annually.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-mono bg-black/5 p-2 rounded text-[#545f73]">
              $ npx aesthete-cli init --speed=max
            </div>
          </div>

          {/* Card 4: London Laboratory */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl group min-h-[220px] shadow-sm">
            <img
              src={PROFILE_INFO.labImageUrl}
              alt="London Laboratory Studio Workspace"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white/80 mb-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>London Studio • Global Thinking</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                Laboratory Workspace
              </h3>
              <p className="text-xs text-white/80 max-w-lg">
                Operating from a sun-drenched studio in London while collaborating with engineering teams across San Francisco, Tokyo, and Berlin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
