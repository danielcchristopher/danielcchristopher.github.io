import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NativeLink } from "@/components/native-link";
import { OperationalFlow } from "@/components/operational-projects";
import { ProjectVisual } from "@/components/project-visual";
import { PlanningComparison } from "@/components/planning-comparison";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getOperationalProject,
  operationalProjects,
} from "@/lib/operational-projects";
import { pageMetadata } from "@/lib/page-metadata";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return operationalProjects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getOperationalProject(slug);
  return project
    ? pageMetadata(project.name, project.summary, `/projects/${slug}/`)
    : {};
}
export default async function OperationalProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getOperationalProject(slug);
  if (!project) notFound();
  const isRoute = slug === "route-and-margin";
  const other = operationalProjects.find((item) => item.slug !== slug)!;
  const takeaways = isRoute
    ? [
        {
          icon: "01",
          title: "Recover the service",
          text: "Compare four plans against the same delivery target.",
        },
        {
          icon: "02",
          title: "Make the choice explainable",
          text: "See how the carrier quote changes the recommendation.",
        },
        {
          icon: "03",
          title: "Challenge the margin",
          text: "Compare two customer cost allocations with the same trip totals.",
        },
      ]
    : [
        {
          icon: "01",
          title: "Recorded visit order",
          text: "Reconstruct the starting point using recorded visit times.",
        },
        {
          icon: "02",
          title: "Better sequencing",
          text: "Compare another order with the same assigned work.",
        },
        {
          icon: "03",
          title: "Reshared work",
          text: "Explore what changes when visits move between technicians.",
        },
      ];
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="visual-project-page">
        <section className="visual-project-hero shell">
          <NativeLink className="operational-back" href="/work">
            ← All projects
          </NativeLink>
          <div className="visual-project-opening">
            <div>
              <p className="overline">
                {isRoute
                  ? "Independent dispatch prototype"
                  : "Independent planning prototype"}
              </p>
              <h1>{project.name}</h1>
              <p className="visual-project-lead">
                {isRoute
                  ? "One vehicle fault. Four dispatch plans. A decision you can explore."
                  : "Compare visit order and the distribution of work."}
              </p>
              <span className="operational-basis">{project.basis}</span>
              <div className="operational-hero-actions">
                {project.demo ? (
                  <NativeLink
                    className="portfolio-button"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore the live demo ↗
                  </NativeLink>
                ) : (
                  <a className="portfolio-button" href="#project-overview">
                    Explore the approach ↓
                  </a>
                )}
                <a className="portfolio-text-link" href="#project-evidence">
                  Methods & evidence ↓
                </a>
              </div>
            </div>
            <div className="visual-project-preview">
              {isRoute ? (
                <ProjectVisual kind="route" priority />
              ) : (
                <PlanningComparison />
              )}
            </div>
          </div>
          <p className="visual-project-scope">
            {isRoute
              ? "Independent demonstration for Kinaxia using simulated orders, costs and timings. No actual business results are claimed."
              : "Inspired by a Kwik Fit interview assessment. The original appointment records and technician details remain private. This is not an official Kwik Fit product."}
          </p>
        </section>
        <section
          className="visual-project-overview shell"
          id="project-overview"
          aria-labelledby="overview-title"
        >
          <p className="overline">The project at a glance</p>
          <h2 id="overview-title">
            {isRoute
              ? "What the tool lets you test."
              : "Three planning approaches. One fair comparison."}
          </h2>
          <div className="project-takeaways">
            {takeaways.map((t) => (
              <article key={t.icon}>
                <span aria-hidden="true">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
          {isRoute ? (
            <figure className="project-contribution-chart">
              <figcaption>
                <strong>At the default prices, the reserve leads.</strong>
                <span>
                  Simulated contribution after modelled costs · both plans 26 /
                  26 on time
                </span>
              </figcaption>
              <div className="contribution-bar-row">
                <span>Reserve vehicle</span>
                <div>
                  <i style={{ width: `${(640.93 / 700) * 100}%` }} />
                </div>
                <strong>£640.93</strong>
              </div>
              <div className="contribution-bar-row">
                <span>Spot carrier</span>
                <div>
                  <i style={{ width: `${(625.31 / 700) * 100}%` }} />
                </div>
                <strong>£625.31</strong>
              </div>
              <p>
                £15.62 advantage at a £320 carrier quote. The plans tie at
                £304.38.
              </p>
              <small>
                Bars start at £0. Reserve callout £135. These results change
                with assumptions.
              </small>
            </figure>
          ) : (
            <div className="project-planning-note">
              <span aria-hidden="true">◎</span>
              <div>
                <strong>A planning comparison, not an achieved saving.</strong>
                <p>
                  Route replay, territories and a technician view make the
                  alternatives inspectable. Real road times, stock and shift
                  constraints would still need validating.
                </p>
              </div>
            </div>
          )}
        </section>
        <section
          className="visual-project-evidence shell"
          id="project-evidence"
          aria-labelledby="details-title"
        >
          <p className="overline">Evidence when you want it</p>
          <h2 id="details-title">Open the detail that interests you.</h2>
          <details className="portfolio-disclosure" id="method">
            <summary>
              <span>
                <strong>How it works</strong>
                <small>The decision flow and modelling approach</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <OperationalFlow project={project} />
              <div className="operational-method-grid">
                {project.approach.map((step) => (
                  <article key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </details>
          <details className="portfolio-disclosure" id="evidence">
            <summary>
              <span>
                <strong>
                  {isRoute
                    ? "Results and checks"
                    : "What the comparison establishes"}
                </strong>
                <small>
                  {isRoute
                    ? "Default figures, customer allocation and reconciliation"
                    : "The outputs and their interpretation"}
                </small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>{project.finding}</p>
              {project.evidenceRows && (
                <div
                  className="operational-table"
                  tabIndex={0}
                  role="region"
                  aria-label="Simulated results at default assumptions"
                >
                  <table>
                    <caption>
                      Reserve callout £135 · carrier quote £320 · target 26 / 26
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Measure</th>
                        <th scope="col">Result</th>
                        <th scope="col">Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.evidenceRows.map((row) => (
                        <tr key={row.measure}>
                          <th scope="row">{row.measure}</th>
                          <td>{row.value}</td>
                          <td>{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <p>{project.validation}</p>
              <a className="portfolio-text-link" href={project.documentation}>
                Read the evidence notes ↗
              </a>
            </div>
          </details>
          <details className="portfolio-disclosure" id="limits">
            <summary>
              <span>
                <strong>Assumptions and limitations</strong>
                <small>
                  {isRoute
                    ? "Simulated contribution is not actual customer profitability"
                    : "Estimated journeys, hindsight and operating constraints"}
                </small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <ul className="operational-limits">
                {project.limitations.map((limit) => (
                  <li key={limit}>{limit}</li>
                ))}
              </ul>
            </div>
          </details>
          <details className="portfolio-disclosure" id="contribution">
            <summary>
              <span>
                <strong>My contribution and tools</strong>
                <small>Ownership, development and supporting technology</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>{project.contribution}</p>
              <ul className="operational-tools">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              {project.demo && (
                <NativeLink
                  className="portfolio-text-link"
                  href={project.demo}
                  download="RouteAndMargin.html"
                >
                  Download the standalone HTML ↓
                </NativeLink>
              )}
            </div>
          </details>
          <nav
            className="operational-more"
            aria-label="More independent projects"
          >
            <NativeLink href={`/projects/${other.slug}`}>
              <span>Explore another project</span>
              <strong>{other.name} ↗</strong>
            </NativeLink>
            <NativeLink href="/work">Back to all projects →</NativeLink>
          </nav>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
