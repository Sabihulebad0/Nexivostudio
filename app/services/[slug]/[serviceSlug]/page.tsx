import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { toSlug } from '@/lib/utils';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero';
import ServiceDetailContent from '@/components/sections/ServiceDetailContent';
import ServiceCTA from '@/components/sections/ServiceCTA';

type Props = { params: Promise<{ slug: string; serviceSlug: string }> };

export function generateStaticParams() {
  return SERVICE_CATEGORIES.flatMap((cat) =>
    cat.children.map((child) => ({
      slug: cat.slug,
      serviceSlug: toSlug(child.title),
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  const service = category?.children.find((c) => toSlug(c.title) === serviceSlug);
  return {
    title: `${service?.title ?? 'Service'} — NexivoStudio`,
    description: service?.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug, serviceSlug } = await params;
  const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  const service = category?.children.find((c) => toSlug(c.title) === serviceSlug);
  if (!category || !service) notFound();

  return (
    <>
      <ServiceDetailHero category={category} service={service} />
      <ServiceDetailContent category={category} service={service} />
      <ServiceCTA />
    </>
  );
}
