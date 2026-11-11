import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorieen } from './data/site';

const werk = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/werk' }),
  schema: z.object({
    nr: z.string(),
    titel: z.string(),
    domein: z.string(),
    rol: z.string(),
    jaar: z.number(),
    categorieen: z.array(z.enum(categorieen)),
    samenvatting: z.string(),
    uitgelicht: z.boolean().default(false),
    concept: z.boolean().default(false),
  }),
});

export const collections = { werk };
