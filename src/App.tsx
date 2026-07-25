import React, { useState } from 'react';
import { ActiveTab, SkillCategory } from './types';
import { getExperiences } from './data';
import { useLanguage } from './LanguageContext';
import { Navigation } from './components/Navigation';
import { ExpertiseView } from './components/ExpertiseView';
import { DigitalCVView } from './components/DigitalCVView';
import { CareerPathView } from './components/CareerPathView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillDetailModal } from './components/SkillDetailModal';
import { ConnectModal } from './components/ConnectModal';
import { CVExportModal } from './components/CVExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>('expertise');
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);
  const [isCVExportOpen, setIsCVExportOpen] = useState<boolean>(false);

  const experiences = getExperiences(lang);
  const selectedExperience = experiences.find((exp) => exp.id === selectedExperienceId) || null;

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#f8f9fa] text-[#191c1d]">
      {/* Background Soft Gradients */}
      <div className="fixed inset-0 soft-gradient-bg pointer-events-none -z-10" />

      <div>
        {/* Navigation Bar */}
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenConnect={() => setIsConnectOpen(true)}
          onOpenCVExport={() => setIsCVExportOpen(true)}
        />

        {/* Main Active Tab Content */}
        <main className="transition-opacity duration-300">
          {activeTab === 'expertise' && (
            <ExpertiseView
              onSelectSkill={(skill) => setSelectedSkill(skill)}
              onOpenConnect={() => setIsConnectOpen(true)}
              onNavigateToExperience={() => setActiveTab('experience')}
            />
          )}

          {activeTab === 'cv' && (
            <DigitalCVView
              onOpenCVExport={() => setIsCVExportOpen(true)}
              onOpenConnect={() => setIsConnectOpen(true)}
              onSelectExperience={(id) => setSelectedExperienceId(id)}
            />
          )}

          {activeTab === 'experience' && (
            <CareerPathView
              onSelectExperience={(id) => setSelectedExperienceId(id)}
              onOpenConnect={() => setIsConnectOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConnect={() => setIsConnectOpen(true)}
        onOpenCVExport={() => setIsCVExportOpen(true)}
      />

      {/* Modals */}
      <CaseStudyModal
        experience={selectedExperience}
        onClose={() => setSelectedExperienceId(null)}
        onOpenConnect={() => setIsConnectOpen(true)}
      />

      <SkillDetailModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        onNavigateToExperience={() => setActiveTab('experience')}
      />

      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />

      <CVExportModal
        isOpen={isCVExportOpen}
        onClose={() => setIsCVExportOpen(false)}
      />
    </div>
  );
}
