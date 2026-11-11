"use client";

import { useState } from "react";
import { NativeLink } from "@/components/native-link";
import { ProjectVisual } from "@/components/project-visual";
import type { ProjectVisualKind } from "@/lib/portfolio-projects";

const selections: {
  title: string;
  short: string;
  kind: ProjectVisualKind;
  field: string;
  question: string;
  note: string;
  tags: string[];
  href: string;
}[] = [
  {
    title: "Route & Margin",
    short: "Digital tool",
    kind: "route",
    field: "Built unprompted for a Business Analyst interview",
    question: "A vehicle fails. What happens to the deliveries?",
    note: "Explore a working dispatch simulation, from cover decision to customer contribution.",
    tags: ["Cost modelling", "Scenario analysis", "JavaScript"],
    href: "/projects/route-and-margin",
  },
  {
    title: "Mailchimp campaign concept",
    short: "Campaign idea",
    kind: "campaign",
    field: "Team marketing coursework",
    question: "Can a familiar game make a content idea easier to grasp?",
    note: "A Jenga inspired proposal. The outline is factual; original campaign assets are not published.",
    tags: ["Audience research", "Content strategy"],
    href: "/bcu#mailchimp",
  },
  {
    title: "Personalisation, trust & loyalty",
    short: "Customer research",
    kind: "trust",
    field: "Individual MSc dissertation",
    question: "Where does trust fit into customer loyalty?",
    note: "An original figure from my survey of 139 UK online shoppers. Associations, not causal effects.",
    tags: ["SPSS", "Survey design", "Statistics"],
    href: "/research-case",
  },
];

export function PortfolioCover() {
  const [selected, setSelected] = useState(0);
  const project = selections[selected];
  return (
    <section
      className="cover-showcase"
      aria-label="A look inside the portfolio"
    >
      <div className="cover-index">
        <h2>A look inside</h2>
        <div role="group" aria-label="Choose a featured project">
          {selections.map((item, index) => (
            <button
              key={item.kind}
              type="button"
              aria-pressed={index === selected}
              aria-controls="cover-project"
              onClick={() => setSelected(index)}
            >
              <span>0{index + 1}</span>
              <strong>{item.short}</strong>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <NativeLink href="/work">
          View the full collection <span aria-hidden="true">↗</span>
        </NativeLink>
      </div>
      <div id="cover-project" className="cover-project">
        <NativeLink
          href={project.href}
          className="cover-artifact"
          aria-label={`Explore ${project.title}`}
        >
          <div className="cover-artifact-inner" key={project.kind}>
            <ProjectVisual kind={project.kind} priority />
          </div>
        </NativeLink>
        <div
          className="cover-project-copy"
          aria-live="polite"
          aria-atomic="true"
        >
          <p>{project.field}</p>
          <h3>
            <NativeLink href={project.href}>{project.title}</NativeLink>
          </h3>
          <strong>{project.question}</strong>
          <p>{project.note}</p>
          <ul className="cover-tags" aria-label="Skills shown">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <NativeLink href={project.href} className="cover-explore">
            Explore project <span aria-hidden="true">↗</span>
          </NativeLink>
        </div>
      </div>
    </section>
  );
}
