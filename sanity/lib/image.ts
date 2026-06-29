import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

// Only valid project IDs: a-z, 0-9, dashes
const safeProjectId = /^[a-z0-9-]+$/.test(projectId ?? '') ? projectId! : 'a';

const builderClient = createClient({
  projectId: safeProjectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(builderClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
