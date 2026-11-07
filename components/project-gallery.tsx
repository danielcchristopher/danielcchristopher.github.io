'use client';
import { useState, useSyncExternalStore } from 'react';
import { NativeLink } from '@/components/native-link';
import { ProjectVisual } from '@/components/project-visual';
import { portfolioProjects, type ProjectCategory } from '@/lib/portfolio-projects';

const subscribeToLocation = (callback: () => void) => { window.addEventListener('popstate', callback); return () => window.removeEventListener('popstate', callback); };
const readInterest = () => new URLSearchParams(window.location.search).get('interest') ?? '';
const categories = ['All projects', 'Digital builds', 'Marketing', 'Research and analysis'] as const;
export function ProjectGallery({ featured = false }: { featured?: boolean }) {
  const [category, setCategory] = useState<ProjectCategory | 'All projects' | null>(null);
  const interest = useSyncExternalStore(subscribeToLocation, readInterest, () => '');
  const selectedCategory = category ?? (interest === 'digital' ? 'Digital builds' : interest === 'research' ? 'Research and analysis' : 'All projects');
  const [query, setQuery] = useState('');
  const projects = portfolioProjects.filter(p => (!featured || p.featured) && (selectedCategory === 'All projects' || p.category === selectedCategory) && `${p.title} ${p.summary} ${p.basis}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <>
    {!featured && <div className="project-controls"><div className="project-filters" role="group" aria-label="Choose a project category">{categories.map(c=><button type="button" key={c} aria-pressed={c===selectedCategory} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="project-search"><span>Find a project</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try campaign, routes or SQL" /></label></div>}
    {!featured && <p className="project-result-count" role="status">{projects.length} project{projects.length!==1?'s':''}{selectedCategory!=='All projects'?` · ${selectedCategory}`:''}</p>}
    <div className="project-gallery">{projects.map((project,i)=><article className="project-card" key={project.id}>
      <NativeLink href={project.href} className="project-image-link" aria-label={`Explore ${project.title}`}><ProjectVisual kind={project.visual} priority={featured && i===0}/><span className="project-open" aria-hidden="true">↗</span></NativeLink>
      <div className="project-card-copy"><span className="project-category">{project.category}</span><h3><NativeLink href={project.href}>{project.title}</NativeLink></h3><p>{project.summary}</p><small>{project.basis}</small></div>
    </article>)}</div>
    {projects.length===0 && <div className="project-empty"><p>No projects match that search.</p><button type="button" onClick={()=>{setQuery('');setCategory('All projects');}}>Show all projects</button></div>}
  </>;
}
