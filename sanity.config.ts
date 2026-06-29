import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'nexivo-studio',
  title: 'NexivoStudio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'bvqzc7jk',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
