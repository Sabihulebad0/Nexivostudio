export type ProcessStep = { step: string; title: string; desc: string };
export type Stat = { value: string; label: string };
export type Faq = { q: string; a: string };

// ── Process Steps ────────────────────────────────────────────────────────────

const PROCESS: Record<string, ProcessStep[]> = {
  'web-design': [
    { step: '01', title: 'Discovery & Research', desc: 'We deep-dive into your brand, audience, and competitors to build a solid strategic foundation before any design begins.' },
    { step: '02', title: 'Wireframing & Architecture', desc: 'We map out page structure, user flows, and information hierarchy so every screen has a clear purpose.' },
    { step: '03', title: 'Visual Design', desc: 'We craft pixel-perfect, on-brand mockups for desktop and mobile — ready for your review and approval.' },
    { step: '04', title: 'Feedback & Revisions', desc: 'We refine and iterate based on your feedback across structured revision rounds until every detail is exactly right.' },
    { step: '05', title: 'Handoff & Launch', desc: 'We deliver production-ready assets with developer notes and support a smooth, stress-free launch.' },
  ],
  'web-development': [
    { step: '01', title: 'Requirements Analysis', desc: 'We define technical specifications, project scope, and measurable success criteria with your team.' },
    { step: '02', title: 'Architecture Planning', desc: 'We plan the tech stack, database schema, and system architecture for long-term scalability and performance.' },
    { step: '03', title: 'Development', desc: 'We build clean, well-documented, and thoroughly tested code following industry best practices.' },
    { step: '04', title: 'QA & Testing', desc: 'Rigorous cross-browser and cross-device testing to catch every edge case before launch day.' },
    { step: '05', title: 'Deployment & Support', desc: 'We handle deployment, monitor for issues, and provide 30 days of dedicated post-launch support.' },
  ],
  'social-media-marketing': [
    { step: '01', title: 'Brand Audit', desc: 'We review your existing presence, competitor landscape, and audience data to benchmark your starting point.' },
    { step: '02', title: 'Strategy Development', desc: 'We build a data-driven content and growth strategy aligned tightly with your business goals.' },
    { step: '03', title: 'Content Production', desc: 'We create scroll-stopping visuals, copy, and short-form video tailored to each platform\'s algorithm.' },
    { step: '04', title: 'Publishing & Engagement', desc: 'We publish at peak engagement windows and actively manage community interactions to grow reach.' },
    { step: '05', title: 'Analytics & Optimization', desc: 'Monthly performance reports with clear insights, ROI tracking, and ongoing strategy refinement.' },
  ],
  'seo': [
    { step: '01', title: 'SEO Audit', desc: 'We run a comprehensive technical and content audit to identify exactly what\'s holding your rankings back.' },
    { step: '02', title: 'Keyword Research', desc: 'We uncover high-intent, high-volume keywords your ideal customers are actually searching for.' },
    { step: '03', title: 'On-Page Optimization', desc: 'We optimize titles, metadata, content, internal linking, and page speed for maximum ranking impact.' },
    { step: '04', title: 'Off-Page Strategy', desc: 'We build authoritative, white-hat backlinks through outreach, digital PR, and content partnerships.' },
    { step: '05', title: 'Reporting & Growth', desc: 'Monthly ranking and traffic reports with clear ROI tracking and proactive strategy adjustments.' },
  ],
};

// ── Stats ────────────────────────────────────────────────────────────────────

const STATS: Record<string, Stat[]> = {
  'web-design': [
    { value: '200+', label: 'Designs Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '2 Wks', label: 'Avg. Turnaround' },
  ],
  'web-development': [
    { value: '100+', label: 'Sites Launched' },
    { value: '0', label: 'Critical Post-Launch Bugs' },
    { value: '5 Yrs', label: 'Track Record' },
  ],
  'social-media-marketing': [
    { value: '10M+', label: 'Reach Generated' },
    { value: '5×', label: 'Avg. Engagement Lift' },
    { value: '6', label: 'Platforms Covered' },
  ],
  'seo': [
    { value: '300%', label: 'Avg. Traffic Growth' },
    { value: '500+', label: 'Page-1 Rankings Won' },
    { value: '100%', label: 'White-Hat Methods' },
  ],
};

// ── Deliverables ──────────────────────────────────────────────────────────────

const DELIVERABLES: Record<string, string[]> = {
  'web-design': [
    'Custom mockups for desktop, tablet & mobile',
    'Responsive layouts for all screen sizes',
    'Brand-consistent UI component library',
    'Figma source files with organized layers',
    'Style guide & design system documentation',
    'WCAG-compliant accessibility standards',
    'Interactive prototype for stakeholder review',
    'Developer handoff notes & asset exports',
  ],
  'web-development': [
    'Clean, commented, version-controlled source code',
    'Cross-browser and cross-device tested build',
    'Performance-optimized Core Web Vitals scores',
    'SEO-ready semantic HTML structure',
    'Admin dashboard with role-based access',
    'Full API documentation (where applicable)',
    'Security hardening and vulnerability scanning',
    '30-day post-launch support window',
  ],
  'social-media-marketing': [
    'Monthly content calendar (4–5 weeks ahead)',
    'Branded post templates for each platform',
    'Scheduled 3–7 posts per week per channel',
    'Community engagement management (comments & DMs)',
    'Monthly performance analytics report',
    'Paid ad campaign management (optional add-on)',
    'Influencer partnership coordination',
    'Competitor benchmarking & insights',
  ],
  'seo': [
    'Comprehensive technical SEO audit report',
    'Keyword research & strategy document',
    'On-page content optimization for target pages',
    'Technical fix implementation (speed, schema, crawlability)',
    'High-authority backlink acquisition',
    'Monthly ranking & organic traffic report',
    'Google Business Profile optimization (local SEO)',
    'Competitor gap and opportunity analysis',
  ],
};

// ── FAQs ─────────────────────────────────────────────────────────────────────

const FAQS: Record<string, Faq[]> = {
  'web-design': [
    { q: 'How long does the design process take?', a: 'Most projects wrap up in 2–4 weeks depending on complexity, the number of pages, and how quickly feedback rounds are completed. We always provide a detailed timeline before kicking off.' },
    { q: 'Will the design work on mobile devices?', a: 'Absolutely — every design we deliver is built mobile-first and tested across all major screen sizes, from 320px phones to wide-format desktops.' },
    { q: 'How many revision rounds are included?', a: 'We include structured revision rounds in every project. We\'re not done until you\'re completely happy with the result.' },
    { q: 'What design tools do you use?', a: 'We primarily work in Figma, which makes it easy to collaborate in real time, leave comments, and hand off directly to developers.' },
    { q: 'Will I own the final design files?', a: 'Yes — full source files (Figma, exported assets, and everything in between) are handed over to you upon project completion. You own 100% of what we create.' },
  ],
  'web-development': [
    { q: 'What technologies do you build with?', a: 'We specialize in React, Next.js, TypeScript, Node.js, and WordPress — with the stack chosen based on your project\'s specific performance and scalability needs.' },
    { q: 'How long does development take?', a: 'Simple marketing sites take 2–3 weeks; complex web applications or e-commerce builds typically range from 6–12 weeks depending on scope and integrations.' },
    { q: 'Will the site be SEO-friendly?', a: 'Yes — we follow SEO best practices including semantic HTML, fast load times, proper metadata, and structured data from day one, not as an afterthought.' },
    { q: 'Do you offer ongoing maintenance?', a: 'Yes — we offer monthly retainer plans covering CMS updates, security patches, performance monitoring, and minor content changes.' },
    { q: 'Can you integrate with our existing tools?', a: 'Definitely. From CRMs like HubSpot and Salesforce to payment gateways, analytics, and marketing automation — we handle all third-party integrations.' },
  ],
  'social-media-marketing': [
    { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, LinkedIn, X (Twitter), TikTok, and YouTube — or a curated subset based on where your specific audience is most active.' },
    { q: 'How many posts per week will you create?', a: 'Our standard packages include 3–5 posts per week per platform. Higher-frequency packages are available for brands that require more volume.' },
    { q: 'Do you run paid social ads?', a: 'Yes — paid social advertising (Meta Ads, LinkedIn Ads, TikTok Ads) is available as a standalone service or as an add-on to organic management.' },
    { q: 'Will you respond to our community?', a: 'Community management (responding to comments, DMs, and mentions) is included in our full-management plans, ensuring no follower goes unacknowledged.' },
    { q: 'How do you measure success?', a: 'We track reach, impressions, engagement rate, follower growth, click-through rate, and conversions — and deliver a clear monthly report against agreed KPIs.' },
  ],
  'seo': [
    { q: 'How long before I see results?', a: 'SEO is a compounding investment. Most clients see measurable ranking improvements within 3–6 months, with significant organic traffic gains typically visible by month 9–12.' },
    { q: 'Is your link building white-hat?', a: 'Always. We use ethical, manual outreach and digital PR — never PBNs, link farms, or any tactics that could trigger a Google penalty.' },
    { q: 'Do you write the SEO content too?', a: 'Yes — our SEO Content Writing service covers keyword-optimized blog posts, landing pages, service pages, and FAQs that rank and convert.' },
    { q: 'Can you recover a penalized website?', a: 'Yes — we identify the root cause of manual or algorithmic penalties, build a recovery action plan, and submit reconsideration requests where required.' },
    { q: 'What reports will I receive?', a: 'Monthly reports covering keyword rankings, organic traffic trends, backlink profile growth, Core Web Vitals, and a summary of work completed that month.' },
  ],
};

// ── Default fallbacks ─────────────────────────────────────────────────────────

const DEFAULT_PROCESS: ProcessStep[] = [
  { step: '01', title: 'Discovery', desc: 'Deep understanding of your goals, audience, and competitive landscape.' },
  { step: '02', title: 'Strategy', desc: 'A tailored, data-backed plan aligned with your business objectives.' },
  { step: '03', title: 'Execution', desc: 'High-quality delivery with attention to every detail.' },
  { step: '04', title: 'Review & Refine', desc: 'Iteration based on your feedback until everything is exactly right.' },
  { step: '05', title: 'Launch & Support', desc: 'Confident go-live with dedicated post-launch support.' },
];

const DEFAULT_DELIVERABLES: string[] = [
  'Detailed project documentation',
  'Quality-assured deliverables',
  'Regular progress updates & check-ins',
  'Structured revision rounds',
  'Post-delivery support window',
  'Full ownership of all assets',
];

const DEFAULT_FAQS: Faq[] = [
  { q: 'How long does the project take?', a: 'Timelines depend on scope and complexity. We always provide a detailed timeline estimate during our discovery call before any work begins.' },
  { q: 'What does the process look like?', a: 'We follow a proven 5-stage approach: discovery, strategy, execution, review, and launch — keeping you informed and in control at every step.' },
  { q: 'How many revisions are included?', a: 'We include structured revision rounds in every project and won\'t consider anything done until you\'re fully satisfied with the result.' },
  { q: 'Will I own all the deliverables?', a: 'Yes — you retain 100% ownership of everything we produce, including source files, assets, and intellectual property.' },
];

// ── Exports ───────────────────────────────────────────────────────────────────

export function getProcess(categorySlug: string): ProcessStep[] {
  return PROCESS[categorySlug] ?? DEFAULT_PROCESS;
}

export function getStats(categorySlug: string): Stat[] {
  return STATS[categorySlug] ?? [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5★', label: 'Average Rating' },
  ];
}

export function getDeliverables(categorySlug: string): string[] {
  return DELIVERABLES[categorySlug] ?? DEFAULT_DELIVERABLES;
}

export function getFaqs(categorySlug: string): Faq[] {
  return FAQS[categorySlug] ?? DEFAULT_FAQS;
}
