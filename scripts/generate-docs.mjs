import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./content/api/tenant.json'],
  output: './content/docs/tenant/(generated)',
  includeDescription: true,
  frontmatter: (title, description) => ({
    structuredData: {
      headings: [
        {
          id: title.toLowerCase().replace(/\s+/g, '-'),
          content: title,
        },
      ],
      contents: [
        {
          heading: title.toLowerCase().replace(/\s+/g, '-'),
          content: description,
        },
      ],
    },
  }),
});

void generateFiles({
  input: ['./content/api/auth.json'],
  output: './content/docs/auth/(generated)',
  includeDescription: true,
  frontmatter: (title, description) => ({
    structuredData: {
      headings: [
        {
          id: title.toLowerCase().replace(/\s+/g, '-'),
          content: title,
        },
      ],
      contents: [
        {
          heading: title.toLowerCase().replace(/\s+/g, '-'),
          content: description,
        },
      ],
    },
  }),
});