import Image from 'next/image';
import { PortfolioIcon } from '@/components/portfolio-icon';
import { ProjectGallery } from '@/components/project-gallery';
import { HeroField } from '@/components/hero-field';
import { NativeLink } from '@/components/native-link';
import { SiteHeader } from '@/components/site-header';
import { PageFooter } from '@/components/page-footer';
import { publicPath } from '@/lib/paths';

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />
    <main id="main-content" className="personal-portfolio">
      <section className="personal-hero">
        <HeroField motif="branches" />
        <div className="shell">
          <div className="personal-intro-line"><span className="personal-eyebrow">Personal portfolio · Manchester, UK</span><span className="personal-availability"><i/>Open to opportunities</span></div>
          <h1>Daniel Christopher.<span>Ideas into <em>something useful.</em></span></h1>
          <div className="personal-hero-bottom"><p>I research people, explore data and build digital experiences. Here’s a selection of what I’ve made, from marketing concepts to interactive tools.</p><a className="personal-button" href="#selected-work">Explore my work <span aria-hidden="true">↓</span></a></div>
          <nav className="personal-directions" aria-label="Explore my interests"><NativeLink href="/work?interest=digital#projects"><PortfolioIcon kind="build"/> Digital builds</NativeLink><NativeLink href="/bcu"><PortfolioIcon kind="marketing"/> Marketing & audiences</NativeLink><NativeLink href="/work?interest=research#projects"><PortfolioIcon kind="research"/> Research & analysis</NativeLink></nav>
        </div>
      </section>
      <section className="personal-projects shell" id="selected-work" aria-labelledby="selected-work-title">
        <header className="personal-section-heading"><div><p className="overline">Selected projects</p><h2 id="selected-work-title">A few things I’ve worked on.</h2></div><NativeLink href="/work" className="personal-text-link">Browse all projects ↗</NativeLink></header>
        <ProjectGallery featured />
      </section>
      <section className="personal-about shell" aria-labelledby="personal-about-title">
        <Image src={publicPath('/daniel-portrait.webp')} alt="Daniel Christopher" width={1000} height={1500} sizes="(max-width: 700px) 160px, 230px" loading="lazy" />
        <div><p className="overline">A little about me</p><h2 id="personal-about-title">Curious about people.<br/>Hands on with ideas.</h2><p>My background connects Digital Marketing and Business Analytics. I enjoy turning a question into something people can understand, explore or use.</p><div className="personal-about-facts"><span>Manchester, UK</span><span>English & German</span><span>Full UK right to work</span></div><NativeLink href="/profile" className="personal-text-link">More about me ↗</NativeLink></div>
      </section>
      <section className="personal-contact shell"><p className="overline">Have something in mind?</p><h2>Let’s make a connection.</h2><p>I’m open to analyst, digital marketing and related opportunities.</p><NativeLink href="/contact" className="personal-button">Get in touch ↗</NativeLink><a className="personal-text-link" href={publicPath('/Daniel%20Christopher%20CV.pdf')} download="Daniel Christopher CV.pdf">Download my CV ↓</a></section>
    </main><PageFooter />
  </>;
}
