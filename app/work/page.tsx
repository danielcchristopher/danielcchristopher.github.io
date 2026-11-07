import { pageMetadata } from '@/lib/page-metadata';
import { PageFooter } from '@/components/page-footer';
import { SiteHeader } from '@/components/site-header';
import { NativeLink } from '@/components/native-link';
import { ProjectGallery } from '@/components/project-gallery';
import { HeroField } from '@/components/hero-field';
import { InteractiveEvidenceLab } from '@/components/interactive-evidence-lab';
import { CaseQuickIndex } from '@/components/case-quick-index';

export const metadata = pageMetadata('Work', 'Digital builds, marketing concepts, customer research and analytical projects by Daniel Christopher. Explore the work and open the evidence when you need it.', '/work/');
export default function WorkPage() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />
    <main id="main-content" className="personal-portfolio">
      <section className="personal-work-hero"><HeroField motif="corner"/><div className="shell"><p className="personal-eyebrow">The project collection</p><h1>Different interests.<br/><em>One curious mind.</em></h1><p>Digital experiences, marketing ideas and evidence worth exploring.</p></div></section>
      <section className="personal-projects shell" id="projects" aria-labelledby="all-projects-title"><header className="personal-section-heading"><div><p className="overline">Explore by interest</p><h2 id="all-projects-title">Find your way into the work.</h2></div></header><ProjectGallery /></section>
      <section className="personal-details shell" aria-labelledby="more-evidence-title"><h2 id="more-evidence-title">Want to look closer?</h2><p>Original methods and ownership stay with each project. These views bring the academic evidence together.</p><details className="portfolio-disclosure" id="case-index"><summary><span><strong>Compare the six MSc cases</strong><small>Questions, findings and team contributions</small></span><span aria-hidden="true">+</span></summary><CaseQuickIndex /></details><details className="portfolio-disclosure" id="visual-methods"><summary><span><strong>Explore the analytical models</strong><small>Interactive diagrams and reported results</small></span><span aria-hidden="true">+</span></summary><InteractiveEvidenceLab /></details><details className="portfolio-disclosure"><summary><span><strong>Further writing</strong><small>Digital transformation and technology</small></span><span aria-hidden="true">+</span></summary><div className="personal-writing"><article id="shopify-transformation"><h3>Shopify digital transformation</h3><p>Individual coursework applying PESTLE, technochange and Kotter’s change model to platform growth and merchant capability.</p></article><article id="siemens-industry-4"><h3>Cyber physical systems at Siemens</h3><p>Individual coursework examining operations, workforce capability, cybersecurity and sustainability.</p></article><NativeLink href="/ai-workflow" className="personal-text-link">How I work with AI ↗</NativeLink></div></details></section>
    </main><PageFooter /></>;
}
