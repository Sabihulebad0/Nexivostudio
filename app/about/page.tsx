import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import AboutUs from '@/components/sections/AboutUs';
import Technologies from '@/components/sections/Technologies';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'About Us — NexivoStudio',
  description:
    'Learn about NexivoStudio — a full-service digital agency built on strategy, design, and modern technology. Meet the team behind 150+ successful projects.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        icon="Users"
        label="About NexivoStudio"
        title="A Team Built for"
        highlight="Digital Growth"
        subtitle="We're strategists, designers, and engineers obsessed with building digital things that actually work — and move the needle for your business."
        pills={['Founded 2019', '150+ Projects Delivered', '12 Industries Served']}
      />
      <AboutUs />
      <Technologies />
      <Newsletter />
    </>
  );
}
