import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['method', 'protocol', 'concept', 'scenario', 'attribute']),
    tags: z.array(z.string()),
    related: z.array(z.string()).default([]),
    order: z.number()
  })
});

export const collections = { notes };
