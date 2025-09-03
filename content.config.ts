import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/**/*.yaml',
      schema: z.object({
         name: z.string(),
         date: z.string(),
         subtitle: z.optional(z.string()),
         video: z.optional(z.string()),
         image: z.optional(z.string()),
         links: z.optional(z.map(z.string(), z.string())),
         desc: z.array(z.string())
      }),
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/**/*.yaml',
      schema: z.object({
        name: z.string(),
        date: z.string(),
        subtitle: z.optional(z.string()),
        video: z.optional(z.string()),
        image: z.optional(z.string()),
        links: z.optional(z.map(z.string(), z.string())),
        desc: z.array(z.string())
      })
    })
  }
})