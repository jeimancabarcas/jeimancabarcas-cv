import React from 'react';
import { ActiveTab } from '../types';
import { BASE_PROFILE } from '../data';
import { useLanguage } from '../LanguageContext';
import { Download, Mail, Layers, UserCheck, Briefcase, Globe } from 'lucide-react';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenConnect: () => void;
  onOpenCVExport: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  onOpenConnect,
  onOpenCVExport,
}) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-4 z-40 px-4 max-w-7xl mx-auto mb-8 sm:mb-12">
      <div className="glass-card bg-white/80 backdrop-blur-md rounded-2xl border border-black/5 shadow-sm px-4 sm:px-6 py-3 transition-all duration-300 flex items-center justify-between gap-4">
        {/* Brand Name */}
        <button
          onClick={() => setActiveTab('expertise')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-[#191c1d] group-hover:text-[#3525cd] transition-colors">
              {BASE_PROFILE.brandName}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-[#545f73] ml-2 px-1.5 py-0.5 rounded bg-black/5 font-semibold">
              {BASE_PROFILE.location}
            </span>
          </div>
        </button>

        {/* Primary Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f3f4f5] p-1.5 rounded-full border border-black/5">
          <button
            onClick={() => setActiveTab('expertise')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeTab === 'expertise'
                ? 'bg-white text-[#3525cd] shadow-sm'
                : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t('navExpertise')}</span>
          </button>

          <button
            onClick={() => setActiveTab('cv')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeTab === 'cv'
                ? 'bg-white text-[#3525cd] shadow-sm'
                : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t('navCV')}</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeTab === 'experience'
                ? 'bg-white text-[#3525cd] shadow-sm'
                : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('navExperience')}</span>
          </button>
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-black/5 p-1 rounded-full text-xs border border-black/5">
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all ${
                lang === 'es'
                  ? 'bg-[#3525cd] text-white shadow-xs'
                  : 'text-[#545f73] hover:text-[#191c1d]'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all ${
                lang === 'en'
                  ? 'bg-[#3525cd] text-white shadow-xs'
                  : 'text-[#545f73] hover:text-[#191c1d]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenCVExport}
            title="Export CV PDF / View Print Format"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#545f73] hover:text-[#191c1d] bg-black/5 hover:bg-black/10 rounded-full transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t('exportCVBtn')}</span>
          </button>

          <button
            onClick={onOpenConnect}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#191c1d] hover:bg-[#3525cd] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#3525cd]/20 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t('connectBtn')}</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation Sub-bar */}
      <div className="flex md:hidden justify-center mt-2">
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full border border-black/10 shadow-sm text-xs">
          <button
            onClick={() => setActiveTab('expertise')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'expertise' ? 'bg-[#3525cd] text-white' : 'text-[#545f73]'
            }`}
          >
            {t('navExpertise')}
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'cv' ? 'bg-[#3525cd] text-white' : 'text-[#545f73]'
            }`}
          >
            {t('navCV')}
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'experience' ? 'bg-[#3525cd] text-white' : 'text-[#545f73]'
            }`}
          >
            {t('navExperience')}
          </button>
        </div>
      </div>
    </header>
  );
};
