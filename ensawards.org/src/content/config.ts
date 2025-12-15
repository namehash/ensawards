import { defineCollection, z } from "astro:content";

const benchmarkReports = defineCollection({
  type: "content",
  schema: z.object({
    // Report metadata
    id: z.string(),
    appSlug: z.string(),
    bestPracticeSlug: z.string(),
    authorSlug: z.string(),

    // Timestamps
    createdAt: z.number(), // Unix timestamp
    lastUpdatedAt: z.number(), // Unix timestamp

    // SEO metadata
    title: z.string(),
    description: z.string(),
    ogImagePath: z.string().optional(),
    twitterOgImagePath: z.string().optional(),
  }),
});

export const collections = {
  "benchmark-reports": benchmarkReports,
};
