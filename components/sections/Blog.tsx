'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { BLOG_POSTS } from '@/lib/constants';
import { gsap } from '@/lib/gsap';

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-heading', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.blog-heading', start: 'top 85%' },
      });

      gsap.from('.blog-card', {
        y: 50,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
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
              From the{' '}
              <span className="text-brand-orange">Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="font-grotesk text-sm font-semibold text-brand-orange hover:text-brand-orange/80 flex items-center gap-1.5 transition-colors shrink-0"
          >
            View all posts <ArrowRight size={15} />
          </a>
        </div>

        <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="blog-card">
              <GlassCard className="overflow-hidden glass-hover group h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden shrink-0`}>
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="font-grotesk text-xs font-semibold bg-brand-orange text-white px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-bricolage text-xs text-white/35 mb-3">{post.date}</p>
                  <h3 className="font-grotesk font-semibold text-brand-cream text-base leading-snug mb-3 flex-1">
                    {post.title}
                  </h3>
                  <p className="font-bricolage text-sm text-white/50 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="font-grotesk text-xs font-semibold text-brand-orange hover:text-brand-orange/80 flex items-center gap-1.5 transition-colors"
                  >
                    Read More <ArrowRight size={13} />
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
