import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Portfolio from '@/components/sections/Portfolio';
import ContactUs from '@/components/sections/ContactUs';

export const metadata: Metadata = {
  title: 'Portfolio — NexivoStudio',
  description:
    'Browse NexivoStudio\'s portfolio of web design, development, SEO, and social media projects. Real results for real businesses.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        icon="Briefcase"
        label="Our Work"
        title="Projects That"
        highlight="Speak for Themselves"
        subtitle="A curated selection of our best work across web design, development, SEO, and social media campaigns."
        pills={['Web Design', 'Web Dev', 'SEO', 'Social Media']}
      />
      <Portfolio />
      <ContactUs />
    </>
  );
}
