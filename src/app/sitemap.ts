import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/quem-somos", "/projetos", "/transparencia", "/doacao", "/contato"].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
