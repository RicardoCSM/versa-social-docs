import { openapi, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { APIPage } from "fumadocs-openapi/ui";
import { Card, Cards } from "fumadocs-ui/components/card";
import { getPageTreePeers } from "fumadocs-core/server";

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { params } = props;
  const { slug, lang } = await params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();
  const { body: MDX, toc } = await page.data.load();

  return (
    <DocsPage toc={toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
            DocsCategory: ({ url }) => {
              return <DocsCategory url={url ?? page.url} lang={lang} />;
            },
          })}
        />
        {page.data.index ? <DocsCategory url={page.url} lang={lang} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

function DocsCategory({ url, lang }: { url: string; lang: string }) {
  return (
    <Cards>
      {getPageTreePeers(source.pageTree[lang], url).map((peer) => (
        <Card key={peer.url} title={peer.name} href={peer.url}>
          {peer.description}
        </Card>
      ))}
    </Cards>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { params } = props;
  const { slug, lang } = await params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
