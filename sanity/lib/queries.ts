import { groq } from 'next-sanity';

// Fields shared across list and detail queries
const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  mainImage { asset, alt }
`;

/** 3 most-recent posts — used on homepage */
export const RECENT_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    ${postFields}
  }
`;

/** All posts — used on /blog listing page */
export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }
`;

/** Single post by slug — used on /blog/[slug] */
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields},
    body,
    seoTitle,
    seoDescription
  }
`;

/** All slugs — used for generateStaticParams */
export const ALL_SLUGS_QUERY = groq`
  *[_type == "post"] { "slug": slug.current }
`;
