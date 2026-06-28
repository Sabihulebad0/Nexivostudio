import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import ContactUs from '@/components/sections/ContactUs';

export const metadata: Metadata = {
  title: 'Services — NexivoStudio',
  description:
    'Explore NexivoStudio\'s full range of digital services — web design, web development, SEO, social media marketing, hosting, and website maintenance.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        icon="LayoutGrid"
        label="Our Services"
        title="Everything You Need to"
        highlight="Grow Online"
        subtitle="From the first pixel to the first page-one ranking — we offer end-to-end digital services that deliver measurable business results."
        pills={['6 Service Areas', 'Transparent Pricing', 'Free Consultation']}
      />
      <Services />
      <Pricing />
      <ContactUs />
    </>
  );
}
