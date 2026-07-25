import React from 'react';
import { ActiveTab } from '../types';
import { BASE_PROFILE } from '../data';
import { useLanguage } from '../LanguageContext';
import { Download, Mail, Layers, UserCheck, Briefcase, MapPin } from 'lucide-react';

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
    <>
      {/* 1. TOP UTILITY BAR (Scrolls away with page flow) */}
      <div className="w-full bg-white/60 backdrop-blur-md border-b border-black/5 py-1.5 px-3 sm:px-6 text-xs transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Location & Availability */}
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-1 text-[#191c1d] font-semibold text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#3525cd] shrink-0" />
              <span>{BASE_PROFILE.location}</span>
            </div>
            <span className="hidden sm:inline-block text-black/20">•</span>
            <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible para Proyectos & Liderazgo IA</span>
            </div>
          </div>

          {/* Right: Actions (Language Toggle, Export CV, Contact) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#f3f4f5] p-0.5 rounded-full text-[11px] border border-black/5">
              <button
                onClick={() => setLang('es')}
                className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-[#3525cd] text-white shadow-xs'
                    : 'text-[#545f73] hover:text-[#191c1d]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-[#3525cd] text-white shadow-xs'
                    : 'text-[#545f73] hover:text-[#191c1d]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Export CV Button */}
            <button
              onClick={onOpenCVExport}
              title="Exportar CV PDF"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 hover:bg-black/10 text-[11px] font-medium text-[#191c1d] transition-colors"
            >
              <Download className="w-3 h-3 text-[#3525cd]" />
              <span className="hidden xs:inline">{t('exportCVBtn')}</span>
            </button>

            {/* Direct Contact Button */}
            <button
              onClick={onOpenConnect}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191c1d] hover:bg-[#3525cd] text-white text-[11px] font-semibold tracking-wide transition-all shadow-xs active:scale-95"
            >
              <Mail className="w-3 h-3" />
              <span>{t('connectBtn')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. FLOATING STICKY MAIN NAVBAR WITH BORDERS */}
      <header className="sticky top-2 sm:top-3 z-50 px-3 sm:px-6 max-w-7xl mx-auto my-2 sm:my-3">
        <div className="glass-card bg-white/95 backdrop-blur-xl rounded-2xl border border-black/10 shadow-md px-3.5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between gap-3 overflow-hidden">
          {/* Brand Name (Without JC initials circle) */}
          <button
            onClick={() => setActiveTab('expertise')}
            className="group flex items-center gap-2 text-left focus:outline-none shrink-0"
          >
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#191c1d] group-hover:text-[#3525cd] transition-colors leading-none block">
                {BASE_PROFILE.brandName}
              </span>
              <span className="hidden lg:inline-block text-[10px] uppercase font-semibold text-[#545f73] tracking-wider mt-0.5">
                MSc Software Architect
              </span>
            </div>
          </button>

          {/* Segmented Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-[#f3f4f5] p-1 rounded-full border border-black/5 overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveTab('expertise')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeTab === 'expertise'
                  ? 'bg-white text-[#3525cd] shadow-sm'
                  : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>{t('navExpertise')}</span>
            </button>

            <button
              onClick={() => setActiveTab('cv')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeTab === 'cv'
                  ? 'bg-white text-[#3525cd] shadow-sm'
                  : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{t('navCV')}</span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-white text-[#3525cd] shadow-sm'
                  : 'text-[#545f73] hover:text-[#191c1d] hover:bg-white/50'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 shrink-0" />
              <span>{t('navExperience')}</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
