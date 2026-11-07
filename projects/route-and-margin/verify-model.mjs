import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../../public/demos/RouteAndMargin.html', import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*)<\/script>/)[1];
const core=script.slice(0,script.indexOf('const $='));
const plans=script.slice(script.indexOf('const desk='),script.indexOf('const signed='));
const helpers=script.slice(script.indexOf('const preciseMoney ='),script.indexOf('function renderCommercial()'));
const sandbox={};vm.createContext(sandbox);
vm.runInContext(core+"\nconst state={scenario:'breakdown'};\n"+plans+helpers+`\nthis.api={desk,state,options,termsFor,ledger,totals,transportCost,pennies,allocateTrip,rankPlans,carrierCrossover,recommendationReason,accounts,loads,scenarios,breakEvenReserve,quoteGap,projectQuote,changedDrops};`,sandbox);
const a=sandbox.api;let checks=0;
for(const scenario of Object.keys(a.scenarios)){
 a.state.scenario=scenario;const variants=a.options();
 for(const prices of [[135,320],[135,280],[0,100],[400,600],[73.13,304.38]]){
  Object.assign(a.desk,{fee:prices[0],carrierFee:prices[1]});
  for(const [name,{result}] of Object.entries(variants)){
   const totals=[];
   for(const allocation of ['pallet','equal']){
    const terms={...a.termsFor(),allocation};const lines=a.ledger(result,terms),t=a.totals(lines);totals.push(t);
    assert.equal(lines.length,26);
    for(const r of result.routes){
     const expected=a.pennies(a.transportCost(r,terms));
     const actual=lines.filter(l=>l.unit===r.id).reduce((s,l)=>s+a.pennies(l.transport),0);
     assert.equal(actual,expected,`${scenario}/${name}/${allocation}/${r.id}`);checks++;
    }
    assert.equal(a.pennies(t.contribution),a.pennies(t.earned)-a.pennies(t.transport)-a.pennies(t.handling)-a.pennies(t.credit));
    for(const key of Object.keys(t))assert.equal(a.accounts.reduce((s,name)=>s+a.pennies(a.totals(lines.filter(l=>l.account===name))[key]),0),a.pennies(t[key]));
   }
   assert.deepEqual(totals[0],totals[1],`Plan totals changed with allocation: ${scenario}/${name}`);
  }
  for(const floor of [22,24,26,27]){
   const terms=a.termsFor(),ranked=a.rankPlans(variants,terms,floor);
   const reason=a.recommendationReason(variants,ranked,terms);
   assert.ok(reason.length>40);
   if(!ranked[0].meets)assert.match(reason,/No eligible plan/);
   const cross=a.carrierCrossover(variants,ranked,terms);
   if(cross){
    const atTie=a.rankPlans(variants,{...terms,carrier:cross.limit},floor);
    assert.equal(a.pennies(atTie.find(p=>p.key==='carrier').contribution),a.pennies(atTie.find(p=>p.key===cross.alternative.key).contribution));
   }
  }
 }
}
a.state.scenario='breakdown';Object.assign(a.desk,{fee:135,carrierFee:320});
const variants=a.options(),terms=a.termsFor();
const ranked=a.rankPlans(variants,terms,26),cross=a.carrierCrossover(variants,ranked,terms);
console.log('Default ranking:',JSON.stringify(ranked.map(p=>({key:p.key,onTime:p.onTime,contribution:p.contribution}))));
assert.equal(ranked[0].key,'reserve');assert.equal(cross.limit,304.38);
assert.equal(a.rankPlans(variants,{...terms,carrier:280},26)[0].key,'carrier');
const tied=a.rankPlans(variants,{...terms,carrier:cross.limit},26);
assert.match(a.recommendationReason(variants,tied,{...terms,carrier:cross.limit}),/Contribution tie/);
for(const key of ['reserve','carrier'])console.log('Cedar',key,['pallet','equal'].map(allocation=>({allocation,...a.totals(a.ledger(variants[key].result,{...terms,allocation}).filter(l=>l.account==='Cedar Foodservice'))})));
const recovered=a.changedDrops(variants.published.result,variants.carrier.result,terms,false).filter(p=>p.before.status!=='On time'&&p.after.status==='On time');assert.ok(recovered.length);console.log('Recovered:',recovered.map(p=>p.after.id));
console.log(`PASS: ${checks} per-trip reconciliation checks, 3 scenarios, 5 price pairs, all plans, both allocations; account/plan totals; eligibility, shortfall, tie and crossover checks.`);
