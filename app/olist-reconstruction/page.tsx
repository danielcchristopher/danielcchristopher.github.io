import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";
import { OlistReconstructionDashboard } from "@/components/olist-reconstruction-dashboard";
import { EditorialTitle } from "@/components/editorial-title";

export const metadata: Metadata = {
  ...pageMetadata(
    "Olist ecommerce dashboard",
    "Interactive, aggregate only Olist ecommerce dashboard built in Python from the eight table cleaned workbook of an MSc team Power BI project.",
    "/olist-reconstruction/",
  ),
};

export default function OlistReconstructionPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="shell portfolio-page-intro analysis-intro">
          <NativeLink href="/work" className="portfolio-text-link">
            ← All projects
          </NativeLink>
          <div>
            <p className="portfolio-eyebrow">
              Interactive analysis · MSc team project data
            </p>
            <EditorialTitle text="Olist, revisited." />
            <p className="study-question">
              Explore orders and delivery timing.
            </p>
            <p className="study-result">
              I rebuilt the analysis in Python from our team’s cleaned workbook.
              Explore purchase periods, delivery timing, categories and customer
              geography below.
            </p>
            <p className="study-scope">
              <strong>My part.</strong> The original Power BI work was a team
              project. This Python rebuild and interactive dashboard are my
              independent follow on work.
            </p>
            <NativeLink className="portfolio-text-link" href="/powerbi">
              View the original MSc team project case study ↗
            </NativeLink>
          </div>
        </section>
        <section
          className="shell olist-reconstruction"
          aria-label="Interactive Olist analysis"
        >
          <OlistReconstructionDashboard />
        </section>
        <section className="shell olist-reconstruction__closing">
          <p className="overline">What I would test next</p>
          <h2>A dashboard points to a question; it does not answer why.</h2>
          <p>
            Add the payments table to compare delivery performance with order
            value; break the March 2018 delivery pattern down by seller, carrier
            and location; then test whether late deliveries lower review scores.
            The rates shown here are descriptive, so the next step is to find
            the drivers behind them.
          </p>
          <p>
            <a
              className="arrow-link"
              href="https://github.com/danielcchristopher/danielcchristopher.github.io/tree/main/projects/olist-reconstruction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspect the reproducible Python analysis and tests ↗
            </a>
          </p>
          <NativeLink className="arrow-link" href="/work">
            Back to selected work ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
