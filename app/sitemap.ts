import { operationalProjects } from '@/lib/operational-projects';
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://danielcchristopher.github.io";

const routes = [
  "",
  "/work",
  "/bcu",
  "/work/loan-affordability",
  "/work/decision-intelligence",
  "/work/customer-intelligence",
  "/work/process-redesign",
  "/work/predictive-analytics",
  "/work/ecommerce-bi",
  "/dissertation",
  "/profile",
  "/contact",
  "/site-build",
  "/ai-workflow",
  "/service-mix",
  "/olist-reconstruction",
  ...operationalProjects.map(project => `/projects/${project.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: new Date(route === "" || route === "/work" || route.startsWith("/projects/") ? "2026-11-07" : "2026-09-30"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}
