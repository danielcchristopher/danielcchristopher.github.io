/** Shared copy for the analytical model visuals (3D explorer and static homepage previews). */
export type Mode = "trust" | "network" | "decision" | "data";
export const modelInfo: Record<
  Mode,
  { title: string; path: string; caption: string; detail: string }
> = {
  trust: {
    title: "Trust & loyalty",
    path: "customer-intelligence",
    caption: "Personalisation → Trust → Loyalty",
    detail:
      "Personalisation → trust: B = .575. Trust → loyalty: B = .526. Statistical associations, not proof of causation. Geometry does not encode effect size.",
  },
  network: {
    title: "Neural network",
    path: "predictive-analytics",
    caption: "Customer attributes → Hidden layer → Churn score",
    detail:
      "Conceptual architecture only. Node counts and connections are illustrative, not the exact trained SAS network or its weights.",
  },
  decision: {
    title: "Decision pathways",
    path: "decision-intelligence",
    caption: "Assumptions → Scenarios → Decision",
    detail:
      "Conceptual decision workflow from the team project. Three branches illustrate comparison, not the actual scenario count, calculated values or a proven optimal outcome.",
  },
  data: {
    title: "Proposed database schema",
    path: "process-redesign",
    caption: "Location links to Delivery, Status, Reviews, Promotion and Scan",
    detail:
      "The six table names and Location links follow the proposed coursework ERD. Spatial layout is illustrative. This is a design proposal, not a production database.",
  },
};
