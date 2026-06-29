'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { gsap } from '@/lib/gsap';
import type { SanityPost } from '@/types/sanity';
import { urlFor } from '@/sanity/lib/image';

// Gradient fallbacks when no image is uploaded yet
const FALLBACK_GRADIENTS = [
  'from-violet-600 to-indigo-500',
  'from-orange-500 to-pink-500',
  'from-cyan-500 to-blue-600',
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

interface BlogProps {
  posts: SanityPost[];
}

export default function Blog({ posts }: BlogProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-heading', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.blog-heading', start: 'top 85%' },
      });
      gsap.from('.blog-card', {
        y: 50, opacity: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="blog-heading flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Latest Insights</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
              From the <span className="text-gradient-orange">Blog</span>
            </h2>
          </div>
          <a
            href="/blog"
            className="font-grotesk text-sm font-semibold text-brand-orange hover:text-brand-orange/80 flex items-center gap-1.5 transition-colors shrink-0"
          >
            View all posts <ArrowRight size={15} />
          </a>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-bricolage text-white/40 text-sm">No posts published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div key={post._id} className="blog-card">
                <GlassCard className="overflow-hidden glass-hover group h-full flex flex-col">

                  {/* Image / gradient thumbnail */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length]}`} />
                    )}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="font-grotesk text-xs font-semibold bg-brand-orange text-white px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 font-bricolage text-xs text-white/35">
                        <CalendarDays size={11} />
                        {post.publishedAt ? formatDate(post.publishedAt) : 'Draft'}
                      </span>
                      {post.author && (
                        <span className="flex items-center gap-1 font-bricolage text-xs text-white/35">
                          <Tag size={11} /> {post.author}
                        </span>
                      )}
                    </div>

                    <h3 className="font-grotesk font-semibold text-brand-cream text-base leading-snug mb-3 flex-1">
                      {post.title}
                    </h3>
                    <p className="font-bricolage text-sm text-white/50 leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blog/${post.slug}`}
                      className="font-grotesk text-xs font-semibold text-brand-orange hover:text-brand-orange/80 flex items-center gap-1.5 transition-colors"
                    >
                      Read More <ArrowRight size={13} />
                    </a>
                  </div>

                </GlassCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
