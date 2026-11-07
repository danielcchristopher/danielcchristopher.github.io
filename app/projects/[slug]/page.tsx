import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HeroField } from '@/components/hero-field';
import { NativeLink } from '@/components/native-link';
import { OperationalFlow } from '@/components/operational-projects';
import { PageFooter } from '@/components/page-footer';
import { SiteHeader } from '@/components/site-header';
import { getOperationalProject, operationalProjects } from '@/lib/operational-projects';
import { pageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return operationalProjects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getOperationalProject(slug);
  return project ? pageMetadata(project.name, project.summary, `/projects/${slug}/`) : {};
}

export default async function OperationalProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getOperationalProject(slug);
  if (!project) notFound();
  const other = operationalProjects.find(item => item.slug !== slug)!;
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero operational-hero">
          <HeroField motif={slug === 'route-and-margin' ? 'pathway' : 'branches'} />
          <div className="shell">
            <NativeLink className="operational-back" href="/work">← All work</NativeLink>
            <small>{project.context}</small>
            <h1>{project.name}</h1>
            <p>{project.question}</p>
            <span className="operational-basis">{project.basis}</span>
            <div className="operational-hero-actions">
              {project.demo && <NativeLink className="operational-primary" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Open the interactive Route and Margin demo in a new tab">Open the interactive demo ↗</NativeLink>}
              <a className="arrow-link" href="#method">Explore the method ↓</a>
            </div>
          </div>
        </section>
        <section className="case-facts" aria-label="Project at a glance">
          <dl className="shell operational-facts">
            {project.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>
        </section>
        <div className="shell operational-body">
          <section className="operational-section" id="method" aria-labelledby="method-title">
            <p className="overline">01 · Decision design</p>
            <h2 id="method-title">Make the alternatives and assumptions visible.</h2>
            <p className="operational-intro">{project.summary}</p>
            <OperationalFlow project={project} />
            <div className="operational-method-grid">
              {project.approach.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}
            </div>
          </section>
          <section className="operational-section" id="evidence" aria-labelledby="evidence-title">
            <p className="overline">02 · Evidence and interpretation</p>
            <h2 id="evidence-title">What the prototype establishes.</h2>
            <p className="operational-finding">{project.finding}</p>
            {project.evidenceRows && <div className="operational-table" tabIndex={0} role="region" aria-label="Simulated results at default assumptions">
              <table><caption>Simulated default outputs. Reserve callout £135, carrier quote £320, service target 26 of 26.</caption><thead><tr><th scope="col">Measure</th><th scope="col">Modelled result</th><th scope="col">Basis</th></tr></thead><tbody>
                {project.evidenceRows.map(row => <tr key={row.measure}><th scope="row">{row.measure}</th><td>{row.value}</td><td>{row.meaning}</td></tr>)}
              </tbody></table>
            </div>}
            <p>{project.validation}</p>
            <div className="operational-actions"><a className="arrow-link" href={project.documentation}>Read the method and evidence notes ↗</a>
              {project.demo && <NativeLink className="arrow-link" href={project.demo} download="RouteAndMargin.html">Download the standalone HTML ↓</NativeLink>}
            </div>
          </section>
          <section className="operational-section" id="limits" aria-labelledby="limits-title">
            <p className="overline">03 · Scope and limitations</p>
            <h2 id="limits-title">What would need validating in practice.</h2>
            <ul className="operational-limits">{project.limitations.map(limit => <li key={limit}>{limit}</li>)}</ul>
          </section>
          <section className="operational-section" id="contribution" aria-labelledby="contribution-title">
            <p className="overline">04 · Ownership and tools</p>
            <h2 id="contribution-title">My contribution.</h2>
            <p>{project.contribution}</p>
            <ul className="operational-tools" aria-label="Tools and methods">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </section>
          <nav className="operational-more" aria-label="More independent projects"><NativeLink href={`/projects/${other.slug}`}><span>Explore the other prototype</span><strong>{other.name} ↗</strong></NativeLink><NativeLink href="/work">Return to all work →</NativeLink></nav>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
