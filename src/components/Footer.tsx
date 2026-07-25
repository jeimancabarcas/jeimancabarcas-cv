import React from 'react';
import { PROFILE_INFO } from '../data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenConnect: () => void;
  onOpenCVExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenConnect,
  onOpenCVExport,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-black/10 bg-white/60 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3525cd] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
                {PROFILE_INFO.name.charAt(0)}
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#191c1d]">
                {PROFILE_INFO.brandName}
              </span>
            </div>
            <p className="text-xs text-[#545f73] max-w-sm leading-relaxed">
              {PROFILE_INFO.bioShort}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#3525cd] hover:text-white text-[#191c1d] flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#3525cd] hover:text-white text-[#191c1d] flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConnect}
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#3525cd] hover:text-white text-[#191c1d] flex items-center justify-center transition-colors"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#191c1d] font-mono">
              Views & Sections
            </h4>
            <ul className="space-y-2 text-xs text-[#545f73]">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('expertise');
                    scrollToTop();
                  }}
                  className="hover:text-[#3525cd] transition-colors"
                >
                  Technical Skills & Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('cv');
                    scrollToTop();
                  }}
                  className="hover:text-[#3525cd] transition-colors"
                >
                  Digital CV / Bio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('experience');
                    scrollToTop();
                  }}
                  className="hover:text-[#3525cd] transition-colors"
                >
                  Career Path & Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Download */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#191c1d] font-mono">
              Direct Contact
            </h4>
            <p className="text-xs text-[#545f73]">
              Based in {PROFILE_INFO.location}. Available for senior engineering, AI solution architecture, and advisory roles.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={onOpenCVExport}
                className="px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-xs font-semibold text-[#191c1d] transition-colors"
              >
                Download PDF CV
              </button>
              <button
                onClick={onOpenConnect}
                className="px-4 py-2 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#545f73]">
          <div>
            © {new Date().getFullYear()} {PROFILE_INFO.brandName} • {PROFILE_INFO.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#3525cd] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
