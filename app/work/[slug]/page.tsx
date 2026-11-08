import { EditorialTitle } from "@/components/editorial-title";
import { ModelExplorer } from "@/components/model-explorer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseEvidenceVisual } from "@/components/case-evidence-visual";
import { AffordabilitySimulator } from "@/components/affordability-simulator";
import { RecoveredProjectEvidence } from "@/components/recovered-project-evidence";
import { OriginalProjectFigures } from "@/components/original-project-figures";
import { CaseNavigator } from "@/components/case-navigator";
import { NativeLink } from "@/components/native-link";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
import { cases, getCase } from "@/lib/cases";
import { projectSummaries } from "@/lib/project-summaries";
import { casePath } from "@/lib/case-links";
import { pageMetadata } from "@/lib/page-metadata";
import { ProjectVisual } from "@/components/project-visual";
import type { ProjectVisualKind } from "@/lib/portfolio-projects";

const caseStories: Record<string, string[]> = {
  "loan-affordability": [
    "A ratio model needs careful interpretation.",
    "The model outcome was loan amount divided by income. Both variables also appeared among the predictors, so their large coefficients partly reflect how that outcome is constructed. Credit score and interest rate were not significant in this specification; that does not show that they are unimportant to credit risk.",
    "The judgement in the work",
    "We flagged implausible records before modelling, such as 100 years of work experience recorded for a 35 year old, and checked the diagnostics afterwards. Heteroscedasticity in the residuals meant individual coefficients needed careful reading, which is why I would use robust standard errors in the next iteration.",
  ],
  "decision-intelligence": [
    "A recommendation is only as useful as the assumptions behind it.",
    "A dashboard could describe the business, but the assignment also required a choice about location and store configuration. Our team connected data checking, margin scenarios and optimisation so the recommendation could be examined rather than simply accepted.",
    "The judgement in the work",
    "Testing margins from 60% to 70% made the assumptions visible. The value of the model was in exposing the decision logic, not in claiming that an assessed recommendation had already delivered a commercial result.",
  ],
  "customer-intelligence": [
    "The interesting part was what happened when trust entered the model.",
    "The question began with personalisation and loyalty. In the joint loyalty model, trust remained material while personalisation’s direct coefficient was small and not statistically significant. That changed the interpretation from a simple association to a more specific question about the role of trust.",
    "Why the interpretation matters",
    "I used mediation analysis to examine the relationship, but the survey cannot establish causation. The practical next step is to test changes experimentally and observe behaviour, rather than assume that more personalisation will create loyalty.",
  ],
  "process-redesign": [
    "A diagram had to become a database that could answer questions.",
    "Our team moved from data flow analysis to entity relationships and a proposed SQL prototype. The flat file had one table, no enforced keys and a single scan date, so the new schema separates location, delivery, status, reviews, promotions and scans, each with its own history.",
    "Where the work could be stronger",
    "The group report identifies substantial missing merchant fields. Adding reproducible test cases would make the prototype checkable by another analyst.",
  ],
  "ecommerce-bi": [
    "The quality of the joined data affects the quality of the decision.",
    "Our team prepared eight linked source tables covering 98,582 ecommerce orders, cleaning problematic values and relationships before creating Power BI reporting on delivery, sellers and customer satisfaction.",
    "What the reporting depended on",
    "Accurate cross table KPIs depended on the preparation work. Once keys, dates and category names were consistent, delivery, seller and review measures could be compared across tables with confidence. I later rebuilt the analysis in Python as an interactive dashboard so anyone can explore the cleaned data.",
  ],
  "predictive-analytics": [
    "The lowest error rate was the start of a decision, not the end.",
    "I compared 3 classifiers on the same gym membership dataset. The neural network had the lowest validation misclassification at 4.42%, but choosing a retention action requires more than ranking models by a single metric.",
    "The judgement beyond the score",
    "A missed leaver and an unnecessary retention offer have different costs. Test set precision, recall and business cost thresholds would need to be examined before turning a churn score into an operational decision.",
  ],
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCase(slug);

  if (!project) return {};

  return pageMetadata(project.name, project.lead, `/work/${slug}/`);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) notFound();
  const position = cases.findIndex((item) => item.slug === slug);
  const previousProject = cases[(position - 1 + cases.length) % cases.length];
  const nextProject = cases[(position + 1) % cases.length];
  const visual: Record<string, ProjectVisualKind> = {
    "loan-affordability": "loans",
    "customer-intelligence": "trust",
    "predictive-analytics": "churn",
    "process-redesign": "data",
    "ecommerce-bi": "powerbi",
    "decision-intelligence": "decision",
  };
  const summary = projectSummaries[slug];
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="study-page">
        <section className="shell study-header">
          <NativeLink href="/work" className="portfolio-text-link">
            ← All projects
          </NativeLink>
          <div className="study-opening">
            <div>
              <p className="portfolio-eyebrow">{project.label}</p>
              <EditorialTitle text={project.name} />
              <p className="study-question">{summary.headline}</p>
              <p className="study-result">{summary.result}</p>
              <a className="portfolio-button" href="#evidence">
                Results and evidence ↓
              </a>
            </div>
            <ProjectVisual kind={visual[slug]} priority />
          </div>
          <dl className="study-facts">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dd>{fact.value}</dd>
                <dt>{fact.label}</dt>
              </div>
            ))}
          </dl>
          <p className="study-scope">
            {slug === "customer-intelligence"
              ? "Individual dissertation. Survey associations do not establish cause and effect."
              : slug === "loan-affordability"
                ? "Team coursework on public records. The outcome is a loan to income ratio, not a validated lending risk prediction."
                : slug === "predictive-analytics"
                  ? "Individual coursework. Reported validation results do not establish deployment performance."
                  : "Team coursework. Proposed models and reporting are not claimed as achieved commercial results."}
          </p>
        </section>
        <div className="shell study-layout">
          <CaseNavigator />
          <div className="study-body">
            <section className="study-section" id="question">
              <p className="portfolio-eyebrow">The brief</p>
              <h2>{summary.headline}</h2>
              <p>{project.question}</p>
              <details className="portfolio-disclosure">
                <summary>
                  <span>
                    <strong>Context and interpretation</strong>
                    <small>The reasoning behind the work</small>
                  </span>
                  <span aria-hidden="true">+</span>
                </summary>
                <div>
                  <h3>{caseStories[slug][0]}</h3>
                  <p>{caseStories[slug][1]}</p>
                  <h3>{caseStories[slug][2]}</h3>
                  <p>{caseStories[slug][3]}</p>
                </div>
              </details>
            </section>
            <details className="portfolio-disclosure" id="approach">
              <summary>
                <span>
                  <strong>Approach and method</strong>
                  <small>Data preparation, analysis and checks</small>
                </span>
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <p>{project.lead}</p>
                <ol className="study-method">
                  {project.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </details>
            <details className="portfolio-disclosure" id="evidence">
              <summary>
                <span>
                  <strong>Results and original evidence</strong>
                  <small>
                    Reported findings, source figures and interactive tools
                  </small>
                </span>
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <CaseEvidenceVisual slug={slug} />
                <p>{project.evidence}</p>
                {slug === "loan-affordability" && <AffordabilitySimulator />}
                {slug === "ecommerce-bi" && (
                  <NativeLink
                    href="/olist-reconstruction"
                    className="portfolio-button"
                  >
                    Explore the independent dashboard rebuild ↗
                  </NativeLink>
                )}
                <RecoveredProjectEvidence slug={slug} />
                <OriginalProjectFigures slug={slug} />
                {slug === "customer-intelligence" && (
                  <a
                    className="portfolio-text-link"
                    href="https://github.com/danielcchristopher/danielcchristopher.github.io/blob/main/docs/Dissertation%20Research%20Brief.md"
                  >
                    Read the dissertation brief ↗
                  </a>
                )}
                {slug === "process-redesign" && (
                  <a
                    className="portfolio-text-link"
                    href="https://github.com/danielcchristopher/danielcchristopher.github.io/blob/main/docs/SQL%20Proposed%20Data%20Dictionary.md"
                  >
                    Inspect the proposed data dictionary ↗
                  </a>
                )}
                {slug !== "ecommerce-bi" && slug !== "loan-affordability" && (
                  <details className="portfolio-disclosure">
                    <summary>
                      <span>
                        <strong>Explore the model in 3D</strong>
                        <small>
                          Conceptual structure with explanatory labels
                        </small>
                      </span>
                      <span aria-hidden="true">+</span>
                    </summary>
                    <div>
                      <ModelExplorer
                        initialMode={
                          slug === "customer-intelligence"
                            ? "trust"
                            : slug === "predictive-analytics"
                              ? "network"
                              : slug === "process-redesign"
                                ? "data"
                                : "decision"
                        }
                      />
                    </div>
                  </details>
                )}
              </div>
            </details>
            <section className="study-section" id="implications">
              <p className="portfolio-eyebrow">Proposed next steps</p>
              <h2>What the findings could inform.</h2>
              <ul className="study-implications">
                {project.implications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {slug === "loan-affordability" && (
                <p className="study-scope">
                  These coursework suggestions are not validated lending rules.
                  Additional affordability evidence and an appropriate risk
                  outcome would be needed.
                </p>
              )}
            </section>
            <section className="study-section" id="limits">
              <p className="portfolio-eyebrow">Scope</p>
              <h2>How far the evidence goes.</h2>
              <p>{project.limitations}</p>
            </section>
            <details className="portfolio-disclosure" id="next-iteration">
              <summary>
                <span>
                  <strong>What I would improve next</strong>
                  <small>Further validation and development</small>
                </span>
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <p>{project.improvement}</p>
              </div>
            </details>
            <details className="portfolio-disclosure" id="contribution">
              <summary>
                <span>
                  <strong>My contribution and tools</strong>
                  <small>Ownership and supporting technology</small>
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
              </div>
            </details>
          </div>
        </div>
        <nav className="shell study-pagination" aria-label="More projects">
          <NativeLink href={casePath(previousProject.slug)}>
            <span>← Previous project</span>
            <strong>{previousProject.name}</strong>
          </NativeLink>
          <NativeLink href={casePath(nextProject.slug)}>
            <span>Next project →</span>
            <strong>{nextProject.name}</strong>
          </NativeLink>
        </nav>
      </main>
      <PageFooter />
    </>
  );
}
