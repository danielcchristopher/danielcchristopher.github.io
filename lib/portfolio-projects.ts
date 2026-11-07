export type ProjectCategory =
  | "Digital builds"
  | "Marketing"
  | "Research and analysis";
export type ProjectVisualKind =
  | "route"
  | "planner"
  | "campaign"
  | "web"
  | "trust"
  | "loans"
  | "nature"
  | "research"
  | "data"
  | "churn"
  | "olist"
  | "service"
  | "powerbi"
  | "decision"
  | "peaky";
export type PortfolioProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  basis: string;
  href: string;
  visual: ProjectVisualKind;
  featured?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "route",
    title: "Route & Margin",
    category: "Digital builds",
    summary:
      "From a vehicle fault to recovered deliveries and customer contribution.",
    basis: "Independent prototype · simulated data",
    href: "/projects/route-and-margin",
    visual: "route",
    featured: true,
  },
  {
    id: "mailchimp",
    title: "Mailchimp campaign concept",
    category: "Marketing",
    summary:
      "Audience research translated into a Jenga inspired content campaign.",
    basis: "Team coursework · proposed campaign",
    href: "/bcu#mailchimp",
    visual: "campaign",
    featured: true,
  },
  {
    id: "planner",
    title: "Mobile Route Planner",
    category: "Digital builds",
    summary:
      "Compare visit sequences, territories and the distribution of work.",
    basis: "Independent prototype · private assessment data",
    href: "/projects/mobile-route-planner",
    visual: "planner",
    featured: true,
  },
  {
    id: "portfolio",
    title: "This portfolio",
    category: "Digital builds",
    summary: "The website you’re exploring, built with Next.js and TypeScript.",
    basis: "Independent website",
    href: "/site-build",
    visual: "web",
    featured: true,
  },
  {
    id: "trust",
    title: "Personalisation, trust & loyalty",
    category: "Research and analysis",
    summary: "Exploring the role of trust in UK online shopping.",
    basis: "Individual MSc dissertation · 139 responses",
    href: "/research-case",
    visual: "trust",
    featured: true,
  },
  {
    id: "loan",
    title: "Loan affordability",
    category: "Research and analysis",
    summary:
      "Examining a loan to income model and the limits of its interpretation.",
    basis: "Four person MSc team · public data",
    href: "/credit-risk",
    visual: "loans",
    featured: true,
  },
  {
    id: "flock",
    title: "Flock Together",
    category: "Marketing",
    summary: "Research into nature, community and audience needs.",
    basis: "Team coursework · credited research role",
    href: "/bcu#flock-together",
    visual: "nature",
  },
  {
    id: "nandos",
    title: "Nando’s customer research",
    category: "Marketing",
    summary: "Combining observation, surveys and secondary research.",
    basis: "Academic research coursework",
    href: "/bcu#nandos",
    visual: "research",
  },
  {
    id: "peaky",
    title: "Peaky Blinders campaign",
    category: "Marketing",
    summary:
      "Audience insight and a digital audit shaping a proposed campaign.",
    basis: "Four person team · campaign proposal",
    href: "/bcu#peaky-blinders",
    visual: "peaky",
  },
  {
    id: "olist",
    title: "Olist, revisited",
    category: "Research and analysis",
    summary: "Explore orders, delivery timing and product categories.",
    basis: "Independent follow on · cleaned team data",
    href: "/olist-reconstruction",
    visual: "olist",
  },
  {
    id: "sql",
    title: "Data management",
    category: "Research and analysis",
    summary: "From missing data to a proposed relational database.",
    basis: "Four person MSc team · design prototype",
    href: "/sql",
    visual: "data",
  },
  {
    id: "churn",
    title: "Gym membership churn",
    category: "Research and analysis",
    summary: "Comparing three models before choosing a retention approach.",
    basis: "Individual MSc coursework · validation results",
    href: "/churn",
    visual: "churn",
  },
  {
    id: "decisions",
    title: "Decision modelling",
    category: "Research and analysis",
    summary:
      "Testing margins and store configurations before recommending a choice.",
    basis: "Four person MSc team · assessed model",
    href: "/decisions",
    visual: "decision",
  },
  {
    id: "powerbi",
    title: "Ecommerce reporting",
    category: "Research and analysis",
    summary: "Power BI reporting across delivery, sellers and satisfaction.",
    basis: "Four person MSc team · Olist data",
    href: "/powerbi",
    visual: "powerbi",
  },
  {
    id: "service",
    title: "Restaurant service mix",
    category: "Research and analysis",
    summary: "A reproducible Python exploration of example restaurant bills.",
    basis: "Independent analysis · public sample data",
    href: "/service-mix",
    visual: "service",
  },
];
