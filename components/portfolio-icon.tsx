export function PortfolioIcon({ kind }: { kind: 'build' | 'marketing' | 'research' }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==='build'?<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18m-14 3-2 2 2 2m10-4 2 2-2 2m-6-5-2 6M9 21h6"/></>:kind==='marketing'?<><path d="m4 10 12-5v14L4 14Zm12-2 4-2v12l-4-2M6 15l2 6h4l-2-5"/></>:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M7 11l2-3 2 2 2-3"/></>}</svg>;
}
