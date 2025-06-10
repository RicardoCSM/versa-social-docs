import { z } from "zod";
import { defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    async: true,
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      /**
       * API routes only
       */
      method: z.string().optional(),
      structuredData: z.object({
        headings: z.array(
          z.object({
            id: z.string(),
            content: z.string(),
          })
        ),
        contents: z.array(
          z.object({
            heading: z.string(),
            content: z.string(),
          })
        ),
      }),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});
