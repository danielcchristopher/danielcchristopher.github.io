import Image from "next/image";
import { pageMetadata } from "@/lib/page-metadata";
import { publicPath } from "@/lib/paths";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";

export const metadata = pageMetadata(
  "CV",
  "Two page CV for Daniel Christopher: MSc Business Analytics (Predicted Distinction) and BA (Hons) Digital Marketing, 2:1, with analytics, digital marketing and digital build projects.",
  "/cv/",
  { url: "/og-cv.jpg", alt: "Daniel Christopher’s CV" },
);

const cvFile = "/Daniel%20Christopher%20CV.pdf";

export default function CvPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="cv-page">
        <section className="shell portfolio-page-intro">
          <p className="portfolio-eyebrow">Curriculum vitae</p>
          <h1>
            My <em>CV.</em>
          </h1>
          <p>
            MSc Business Analytics (Predicted Distinction) and BA (Hons)
            Digital Marketing, 2:1. Two pages covering my education, skills,
            projects and experience.
          </p>
          <div className="portfolio-inline-actions">
            <a
              href={publicPath(cvFile)}
              download="Daniel Christopher CV.pdf"
              className="portfolio-button"
            >
              Download CV ↓
            </a>
            <a
              href={publicPath(cvFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-text-link"
            >
              Open the PDF ↗
            </a>
            <NativeLink href="/work" className="portfolio-text-link">
              See the projects ↗
            </NativeLink>
          </div>
        </section>
        <section className="shell cv-pages" aria-label="CV pages">
          {[1, 2].map((page) => (
            <a
              key={page}
              href={publicPath(cvFile)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open page ${page} of the CV as a PDF`}
            >
              <Image
                src={publicPath(`/cv-pages/page-${page}.jpg`)}
                alt={`Page ${page} of Daniel Christopher’s CV`}
                width={1075}
                height={1521}
                sizes="(max-width: 760px) 100vw, 560px"
                priority={page === 1}
              />
            </a>
          ))}
        </section>
      </main>
      <PageFooter />
    </>
  );
}
