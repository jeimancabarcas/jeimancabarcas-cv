import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import {
  getProfileInfo,
  getExperiences,
  getEducation,
  getCertifications,
  BASE_PROFILE,
} from '../data';
import { useLanguage } from '../LanguageContext';

interface CVExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVExportModal: React.FC<CVExportModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const profileInfo = getProfileInfo(lang);
  const experiences = getExperiences(lang);
  const educationItems = getEducation(lang);
  const certificationItems = getCertifications(lang);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
${BASE_PROFILE.name.toUpperCase()}
${profileInfo.roleTitle} | ${BASE_PROFILE.location}
Email: ${BASE_PROFILE.email} | Phone: ${BASE_PROFILE.phone} | GitHub: ${BASE_PROFILE.github}

SUMMARY
${profileInfo.bioDetailed}

PROFESSIONAL EXPERIENCE
${experiences.map(
  (exp) => `
${exp.role} - ${exp.company} (${exp.year})
- ${exp.description}
${exp.highlights.map((h) => `  * ${h}`).join('\n')}
Tech Stack: ${exp.techStack.join(', ')}
`
).join('\n')}

ACADEMIC BACKGROUND
${educationItems.map((edu) => `${edu.title} - ${edu.institution} (${edu.year})`).join('\n')}

CERTIFICATIONS
${certificationItems.map((cert) => `${cert.title} - ${cert.issuer} (${cert.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-10 space-y-6 print:p-0 print:border-none print:shadow-none print:max-h-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#191c1d] flex items-center justify-center transition-colors print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/10 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3525cd]">
            <FileText className="w-4 h-4" />
            <span>{t('exportTitle')}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-xs font-semibold text-[#191c1d] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t('copiedMsg') : t('copyTextBtn')}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3525cd] hover:bg-[#271ab1] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('printPdfBtn')}</span>
            </button>
          </div>
        </div>

        {/* PRINTABLE CV CONTENT */}
        <div className="space-y-8 font-sans text-[#191c1d] p-2">
          {/* Header */}
          <div className="border-b pb-6 border-black/10 space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              {BASE_PROFILE.name}
            </h1>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#3525cd]">
              {profileInfo.roleTitle}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#545f73] font-mono pt-1">
              <span>LOCATION: {BASE_PROFILE.location}</span>
              <span>EMAIL: {BASE_PROFILE.email}</span>
              <span>PHONE: {BASE_PROFILE.phone}</span>
              <span>GITHUB: {BASE_PROFILE.github}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#545f73] font-mono">
              Resumen / Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#191c1d] leading-relaxed">
              {profileInfo.bioDetailed}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#545f73] font-mono border-b pb-1 border-black/10">
              {t('experienceHeader')}
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-[#191c1d]">
                    {exp.role} <span className="font-normal text-[#545f73]">@ {exp.company}</span>
                  </span>
                  <span className="font-mono text-xs text-[#3525cd] font-semibold">{exp.year}</span>
                </div>
                <p className="text-xs text-[#545f73]">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#191c1d] pl-1">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono text-[#545f73] pt-1">
                  <strong className="text-[#191c1d]">Technologies:</strong> {exp.techStack.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#545f73] font-mono border-b pb-1 border-black/10">
                {t('educationHeader')}
              </h2>
              {educationItems.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-[#191c1d]">{edu.title}</div>
                  <div className="text-[#545f73]">{edu.institution} • {edu.year}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#545f73] font-mono border-b pb-1 border-black/10">
                {t('certificationsHeader')}
              </h2>
              {certificationItems.map((cert, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-[#191c1d]">{cert.title}</div>
                  <div className="text-[#545f73]">{cert.issuer} • {cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
