import type { Metadata } from 'next';
import PricingHero from '@/components/sections/PricingHero';
import Pricing from '@/components/sections/Pricing';
import ContactUs from '@/components/sections/ContactUs';

export const metadata: Metadata = {
  title: 'Pricing — NexivoStudio',
  description:
    'Transparent pricing for web design, web development, SEO, and social media marketing. No hidden fees — pick the plan that fits your goals.',
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Pricing />
      <ContactUs />
    </>
  );
}
