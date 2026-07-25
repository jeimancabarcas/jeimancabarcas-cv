import {
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  BentoCardItem,
} from './types';

export const PROFILE_INFO = {
  name: 'Jeiman Cabarcas',
  brandName: 'Jeiman Cabarcas',
  tagline: 'AI & Senior Software Engineer.',
  subTagline: 'Combining clean architecture, spec-driven development, and cutting-edge AI Engineering.',
  roleTitle: 'SENIOR SOFTWARE ENGINEER | AI ENGINEER | SDD ARCHITECT',
  location: 'Cartagena, Bolívar, Colombia',
  yearsExperience: '7+ Years',
  phone: '+57 3176821177',
  bioShort:
    'Senior Engineer at Globant with an MSc in Software Engineering from UNIR. Comprehensive mastery of the SDLC, combining advanced architectural principles (SOLID, SDD, Clean Architecture) with cutting-edge AI Engineering.',
  bioDetailed:
    'I deliver end-to-end solutions ranging from initial requirements analysis and system design to the deployment and maintenance of scalable ecosystems. Specializing in high-performance Angular and React frontends, robust Java (Spring Boot) / Node.js backends, and orchestrating Generative AI solutions with Prompt Engineering and RAG architectures.',
  philosophyQuote:
    'I deliver end-to-end solutions by combining advanced architectural principles with cutting-edge AI Engineering.',
  techQuote:
    'Clean code, spec-driven development, and intelligent automation deliver high-impact business value.',
  email: 'jeimancabarcas@gmail.com',
  github: 'https://github.com/jeimancabarcas',
  linkedin: 'https://www.linkedin.com/in/jeimancabarcas',
  readcv: 'https://github.com/jeimancabarcas',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_B4SUy-NuU840kmAUdhoVTRP1zj8Uu9z25nWHNRopyCp-qlg3smoeFIr428ynZw_SF3Sah_FB-JwQMa5q5ptKBUC5PWyJ6KnXgn5Mm-eBOjr6Lzkk9ml3sbHmA8GFwi9FpvRcmsDVIU4eZjv-8CsDpQOW6-MevpFn4-EeIU3RjlsKfhzIy7U4NrRctkHgPBxIR2kR7lA0L5_yrzCnKZwIaMZn_EKr2X8Mu4VQnRXVTVnFBUO4UrlxWa-sEFTGl9WZwSX6DpTPOMtF',
  labImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfT94pKdcrNPGezgjUxT62YUzVKMkyLOqI3TSJ-RFIZlySgJRWEZWKHDH216hYj0lT8M_gBYgLWjs1mZ7M85tKIuRSb0dpCCs5N7KU9VtG4vYp26GBU4BITeEdj7AGsgQBtjjBnkCr4VtkZ_yhrgxwuISp6X2_PnP1qtrfTkIsDu-lckDSrN0ivgcmVbYsogo3oM7Qdk71apbzbebH9-ucXp1_EsajhP3RteKmxRUvfTANZ3Cq6OrDoiCGuG0tVEc5kXz2XdlwCnXp',
};

export const CORE_COMPETENCIES = [
  'Agentic AI Development & SDD (Spec-Driven Development)',
  'Clean Architecture, SOLID Principles & Design Patterns',
  'High-Performance Angular & React Enterprise Frontends',
  'Robust Backend Development: Java (Spring Boot) & Node.js / Express',
  'Generative AI Solutions, Prompt Engineering & RAG Architectures',
  'SQL & NoSQL Database Optimization (PostgreSQL, MongoDB, Firebase)',
];

export const STRATEGIC_IMPACT = [
  'Engineered production-ready AI tools (Copilot CLI, Claude Code, OpenCode)',
  'Optimized LLM context and token efficiency with Spec-Driven Workflows',
  'Upgraded enterprise Angular systems & migrated legacy AngularJS to Angular 10+',
  'Full SDLC ownership from system design to cloud deployment and auditing support',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-engineering',
    title: 'Agentic AI & RAG Engineering',
    subtitle: 'Generative AI & SDD Workflows',
    level: 'EXPERT',
    percentage: 95,
    icon: 'smart_toy',
    tags: ['Copilot CLI', 'Claude Code', 'OpenCode', 'Prompt Engineering', 'RAG Architectures', 'Firebase AI'],
    description:
      'Orchestrating Generative AI solutions, implementing Prompt Engineering, and designing RAG architectures that bring intelligent automation to enterprise-grade products with spec-driven token efficiency.',
    keyProjects: ['Enterprise Copilot CLI Integration', 'RAG Knowledge Assistant', 'Agentic Token Optimizer'],
  },
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    subtitle: 'Angular, React & TypeScript',
    level: 'EXPERT',
    percentage: 98,
    icon: 'developer_board',
    tags: ['Angular 10-18+', 'React.js', 'TypeScript', 'JavaScript', 'SCSS/SASS', 'Angular Material', 'RxJS'],
    description:
      'Building high-performance Angular and React frontends, performing major framework migrations, and engineering smooth responsive UIs for consulting and auditing services.',
    keyProjects: ['Globant Enterprise Auditing Portal', 'AngularJS to Angular 10 Migration', 'Universal HTTP Interceptors'],
  },
  {
    id: 'backend',
    title: 'Backend & Microservices',
    subtitle: 'Java Spring Boot & Node.js',
    level: 'ADVANCED',
    percentage: 90,
    icon: 'database',
    tags: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Clean Architecture'],
    description:
      'Designing robust backend services, RESTful API architecture, security token management, and microservice ecosystems following SOLID principles.',
    keyProjects: ['Java Spring Boot Core Services', 'Node.js Express Microservices', 'Secure Token Gateway'],
  },
  {
    id: 'cloud-databases',
    title: 'Databases & Methodologies',
    subtitle: 'SQL, NoSQL & Agile SCRUM',
    level: 'ADVANCED',
    percentage: 92,
    icon: 'cloud_sync',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Git', 'Webpack', 'SCRUM Methodologies'],
    description:
      'Committed to clean code, agile methodologies (SCRUM), continuous integration, and hybrid database optimization across SQL and NoSQL ecosystems.',
    keyProjects: ['MongoDB Sandbox Environments', 'Enterprise SQL Data Schemas', 'Firebase Realtime Backends'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'globant-ssr-adv',
    year: 'July 2022 — Present',
    role: 'Frontend Developer, SSr Adv',
    company: 'Globant',
    type: 'FULL-TIME',
    description:
      'Senior engineer at Globant focused on developing new features, upgrading Angular versions, providing support, and implementing hotfixes for global consulting and auditing client products.',
    highlights: [
      'Engineered production-ready software solutions using advanced AI tools (Copilot CLI, Claude Code, OpenCode) with SDD (Spec-Driven Development) workflows.',
      'Optimized LLM context and token efficiency in generative engineering pipelines.',
      'Ensured smooth continuous operation and feature enhancements for critical consulting and auditing enterprise software.',
      'Maintained high standards of clean architecture, SOLID principles, and automated testing across multi-team deliverables.',
    ],
    techStack: ['Angular', 'TypeScript', 'Copilot CLI', 'Claude Code', 'OpenCode', 'SDD Workflows', 'RxJS', 'SCSS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
    imageAlt: 'Globant Enterprise Software Engineering with AI Tools',
    metrics: ['4+ Years at Globant', 'Agentic SDD AI Workflows', 'Token Efficiency Optimized'],
    architectureOverview:
      'Spec-Driven Development (SDD) orchestration integrating generative AI tooling into high-frequency Angular enterprise auditing suites with clean architecture boundaries.',
  },
  {
    id: 'globant-ssr',
    year: 'Sept 2021 — June 2022',
    role: 'Frontend Developer Ssr',
    company: 'Globant',
    type: 'FULL-TIME',
    description:
      'Managed sandbox environments, microservices, and spearheaded major frontend architecture migrations.',
    highlights: [
      'Managed creation and maintenance of sandbox environments using Angular 8+, SCSS, Node.js/Express.js, and MongoDB.',
      'Led the migration and feature development in management software from AngularJS to Angular 10.',
      'Architected microservices communication and asynchronous programming patterns.',
    ],
    techStack: ['Angular 10', 'AngularJS', 'Node.js', 'Express.js', 'MongoDB', 'SCSS', 'TypeScript'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4fpT-wqUiu0G5Xgi_8ldtoxdHqW9zCzaSSo_eLJCANdEMIqTjrSh1voN08ZlZKbSKgW2d8RGEjj5eGYOFcNmsEtWwKAL0LNCmURtLcemxPTW8KcGZDIlWZ1_DJ1vD5gMmbvL2WuRBAI9Dalko-QJGHCLV6J8SwNAlXJKloM6NipmOZunAdf54El2HM36b6tO2PH5BVggZfWREUF9nmOmdm-k6zJ0WMnB69A7xcBDEjK3Nw0_eg7VG2e5_qjfmztv4P2l12109c-Qx',
    imageAlt: 'Angular Migration and Sandbox Development Environment',
    metrics: ['AngularJS -> Angular 10 Migration', 'Full Sandbox Ecosystem', '100% Microservice Reliability'],
    architectureOverview:
      'Decoupled Node.js sandbox environment with Express proxies and MongoDB collections facilitating seamless legacy AngularJS migration to modern Angular 10.',
  },
  {
    id: 'cidenet-fullstack-1',
    year: 'March 2020 — Sept 2021',
    role: 'Full Stack Developer',
    company: 'Cidenet S.A.S',
    type: 'FULL-TIME',
    description:
      'Defined project structures across Angular 1.x to 5.x, handled routing, security, internationalization, and HTTP request interceptors.',
    highlights: [
      'Defined architectural baseline for Angular projects across versions 1.x to 5.x, custom SASS styling, and route handling.',
      'Implemented universal HTTP interceptors, component event handling, security token management, and Angular Translate.',
      'Integrated Webpack, TsLint, Angular Material, and browser Local Storage across diverse client business lines.',
    ],
    techStack: ['Angular 1.x-5.x', 'TypeScript', 'SASS', 'Webpack', 'Angular Material', 'REST APIs', 'TsLint'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01q1Z1PO9ibPWrR6NS-WX2ViJoTf-bXUfSSUaL593mbc5Ou3JcTKzRR4ckaRHMDBLz5Hr2cQ9KbTD2AF0qeST-ca_zxknGtrFg4bjIRQl8SnBW86ylqgfRwM-vAtwL-PsmtW2_b0NOC9TNI1U0wO6SpvxFnndXyftZA9AW6HjBY6eep_Ky1BRvsq6_nKChVDHkztO2qnioEb82Vlxt10Pt_l6sah1-ju3cL9WpXPst2cYttEv_UAHgE2PT3zau0n6499hG35BNmc',
    imageAlt: 'Fullstack Angular and REST Architecture',
    metrics: ['Multiple Client Lines Served', 'Universal HTTP Interceptors', 'Multi-Language i18n'],
    architectureOverview:
      'Modular Angular framework architecture with central HTTP security interceptor pipeline, JWT token storage, and Webpack bundled asset optimization.',
  },
  {
    id: 'pragma-frontend',
    year: 'Oct 2019 — March 2020',
    role: 'Frontend Developer',
    company: 'PRAGMA',
    type: 'FULL-TIME',
    description:
      'Developed responsive user interfaces and collaborated in agile SCRUM teams across Java, SQL, and TypeScript stacks.',
    highlights: [
      'Designed responsive templates ensuring optimal viewing across desktop, tablet, and mobile devices.',
      'Utilized Java, SQL, JavaScript, HTML5, CSS3, and TypeScript with Git version control.',
      'Employed SCRUM methodology to foster agile and collaborative development environments.',
    ],
    techStack: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3', 'Git', 'SCRUM'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
    imageAlt: 'Agile Frontend Development in PRAGMA',
    metrics: ['Responsive Multi-device UI', 'Agile SCRUM Sprints', 'Clean Git Flow'],
    architectureOverview:
      'Component-based responsive frontend integrated with Java/SQL backends under strict Agile SCRUM team sprints.',
  },
  {
    id: 'cidenet-fullstack-2',
    year: 'July 2018 — Oct 2019',
    role: 'Fullstack Developer',
    company: 'Cidenet S.A.S',
    type: 'FULL-TIME',
    description:
      'Cross-platform mobile and web fullstack development across Flutter, Java Spring Boot, PHP Laravel, and Cordova.',
    highlights: [
      'Engineered mobile and web solutions with Flutter, Java (Spring Boot), PHP (Laravel), AngularJS, and Ionic.',
      'Managed MySQL databases, Apache Cordova builds, Grunt task runners, and SCRUM methodologies.',
    ],
    techStack: ['Flutter', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'AngularJS', 'MySQL', 'Ionic', 'Cordova'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01q1Z1PO9ibPWrR6NS-WX2ViJoTf-bXUfSSUaL593mbc5Ou3JcTKzRR4ckaRHMDBLz5Hr2cQ9KbTD2AF0qeST-ca_zxknGtrFg4bjIRQl8SnBW86ylqgfRwM-vAtwL-PsmtW2_b0NOC9TNI1U0wO6SpvxFnndXyftZA9AW6HjBY6eep_Ky1BRvsq6_nKChVDHkztO2qnioEb82Vlxt10Pt_l6sah1-ju3cL9WpXPst2cYttEv_UAHgE2PT3zau0n6499hG35BNmc',
    imageAlt: 'Mobile and Web Hybrid Architecture',
    metrics: ['Hybrid Mobile & Web Deployments', 'Spring Boot & Laravel Backends', 'MySQL Performance'],
    architectureOverview:
      'Hybrid cross-platform architecture targeting web and mobile clients backed by Spring Boot REST APIs and MySQL relational models.',
  },
  {
    id: 'system-services',
    year: 'Sept 2017 — April 2018',
    role: 'Junior Developer',
    company: 'SYSTEM AND SERVICES ENGINEERING',
    type: 'FULL-TIME',
    description:
      'Participated in UI/UX prototype design, routine development, and software testing for portal modules.',
    highlights: [
      'Designed UI/UX prototypes and developed user interface web routines for information systems portals.',
      'Documented consultation processes and performed comprehensive component and artifact software testing.',
    ],
    techStack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'UI/UX Prototyping'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4fpT-wqUiu0G5Xgi_8ldtoxdHqW9zCzaSSo_eLJCANdEMIqTjrSh1voN08ZlZKbSKgW2d8RGEjj5eGYOFcNmsEtWwKAL0LNCmURtLcemxPTW8KcGZDIlWZ1_DJ1vD5gMmbvL2WuRBAI9Dalko-QJGHCLV6J8SwNAlXJKloM6NipmOZunAdf54El2HM36b6tO2PH5BVggZfWREUF9nmOmdm-k6zJ0WMnB69A7xcBDEjK3Nw0_eg7VG2e5_qjfmztv4P2l12109c-Qx',
    imageAlt: 'UI/UX Prototyping and Software Testing',
    metrics: ['UI/UX Prototypes', 'System Portal Routines', 'Quality Assurance Testing'],
    architectureOverview:
      'PHP and JavaScript web routines backed by structured software test procedures and consultation process documentation.',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    year: 'Feb 2024 — May 2025',
    title: "Master's Degree in Software Engineering and Computer Systems",
    institution: 'UNIR (Universidad Internacional de La Rioja)',
    description:
      'Specializing in Computer Software Engineering, Advanced System Architecture, and Enterprise Systems.',
  },
  {
    year: '2016 — 2017',
    title: 'System Engineering, Software Developer',
    institution: 'Tecnológico Comfenalco University Foundation',
    description: 'Focus on full-stack software development engineering principles, algorithms, and system design.',
  },
  {
    year: '2013 — 2015',
    title: 'Information Systems Development Technologist',
    institution: 'Tecnológico Comfenalco University Foundation',
    description: 'Foundations in information systems analysis, database design, and programming logic.',
  },
];

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    title: 'Claude Code In Action',
    issuer: 'Anthropic / Agentic AI Engineering',
    year: '2024',
    icon: 'smart_toy',
    colorBg: 'bg-[#e2dfff]/40',
    colorText: 'text-[#3525cd]',
  },
  {
    title: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    year: 'Certified',
    icon: 'verified_user',
    colorBg: 'bg-[#d8e3fb]/40',
    colorText: 'text-[#545f73]',
  },
  {
    title: 'EF SET Certificate™ (English)',
    issuer: 'EF Standard English Test (Professional Working)',
    year: 'Certified',
    icon: 'translate',
    colorBg: 'bg-[#ffdbcc]/40',
    colorText: 'text-[#7e3000]',
  },
];

export const BENTO_ITEMS: BentoCardItem[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Spec-Driven Development',
    description:
      'Pioneering Copilot CLI, Claude Code, and OpenCode workflows under SDD guidelines for context-aware, token-optimized code output.',
    icon: 'psychology',
    bgClass: 'bg-background border border-surface-variant',
    spanCol: 'md:col-span-2',
  },
  {
    id: 'clean-code',
    title: 'Clean Architecture & SOLID',
    highlightNumber: '100%',
    highlightText: 'SOLID COMPLIANCE',
    description: 'Uncompromising standard for clean code, design patterns, and maintainable enterprise software.',
    icon: 'verified',
    bgClass: 'bg-primary-container text-on-primary-container',
    spanCol: 'md:col-span-1',
  },
  {
    id: 'full-sdlc',
    title: 'Full SDLC Leadership',
    description:
      'From requirements analysis and system design to production deployment, Angular version upgrades, and consulting support.',
    icon: 'account_tree',
    bgClass: 'bg-secondary-container text-on-secondary-container',
    spanCol: 'md:col-span-1',
  },
  {
    id: 'location-cartagena',
    title: 'Cartagena, Colombia • Global Reach',
    subtitle: 'LOCATION',
    description:
      'Based in Cartagena, Bolívar, Colombia, delivering world-class software solutions for top international clients like Globant.',
    icon: 'public',
    bgClass: 'md:col-span-2 relative overflow-hidden rounded-lg min-h-[250px]',
    spanCol: 'md:col-span-2',
  },
];

