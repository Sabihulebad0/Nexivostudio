import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  },
  studioHost: 'nexivostudio',
  deployment: {
    appId: 'rj9v5ufsdrdazrq2kw1ej9no',
  },
});
