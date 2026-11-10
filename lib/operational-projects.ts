export type OperationalProject = {
  slug: string;
  name: string;
  context: string;
  basis: string;
  summary: string;
  question: string;
  flowLabel: string;
  flow: string[];
  facts: { value: string; label: string }[];
  approach: { title: string; detail: string }[];
  finding: string;
  evidenceRows?: { measure: string; value: string; meaning: string }[];
  validation: string;
  limitations: string[];
  contribution: string;
  tools: string[];
  documentation: string;
  demo?: string;
};

export const operationalProjects: OperationalProject[] = [
  {
    slug: 'route-and-margin',
    name: 'Route & Margin',
    context: 'Independent case study for Kinaxia',
    basis: 'Entirely simulated data',
    summary: 'A dispatch and contribution demonstration that connects a vehicle fault, the cover decision, delivery recovery and the customer outcome.',
    question: 'Which cover plan meets the service target while preserving the strongest contribution?',
    flowLabel: 'Decision flow',
    flow: ['Vehicle fault', 'Cover decision', 'Delivery recovery', 'Contribution'],
    facts: [
      { value: '26', label: 'Simulated deliveries' },
      { value: '4', label: 'Dispatch plans compared' },
      { value: '2', label: 'Cost allocation assumptions' },
    ],
    approach: [
      { title: 'Frame the operating problem', detail: 'A chilled vehicle fault leaves deliveries needing cover. Compare the original dispatch, the existing fleet, a reserve vehicle and a spot carrier against the same delivery book.' },
      { title: 'Make the decision conditional', detail: 'First check the chosen on time target, then rank eligible plans by contribution. Expose the carrier crossover quote, contribution ties and any service shortfall.' },
      { title: 'Trace the service recovery', detail: 'Follow a selected vehicle and delivery through the geographic map, schematic and run sheet. Compare the original and revised service time before opening the customer evidence.' },
      { title: 'Challenge the customer result', detail: 'Allocate each trip by pallets or equally per served delivery, preserving its total cost to the penny. Check whether a negative contribution persists before discussing tariff or operating changes.' },
    ],
    finding: 'At the default assumptions, the reserve serves all 26 deliveries on time and gives the highest eligible shift contribution. A lower carrier quote can change that recommendation. Cedar remains below zero under both modelled allocation methods at the default reserve price.',
    evidenceRows: [
      { measure: 'Reserve plan contribution', value: '£640.93', meaning: '26 of 26 deliveries on time' },
      { measure: 'Carrier plan contribution', value: '£625.31', meaning: 'At a £320 transport quote' },
      { measure: 'Carrier quote at the tie', value: '£304.38', meaning: 'Matches the reserve at its £135 callout' },
      { measure: 'Cedar allocated by pallets', value: 'Loss of £51.26', meaning: 'Default reserve plan' },
      { measure: 'Cedar allocated by delivery', value: 'Loss of £75.24', meaning: 'Same trip totals, alternative allocation' },
    ],
    validation: 'A reproducible Node check covers 1,080 trip reconciliation cases across three scenarios, five price pairs, four plans and both allocations. It also checks account totals, eligibility, service shortfalls, ties and crossover prices. Internal consistency does not establish operational accuracy.',
    limitations: [
      'Orders, costs and timings are simulated. This is independent work, with no actual Kinaxia operational data or customer profitability findings.',
      'Contribution excludes overheads. Two alternative cost allocations test assumptions; they do not prove actual account profitability.',
      'Regional geography, town centres and replay are illustrative. Optional street traces use a car profile, so they are not verified HGV directions or live tracking.',
      'Real use would require agreed Finance definitions, reconciled invoices and delivery evidence, and additional operating constraints such as driver breaks.',
    ],
    contribution: 'I framed the operational and commercial questions, developed the demonstration with AI assistance, and directed repeated refinement of the interface, assumptions and verification. The work is presented as a decision prototype rather than an achieved business result.',
    tools: ['JavaScript', 'Three.js', 'Leaflet', 'Scenario modelling', 'Cost allocation'],
    documentation: 'https://github.com/danielcchristopher/danielcchristopher.github.io/tree/main/projects/route-and-margin',
    demo: '/demos/RouteAndMargin.html',
  },
  {
    slug: 'mobile-route-planner',
    name: 'Mobile Route Planner',
    context: 'Independent prototype inspired by a Kwik Fit assessment',
    basis: 'Interactive prototype · district level locations',
    summary: 'A geographic planning prototype comparing recorded visit order, better sequencing and reshared work, with a technician view and explicit modelling limits.',
    question: 'Could a different visit order or distribution of work reduce estimated driving while respecting appointment constraints?',
    flowLabel: 'Comparison design',
    flow: ['Recorded order', 'Better sequencing', 'Reshared work'],
    facts: [
      { value: '3', label: 'Planning approaches compared' },
      { value: 'Time slots', label: 'Appointment constraints considered' },
      { value: 'Estimate', label: 'Distance and time basis' },
    ],
    approach: [
      { title: 'Reconstruct the recorded sequence', detail: 'Use actual visit start times to establish the recorded order for each technician. Keep that sequence distinct from measured road distance or GPS tracking.' },
      { title: 'Compare alternatives fairly', detail: 'Compare a better order for the same technician with an alternative that redistributes work between the available technicians. Make the common distance rules and appointment assumptions visible.' },
      { title: 'Make the geography inspectable', detail: 'Connect postcode districts, territories, visit sequences and a day replay. A separate technician view explains the next stop, booked slot and proposed checks.' },
      { title: 'Keep the planner in the decision', detail: 'Use the comparisons to identify questions for planners, including stock checks, workload distribution and territory coverage. Treat modelled reductions as hypotheses for a trial.' },
    ],
    finding: 'The prototype makes the difference between visit sequencing and workload redistribution inspectable. Its outputs are estimated comparisons under shared assumptions. They are not verified reductions in road mileage, labour cost or required headcount.',
    validation: 'The public HTML makes the comparison inspectable using technician labels and postcode districts, without customer names or full addresses. Operational validation would require real road times, stock availability, shift rules and a trial with planners.',
    limitations: [
      'The public demo uses technician labels and postcode districts. Customer names and full addresses are not included. This is an independent prototype, not an official Kwik Fit product or a client commission.',
      'Driving uses straight line distances multiplied by 1.3, a 30 km/h assumption and planned job durations. It does not establish real road distances, traffic or collection journeys.',
      'The alternatives see the whole day in advance. Their estimates therefore have hindsight that an operational planner would not have as jobs arrive.',
      'The prototype does not fully model stock, breaks, skills or technician availability. An apparently free technician is not evidence of a headcount saving.',
    ],
    contribution: 'I developed an independent follow on prototype connecting route comparison, geographic exploration and a technician view. This public write up focuses on the decision design and analytical judgement, with technician labels and district level locations in the public demo.',
    tools: ['Google OR Tools', 'MapLibre GL', 'deck.gl', 'JavaScript', 'Route comparison'],
    documentation: 'https://github.com/danielcchristopher/danielcchristopher.github.io/tree/main/projects/mobile-route-planner',
    demo: '/demos/MobileRoutePlanner.html',
  },
];

export function getOperationalProject(slug: string) {
  return operationalProjects.find(project => project.slug === slug);
}
