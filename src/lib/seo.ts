import type { Metadata } from "next";
import { siteConfig, seoKeywords } from "@/data/site";

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Advanced Dermatology & Aesthetic Treatments`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords ?? seoKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    manifest: siteConfig.favicons.manifest,
    icons: {
      icon: [
        { url: siteConfig.favicons.ico },
        {
          url: siteConfig.favicons.png16,
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: siteConfig.favicons.png32,
          sizes: "32x32",
          type: "image/png",
        },
      ],
      shortcut: siteConfig.favicons.ico,
      apple: siteConfig.favicons.apple,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: siteConfig.logo, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.logo],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
