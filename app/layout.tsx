import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteEffects } from "@/components/site-effects";
import { publicPath } from "@/lib/paths";
import "./globals.css";
import "./bcu.css";
import "./visual-polish.css";
import "./layout-refinement.css";
import "./editorial-type.css";
import "./type-and-layout-fixes.css";
import "./ai-workflow.css";
import "./operational-projects.css";
import "./portfolio.css";

const grotesk = localFont({
  src: [
    {
      path: "../public/fonts/space-grotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-grotesk-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
  display: "swap",
});
const newsreader = localFont({
  src: "../public/fonts/newsreader-italic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-editorial",
  display: "swap",
  preload: false,
});

const siteUrl = "https://danielcchristopher.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Christopher | Portfolio",
    template: "%s | Daniel Christopher",
  },
  description:
    "Digital builds, marketing ideas, research and analysis by Daniel Christopher. Projects, experiments and practical work.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: publicPath("/favicon.svg"),
  },
  openGraph: {
    title: "Daniel Christopher | Portfolio",
    description:
      "Digital builds, marketing ideas, research and analysis by Daniel Christopher. Projects, experiments and practical work.",
    type: "website",
    url: siteUrl,
    siteName: "Daniel Christopher",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/og-daniel-christopher.png`,
        width: 1200,
        height: 630,
        alt: "Daniel Christopher’s portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Christopher | Portfolio",
    description:
      "Digital builds, marketing ideas, research and analysis by Daniel Christopher. Projects, experiments and practical work.",
    images: [`${siteUrl}/og-daniel-christopher.png`],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Christopher",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/daniel-christopher-3a42a0254"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressCountry: "GB",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Manchester Metropolitan University",
    },
    { "@type": "CollegeOrUniversity", name: "Birmingham City University" },
  ],
  knowsLanguage: ["en", "de"],
  knowsAbout: [
    "SQL",
    "Power BI",
    "DAX",
    "Excel",
    "SPSS",
    "SAS Enterprise Miner",
    "Regression analysis",
    "Credit risk",
    "Customer analytics",
    "Digital marketing",
    "Content strategy",
    "Web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="portfolio-site">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
