import Image from 'next/image';
import { useId } from 'react';
import type { ProjectVisualKind } from '@/lib/portfolio-projects';
import { publicPath } from '@/lib/paths';

export function ProjectVisual({ kind, priority = false }: { kind: ProjectVisualKind; priority?: boolean }) {
  const patternId = useId().replace(/:/g, '');
  if (kind === 'route') return <div className="project-preview project-preview--screen"><Image src={publicPath('/previews/route-and-margin.png')} alt="Route and Margin application showing the vehicle fault, working plan and reserve recommendation" width={1280} height={720} sizes="(max-width: 700px) 100vw, 50vw" priority={priority} /><span className="preview-caption">Application preview · simulated data</span></div>;
  const label = kind === 'planner' ? 'Illustrative visit sequences, with three alternative routes between generic stops. No assessment locations are shown.' : kind === 'campaign' ? 'Concept diagram connecting an audience, a content idea and a proposed response.' : kind === 'trust' ? 'Conceptual research diagram connecting personalisation, trust and loyalty. The survey does not establish causation.' : kind === 'loans' ? 'Reported standardised coefficients: loan amount .767 and income minus .488. Different factors, not a before and after result.' : kind === 'churn' ? 'Reported validation error: decision tree 10.52 percent, regression 6.18 percent and neural network 4.42 percent.' : 'Concept illustration of the project structure, not a screenshot or measured result.';
  return <div className={`project-preview project-preview--${kind}`}>
    <svg viewBox="0 0 600 340" role="img" aria-label={label}>
      <defs><pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity=".07" /></pattern></defs>
      <rect width="600" height="340" fill={`url(#${patternId})`} />
      {kind === 'planner' ? <>
        <path d="M-10 235 Q130 140 255 192 T620 105" className="preview-river" />
        <path d="M55 230 L160 100 L300 220 L430 95 L550 205" className="preview-route preview-route--muted" />
        <path d="M55 230 Q75 100 160 100 T430 95 Q555 85 550 205 L300 220 Z" className="preview-route" />
        {[[55,230],[160,100],[300,220],[430,95],[550,205]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="13" className="preview-stop" /><text x={x} y={y+5} textAnchor="middle" className="preview-stop-number">{i+1}</text></g>)}
        <g transform="translate(310 155)"><rect width="44" height="24" rx="5" className="preview-vehicle"/><circle cx="10" cy="26" r="5"/><circle cx="34" cy="26" r="5"/></g>
        <text x="30" y="35" className="preview-label">VISIT SEQUENCE / CONCEPT</text><text x="30" y="307" className="preview-text">Same stops. Different planning choices.</text>
      </> : kind === 'campaign' ? <>
        <text x="30" y="35" className="preview-label">CAMPAIGN / CONCEPT</text>
        {[[110,90],[110,135],[110,180]].map(([x,y],i)=><g key={i}><rect x={x+(i%2?16:0)} y={y} width="145" height="31" rx="4" className={`preview-block preview-block--${i}`} /><path d={`M${x+47} ${y+3}v25 M${x+96} ${y+3}v25`} stroke="currentColor" strokeOpacity=".25" /></g>)}
        <path d="M290 155h70m-12-10 12 10-12 10" className="preview-line"/><rect x="385" y="80" width="110" height="150" rx="16" className="preview-panel"/><rect x="398" y="100" width="84" height="70" rx="5" className="preview-block"/><path d="M405 190h64m-64 15h43" className="preview-line"/>
        <text x="35" y="294" className="preview-text">Audience → idea → content → response</text>
      </> : kind === 'trust' ? <>
        <text x="30" y="35" className="preview-label">RESEARCH / CONCEPTUAL PATHS</text>
        <path d="M120 190 300 95 480 190M140 200h320" className="preview-line"/>
        {[[120,190,'Personalisation'],[300,95,'Trust'],[480,190,'Loyalty']].map(([x,y,t])=><g key={t}><circle cx={x} cy={y} r="37" className="preview-stop"/><text x={x} y={Number(y)+64} textAnchor="middle" className="preview-text">{t}</text></g>)}
        <text x="300" y="305" textAnchor="middle" className="preview-label">139 SURVEY RESPONSES · ASSOCIATION, NOT CAUSATION</text>
      </> : kind === 'loans' || kind === 'churn' ? <>
        <text x="30" y="35" className="preview-label">{kind === 'loans' ? 'REPORTED STANDARDISED COEFFICIENTS' : 'REPORTED VALIDATION ERROR · LOWER IS BETTER'}</text>
        {(kind === 'loans' ? [['Loan amount',.767,'+.767'],['Income',.488,'−.488']] : [['Decision tree',.7013,'10.52%'],['Regression',.412,'6.18%'],['Neural network',.2947,'4.42%']]).map(([name,value,display],i)=><g key={name} transform={`translate(30 ${90+i*66})`}><text y="0" className="preview-text">{name}</text><rect y="13" width="440" height="15" rx="4" fill="currentColor" opacity=".07"/><rect y="13" width={Number(value)*440} height="15" rx="4" className={i===1?'preview-bar-alt':'preview-bar'}/><text x="535" y="27" textAnchor="end" className="preview-text">{display}</text></g>)}
        <text x="30" y="310" className="preview-label">{kind === 'loans' ? 'TEAM COURSEWORK · ASSOCIATIONS' : 'INDIVIDUAL COURSEWORK · NOT DEPLOYED'}</text>
      </> : kind === 'web' ? <>
        <rect x="48" y="50" width="450" height="245" rx="12" className="preview-panel"/><path d="M48 83h450" className="preview-line"/><circle cx="66" cy="67" r="3" fill="currentColor"/><text x="82" y="72" className="preview-label">DANIEL CHRISTOPHER</text><text x="76" y="137" className="preview-display">Ideas into</text><text x="76" y="174" className="preview-display">something useful.</text>
        <rect x="77" y="202" width="95" height="57" rx="5" className="preview-block"/><rect x="184" y="202" width="95" height="57" rx="5" className="preview-block preview-block--1"/><rect x="291" y="202" width="95" height="57" rx="5" className="preview-block preview-block--2"/><rect x="454" y="141" width="85" height="162" rx="13" className="preview-panel"/><path d="M469 177h54m-54 18h42m-42 43h54m-54 18h35" className="preview-line"/>
      </> : kind === 'nature' ? <>
        <text x="30" y="35" className="preview-label">AUDIENCE / RESEARCH CONCEPT</text><path d="M135 270V125m0 75q-75-10-65-80 70-5 65 80m0-35q70-5 65-75-60 0-65 75" className="preview-line"/><circle cx="360" cy="130" r="24" className="preview-stop"/><circle cx="425" cy="185" r="20" className="preview-stop"/><circle cx="300" cy="195" r="20" className="preview-stop"/><path d="m310 179 32-30m37-2 30 24m-86 32h80" className="preview-line"/><text x="240" y="280" className="preview-text">Nature · connection · community</text>
      </> : <>
        <text x="30" y="35" className="preview-label">{kind === 'data' ? 'LINKED INFORMATION / CONCEPT' : kind === 'research' ? 'CUSTOMER RESEARCH / METHOD' : 'REPORTING / CONCEPT'}</text>
        {[80,245,410].map((x,i)=><g key={x}><rect x={x} y={80+i%2*55} width="115" height="130" rx="8" className="preview-panel"/><rect x={x+13} y={100+i%2*55} width="88" height="12" rx="3" className="preview-block"/><path d={`M${x+15} ${135+i%2*55}h80m-80 21h62m-62 21h72`} className="preview-line"/></g>)}
        <path d="M197 153h46m119 0h45" className="preview-line"/><text x="30" y="309" className="preview-text">{kind==='research' ? 'Observe → ask → compare → interpret' : 'Connect the information to the question.'}</text>
      </>}
    </svg>
    <span className="preview-caption">{kind === 'loans' || kind === 'churn' ? 'Reported coursework results' : 'Concept illustration'}</span>
  </div>;
}
