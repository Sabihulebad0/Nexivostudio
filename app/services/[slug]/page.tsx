import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceChildren from '@/components/sections/ServiceChildren';
import ServiceCTA from '@/components/sections/ServiceCTA';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  return {
    title: `${service?.title ?? 'Service'} Services — NexivoStudio`,
    description: service?.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  if (!service) notFound();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceChildren service={service} />
      <ServiceCTA />
    </>
  );
}
