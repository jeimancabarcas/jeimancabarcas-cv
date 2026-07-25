import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    navExpertise: 'Especialidades & IA',
    navCV: 'CV Digital',
    navExperience: 'Experiencia & Proyectos',
    connectBtn: 'Contacto Directo',
    exportCVBtn: 'Exportar CV',
    locationShort: 'Cartagena, Colombia',

    // Hero / Profile
    roleTitle: 'SENIOR SOFTWARE ENGINEER | AI ENGINEER | SDD ARCHITECT',
    tagline: 'Ingeniería de Software Senior & IA Agéntica.',
    subTagline: 'Combinando Clean Architecture, Desarrollo Guiado por Especificaciones (SDD) e Inteligencia Artificial de Vanguardia.',
    bioShort: 'Ingeniero Senior en Globant con Maestría en Ingeniería de Software de la UNIR. Dominio integral del ciclo de vida del desarrollo de software (SDLC), integrando principios avanzados de arquitectura (SOLID, SDD, Clean Architecture) con herramientas de IA Agéntica.',
    bioDetailed: 'Entrego soluciones integrales que abarcan desde el análisis inicial de requerimientos y diseño de sistemas hasta el despliegue y mantenimiento de ecosistemas escalables. Especializado en frontends de alto rendimiento en Angular y React, backends robustos en Java (Spring Boot) / Node.js, y la orquestación de soluciones de IA Generativa con Prompt Engineering y arquitecturas RAG.',
    philosophyQuote: 'Entrego soluciones integrales combinando principios de arquitectura avanzada con Ingeniería de IA de última generación.',
    techQuote: 'El código limpio, el desarrollo guiado por especificaciones y la automatización inteligente generan un alto valor de negocio.',

    // Buttons & Labels
    viewPathBtn: 'Ver Trayectoria Completa',
    downloadCVBtn: 'Descargar Hoja de Vida',
    contactMeBtn: 'Iniciar Conversación',
    clickToInspect: 'Haz clic para inspeccionar detalles',
    clickForCaseStudy: 'Ver Estudio de Caso',
    presentLabel: 'Presente',
    fulltimeLabel: 'TIEMPO COMPLETO',
    contractLabel: 'CONTRATO',
    leadLabel: 'LÍDER TÉCNICO',

    // Headers
    coreCompetenciesHeader: 'Competencias Clave',
    strategicImpactHeader: 'Impacto Estratégico & Logros',
    skillsGridHeader: 'Especialidades & Dominios Técnicos',
    bentoHeader: 'Filosofía & Principios de Ingeniería',
    getInTouchHeading: '¿Listo para impulsar tu próximo proyecto con IA y Arquitectura Robusta?',
    getInTouchSub: 'Disponible para roles de ingeniería senior, arquitectura de software y desarrollo de soluciones con IA.',

    // Digital CV
    cvHeader: 'HOJA DE VIDA DIGITAL',
    rolesLabel: 'AÑOS DE EXPERIENCIA EN LA INDUSTRIA',
    educationHeader: 'Educación & Titulaciones',
    certificationsHeader: 'Certificaciones & Idiomas',
    experienceHeader: 'Experiencia Profesional',
    downloadPDFBtn: 'Exportar / Imprimir PDF',

    // Career Path
    timelineHeader: 'TRAYECTORIA PROFESIONAL & CASOS DE ESTUDIO',
    timelineSub: 'Línea de tiempo detallada de roles en proyectos globales, migraciones de software y herramientas de IA agéntica.',
    filterAll: 'Todos',
    techStackLabel: 'Stack Tecnológico',
    metricsLabel: 'Métricas Clave & Resultados',
    architectureLabel: 'Estrategia de Arquitectura',
    openCaseStudyBtn: 'Abrir Estudio de Caso',

    // Modals
    caseStudyTag: 'ESTUDIO DE CASO DE ARQUITECTURA',
    overviewTitle: 'Resumen Ejecutivo & Contexto',
    highlightsTitle: 'Aportes & Logros Principales',
    metricsTitle: 'Impacto Medible',
    archTitle: 'Visión General de Arquitectura',
    closeBtn: 'Cerrar',
    scheduleBtn: 'Agendar Discusión Técnica',

    skillDetailTag: 'DESGLOSE DE COMPETENCIA TÉCNICA',
    levelLabel: 'Nivel de Dominio:',
    tagsLabel: 'Tecnologías & Herramientas Clave',
    projectsLabel: 'Proyectos Destacados donde se aplicó',
    viewExperienceBtn: 'Ver Experiencia Asociada',

    connectTitle: 'Conectar con Jeiman Cabarcas',
    connectSub: 'Línea directa para ingeniería senior, arquitectura de software y proyectos de IA.',
    topicLabel: 'Asunto o Área de Interés',
    nameLabel: 'Tu Nombre / Empresa',
    emailLabel: 'Tu Correo Electrónico',
    messageLabel: 'Mensaje / Detalle de la Propuesta',
    sendBtn: 'Enviar Mensaje',
    successTitle: '¡Mensaje Recibido!',
    successMsg: 'Gracias por ponerte en contacto. Jeiman revisará tu mensaje y responderá a la brevedad.',

    exportTitle: 'Exportar Hoja de Vida',
    exportSub: 'Selecciona el formato preferido para guardar o imprimir el CV de Jeiman Cabarcas.',
    printPdfBtn: 'Imprimir / Guardar en PDF',
    copyTextBtn: 'Copiar como Texto Plano',
    copiedMsg: '¡Copiado al portapapeles!',

    // Footer
    footerDesc: 'Basado en Cartagena, Colombia. Disponible para proyectos internacionales, consultoría técnica y roles de ingeniería senior.',
    quickNav: 'Navegación Rápida',
    directContact: 'Contacto Directo',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Subir',
  },
  en: {
    // Nav
    navExpertise: 'Expertise & AI',
    navCV: 'Digital CV',
    navExperience: 'Experience & Projects',
    connectBtn: 'Direct Contact',
    exportCVBtn: 'Export CV',
    locationShort: 'Cartagena, Colombia',

    // Hero / Profile
    roleTitle: 'SENIOR SOFTWARE ENGINEER | AI ENGINEER | SDD ARCHITECT',
    tagline: 'AI & Senior Software Engineer.',
    subTagline: 'Combining Clean Architecture, Spec-Driven Development (SDD), and Cutting-Edge AI Engineering.',
    bioShort: 'Senior Engineer at Globant with an MSc in Software Engineering from UNIR. Comprehensive mastery of the SDLC, combining advanced architectural principles (SOLID, SDD, Clean Architecture) with cutting-edge AI Engineering.',
    bioDetailed: 'I deliver end-to-end solutions ranging from initial requirements analysis and system design to the deployment and maintenance of scalable ecosystems. Specializing in high-performance Angular and React frontends, robust Java (Spring Boot) / Node.js backends, and orchestrating Generative AI solutions with Prompt Engineering and RAG architectures.',
    philosophyQuote: 'I deliver end-to-end solutions by combining advanced architectural principles with cutting-edge AI Engineering.',
    techQuote: 'Clean code, spec-driven development, and intelligent automation deliver high-impact business value.',

    // Buttons & Labels
    viewPathBtn: 'View Full Career Path',
    downloadCVBtn: 'Download Resume',
    contactMeBtn: 'Start a Conversation',
    clickToInspect: 'Click to inspect details',
    clickForCaseStudy: 'View Case Study',
    presentLabel: 'Present',
    fulltimeLabel: 'FULL-TIME',
    contractLabel: 'CONTRACT',
    leadLabel: 'LEAD',

    // Headers
    coreCompetenciesHeader: 'Core Competencies',
    strategicImpactHeader: 'Strategic Impact & Accomplishments',
    skillsGridHeader: 'Specialized Technical Domains',
    bentoHeader: 'Engineering Philosophy & Principles',
    getInTouchHeading: 'Ready to power your next project with AI & Robust Architecture?',
    getInTouchSub: 'Available for senior software engineering, software architecture, and AI solution integration roles.',

    // Digital CV
    cvHeader: 'DIGITAL CURRICULUM VITAE',
    rolesLabel: 'YEARS OF INDUSTRY EXPERIENCE',
    educationHeader: 'Education & Qualifications',
    certificationsHeader: 'Certifications & Languages',
    experienceHeader: 'Professional Experience',
    downloadPDFBtn: 'Export / Print PDF',

    // Career Path
    timelineHeader: 'CAREER PATH & CASE STUDIES',
    timelineSub: 'Detailed timeline of roles in global projects, software migrations, and agentic AI tooling.',
    filterAll: 'All',
    techStackLabel: 'Tech Stack',
    metricsLabel: 'Key Metrics & Impact',
    architectureLabel: 'Architecture Strategy',
    openCaseStudyBtn: 'Open Case Study',

    // Modals
    caseStudyTag: 'ARCHITECTURAL CASE STUDY',
    overviewTitle: 'Executive Overview & Context',
    highlightsTitle: 'Key Contributions & Achievements',
    metricsTitle: 'Measurable Impact',
    archTitle: 'Architectural Strategy Overview',
    closeBtn: 'Close',
    scheduleBtn: 'Schedule Technical Discussion',

    skillDetailTag: 'TECHNICAL COMPETENCY BREAKDOWN',
    levelLabel: 'Proficiency Level:',
    tagsLabel: 'Key Technologies & Tools',
    projectsLabel: 'Featured Projects Applied In',
    viewExperienceBtn: 'View Related Experience',

    connectTitle: 'Connect with Jeiman Cabarcas',
    connectSub: 'Direct contact line for senior engineering, software architecture, and AI projects.',
    topicLabel: 'Subject or Area of Interest',
    nameLabel: 'Your Name / Company',
    emailLabel: 'Your Email Address',
    messageLabel: 'Message / Proposal Details',
    sendBtn: 'Send Message',
    successTitle: 'Message Received!',
    successMsg: 'Thank you for getting in touch. Jeiman will review your message and respond shortly.',

    exportTitle: 'Export Resume / CV',
    exportSub: 'Select preferred format to save or print Jeiman Cabarcas\'s CV.',
    printPdfBtn: 'Print / Save as PDF',
    copyTextBtn: 'Copy as Plain Text',
    copiedMsg: 'Copied to clipboard!',

    // Footer
    footerDesc: 'Based in Cartagena, Colombia. Available for international projects, technical consulting, and senior engineering roles.',
    quickNav: 'Quick Navigation',
    directContact: 'Direct Contact',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
