import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  } else {
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({ title, description, ogImage, canonicalPath, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (ogImage) {
      const abs = ogImage.startsWith("http") ? ogImage : `${window.location.origin}${ogImage}`;
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: abs });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: abs });
    }

    const canonical = canonicalPath
      ? `${window.location.origin}${canonicalPath}`
      : window.location.href;
    upsertLink("canonical", canonical);

    let ld: HTMLScriptElement | null = null;
    if (jsonLd) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.text = JSON.stringify(jsonLd);
      ld.dataset.seo = "1";
      document.head.appendChild(ld);
    }
    return () => {
      if (ld) document.head.removeChild(ld);
    };
  }, [title, description, ogImage, canonicalPath, JSON.stringify(jsonLd)]);

  return null;
}
