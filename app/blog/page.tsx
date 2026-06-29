import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Blog from '@/components/sections/Blog';
import Newsletter from '@/components/sections/Newsletter';
import { client } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries';
import type { SanityPost } from '@/types/sanity';

export const metadata: Metadata = {
  title: 'Blog — NexivoStudio',
  description:
    'Expert insights on web design, web development, SEO, and digital marketing from the NexivoStudio team.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<SanityPost[]>(ALL_POSTS_QUERY).catch(() => []);

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
      <Blog posts={posts} />
      <Newsletter />
    </>
  );
}
