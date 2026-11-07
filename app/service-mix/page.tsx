import { pageMetadata } from "@/lib/page-metadata";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";
import { ProjectVisual } from "@/components/project-visual";
export const metadata = pageMetadata(
  "Restaurant service mix",
  "A reproducible comparison of lunch and dinner bills in a public restaurant sample, with the interpretation limits visible.",
  "/service-mix/",
);
export default function ServiceMixPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="shell study-header">
          <NativeLink href="/work" className="portfolio-text-link">
            ← All projects
          </NativeLink>
          <div className="study-opening">
            <div>
              <p className="portfolio-eyebrow">
                Independent public data analysis · Python
              </p>
              <h1>Restaurant service mix.</h1>
              <p className="study-question">
                How do lunch and dinner bills differ?
              </p>
              <p className="study-result">
                I compared 244 public example bills. The mean bill per cover was
                7.32 for lunch and 8.11 for dinner. These sample differences do
                not establish profitability or justify a staffing change.
              </p>
              <a className="portfolio-button" href="#evidence">
                Inspect the comparison ↓
              </a>
            </div>
            <ProjectVisual kind="service" priority />
          </div>
          <p className="study-scope">
            Public Plotly educational sample, not transactions collected by me.
            Currency, margins and achieved business outcomes are not
            established.
          </p>
        </section>
        <section className="shell portfolio-analysis-body" id="evidence">
          <h2>The comparison, with sample sizes.</h2>
          <div
            className="operational-table"
            tabIndex={0}
            role="region"
            aria-label="Restaurant service period results"
          >
            <table>
              <caption>
                Descriptive results rounded from the Python outputs · dataset
                units
              </caption>
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Dinner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Bills</th>
                  <td>68</td>
                  <td>176</td>
                </tr>
                <tr>
                  <th scope="row">Mean bill</th>
                  <td>17.17</td>
                  <td>20.80</td>
                </tr>
                <tr>
                  <th scope="row">Mean bill per cover</th>
                  <td>7.32</td>
                  <td>8.11</td>
                </tr>
                <tr>
                  <th scope="row">Median tip rate</th>
                  <td>15.4%</td>
                  <td>15.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <details className="portfolio-disclosure" id="approach">
            <summary>
              <span>
                <strong>Method and reproducible code</strong>
                <small>Validate, derive, compare and export</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>
                The Python script checks completeness, expected columns and
                plausible values, calculates bill per cover and tip rate, and
                exports period level results and a chart.
              </p>
              <a
                className="portfolio-text-link"
                href="https://github.com/danielcchristopher/danielcchristopher.github.io/tree/main/projects/restaurant-service-analysis"
              >
                Inspect the code and reproduction steps ↗
              </a>
            </div>
          </details>
          <section className="study-section" id="implications">
            <h2>What an operator would need next.</h2>
            <p>
              Representative hourly orders, cover counts, contribution margin
              and labour costs over multiple weeks would be needed before
              adjusting staffing or offers. This sample is small and unbalanced,
              with no known timestamps, staffing allocation or profit
              information.
            </p>
          </section>
          <NativeLink href="/work" className="portfolio-text-link">
            Explore another project ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
