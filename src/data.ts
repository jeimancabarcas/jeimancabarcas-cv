import {
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  BentoCardItem,
} from './types';
import { Language } from './LanguageContext';

export const BASE_PROFILE = {
  name: 'Jeiman Cabarcas',
  brandName: 'Jeiman Cabarcas',
  location: 'Cartagena, Bolívar, Colombia',
  yearsExperience: '7+ Years',
  phone: '+57 3176821177',
  email: 'jeimancabarcas@gmail.com',
  github: 'https://github.com/jeimancabarcas',
  linkedin: 'https://www.linkedin.com/in/jeimancabarcas',
  readcv: 'https://github.com/jeimancabarcas',
  avatarUrl: '/pp.jpg',
  labImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfT94pKdcrNPGezgjUxT62YUzVKMkyLOqI3TSJ-RFIZlySgJRWEZWKHDH216hYj0lT8M_gBYgLWjs1mZ7M85tKIuRSb0dpCCs5N7KU9VtG4vYp26GBU4BITeEdj7AGsgQBtjjBnkCr4VtkZ_yhrgxwuISp6X2_PnP1qtrfTkIsDu-lckDSrN0ivgcmVbYsogo3oM7Qdk71apbzbebH9-ucXp1_EsajhP3RteKmxRUvfTANZ3Cq6OrDoiCGuG0tVEc5kXz2XdlwCnXp',
};

export const getProfileInfo = (lang: Language) => {
  const isEs = lang === 'es';
  return {
    ...BASE_PROFILE,
    tagline: isEs
      ? 'Ingeniería de Software Senior & IA Agéntica.'
      : 'AI & Senior Software Engineer.',
    subTagline: isEs
      ? 'Combinando Clean Architecture, Desarrollo Guiado por Especificaciones (SDD) e Inteligencia Artificial de Vanguardia.'
      : 'Combining clean architecture, spec-driven development, and cutting-edge AI Engineering.',
    roleTitle: isEs
      ? 'SENIOR SOFTWARE ENGINEER | INGENIERO DE IA | ARQUITECTO SDD'
      : 'SENIOR SOFTWARE ENGINEER | AI ENGINEER | SDD ARCHITECT',
    bioShort: isEs
      ? 'Ingeniero Senior en Globant con Maestría en Ingeniería de Software de la UNIR. Dominio integral del ciclo de vida del desarrollo de software (SDLC), integrando principios avanzados de arquitectura (SOLID, SDD, Clean Architecture) con herramientas de IA Agéntica.'
      : 'Senior Engineer at Globant with an MSc in Software Engineering from UNIR. Comprehensive mastery of the SDLC, combining advanced architectural principles (SOLID, SDD, Clean Architecture) with cutting-edge AI Engineering.',
    bioDetailed: isEs
      ? 'Entrego soluciones integrales que abarcan desde el análisis inicial de requerimientos y diseño de sistemas hasta el despliegue y mantenimiento de ecosistemas escalables. Especializado en frontends de alto rendimiento en Angular y React, backends robustos en Java (Spring Boot) / Node.js, y la orquestación de soluciones de IA Generativa con Prompt Engineering y arquitecturas RAG.'
      : 'I deliver end-to-end solutions ranging from initial requirements analysis and system design to the deployment and maintenance of scalable ecosystems. Specializing in high-performance Angular and React frontends, robust Java (Spring Boot) / Node.js backends, and orchestrating Generative AI solutions with Prompt Engineering and RAG architectures.',
    philosophyQuote: isEs
      ? 'Entrego soluciones integrales combinando principios de arquitectura avanzada con Ingeniería de IA de última generación.'
      : 'I deliver end-to-end solutions by combining advanced architectural principles with cutting-edge AI Engineering.',
    techQuote: isEs
      ? 'El código limpio, el desarrollo guiado por especificaciones y la automatización inteligente generan un alto valor de negocio.'
      : 'Clean code, spec-driven development, and intelligent automation deliver high-impact business value.',
  };
};

export const PROFILE_INFO = getProfileInfo('es');

export const getCoreCompetencies = (lang: Language): string[] => {
  if (lang === 'es') {
    return [
      'Desarrollo de IA Agéntica y SDD (Desarrollo Guiado por Especificaciones)',
      'Clean Architecture, Principios SOLID y Patrones de Diseño',
      'Frontends Empresariales de Alto Rendimiento en Angular y React',
      'Desarrollo Backend Robusto: Java (Spring Boot) y Node.js / Express',
      'Soluciones de IA Generativa, Prompt Engineering y Arquitecturas RAG',
      'Optimización de Bases de Datos SQL y NoSQL (PostgreSQL, MongoDB, Firebase)',
    ];
  }
  return [
    'Agentic AI Development & SDD (Spec-Driven Development)',
    'Clean Architecture, SOLID Principles & Design Patterns',
    'High-Performance Angular & React Enterprise Frontends',
    'Robust Backend Development: Java (Spring Boot) & Node.js / Express',
    'Generative AI Solutions, Prompt Engineering & RAG Architectures',
    'SQL & NoSQL Database Optimization (PostgreSQL, MongoDB, Firebase)',
  ];
};

export const CORE_COMPETENCIES = getCoreCompetencies('es');

export const getStrategicImpact = (lang: Language): string[] => {
  if (lang === 'es') {
    return [
      'Construcción de herramientas de IA para producción (Copilot CLI, Claude Code, OpenCode)',
      'Optimización de contexto en LLM y eficiencia de tokens con flujos SDD',
      'Modernización de sistemas Angular empresariales y migración de AngularJS a Angular 10+',
      'Liderazgo en el ciclo de vida completo del desarrollo de software (SDLC) hasta producción',
    ];
  }
  return [
    'Engineered production-ready AI tools (Copilot CLI, Claude Code, OpenCode)',
    'Optimized LLM context and token efficiency with Spec-Driven Workflows',
    'Upgraded enterprise Angular systems & migrated legacy AngularJS to Angular 10+',
    'Full SDLC ownership from system design to cloud deployment and auditing support',
  ];
};

export const STRATEGIC_IMPACT = getStrategicImpact('es');

export const getSkillCategories = (lang: Language): SkillCategory[] => {
  const isEs = lang === 'es';
  return [
    {
      id: 'ai-engineering',
      title: isEs ? 'IA Agéntica e Ingeniería RAG' : 'Agentic AI & RAG Engineering',
      subtitle: isEs ? 'IA Generativa y Flujos SDD' : 'Generative AI & SDD Workflows',
      level: isEs ? 'EXPERTO' : 'EXPERT',
      percentage: 95,
      icon: 'smart_toy',
      tags: ['Copilot CLI', 'Claude Code', 'OpenCode', 'Prompt Engineering', 'RAG Architectures', 'Firebase AI'],
      description: isEs
        ? 'Orquestación de soluciones de IA Generativa, implementación de Prompt Engineering y diseño de arquitecturas RAG que integran automatización inteligente en productos empresariales con alta eficiencia de tokens.'
        : 'Orchestrating Generative AI solutions, implementing Prompt Engineering, and designing RAG architectures that bring intelligent automation to enterprise-grade products with spec-driven token efficiency.',
      keyProjects: isEs
        ? ['Integración Corporativa de Copilot CLI', 'Asistente de Conocimiento RAG', 'Optimizador de Tokens Agénticos']
        : ['Enterprise Copilot CLI Integration', 'RAG Knowledge Assistant', 'Agentic Token Optimizer'],
    },
    {
      id: 'frontend',
      title: isEs ? 'Arquitectura Frontend' : 'Frontend Architecture',
      subtitle: 'Angular, React & TypeScript',
      level: isEs ? 'EXPERTO' : 'EXPERT',
      percentage: 98,
      icon: 'developer_board',
      tags: ['Angular 10-18+', 'React.js', 'TypeScript', 'JavaScript', 'SCSS/SASS', 'Angular Material', 'RxJS'],
      description: isEs
        ? 'Construcción de frontends de alto rendimiento en Angular y React, migraciones principales de frameworks y desarrollo de interfaces ágiles para servicios de consultoría y auditoría.'
        : 'Building high-performance Angular and React frontends, performing major framework migrations, and engineering smooth responsive UIs for consulting and auditing services.',
      keyProjects: isEs
        ? ['Portal de Auditoría Empresarial Globant', 'Migración de AngularJS a Angular 10', 'Interceptores HTTP Universales']
        : ['Globant Enterprise Auditing Portal', 'AngularJS to Angular 10 Migration', 'Universal HTTP Interceptors'],
    },
    {
      id: 'backend',
      title: isEs ? 'Backend y Microservicios' : 'Backend & Microservices',
      subtitle: 'Java Spring Boot & Node.js',
      level: isEs ? 'AVANZADO' : 'ADVANCED',
      percentage: 90,
      icon: 'database',
      tags: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Clean Architecture'],
      description: isEs
        ? 'Diseño de servicios backend robustos, arquitectura de APIs RESTful, gestión de tokens de seguridad y ecosistemas de microservicios siguiendo principios SOLID.'
        : 'Designing robust backend services, RESTful API architecture, security token management, and microservice ecosystems following SOLID principles.',
      keyProjects: isEs
        ? ['Servicios Núcleo Java Spring Boot', 'Microservicios Node.js Express', 'Gateway de Seguridad de Tokens']
        : ['Java Spring Boot Core Services', 'Node.js Express Microservices', 'Secure Token Gateway'],
    },
    {
      id: 'cloud-databases',
      title: isEs ? 'Bases de Datos y Metodologías' : 'Databases & Methodologies',
      subtitle: isEs ? 'SQL, NoSQL y SCRUM Ágil' : 'SQL, NoSQL & Agile SCRUM',
      level: isEs ? 'AVANZADO' : 'ADVANCED',
      percentage: 92,
      icon: 'cloud_sync',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Git', 'Webpack', 'SCRUM Methodologies'],
      description: isEs
        ? 'Comprometido con código limpio, metodologías ágiles (SCRUM), integración continua y optimización híbrida de bases de datos SQL y NoSQL.'
        : 'Committed to clean code, agile methodologies (SCRUM), continuous integration, and hybrid database optimization across SQL and NoSQL ecosystems.',
      keyProjects: isEs
        ? ['Entornos Sandbox en MongoDB', 'Esquemas de Datos SQL Corporativos', 'Backends en Tiempo Real con Firebase']
        : ['MongoDB Sandbox Environments', 'Enterprise SQL Data Schemas', 'Firebase Realtime Backends'],
    },
  ];
};

export const SKILL_CATEGORIES = getSkillCategories('es');

export const getExperiences = (lang: Language): ExperienceItem[] => {
  const isEs = lang === 'es';
  return [
    {
      id: 'globant-ssr-adv',
      year: isEs ? 'Julio 2022 — Presente' : 'July 2022 — Present',
      role: isEs ? 'Desarrollador Frontend SSr Adv' : 'Frontend Developer, SSr Adv',
      company: 'Globant',
      type: 'FULL-TIME',
      description: isEs
        ? 'Ingeniero Senior en Globant enfocado en el desarrollo de nuevas funcionalidades, actualización de versiones de Angular, soporte e implementación de correcciones para software de consultoría y auditoría global.'
        : 'Senior engineer at Globant focused on developing new features, upgrading Angular versions, providing support, and implementing hotfixes for global consulting and auditing client products.',
      highlights: isEs
        ? [
            'Desarrollo de soluciones de software para producción utilizando herramientas avanzadas de IA (Copilot CLI, Claude Code, OpenCode) con flujos de trabajo SDD (Desarrollo Guiado por Especificaciones).',
            'Optimización de contexto en modelos LLM y eficiencia de tokens en pipelines de ingeniería generativa.',
            'Garantía de operación continua y mejoras de características para software empresarial crítico de consultoría y auditoría.',
            'Mantenimiento de altos estándares de arquitectura limpia, principios SOLID y pruebas automatizadas en entregables de múltiples equipos.',
          ]
        : [
            'Engineered production-ready software solutions using advanced AI tools (Copilot CLI, Claude Code, OpenCode) with SDD (Spec-Driven Development) workflows.',
            'Optimized LLM context and token efficiency in generative engineering pipelines.',
            'Ensured smooth continuous operation and feature enhancements for critical consulting and auditing enterprise software.',
            'Maintained high standards of clean architecture, SOLID principles, and automated testing across multi-team deliverables.',
          ],
      techStack: ['Angular', 'TypeScript', 'Copilot CLI', 'Claude Code', 'OpenCode', 'SDD Workflows', 'RxJS', 'SCSS'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
      imageAlt: isEs ? 'Ingeniería de Software Corporativa con IA en Globant' : 'Globant Enterprise Software Engineering with AI Tools',
      metrics: isEs
        ? ['4+ Años en Globant', 'Flujos Agénticos de IA con SDD', 'Optimización de Eficiencia de Tokens']
        : ['4+ Years at Globant', 'Agentic SDD AI Workflows', 'Token Efficiency Optimized'],
      architectureOverview: isEs
        ? 'Orquestación de Desarrollo Guiado por Especificaciones (SDD) e integración de herramientas de IA generativa en suites de auditoría corporativa con límites claros de arquitectura limpia.'
        : 'Spec-Driven Development (SDD) orchestration integrating generative AI tooling into high-frequency Angular enterprise auditing suites with clean architecture boundaries.',
    },
    {
      id: 'globant-ssr',
      year: isEs ? 'Sept 2021 — Junio 2022' : 'Sept 2021 — June 2022',
      role: isEs ? 'Desarrollador Frontend Ssr' : 'Frontend Developer Ssr',
      company: 'Globant',
      type: 'FULL-TIME',
      description: isEs
        ? 'Gestión de entornos sandbox, microservicios y liderazgo en la migración principal de arquitectura frontend.'
        : 'Managed sandbox environments, microservices, and spearheaded major frontend architecture migrations.',
      highlights: isEs
        ? [
            'Gestión, creación y mantenimiento de entornos sandbox utilizando Angular 8+, SCSS, Node.js/Express.js y MongoDB.',
            'Liderazgo en la migración y desarrollo de características en software de gestión pasando de AngularJS a Angular 10.',
            'Diseño de patrones de comunicación entre microservicios y programación asíncrona.',
          ]
        : [
            'Managed creation and maintenance of sandbox environments using Angular 8+, SCSS, Node.js/Express.js, and MongoDB.',
            'Led the migration and feature development in management software from AngularJS to Angular 10.',
            'Architected microservices communication and asynchronous programming patterns.',
          ],
      techStack: ['Angular 10', 'AngularJS', 'Node.js', 'Express.js', 'MongoDB', 'SCSS', 'TypeScript'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC4fpT-wqUiu0G5Xgi_8ldtoxdHqW9zCzaSSo_eLJCANdEMIqTjrSh1voN08ZlZKbSKgW2d8RGEjj5eGYOFcNmsEtWwKAL0LNCmURtLcemxPTW8KcGZDIlWZ1_DJ1vD5gMmbvL2WuRBAI9Dalko-QJGHCLV6J8SwNAlXJKloM6NipmOZunAdf54El2HM36b6tO2PH5BVggZfWREUF9nmOmdm-k6zJ0WMnB69A7xcBDEjK3Nw0_eg7VG2e5_qjfmztv4P2l12109c-Qx',
      imageAlt: isEs ? 'Entorno de Desarrollo Sandbox y Migración Angular' : 'Angular Migration and Sandbox Development Environment',
      metrics: isEs
        ? ['Migración AngularJS a Angular 10', 'Ecosistema Completo de Sandbox', '100% Confiabilidad en Microservicios']
        : ['AngularJS -> Angular 10 Migration', 'Full Sandbox Ecosystem', '100% Microservice Reliability'],
      architectureOverview: isEs
        ? 'Entorno desacoplado de Node.js con proxies Express y colecciones MongoDB que facilitaron la migración fluida de AngularJS heredado hacia Angular 10 moderno.'
        : 'Decoupled Node.js sandbox environment with Express proxies and MongoDB collections facilitating seamless legacy AngularJS migration to modern Angular 10.',
    },
    {
      id: 'cidenet-fullstack-1',
      year: isEs ? 'Marzo 2020 — Sept 2021' : 'March 2020 — Sept 2021',
      role: isEs ? 'Desarrollador Full Stack' : 'Full Stack Developer',
      company: 'Cidenet S.A.S',
      type: 'FULL-TIME',
      description: isEs
        ? 'Definición de estructuras de proyectos desde Angular 1.x hasta 5.x, enrutamiento, seguridad, internacionalización e interceptores HTTP.'
        : 'Defined project structures across Angular 1.x to 5.x, handled routing, security, internationalization, and HTTP request interceptors.',
      highlights: isEs
        ? [
            'Definición de la línea base arquitectónica para proyectos Angular desde la versión 1.x a la 5.x, estilos SASS personalizados y gestión de rutas.',
            'Implementación de interceptores HTTP universales, manejo de eventos en componentes, gestión de tokens de seguridad y Angular Translate.',
            'Integración de Webpack, TsLint, Angular Material y almacenamiento local del navegador en diversas líneas de negocio de clientes.',
          ]
        : [
            'Defined architectural baseline for Angular projects across versions 1.x to 5.x, custom SASS styling, and route handling.',
            'Implemented universal HTTP interceptors, component event handling, security token management, and Angular Translate.',
            'Integrated Webpack, TsLint, Angular Material, and browser Local Storage across diverse client business lines.',
          ],
      techStack: ['Angular 1.x-5.x', 'TypeScript', 'SASS', 'Webpack', 'Angular Material', 'REST APIs', 'TsLint'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01q1Z1PO9ibPWrR6NS-WX2ViJoTf-bXUfSSUaL593mbc5Ou3JcTKzRR4ckaRHMDBLz5Hr2cQ9KbTD2AF0qeST-ca_zxknGtrFg4bjIRQl8SnBW86ylqgfRwM-vAtwL-PsmtW2_b0NOC9TNI1U0wO6SpvxFnndXyftZA9AW6HjBY6eep_Ky1BRvsq6_nKChVDHkztO2qnioEb82Vlxt10Pt_l6sah1-ju3cL9WpXPst2cYttEv_UAHgE2PT3zau0n6499hG35BNmc',
      imageAlt: isEs ? 'Arquitectura Fullstack Angular y REST' : 'Fullstack Angular and REST Architecture',
      metrics: isEs
        ? ['Múltiples Líneas de Clientes Atendidas', 'Interceptores HTTP Universales', 'Sporte Multilingüe (i18n)']
        : ['Multiple Client Lines Served', 'Universal HTTP Interceptors', 'Multi-Language i18n'],
      architectureOverview: isEs
        ? 'Arquitectura modular con pipeline central de interceptores de seguridad HTTP, almacenamiento de tokens JWT y optimización de recursos empaquetados con Webpack.'
        : 'Modular Angular framework architecture with central HTTP security interceptor pipeline, JWT token storage, and Webpack bundled asset optimization.',
    },
    {
      id: 'pragma-frontend',
      year: isEs ? 'Oct 2019 — Marzo 2020' : 'Oct 2019 — March 2020',
      role: isEs ? 'Desarrollador Frontend' : 'Frontend Developer',
      company: 'PRAGMA',
      type: 'FULL-TIME',
      description: isEs
        ? 'Desarrollo de interfaces adaptativas y colaboración en equipos ágiles SCRUM en tecnologías Java, SQL y TypeScript.'
        : 'Developed responsive user interfaces and collaborated in agile SCRUM teams across Java, SQL, and TypeScript stacks.',
      highlights: isEs
        ? [
            'Diseño de plantillas adaptativas garantizando una visualización óptima en dispositivos de escritorio, tabletas y móviles.',
            'Uso de Java, SQL, JavaScript, HTML5, CSS3 y TypeScript con control de versiones en Git.',
            'Aplicación de metodología SCRUM para fomentar entornos de desarrollo ágiles y colaborativos.',
          ]
        : [
            'Designed responsive templates ensuring optimal viewing across desktop, tablet, and mobile devices.',
            'Utilized Java, SQL, JavaScript, HTML5, CSS3, and TypeScript with Git version control.',
            'Employed SCRUM methodology to foster agile and collaborative development environments.',
          ],
      techStack: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3', 'Git', 'SCRUM'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
      imageAlt: isEs ? 'Desarrollo Frontend Ágil en PRAGMA' : 'Agile Frontend Development in PRAGMA',
      metrics: isEs
        ? ['UI Adaptativa Multidispositivo', 'Sprints Ágiles SCRUM', 'Flujo Limpio en Git']
        : ['Responsive Multi-device UI', 'Agile SCRUM Sprints', 'Clean Git Flow'],
      architectureOverview: isEs
        ? 'Frontend adaptativo basado en componentes e integrado con backends Java/SQL en dinámicas de sprints ágiles con SCRUM.'
        : 'Component-based responsive frontend integrated with Java/SQL backends under strict Agile SCRUM team sprints.',
    },
    {
      id: 'cidenet-fullstack-2',
      year: isEs ? 'Julio 2018 — Oct 2019' : 'July 2018 — Oct 2019',
      role: isEs ? 'Desarrollador Fullstack' : 'Fullstack Developer',
      company: 'Cidenet S.A.S',
      type: 'FULL-TIME',
      description: isEs
        ? 'Desarrollo fullstack multiplataforma móvil y web en Flutter, Java Spring Boot, PHP Laravel y Cordova.'
        : 'Cross-platform mobile and web fullstack development across Flutter, Java Spring Boot, PHP Laravel, and Cordova.',
      highlights: isEs
        ? [
            'Ingeniería de soluciones móviles y web con Flutter, Java (Spring Boot), PHP (Laravel), AngularJS e Ionic.',
            'Manejo de bases de datos MySQL, empaquetado en Apache Cordova, automatización con Grunt y metodología SCRUM.',
          ]
        : [
            'Engineered mobile and web solutions with Flutter, Java (Spring Boot), PHP (Laravel), AngularJS, and Ionic.',
            'Managed MySQL databases, Apache Cordova builds, Grunt task runners, and SCRUM methodologies.',
          ],
      techStack: ['Flutter', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'AngularJS', 'MySQL', 'Ionic', 'Cordova'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01q1Z1PO9ibPWrR6NS-WX2ViJoTf-bXUfSSUaL593mbc5Ou3JcTKzRR4ckaRHMDBLz5Hr2cQ9KbTD2AF0qeST-ca_zxknGtrFg4bjIRQl8SnBW86ylqgfRwM-vAtwL-PsmtW2_b0NOC9TNI1U0wO6SpvxFnndXyftZA9AW6HjBY6eep_Ky1BRvsq6_nKChVDHkztO2qnioEb82Vlxt10Pt_l6sah1-ju3cL9WpXPst2cYttEv_UAHgE2PT3zau0n6499hG35BNmc',
      imageAlt: isEs ? 'Arquitectura Híbrida Móvil y Web' : 'Mobile and Web Hybrid Architecture',
      metrics: isEs
        ? ['Despliegues Híbridos Móviles y Web', 'Backends en Spring Boot y Laravel', 'Alto Rendimiento MySQL']
        : ['Hybrid Mobile & Web Deployments', 'Spring Boot & Laravel Backends', 'MySQL Performance'],
      architectureOverview: isEs
        ? 'Arquitectura híbrida multiplataforma orientada a clientes web y móviles soportada por APIs RESTful en Spring Boot y modelos relacionales MySQL.'
        : 'Hybrid cross-platform architecture targeting web and mobile clients backed by Spring Boot REST APIs and MySQL relational models.',
    },
    {
      id: 'system-services',
      year: isEs ? 'Sept 2017 — Abril 2018' : 'Sept 2017 — April 2018',
      role: isEs ? 'Desarrollador Junior' : 'Junior Developer',
      company: 'SYSTEM AND SERVICES ENGINEERING',
      type: 'FULL-TIME',
      description: isEs
        ? 'Participación en el diseño de prototipos UI/UX, desarrollo de rutinas y pruebas de software para módulos de portales.'
        : 'Participated in UI/UX prototype design, routine development, and software testing for portal modules.',
      highlights: isEs
        ? [
            'Diseño de prototipos UI/UX y desarrollo de rutinas web de interfaz de usuario para portales de sistemas de información.',
            'Documentación de procesos de consulta y ejecución de pruebas de componentes y artefactos de software.',
          ]
        : [
            'Designed UI/UX prototypes and developed user interface web routines for information systems portals.',
            'Documented consultation processes and performed comprehensive component and artifact software testing.',
          ],
      techStack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'UI/UX Prototyping'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC4fpT-wqUiu0G5Xgi_8ldtoxdHqW9zCzaSSo_eLJCANdEMIqTjrSh1voN08ZlZKbSKgW2d8RGEjj5eGYOFcNmsEtWwKAL0LNCmURtLcemxPTW8KcGZDIlWZ1_DJ1vD5gMmbvL2WuRBAI9Dalko-QJGHCLV6J8SwNAlXJKloM6NipmOZunAdf54El2HM36b6tO2PH5BVggZfWREUF9nmOmdm-k6zJ0WMnB69A7xcBDEjK3Nw0_eg7VG2e5_qjfmztv4P2l12109c-Qx',
      imageAlt: isEs ? 'Prototipado UI/UX y Pruebas de Software' : 'UI/UX Prototyping and Software Testing',
      metrics: isEs
        ? ['Prototipos UI/UX', 'Rutinas para Portales de Sistemas', 'Pruebas de Aseguramiento de Calidad']
        : ['UI/UX Prototypes', 'System Portal Routines', 'Quality Assurance Testing'],
      architectureOverview: isEs
        ? 'Rutinas web en PHP y JavaScript respaldadas por procedimientos de prueba estructurados y documentación técnica.'
        : 'PHP and JavaScript web routines backed by structured software test procedures and consultation process documentation.',
    },
  ];
};

export const EXPERIENCES = getExperiences('es');

export const getEducation = (lang: Language): EducationItem[] => {
  const isEs = lang === 'es';
  return [
    {
      year: 'Feb 2024 — Mayo 2025',
      title: isEs
        ? 'Maestría en Ingeniería de Software y Sistemas Informáticos'
        : "Master's Degree in Software Engineering and Computer Systems",
      institution: 'UNIR (Universidad Internacional de La Rioja)',
      description: isEs
        ? 'Especialización en Ingeniería de Software, Arquitectura Avanzada de Sistemas y Sistemas Empresariales.'
        : 'Specializing in Computer Software Engineering, Advanced System Architecture, and Enterprise Systems.',
    },
    {
      year: '2016 — 2017',
      title: isEs
        ? 'Ingeniería de Sistemas, Desarrollador de Software'
        : 'System Engineering, Software Developer',
      institution: 'Fundación Universitaria Tecnológico Comfenalco',
      description: isEs
        ? 'Enfoque en principios de ingeniería de desarrollo full-stack, algoritmos y diseño de sistemas.'
        : 'Focus on full-stack software development engineering principles, algorithms, and system design.',
    },
    {
      year: '2013 — 2015',
      title: isEs
        ? 'Tecnólogo en Desarrollo de Sistemas de Información'
        : 'Information Systems Development Technologist',
      institution: 'Fundación Universitaria Tecnológico Comfenalco',
      description: isEs
        ? 'Fundamentos en análisis de sistemas de información, diseño de bases de datos y lógica de programación.'
        : 'Foundations in information systems analysis, database design, and programming logic.',
    },
  ];
};

export const EDUCATION_ITEMS = getEducation('es');

export const getCertifications = (lang: Language): CertificationItem[] => {
  const isEs = lang === 'es';
  return [
    {
      title: 'Claude Code In Action',
      issuer: isEs ? 'Anthropic / Ingeniería de IA Agéntica' : 'Anthropic / Agentic AI Engineering',
      year: '2024',
      icon: 'smart_toy',
      colorBg: 'bg-[#e2dfff]/40',
      colorText: 'text-[#3525cd]',
    },
    {
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy',
      year: isEs ? 'Certificado' : 'Certified',
      icon: 'verified_user',
      colorBg: 'bg-[#d8e3fb]/40',
      colorText: 'text-[#545f73]',
    },
    {
      title: 'EF SET Certificate™ (English)',
      issuer: isEs ? 'EF Standard English Test (Nivel Profesional)' : 'EF Standard English Test (Professional Working)',
      year: isEs ? 'Certificado' : 'Certified',
      icon: 'translate',
      colorBg: 'bg-[#ffdbcc]/40',
      colorText: 'text-[#7e3000]',
    },
  ];
};

export const CERTIFICATION_ITEMS = getCertifications('es');

export const getBentoItems = (lang: Language): BentoCardItem[] => {
  const isEs = lang === 'es';
  return [
    {
      id: 'agentic-ai',
      title: isEs ? 'IA Agéntica y Desarrollo Guiado por Especificaciones (SDD)' : 'Agentic AI & Spec-Driven Development',
      description: isEs
        ? 'Implementación pionera de flujos con Copilot CLI, Claude Code y OpenCode bajo directrices SDD para un código contextualmente preciso y optimizado en tokens.'
        : 'Pioneering Copilot CLI, Claude Code, and OpenCode workflows under SDD guidelines for context-aware, token-optimized code output.',
      icon: 'psychology',
      bgClass: 'bg-background border border-surface-variant',
      spanCol: 'md:col-span-2',
    },
    {
      id: 'clean-code',
      title: isEs ? 'Clean Architecture y Principios SOLID' : 'Clean Architecture & SOLID',
      highlightNumber: '100%',
      highlightText: isEs ? 'CUMPLIMIENTO SOLID' : 'SOLID COMPLIANCE',
      description: isEs
        ? 'Estándar sin concesiones para código limpio, patrones de diseño y software empresarial mantenible.'
        : 'Uncompromising standard for clean code, design patterns, and maintainable enterprise software.',
      icon: 'verified',
      bgClass: 'bg-primary-container text-on-primary-container',
      spanCol: 'md:col-span-1',
    },
    {
      id: 'full-sdlc',
      title: isEs ? 'Liderazgo en el Ciclo Completo (SDLC)' : 'Full SDLC Leadership',
      description: isEs
        ? 'Desde el análisis de requerimientos y diseño de sistemas hasta el despliegue en producción, actualización de Angular y soporte de consultoría.'
        : 'From requirements analysis and system design to production deployment, Angular version upgrades, and consulting support.',
      icon: 'account_tree',
      bgClass: 'bg-secondary-container text-on-secondary-container',
      spanCol: 'md:col-span-1',
    },
    {
      id: 'location-cartagena',
      title: isEs ? 'Cartagena, Colombia • Alcance Global' : 'Cartagena, Colombia • Global Reach',
      subtitle: isEs ? 'UBICACIÓN' : 'LOCATION',
      description: isEs
        ? 'Basado en Cartagena, Bolívar, Colombia, entregando soluciones de software de clase mundial para clientes internacionales destacados en Globant.'
        : 'Based in Cartagena, Bolívar, Colombia, delivering world-class software solutions for top international clients like Globant.',
      icon: 'public',
      bgClass: 'md:col-span-2 relative overflow-hidden rounded-lg min-h-[250px]',
      spanCol: 'md:col-span-2',
    },
  ];
};

export const BENTO_ITEMS = getBentoItems('es');
