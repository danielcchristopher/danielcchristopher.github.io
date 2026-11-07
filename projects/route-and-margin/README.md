# Route & Margin

Independent decision prototype for a simulated transport shift. It does not use real Kinaxia operating or customer data and does not establish actual customer profitability.

## Open the demonstration

The standalone application is published at `/demos/RouteAndMargin.html`. Start with Overview and follow the four step walkthrough through cover pricing, delivery recovery and customer contribution.

The public HTML is identical to the completed demonstration shared with the recruiter. Its embedded library notices remain intact.

## Reproduce the calculation checks

From the repository root, with Node installed:

```bash
node projects/route-and-margin/verify-model.mjs
```

The check extracts the existing calculation functions from the HTML. It tests 1,080 trip reconciliation cases across three scenarios, five cover price pairs, four plans and both allocation methods. It also checks account and plan totals, eligibility, shortfalls, ties and crossover prices.

Default simulated outputs:

| Measure | Result |
| --- | --- |
| Reserve plan contribution | £640.93 |
| Carrier plan contribution at £320 | £625.31 |
| Carrier quote matching reserve | £304.38 |
| Cedar loss with pallet allocation | £51.26 |
| Cedar loss with equal served delivery allocation | £75.24 |

The reserve callout is £135 and the on time target is 26 of 26. Allocating transport costs differently preserves each trip total exactly. These checks establish consistency within the model, not the accuracy of real fleet costs, routes or customer profitability.

## Scope

The application demonstrates scenario comparison, service eligibility, estimated replay and contribution analysis. Maps use approximate town centres and illustrative connectors. Optional street traces use a car profile, not HGV restrictions. Overheads and driver break rules are excluded.
