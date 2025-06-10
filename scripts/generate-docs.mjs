import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./content/api/tenant.json'],
  output: './content/docs/tenant/(generated)',
  includeDescription: true,
});

void generateFiles({
  input: ['./content/api/auth.json'],
  output: './content/docs/auth/(generated)',
  includeDescription: true,
});