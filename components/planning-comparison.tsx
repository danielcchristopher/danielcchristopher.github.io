"use client";
import { useState } from "react";
const approaches = [
  {
    label: "Recorded order",
    lanes: [
      ["A", "C"],
      ["B", "D"],
    ],
    meaning: "Start with the recorded sequence for each technician.",
  },
  {
    label: "Resequenced",
    lanes: [
      ["C", "A"],
      ["D", "B"],
    ],
    meaning: "Keep the assigned work and compare a different visit order.",
  },
  {
    label: "Reshared",
    lanes: [
      ["A", "B"],
      ["C", "D"],
    ],
    meaning:
      "Change which technician serves each visit, then consider the sequence.",
  },
];
export function PlanningComparison() {
  const [active, setActive] = useState(0);
  const plan = approaches[active];
  return (
    <section
      className="planning-comparison"
      aria-label="Illustrative route planning comparison"
    >
      <p className="portfolio-eyebrow">Try the comparison design</p>
      <div
        className="planning-choices"
        role="group"
        aria-label="Choose a planning approach"
      >
        {approaches.map((a, i) => (
          <button
            type="button"
            key={a.label}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {a.label}
          </button>
        ))}
      </div>
      <div className="planning-lanes">
        {plan.lanes.map((stops, i) => (
          <div className="planning-lane" key={i}>
            <span>Technician {i + 1}</span>
            <ol>
              {stops.map((stop, index) => (
                <li key={stop}>
                  <b>{stop}</b>
                  {index < stops.length - 1 && (
                    <span aria-hidden="true">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="planning-meaning" role="status">
        {plan.meaning}
      </p>
      <small>
        Illustrative visits only. This example shows assignment and sequence
        changes, not assessment records or calculated travel savings.
      </small>
    </section>
  );
}
