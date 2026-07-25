import React from 'react';
import { PROFILE_INFO, EXPERIENCES } from '../data';
import { Download, Github, Linkedin, ExternalLink, Mail, MapPin, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface DigitalCVViewProps {
  onOpenCVExport: () => void;
  onOpenConnect: () => void;
  onSelectExperience: (id: string) => void;
}

export const DigitalCVView: React.FC<DigitalCVViewProps> = ({
  onOpenCVExport,
  onOpenConnect,
  onSelectExperience,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO / BIO SECTION */}
      <section className="max-w-5xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#3525cd] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Curriculum Vitae</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-[#191c1d]">
              Crafting <em className="italic font-normal text-[#3525cd]">fluid</em> logic for{' '}
              <em className="italic font-normal text-[#7e3000]">meaningful</em> interfaces.
            </h1>

            <p className="text-sm sm:text-base text-[#545f73] leading-relaxed font-light">
              {PROFILE_INFO.bioDetailed}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCVExport}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:shadow-[#3525cd]/25 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Professional CV</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-black/10 hover:border-[#3525cd] flex items-center justify-center text-[#191c1d] hover:text-[#3525cd] transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-black/10 hover:border-[#3525cd] flex items-center justify-center text-[#191c1d] hover:text-[#3525cd] transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Organic Mask Profile Image with Context Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Background Organic Blob Shape */}
              <div className="absolute inset-0 bg-[#e2dfff] organic-shape-1 blur-md -z-10 transform scale-105" />

              {/* Profile Mask Image */}
              <div className="w-full h-full organic-shape-1 overflow-hidden border-2 border-white shadow-xl">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt={PROFILE_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Context Pill 1 */}
              <div className="absolute -top-3 -left-4 glass-card bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-md text-xs font-semibold text-[#191c1d] flex items-center gap-1.5 float-slow">
                <MapPin className="w-3.5 h-3.5 text-[#3525cd]" />
                <span>BASED IN {PROFILE_INFO.location}</span>
              </div>

              {/* Context Pill 2 */}
              <div className="absolute -bottom-3 -right-4 glass-card bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-md text-xs font-semibold text-[#191c1d] flex items-center gap-1.5 float-slow [animation-delay:2s]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>EXPERIENCE {PROFILE_INFO.yearsExperience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SKILLS & TIMELINE SUMMARY */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191c1d]">
              Professional Journey
            </h2>
            <p className="text-xs text-[#545f73] uppercase tracking-wider font-semibold mt-1">
              Chronological leadership & architectural track record
            </p>
          </div>
        </div>

        {/* Core skills summary pill box */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#3525cd]">
            Core Technical Arsenal
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {['TypeScript', 'Next.js', 'WebGL', 'System Design', 'UI/UX Strategy', 'GraphQL', 'D3.js'].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#f3f4f5] text-[#191c1d] font-semibold hover:bg-[#3525cd] hover:text-white transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperience(exp.id)}
              className="group glass-card bg-white p-6 sm:p-8 rounded-2xl border border-black/5 hover:border-[#3525cd]/30 shadow-sm hover:shadow-md transition-all cursor-pointer relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#3525cd]">
                    {exp.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#191c1d] group-hover:text-[#3525cd] transition-colors mt-0.5">
                    {exp.role} <span className="text-[#545f73] font-normal">@ {exp.company}</span>
                  </h3>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-black/5 text-[10px] font-mono font-bold tracking-wider text-[#545f73]">
                  {exp.type}
                </span>
              </div>

              <p className="text-sm text-[#545f73] mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#191c1d]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#3525cd] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5">
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-[#f3f4f5] text-[11px] font-medium text-[#545f73]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#3525cd] group-hover:translate-x-1 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <section className="w-full overflow-hidden bg-[#191c1d] text-white py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 font-serif text-xl sm:text-2xl font-light tracking-widest uppercase opacity-90 px-4">
            <span>CODE IS CRAFT</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>DESIGN IS INTENT</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>BEAUTY IS LOGIC</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>PRECISION IS ELEGANCE</span>
            <span className="text-[#3525cd] font-bold">•</span>
          </div>
          <div className="flex items-center gap-8 font-serif text-xl sm:text-2xl font-light tracking-widest uppercase opacity-90 px-4">
            <span>CODE IS CRAFT</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>DESIGN IS INTENT</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>BEAUTY IS LOGIC</span>
            <span className="text-[#3525cd] font-bold">•</span>
            <span>PRECISION IS ELEGANCE</span>
            <span className="text-[#3525cd] font-bold">•</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE CARD */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="glass-card bg-white p-8 sm:p-12 rounded-3xl border border-black/5 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-[#3525cd] shadow-md">
            <img
              src={PROFILE_INFO.avatarUrl}
              alt={`${PROFILE_INFO.name} Avatar`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#191c1d] max-w-2xl mx-auto leading-relaxed">
            "{PROFILE_INFO.philosophyQuote}"
          </blockquote>

          <div className="pt-2">
            <button
              onClick={onOpenConnect}
              className="px-8 py-3.5 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Let's Build Something Intentional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
