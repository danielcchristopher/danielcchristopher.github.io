# Mobile Route Planner

An independent prototype inspired by a Kwik Fit interview assessment. It is not an official Kwik Fit product or a client commission.

## Public evidence boundary

[Open the interactive HTML demo](https://danielcchristopher.github.io/demos/MobileRoutePlanner.html) or download `public/demos/MobileRoutePlanner.html`.

The demo uses letter labels for technicians and postcode district locations. It contains no customer names, full addresses or contact details. The original assessment files are not included.

## Comparison design

The original prototype compares three approaches:

1. Recorded visit order, reconstructed from actual visit start times.
2. A better sequence that keeps each technician's assigned work.
3. A redistribution of visits between the available technicians.

The interface includes postcode district exploration, route replay, comparisons by day and a technician view. The optimisation is described in the prototype as solved with Google OR Tools; its interface uses MapLibre GL and deck.gl.

## Shared modelling assumptions

The comparison uses straight line distances multiplied by 1.3, a 30 km/h driving assumption and planned job durations. Alternatives start at 07:30, aim for the booked appointment slot and finish no later than the recorded technician finish.

These are estimated comparisons with hindsight over the whole day. They do not establish real road mileage, traffic, stock collection journeys, break compliance, live technician availability or achievable headcount savings.

## Practical validation

The next operational step would be to reconcile stock and appointment exceptions with planners, use appropriate road times and operating constraints, and trial a proposal against live demand. A modelled reduction is a reason to test a planning change, not a realised saving.
