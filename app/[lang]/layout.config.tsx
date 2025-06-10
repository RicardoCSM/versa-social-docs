import Logo from "@/components/logo";
import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
    },
    i18n,
  };
}
