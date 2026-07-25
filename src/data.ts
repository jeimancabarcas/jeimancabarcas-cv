import {
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  BentoCardItem,
} from './types';

export const PROFILE_INFO = {
  name: 'Alex Rivers',
  brandName: 'Aesthete.Dev',
  tagline: 'A technical precision.',
  subTagline: 'Crafting fluid logic for meaningful interfaces.',
  roleTitle: 'SOFTWARE ENGINEER & ARCHITECTURAL AESTHETICIST',
  location: 'London, UK',
  yearsExperience: '8+ Years',
  bioShort:
    'As a technical architect and designer, I bridge the gap between complex logic and seamless human experience. My philosophy is rooted in the belief that software should be as resilient as it is beautiful.',
  bioDetailed:
    'I bridge the gap between high-performance systems and intentional design. With a focus on architectural aesthetics, I build digital products that feel like natural extensions of human thought. My approach to engineering removes the friction between a user\'s goal and their digital environment.',
  philosophyQuote:
    'I believe the most powerful technology feels like a natural extension of our own humanity.',
  techQuote:
    'True technical excellence is found where elegance meets performance.',
  email: 'alex@aesthete.dev',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  readcv: 'https://read.cv',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_B4SUy-NuU840kmAUdhoVTRP1zj8Uu9z25nWHNRopyCp-qlg3smoeFIr428ynZw_SF3Sah_FB-JwQMa5q5ptKBUC5PWyJ6KnXgn5Mm-eBOjr6Lzkk9ml3sbHmA8GFwi9FpvRcmsDVIU4eZjv-8CsDpQOW6-MevpFn4-EeIU3RjlsKfhzIy7U4NrRctkHgPBxIR2kR7lA0L5_yrzCnKZwIaMZn_EKr2X8Mu4VQnRXVTVnFBUO4UrlxWa-sEFTGl9WZwSX6DpTPOMtF',
  labImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfT94pKdcrNPGezgjUxT62YUzVKMkyLOqI3TSJ-RFIZlySgJRWEZWKHDH216hYj0lT8M_gBYgLWjs1mZ7M85tKIuRSb0dpCCs5N7KU9VtG4vYp26GBU4BITeEdj7AGsgQBtjjBnkCr4VtkZ_yhrgxwuISp6X2_PnP1qtrfTkIsDu-lckDSrN0ivgcmVbYsogo3oM7Qdk71apbzbebH9-ucXp1_EsajhP3RteKmxRUvfTANZ3Cq6OrDoiCGuG0tVEc5kXz2XdlwCnXp',
};

export const CORE_COMPETENCIES = [
  'Enterprise-grade React & TypeScript',
  'Design System Architecture & Scaling',
  'API Design (REST/GraphQL) & Middleware',
  'Performance Optimization & Core Web Vitals',
];

export const STRATEGIC_IMPACT = [
  'Reducing technical debt through clean code',
  'Mentoring and technical leadership',
  'Bridging Figma prototypes to production',
  'User-centric accessibility (WCAG)',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Mastery',
    subtitle: 'React & Ecosystem',
    level: 'EXPERT',
    percentage: 95,
    icon: 'developer_board',
    tags: ['Next.js', 'Redux/Zustand', 'Testing Library', 'Vite', 'Tailwind CSS', 'WebGL'],
    description:
      'Specializing in building complex state-driven applications that remain performant and maintainable over years of iteration.',
    keyProjects: ['Lumina Wealth Dashboard', 'Aether Shader Pipeline', 'Aesthete Design System'],
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    subtitle: 'Node.js & Backend',
    level: 'ADVANCED',
    percentage: 85,
    icon: 'database',
    tags: ['PostgreSQL', 'Redis', 'AWS/Vercel', 'Docker', 'GraphQL', 'WebSockets'],
    description:
      'Designing the invisible structures that power modern digital experiences, focusing on security, speed, and scalability.',
    keyProjects: ['High-Frequency Financial Streamer', 'IoT Microservices Nodes', 'Module Federation Hub'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'lumina-wealth',
    year: '2023 — Present',
    role: 'Senior Software Architect',
    company: 'Lumina Wealth',
    type: 'FULL-TIME',
    description:
      'Spearheading the development of next-generation wealth management platforms and real-time trading dashboards for global institutional investors.',
    highlights: [
      'Engineered a real-time data visualization engine using D3.js and WebSockets, reducing latency by 45% for high-frequency trading dashboards.',
      'Architected a scalable micro-frontend ecosystem using Module Federation, enabling 4 independent teams to deploy concurrently.',
      'Established strict TypeScript contracts and automated E2E testing pipelines across 14 financial micro-services.',
    ],
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Module Federation', 'Tailwind CSS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
    imageAlt: 'High-fidelity financial dashboard interface mockup on laptop',
    metrics: ['-45% Latency Reduction', '4 Concurrent Micro-frontends', '99.98% Uptime SLA'],
    architectureOverview:
      'Event-driven streaming frontend coupled with a resilient D3 SVG/Canvas hybrid rendering engine. State synchronized via WebSocket reconnecting channels and zero-copy binary buffers.',
  },
  {
    id: 'aether-flow',
    year: '2021 — 2023',
    role: 'Lead Creative Engineer',
    company: 'Aether Flow Labs',
    type: 'CONTRACT',
    description:
      'Focused on translating complex architectural concepts into interactive 3D web environments and generative GPU fluid dynamics.',
    highlights: [
      'Developed a custom GLSL shader pipeline for high-performance fluid simulations, achieving 60fps on mobile devices.',
      'Led the transition to Next.js, improving Core Web Vitals (LCP) by 1.2s across all production client sites.',
      'Pioneered the "Organic Curve" framework for fluid navigation in immersive luxury brand experiences.',
    ],
    techStack: ['WebGL', 'Next.js', 'GLSL', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4fpT-wqUiu0G5Xgi_8ldtoxdHqW9zCzaSSo_eLJCANdEMIqTjrSh1voN08ZlZKbSKgW2d8RGEjj5eGYOFcNmsEtWwKAL0LNCmURtLcemxPTW8KcGZDIlWZ1_DJ1vD5gMmbvL2WuRBAI9Dalko-QJGHCLV6J8SwNAlXJKloM6NipmOZunAdf54El2HM36b6tO2PH5BVggZfWREUF9nmOmdm-k6zJ0WMnB69A7xcBDEjK3Nw0_eg7VG2e5_qjfmztv4P2l12109c-Qx',
    imageAlt: 'Generative 3D fluid dynamics sculpture render',
    metrics: ['60 FPS Mobile GPU Performance', '-1.2s LCP Improvement', '12 Industry Awards'],
    architectureOverview:
      'Custom Ping-Pong GPGPU texture computation shaders utilizing WebGL2 context, rendered with instanced geometry and adaptive dpr scaling.',
  },
  {
    id: 'verdant-systems',
    year: '2019 — 2021',
    role: 'Full Stack Engineer',
    company: 'Verdant Systems',
    type: 'FULL-TIME',
    description:
      'Built sustainable IoT hardware monitoring interfaces, mobile client applications, and distributed telemetry backend microservices.',
    highlights: [
      'Spearheaded the development of a cross-platform IoT mobile app using React Native, managing sensor data from 10k+ active hardware nodes via Node.js microservices.',
      'Contributed to the core UI library of a data-heavy analytics platform, mastering state management patterns and accessibility standards.',
      'Architected low-bandwidth MQTT payload compression for remote agricultural sensors.',
    ],
    techStack: ['React Native', 'Node.js', 'AWS IoT', 'PostgreSQL', 'Redis', 'MQTT'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01q1Z1PO9ibPWrR6NS-WX2ViJoTf-bXUfSSUaL593mbc5Ou3JcTKzRR4ckaRHMDBLz5Hr2cQ9KbTD2AF0qeST-ca_zxknGtrFg4bjIRQl8SnBW86ylqgfRwM-vAtwL-PsmtW2_b0NOC9TNI1U0wO6SpvxFnndXyftZA9AW6HjBY6eep_Ky1BRvsq6_nKChVDHkztO2qnioEb82Vlxt10Pt_l6sah1-ju3cL9WpXPst2cYttEv_UAHgE2PT3zau0n6499hG35BNmc',
    imageAlt: 'Organic sustainable IoT plant care application on mobile screen',
    metrics: ['10,000+ Hardware Nodes Active', '4.9★ App Store Rating', '70% Data Compression'],
    architectureOverview:
      'AWS IoT Core broker streaming data to PostgreSQL time-series hyper-tables with Redis caching layer and React Native mobile clients.',
  },
  {
    id: 'inertia-labs',
    year: '2015 — 2018',
    role: 'Frontend Developer',
    company: 'Inertia Labs',
    type: 'FULL-TIME',
    description:
      'Contributed to the core UI component library of a data-heavy analytics platform. Mastered state management patterns and accessibility standards for high-utility dashboards.',
    highlights: [
      'Crafted 40+ accessible React UI components with WCAG AAA compliance.',
      'Optimized client-side virtualized data tables handling 500k+ dynamic rows.',
      'Co-authored internal engineering guidelines for responsive state management.',
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'CSS Modules', 'Jest'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjaKnBkid5_7IWSxtcYOwh4NJ3GYvnTdc0D3dYSEAqTWPPxDhXaP6qJM0FbOutJyAKyYnGh2schqRJnHLWI_ZTa0GB7zIawALOyzR11eAw3BjLzb8SPt8-wQL2TXvk2aATV6Kj0UZdSuGumLb9PM0rn3Um1BX6S6A1hQo3_3vRBCZLuwkYWZ4zeszkqBCM0QWij1EuPBdcYQkllO0nhEH-0rABGpjYDIEKslvXQu7Inn5p0vSspIcHr3xiwUkMy2MwtHyB4_EHno40',
    imageAlt: 'Analytics dashboard component design system',
    metrics: ['40+ Accessible Components', '500k Row Virtualization', 'WCAG AAA Compliant'],
    architectureOverview:
      'Atomic component architecture backed by Redux Toolkit normalized state shape and virtualized list DOM reconciliation.',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    year: '2014 — 2018',
    title: 'B.Sc. Computer Science & Design',
    institution: 'Royal College of Art / Imperial College London',
    description:
      'Specialization in Human-Computer Interaction and Distributed Systems. First Class Honours.',
  },
  {
    year: '2012 — 2014',
    title: 'Advanced Mathematics & Physics',
    institution: 'London Academy of Excellence',
    description: 'Focus on fluid dynamics mathematical modeling, linear algebra, and quantum physics fundamentals.',
  },
];

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Issued by Amazon Web Services',
    year: '2023',
    icon: 'cloud_done',
    colorBg: 'bg-[#e2dfff]/30',
    colorText: 'text-[#3525cd]',
  },
  {
    title: 'Advanced React Patterns',
    issuer: 'Issued by Epic Web',
    year: '2022',
    icon: 'verified_user',
    colorBg: 'bg-[#d8e3fb]/30',
    colorText: 'text-[#545f73]',
  },
  {
    title: 'UX Design Professional Certificate',
    issuer: 'Issued by Google',
    year: '2021',
    icon: 'palette',
    colorBg: 'bg-[#ffdbcc]/30',
    colorText: 'text-[#7e3000]',
  },
];

export const BENTO_ITEMS: BentoCardItem[] = [
  {
    id: 'data-driven',
    title: 'Data-Driven Development',
    description:
      'Utilizing analytics and user feedback loops to prioritize technical features that drive the highest business value and user satisfaction.',
    icon: 'insights',
    bgClass: 'bg-background border border-surface-variant',
    spanCol: 'md:col-span-2',
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse Best Practices',
    highlightNumber: '100',
    highlightText: 'PERFECT SCORE',
    description: 'Uncompromising standard for Core Web Vitals, accessibility, and zero-runtime bloat.',
    icon: 'speed',
    bgClass: 'bg-primary-container text-on-primary-container',
    spanCol: 'md:col-span-1',
  },
  {
    id: 'cli-tooling',
    title: 'CLI Tooling & Automation',
    description:
      'Automating internal workflows with custom scripts to save engineering teams hundreds of hours annually.',
    icon: 'terminal',
    bgClass: 'bg-secondary-container text-on-secondary-container',
    spanCol: 'md:col-span-1',
  },
  {
    id: 'laboratory',
    title: 'London-based. Global Thinking.',
    subtitle: 'LABORATORY',
    description:
      'Operating from a sun-drenched studio in London while collaborating with engineering teams across San Francisco, Tokyo, and Berlin.',
    icon: 'travel_explore',
    bgClass: 'md:col-span-2 relative overflow-hidden rounded-lg min-h-[250px]',
    spanCol: 'md:col-span-2',
  },
];
