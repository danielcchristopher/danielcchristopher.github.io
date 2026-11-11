import type { Metadata } from "next";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = { url: "/og-daniel-christopher.png", alt: "Daniel Christopher’s portfolio" },
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Daniel Christopher`,
      description,
      url: path,
      type: "website",
      siteName: "Daniel Christopher",
      locale: "en_GB",
      images: [
        {
          url: image.url,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Daniel Christopher`,
      description,
      images: [image.url],
    },
  };
}
