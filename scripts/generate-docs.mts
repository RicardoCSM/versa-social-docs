import { generateFiles } from "fumadocs-openapi";

type ModuleConfig = {
  name: string;
  input: string;
  outputDir?: string;
};

const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

async function buildModule({ name, input, outputDir }: ModuleConfig) {
  const output = outputDir ?? `./content/docs/${name}/(generated)`;

  await generateFiles({
    input: [input],
    output,
    includeDescription: true,
    frontmatter: (title: string, description?: string) => ({
      structuredData: {
        headings: [{ id: toSlug(title), content: title }],
        contents: [{ heading: toSlug(title), content: description ?? "" }],
      },
    }),
  });
}

const modules: ModuleConfig[] = [
  { name: "tenant", input: "./content/api/tenant.json" },
  { name: "auth", input: "./content/api/auth.json" },
  { name: "cecad", input: "./content/api/cecad.json" },
  { name: "institution", input: "./content/api/institution.json" },
  { name: "user", input: "./content/api/user.json" },
  { name: "questionnaire", input: "./content/api/questionnaire.json" },
  { name: "unit", input: "./content/api/unit.json" },
  { name: "socialAction", input: "./content/api/socialAction.json" },
  { name: "report", input: "./content/api/report.json" },
  { name: "collectiveAction", input: "./content/api/collectiveAction.json" },
  { name: "socialRecord", input: "./content/api/socialRecord.json" },
  {
    name: "familyMonitoringPlan",
    input: "./content/api/familyMonitoringPlan.json",
  },
  { name: "socialEvolution", input: "./content/api/socialEvolution.json" },
  { name: "referral", input: "./content/api/referral.json" },
  { name: "socialService", input: "./content/api/socialService.json" },
  { name: "socialTask", input: "./content/api/socialTask.json" },
];

async function main() {
  for (const m of modules) await buildModule(m);
}

void main();
