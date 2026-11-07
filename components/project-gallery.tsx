"use client";
import { useSyncExternalStore } from "react";
import { NativeLink } from "@/components/native-link";
import { ProjectVisual } from "@/components/project-visual";
import { PortfolioIcon } from "@/components/portfolio-icon";
import {
  portfolioProjects,
  type PortfolioProject,
} from "@/lib/portfolio-projects";

const categories = [
  { key: "", label: "All projects" },
  { key: "digital", label: "Digital builds" },
  { key: "marketing", label: "Marketing" },
  { key: "research", label: "Research & analysis" },
] as const;
const categoryNames: Record<string, string> = {
  digital: "Digital builds",
  marketing: "Marketing",
  research: "Research and analysis",
};
const subscribe = (callback: () => void) => {
  window.addEventListener("popstate", callback);
  window.addEventListener("portfolio:browse", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("portfolio:browse", callback);
  };
};
const snapshot = () => window.location.search;
function updateBrowse(key: "interest" | "q", value: string) {
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  url.hash = "projects";
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event("portfolio:browse"));
}
export function ProjectTile({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  return (
    <article className="project-tile" data-visual={project.visual}>
      <NativeLink
        href={project.href}
        className="project-tile-link"
        aria-label={`Explore ${project.title}`}
      >
        <div className="project-tile-heading">
          <span className="project-kind">{project.category}</span>
          <h3>
            {project.title}
            <span aria-hidden="true">↗</span>
          </h3>
        </div>
        <ProjectVisual kind={project.visual} priority={priority} />
        <div className="project-tile-copy">
          <p>{project.summary}</p>
          <small>{project.basis}</small>
        </div>
      </NativeLink>
    </article>
  );
}
export function ProjectGallery({ featured = false }: { featured?: boolean }) {
  const search = useSyncExternalStore(subscribe, snapshot, () => "");
  const params = new URLSearchParams(search);
  const selected = featured ? "" : (params.get("interest") ?? "");
  const query = featured ? "" : (params.get("q") ?? "");
  const projects = portfolioProjects.filter(
    (p) =>
      (!featured ||
        ["mailchimp", "trust", "planner", "olist"].includes(p.id)) &&
      (!categoryNames[selected] || p.category === categoryNames[selected]) &&
      `${p.title} ${p.summary} ${p.basis}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  function reset() {
    const url = new URL(location.href);
    url.searchParams.delete("q");
    url.searchParams.delete("interest");
    history.replaceState(history.state, "", url);
    window.dispatchEvent(new Event("portfolio:browse"));
  }
  return (
    <>
      {!featured && (
        <>
          <div className="project-controls">
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects by interest"
            >
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.key}
                  aria-pressed={
                    selected === c.key ||
                    (!categoryNames[selected] && c.key === "")
                  }
                  onClick={() => updateBrowse("interest", c.key)}
                >
                  {c.key && (
                    <PortfolioIcon
                      kind={
                        c.key === "digital"
                          ? "build"
                          : c.key === "marketing"
                            ? "marketing"
                            : "research"
                      }
                    />
                  )}{" "}
                  {c.label}
                </button>
              ))}
            </div>
            <label className="project-search">
              <span>Find a project</span>
              <input
                type="search"
                aria-label="Find a project"
                value={query}
                onChange={(e) => updateBrowse("q", e.target.value)}
                placeholder="Search a project or topic"
              />
            </label>
          </div>
          <p className="project-result-count" role="status">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
            {categoryNames[selected] ? ` · ${categoryNames[selected]}` : ""}
          </p>
        </>
      )}
      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectTile key={p.id} project={p} priority={i === 0} />
        ))}
      </div>
      {!projects.length && (
        <div className="project-empty">
          <p>No projects match that search.</p>
          <button type="button" onClick={reset}>
            Show all projects
          </button>
        </div>
      )}
    </>
  );
}
