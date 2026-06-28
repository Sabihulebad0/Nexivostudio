import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactUs from '@/components/sections/ContactUs';

export const metadata: Metadata = {
  title: 'Contact — NexivoStudio',
  description:
    'Get in touch with NexivoStudio. Tell us about your project and we\'ll respond within 24 hours with a clear plan.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        icon="MessageCircle"
        label="Get In Touch"
        title="We'd Love to"
        highlight="Hear From You"
        subtitle="Have a project in mind? Fill out the form or reach us directly — we typically respond within 24 hours."
        pills={['24-Hour Response', 'Free Consultation', 'No Commitments']}
      />
      <ContactUs />
    </>
  );
}
