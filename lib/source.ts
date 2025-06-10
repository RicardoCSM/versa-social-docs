import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/lib/i18n";
import { icons } from "lucide-react";
import { createElement } from "react";
import { createOpenAPI, attachFile } from "fumadocs-openapi/server";

export const source = loader({
  baseUrl: "/docs",
  i18n,
  source: docs.toFumadocsSource(),
  url(slugs, locale) {
    if (locale) return "/" + [locale, "docs", ...slugs].join("/");
    return "/" + ["docs", ...slugs].join("/");
  },
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  pageTree: {
    attachFile,
  },
});

export const openapi = createOpenAPI({
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
});
