import type { Metadata } from "next";
import { siteConfig, seoKeywords } from "@/data/site";

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: readonly string[] | string[];
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Dermatologist & Skin Clinic in Rajahmundry`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const keywordList = [...(keywords ?? seoKeywords)];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywordList,
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
      images: [
        {
          url: siteConfig.logo,
          alt: `${siteConfig.name} — dermatology clinic in Rajahmundry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.logo],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: {
      "geo.region": "IN-AP",
      "geo.placename": "Rajahmundry",
    },
  };
}
