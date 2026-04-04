import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum([
      'stablecoin-payments',
      'system-design',
      'payments-engineering',
      'blockchain',
      'distributed-systems',
      'career',
      'mpc-cryptography',
      'java-engineering',
      'architecture-decisions',
    ]),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['payments', 'blockchain', 'system-design', 'open-source']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    stats: z
      .object({
        services: z.number().optional(),
        tests: z.number().optional(),
        integrations: z.number().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog, projects };
