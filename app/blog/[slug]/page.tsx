import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { CalendarDays, ArrowLeft, User } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY, ALL_SLUGS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import type { SanityPost } from '@/types/sanity';
import Newsletter from '@/components/sections/Newsletter';

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY).catch(() => []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityPost>(POST_BY_SLUG_QUERY, { slug }).catch(() => null);
  if (!post) return {};
  return {
    title: post.seoTitle ?? `${post.title} — NexivoStudio Blog`,
    description: post.seoDescription ?? post.excerpt,
  };
}

// Portable Text component overrides styled to match the site
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-bricolage text-base text-white/70 leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-grotesk font-bold text-2xl sm:text-3xl text-brand-cream mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-grotesk font-bold text-xl text-brand-cream mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-grotesk font-semibold text-lg text-brand-cream mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-brand-orange pl-5 my-6 italic font-bricolage text-white/60">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-brand-cream">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-white/80">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="font-mono text-sm bg-white/8 text-brand-orange px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ value, children }: { value?: { href?: string; blank?: boolean }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-brand-orange underline underline-offset-2 hover:text-brand-orange/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).height(675).fit('crop').url()}
            alt={value.alt ?? ''}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center font-bricolage text-xs text-white/35 mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    callout: ({ value }: { value: { text: string; tone: 'info' | 'tip' | 'warning' } }) => {
      const styles = {
        info:    'border-blue-500/40 bg-blue-500/8 text-blue-300',
        tip:     'border-brand-orange/40 bg-brand-orange/8 text-brand-orange',
        warning: 'border-yellow-500/40 bg-yellow-500/8 text-yellow-300',
      };
      return (
        <div className={`border rounded-xl px-5 py-4 my-6 font-bricolage text-sm leading-relaxed ${styles[value.tone]}`}>
          {value.text}
        </div>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<SanityPost>(POST_BY_SLUG_QUERY, { slug }).catch(() => null);

  if (!post) notFound();

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : null;

  return (
    <>
      <main className="pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-bricolage text-sm text-white/45 hover:text-brand-orange transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </a>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-grotesk text-xs font-semibold bg-brand-orange text-white px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            {formattedDate && (
              <span className="flex items-center gap-1.5 font-bricolage text-xs text-white/40">
                <CalendarDays size={12} /> {formattedDate}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1.5 font-bricolage text-xs text-white/40">
                <User size={12} /> {post.author}
              </span>
            )}
          </div>

          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-bricolage text-lg text-white/55 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Cover image */}
        {post.mainImage?.asset && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).fit('crop').url()}
                alt={post.mainImage.alt ?? post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="prose-custom">
            {post.body ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <PortableText value={post.body as any} components={ptComponents} />
            ) : (
              <p className="font-bricolage text-white/40 text-sm">No content yet.</p>
            )}
          </div>

          {/* Bottom back link */}
          <div className="mt-16 pt-8 border-t border-white/8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 font-grotesk text-sm font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors"
            >
              <ArrowLeft size={14} /> Back to all posts
            </a>
          </div>
        </div>
      </main>

      <Newsletter />
    </>
  );
}
