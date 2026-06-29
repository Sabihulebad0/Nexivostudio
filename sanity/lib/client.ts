import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _client: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getClient(): any {
  if (!projectId) return null;
  if (!_client) {
    _client = createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === 'production' });
  }
  return _client;
}

export const client = {
  fetch: async <T>(query: string, params: Record<string, unknown> = {}): Promise<T> => {
    const c = getClient();
    if (!c) return [] as unknown as T;
    try {
      return (await c.fetch(query, params)) as T;
    } catch {
      return [] as unknown as T;
    }
  },
};
