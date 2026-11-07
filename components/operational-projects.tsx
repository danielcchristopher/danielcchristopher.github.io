import { NativeLink } from '@/components/native-link';
import { operationalProjects, type OperationalProject } from '@/lib/operational-projects';

export function OperationalFlow({ project }: { project: OperationalProject }) {
  return (
    <figure className="operational-flow">
      <figcaption>{project.flowLabel} <span>Conceptual diagram</span></figcaption>
      <ol>
        {project.flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
      </ol>
    </figure>
  );
}

export function OperationalProjects() {
  return (
    <section className="operational-projects" aria-labelledby="operational-projects-title">
      <div className="shell">
        <div className="operational-heading">
          <div><p className="overline">Independent operational prototypes</p><h2 id="operational-projects-title">From an operating problem to an inspectable decision.</h2></div>
          <p>Two practical projects connecting planning, service and commercial evidence. Each explains its assumptions, ownership and data basis.</p>
        </div>
        <div className="operational-cards">
          {operationalProjects.map(project => (
            <article className="operational-card" key={project.slug} data-project={project.slug}>
              <p className="operational-context">{project.context}</p>
              <h3><NativeLink href={`/projects/${project.slug}`}>{project.name}</NativeLink></h3>
              <p>{project.summary}</p>
              <OperationalFlow project={project} />
              <small className="operational-basis">{project.basis}</small>
              <div className="operational-actions">
                <NativeLink className="arrow-link" href={`/projects/${project.slug}`}>Read the case study ↗</NativeLink>
                {project.demo && <NativeLink className="operational-demo-link" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Open Route and Margin demo in a new tab">Open demo ↗</NativeLink>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
