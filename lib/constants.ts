import type { NavLink, Service, Technology, PortfolioItem, BlogPost, ServiceCategory } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: 'Palette',
    title: 'Web Design',
    description:
      'Stunning, user-centric designs that captivate your audience and drive conversions. We craft beautiful interfaces that tell your brand story.',
  },
  {
    icon: 'Code2',
    title: 'Web Development',
    description:
      'Scalable, performant web applications built with modern technologies. From landing pages to complex platforms — we code it right.',
  },
  {
    icon: 'Share2',
    title: 'Social Media Marketing',
    description:
      'Data-driven social strategies that grow your brand and engage your community. We create content that converts followers into customers.',
  },
  {
    icon: 'SearchCheck',
    title: 'SEO',
    description:
      'Comprehensive SEO solutions that increase your visibility and drive organic traffic. Outrank your competition with proven techniques.',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: 'Palette',
    title: 'Web Design',
    slug: 'web-design',
    description: 'Stunning, user-centric designs that captivate your audience and drive conversions.',
    children: [
      { title: 'UI/UX Design', description: 'User-centered interface design with wireframes, prototypes, and high-fidelity mockups tailored to your brand.' },
      { title: 'Landing Page Design', description: 'High-converting, visually striking landing pages designed to turn visitors into leads.' },
      { title: 'E-Commerce Design', description: 'Product-focused store layouts designed for seamless browsing, trust, and conversion.' },
      { title: 'Brand Identity & Style Guides', description: 'Logo, color palette, typography, and component guidelines that keep your brand consistent everywhere.' },
      { title: 'Website Redesign', description: 'Modernize outdated websites with a fresh look while preserving SEO equity and user familiarity.' },
      { title: 'Mobile-First / Responsive Design', description: 'Designs built for every screen size — mobile, tablet, and desktop — from the ground up.' },
    ],
  },
  {
    icon: 'Code2',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Scalable, performant web applications built with modern technologies.',
    children: [
      { title: 'Custom Website Development', description: 'Fully custom-built websites using modern frameworks — no bloated templates, just clean performant code.' },
      { title: 'WordPress Development', description: 'Custom themes, child themes, and plugin development for WordPress-based sites.' },
      { title: 'Next.js / React Development', description: 'Fast, SEO-friendly web applications built with Next.js and React for dynamic and static sites alike.' },
      { title: 'E-Commerce Development', description: 'Full WooCommerce or custom e-commerce builds with cart, checkout, payments, and order management.' },
      { title: 'Web Application Development', description: 'Complex web apps with authentication, dashboards, APIs, and database integrations.' },
      { title: 'API Integration', description: 'Connect your website to third-party services — CRMs, payment gateways, booking systems, and more.' },
      { title: 'Speed & Performance Optimization', description: 'Core Web Vitals tuning, image optimization, caching, and code splitting for blazing-fast load times.' },
      { title: 'Website Maintenance & Support', description: 'Ongoing updates, security patches, backups, and technical support to keep your site running smoothly.' },
    ],
  },
  {
    icon: 'Share2',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Data-driven social strategies that grow your brand and engage your community.',
    children: [
      { title: 'Social Media Strategy', description: 'Platform-specific content strategies built around your audience, goals, and brand voice.' },
      { title: 'Content Creation & Design', description: 'Scroll-stopping graphics, reels, carousels, and copy crafted for each platform.' },
      { title: 'Social Media Management', description: 'Full-service account management — scheduling, posting, community engagement, and reporting.' },
      { title: 'Paid Social Advertising', description: 'ROI-focused ad campaigns on Meta (Facebook/Instagram), TikTok, LinkedIn, and more.' },
      { title: 'Influencer Marketing', description: 'Identifying, outreaching, and managing influencer partnerships aligned with your niche.' },
      { title: 'Analytics & Reporting', description: 'Monthly performance reports with insights on reach, engagement, follower growth, and conversions.' },
      { title: 'Profile Optimization', description: 'Bio, highlights, link-in-bio, and profile setup optimized for discoverability and first impressions.' },
    ],
  },
  {
    icon: 'SearchCheck',
    title: 'SEO',
    slug: 'seo',
    description: 'Comprehensive SEO solutions that increase your visibility and drive organic traffic.',
    children: [
      { title: 'SEO Audit', description: "A full technical and content audit identifying what's holding your site back in search rankings." },
      { title: 'On-Page SEO', description: 'Optimizing title tags, meta descriptions, headings, content, and internal linking structure.' },
      { title: 'Technical SEO', description: 'Site speed, crawlability, schema markup, sitemaps, robots.txt, and Core Web Vitals fixes.' },
      { title: 'Keyword Research & Strategy', description: 'Finding high-intent, low-competition keywords your audience is actually searching for.' },
      { title: 'Local SEO', description: 'Google Business Profile optimization, local citations, and geo-targeted content to dominate local search.' },
      { title: 'Link Building', description: 'White-hat outreach and digital PR to earn high-authority backlinks that boost domain authority.' },
      { title: 'E-Commerce SEO', description: 'Product page optimization, category structure, and schema for online stores.' },
      { title: 'SEO Content Writing', description: 'Blog posts, pillar pages, and landing page copy written to rank and convert.' },
    ],
  },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Figma', icon: 'figma' },
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'Shopify', icon: 'shopify' },
];

export const PORTFOLIO_TABS = ['All', 'Web Design', 'Web Dev', 'SEO', 'Social Media'] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxe Fashion Brand',
    category: 'Web Design',
    tag: 'UI/UX Design',
    image: 'from-purple-600 to-blue-500',
  },
  {
    id: 2,
    title: 'TechFlow Dashboard',
    category: 'Web Design',
    tag: 'Dashboard Design',
    image: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Web Dev',
    tag: 'Full Stack',
    image: 'from-green-500 to-teal-400',
  },
  {
    id: 4,
    title: 'SaaS Landing Page',
    category: 'Web Dev',
    tag: 'Next.js',
    image: 'from-pink-500 to-purple-500',
  },
  {
    id: 5,
    title: 'Local Restaurant SEO',
    category: 'SEO',
    tag: 'Local SEO',
    image: 'from-yellow-400 to-orange-400',
  },
  {
    id: 6,
    title: 'Legal Firm Rankings',
    category: 'SEO',
    tag: 'Technical SEO',
    image: 'from-blue-400 to-indigo-500',
  },
  {
    id: 7,
    title: 'Fitness Brand Growth',
    category: 'Social Media',
    tag: 'Instagram Growth',
    image: 'from-red-500 to-pink-500',
  },
  {
    id: 8,
    title: 'Beauty Brand Campaign',
    category: 'Social Media',
    tag: 'Meta Ads',
    image: 'from-teal-400 to-cyan-500',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '10 Web Design Trends Dominating 2024',
    category: 'Web Design',
    excerpt:
      'Explore the cutting-edge design trends shaping the web in 2024, from glassmorphism to AI-generated visuals and beyond.',
    image: 'from-purple-600 to-indigo-500',
    date: 'Dec 15, 2024',
  },
  {
    id: 2,
    title: 'How to Skyrocket Your SEO Rankings in 90 Days',
    category: 'SEO',
    excerpt:
      'A proven step-by-step framework for dramatically improving your search rankings with technical and on-page SEO techniques.',
    image: 'from-green-500 to-emerald-400',
    date: 'Dec 10, 2024',
  },
  {
    id: 3,
    title: 'Social Media Strategies That Actually Convert',
    category: 'Social Media',
    excerpt:
      'Stop posting into the void. Learn the social media strategies that turn followers into paying customers and brand advocates.',
    image: 'from-orange-500 to-red-400',
    date: 'Dec 5, 2024',
  },
];
