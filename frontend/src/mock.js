// Mock data for Riki Aprianto's portfolio website

export const profile = {
  name: 'Riki Aprianto',
  shortName: 'Riki',
  title: 'AI Digital Marketing Specialist',
  shortBio: 'AI Digital Marketing Specialist focused on data-driven strategies and measurable results.',
  greeting: "Hello, I'm",
  heroDescription:
    'Passionate about creating data-driven marketing strategies that deliver measurable results. Specializing in SEO and GEO, content marketing, and digital analytics.',
  about:
    "Experienced AI Digital Marketing Specialist with a demonstrated history of working in the marketing and advertising industry. Skilled in SEO and GEO, content marketing, social media strategy, and data analytics. Strong marketing professional with a focus on ROI-driven campaigns.",
  email: 'me@rikiaprianto.me',
  phone: '+62 888 0923 4347',
  location: 'Indonesia',
  // Personal portraits
  avatar:
    'https://customer-assets.emergentagent.com/job_auth-removal-deploy/artifacts/vkhox2p2_RIKI1.png_11zon.jpg',
  heroPortrait:
    'https://customer-assets.emergentagent.com/job_auth-removal-deploy/artifacts/720wq90i_home-profil.jpg',
  researchPortrait:
    'https://customer-assets.emergentagent.com/job_auth-removal-deploy/artifacts/2ejkzjc6_SHR03739E_11zon.jpg',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Profile', path: '/profile' },
  { label: 'Research', path: '/research' },
  { label: 'My Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const skills = [
  { name: 'SEO & GEO Optimization', level: 95 },
  { name: 'Content Marketing', level: 90 },
  { name: 'Data Analytics', level: 88 },
  { name: 'Social Media Strategy', level: 85 },
  { name: 'AI Marketing Tools', level: 92 },
  { name: 'Marketing Automation', level: 80 },
];

export const experiences = [
  {
    role: 'AI Digital Marketing Specialist',
    company: 'Independent Consultant',
    period: '2023 — Present',
    description:
      'Designing AI-assisted SEO and GEO strategies for SMEs across Southeast Asia. Built content workflows that increased organic traffic by 180% on average.',
  },
  {
    role: 'Digital Marketing Lead',
    company: 'Tech Startup',
    period: '2021 — 2023',
    description:
      'Led performance marketing initiatives across paid, social, and content channels. Owned analytics stack and attribution modelling.',
  },
  {
    role: 'Marketing Analyst',
    company: 'Agency',
    period: '2019 — 2021',
    description:
      'Conducted market research, campaign analytics, and consumer behavior studies for FMCG and e-commerce clients.',
  },
];

export const education = [
  {
    degree: 'Master in Management',
    school: 'Universitas',
    period: '2021 — 2023',
  },
  {
    degree: 'Bachelor in Management',
    school: 'Universitas',
    period: '2015 — 2019',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'How GEO is Reshaping Search in 2025',
    excerpt:
      'Generative Engine Optimization is the new frontier. Here is how to prepare your content strategy for AI-powered search.',
    date: 'Jul 02, 2025',
    readTime: '6 min read',
    tag: 'GEO',
  },
  {
    id: 2,
    title: 'A Practical Framework for AI-Assisted Content Workflows',
    excerpt:
      'A step-by-step playbook to integrate LLMs into your editorial pipeline without losing the human voice.',
    date: 'Jun 18, 2025',
    readTime: '8 min read',
    tag: 'AI Marketing',
  },
  {
    id: 3,
    title: 'Data-Driven Social Strategy: From Vanity to Value',
    excerpt:
      'Replace likes and impressions with engagement quality, attribution, and revenue contribution metrics.',
    date: 'May 22, 2025',
    readTime: '5 min read',
    tag: 'Analytics',
  },
];

export const research = {
  affiliation: 'Digital Marketing Specialist',
  verifiedEmail: 'rikiaprianto.me',
  interests: ['Digital Marketing', 'Consumer Behavior', 'SEO', 'AI Marketing'],
  metrics: {
    citations: { all: 2, since2020: 2 },
    hIndex: { all: 1, since2020: 1 },
    i10Index: { all: 0, since2020: 0 },
  },
  publications: [
    {
      title:
        "The UTAUT2 to Explains How Tiktok Shop Application Affects Consumers' Behavior",
      authors: 'R Aprianto, NER Wuryandari, R Ilahi',
      venue: 'KnE Social Sciences, 493-508-493-508',
      citedBy: 1,
      year: 2023,
    },
    {
      title: 'How To Drive Satisfaction Of Simulator Software Users?',
      authors: 'NER Wuryandari, C Rudyyanto, R Aprianto, R Ilahi',
      venue: 'DEAL: International Journal of Economics and Business 1 (01), 1-8',
      citedBy: null,
      year: 2023,
    },
    {
      title:
        'Examining the Entrepreneurial Transformation of Human Resource Practices',
      authors: 'R Aprianto, NER Wuryandari',
      venue: 'Journal of Business Research, 12 (03), 22-35',
      citedBy: 1,
      year: 2023,
    },
    {
      title:
        'The Influence of Digital Marketing on Purchase Decision Through Brand Awareness',
      authors: 'R Aprianto, R Ilahi',
      venue: 'Indonesian Journal of Management, 5 (2), 88-101',
      citedBy: null,
      year: 2022,
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'SEO Growth Engine',
    category: 'SEO',
    description:
      'Built a programmatic SEO engine that scaled an e-commerce site from 12k to 240k monthly organic sessions in 9 months.',
    tags: ['SEO', 'Content Ops', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'AI Content Studio',
    category: 'AI Marketing',
    description:
      'An internal LLM-powered content studio that produces SEO briefs, drafts, and on-brand variations at scale.',
    tags: ['LLM', 'Workflow', 'Editorial'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'GEO Visibility Tracker',
    category: 'GEO',
    description:
      'A dashboard that tracks how a brand appears across ChatGPT, Perplexity, and Google AI Overviews.',
    tags: ['GEO', 'Dashboard', 'AI Search'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Performance Attribution Model',
    category: 'Analytics',
    description:
      'Multi-touch attribution model unifying paid, organic, and social channels for a DTC brand.',
    tags: ['Attribution', 'BigQuery', 'GA4'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'TikTok Shop Conversion Study',
    category: 'Research',
    description:
      'Applied UTAUT2 to explain how TikTok Shop influences consumer behavior across age cohorts.',
    tags: ['Research', 'Consumer Behavior'],
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Brand Awareness Campaign',
    category: 'Strategy',
    description:
      'Integrated campaign mixing creator partnerships and paid social, lifting branded search by 64%.',
    tags: ['Campaign', 'Branding'],
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop',
  },
];

export const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'Email', url: 'mailto:me@rikiaprianto.me', icon: 'mail' },
];
