import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Blog from '@/components/sections/Blog';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Blog — NexivoStudio',
  description:
    'Expert insights on web design, web development, SEO, and digital marketing from the NexivoStudio team.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Blog"
        icon="BookOpen"
        label="Latest Insights"
        title="Thoughts, Tips &"
        highlight="Deep Dives"
        subtitle="Expert articles on web design, development, SEO strategies, and digital marketing — written by practitioners, not theorists."
        pills={['Web Design', 'SEO', 'Social Media', 'Web Dev']}
      />
      <Blog />
      <Newsletter />
    </>
  );
}
