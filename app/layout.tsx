import type { Metadata, Viewport } from 'next';
import { Afacad, Quicksand } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/context/ModalContext';
import ScheduleCallModal from '@/components/ui/ScheduleCallModal';
import PricingInquiryModal from '@/components/ui/PricingInquiryModal';
import Preloader from '@/components/ui/Preloader';
import PromoBanner from '@/components/ui/PromoBanner';

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-host-grotesk',
  display: 'swap',
});
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

const SITE_URL = 'https://www.nexivostudio.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NexivoStudio — Web Design & Digital Agency',
    template: '%s | NexivoStudio',
  },
  description:
    'NexivoStudio is a full-service web design and digital agency offering professional web design, web development, SEO, and social media marketing. Affordable, results-driven digital solutions for businesses worldwide.',
  keywords: [
    // Intent-based
    'web design near me',
    'web developer near me',
    'SEO agency near me',
    'digital marketing agency near me',
    'website designer near me',
    'web design company near me',
    'affordable web design near me',
    // Core services
    'web design',
    'web development',
    'SEO services',
    'social media marketing',
    'digital marketing agency',
    'full-service digital agency',
    // Web design variants
    'professional web design',
    'custom website design',
    'responsive web design',
    'mobile-friendly website design',
    'e-commerce website design',
    'small business web design',
    'startup web design',
    'affordable web design services',
    'website redesign services',
    'UI UX design services',
    'landing page design',
    'brand identity design',
    // Web development variants
    'custom website development',
    'WordPress development',
    'Next.js development agency',
    'React developer',
    'e-commerce development',
    'web application development',
    'website maintenance services',
    // SEO variants
    'local SEO services',
    'technical SEO agency',
    'on-page SEO',
    'e-commerce SEO',
    'SEO content writing',
    'keyword research services',
    'link building services',
    // Social media variants
    'social media management',
    'social media strategy',
    'paid social advertising',
    'content creation agency',
    'influencer marketing agency',
    // Location modifiers
    'web design agency USA',
    'web design company California',
    'digital agency Pakistan',
    'web development Karachi',
    'web design agency online',
    // Brand + conversion
    'hire web designer',
    'best web design agency',
    'top web development company',
    'cheap web design services',
    'professional website design company',
    'web design and development company',
    'online marketing agency',
    'growth marketing agency',
    'NexivoStudio',
  ],
  authors: [{ name: 'NexivoStudio', url: SITE_URL }],
  creator: 'NexivoStudio',
  publisher: 'NexivoStudio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'NexivoStudio',
    title: 'NexivoStudio — Professional Web Design & Digital Agency',
    description:
      'Professional web design, development, SEO & social media marketing. NexivoStudio builds digital experiences that drive real business growth. Get a free quote today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexivoStudio — Web Design & Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexivoStudio — Web Design & Digital Agency',
    description:
      'Professional web design, development, SEO & social media marketing that drives real business growth.',
    images: ['/og-image.png'],
    creator: '@nexivostudio',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'NexivoStudio',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.png`,
      },
      description:
        'NexivoStudio is a full-service digital agency specializing in web design, web development, SEO, and social media marketing.',
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Los Angeles',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Karachi',
          addressCountry: 'PK',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@nexivostudio.io',
        availableLanguage: ['English'],
      },
      sameAs: [
        'https://www.linkedin.com/company/nexivostudio',
        'https://www.instagram.com/nexivostudio',
        'https://twitter.com/nexivostudio',
        'https://www.facebook.com/nexivostudio',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'NexivoStudio',
      image: `${SITE_URL}/og-image.png`,
      url: SITE_URL,
      priceRange: '$$',
      servesCuisine: undefined,
      areaServed: ['Worldwide', 'United States', 'Pakistan', 'United Kingdom', 'UAE'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Agency Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'NexivoStudio',
      description: 'Professional web design and digital agency',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacad.variable} ${quicksand.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-cream antialiased font-bricolage">
        <Preloader />
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScheduleCallModal />
          <PricingInquiryModal />
          <PromoBanner />
        </ModalProvider>

        {/* Google reCAPTCHA Enterprise */}
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCR6PX9DWW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCR6PX9DWW');
          `}
        </Script>
      </body>
    </html>
  );
}
