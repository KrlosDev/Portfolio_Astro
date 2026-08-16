// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = 'https://carlosb.xyz';

export const SITE_TITLE = 'Carlos Barahona | Software Engineer in Panama';
export const SITE_DESCRIPTION =
  'Carlos Alberto Barahona Herrera (KrlosDev) is a software engineer based in Panama, building web applications with React, Vue, Node.js and AWS. Portfolio, resume and projects.';
export const TRANSITION_API = true;

// Identity used for structured data (schema.org Person). Keeping the name
// variants here means search engines can connect every spelling to one person.
export const PERSON = {
  name: 'Carlos Barahona',
  alternateNames: [
    'Carlos Alberto Barahona',
    'Carlos Alberto Barahona Herrera',
    'Carlos Barahona Herrera',
    'KrlosDev',
  ],
  givenName: 'Carlos Alberto',
  familyName: 'Barahona Herrera',
  jobTitle: 'Software Engineer',
  image: '/logo_dark.png',
  locality: 'Panama City',
  country: 'PA',
  worksFor: 'Intech Ideas International',
  alumniOf: 'Universidad Tecnológica de Panamá',
  sameAs: [
    'https://github.com/KrlosDev',
    'https://www.linkedin.com/in/carlosabh/',
  ],
  knowsAbout: [
    'Software Engineering',
    'Web Development',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Node.js',
    'AWS',
    'Docker',
    'CI/CD',
    // AI engineering — Anthropic Education certificates below, and the
    // Claude Certified Architect (CCA-F) exam domains.
    'Model Context Protocol (MCP)',
    'Agentic AI Development',
    'AI Agent Architecture and Orchestration',
    'Claude Code',
    'Claude Agent SDK',
    'Claude API',
    'Agent Skills',
    'Tool Design and Tool Use',
    'Prompt Engineering',
    'Structured Output',
    'Context Engineering',
    'Large Language Model Application Development',
  ],
  // Verifiable credentials. Each URL is a public verification page, which is
  // what makes these worth publishing as structured data.
  credentials: [
    {
      name: 'Model Context Protocol: Advanced Topics',
      url: 'https://verify.skilljar.com/c/8vihbzpic374',
      issuer: 'Anthropic',
      date: '2026-04-29',
    },
    {
      name: 'Introduction to Claude Cowork',
      url: 'https://verify.skilljar.com/c/9f8vfe9thmgs',
      issuer: 'Anthropic',
      date: '2026-04-29',
    },
    {
      name: 'Building with the Claude API',
      url: 'https://verify.skilljar.com/c/qj5z4votnhxw',
      issuer: 'Anthropic',
      date: '2026-03-26',
    },
    {
      name: 'Claude Code in Action',
      url: 'https://verify.skilljar.com/c/qqojxczqjbxj',
      issuer: 'Anthropic',
      date: '2026-03-25',
    },
    {
      name: 'Introduction to Model Context Protocol',
      url: 'https://verify.skilljar.com/c/a8r3au695uab',
      issuer: 'Anthropic',
      date: '2026-03-25',
    },
    {
      name: 'Introduction to Agent Skills',
      url: 'https://verify.skilljar.com/c/csxvbehx73kb',
      issuer: 'Anthropic',
      date: '2026-03-23',
    },
  ],
};
