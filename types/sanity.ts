export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}
