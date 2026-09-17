import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['health', 'games', 'dev']),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    techStack: z.array(z.string()),
    githubUrl: z.string().optional(),
  }),
});

export const collections = { blog, projects };