# JourneyTimeline

A horizontal career line where each stop is an accordion card. It's built from Accordion and appears on the product portfolio.

**Markup:** `<div class="journey" style="--stops:4">` holding one `.faq-item` per role. Each `button.faq-question` holds `.journey-years`, `.journey-name` and `.journey-role`, and the answer holds the lesson.

**Behaviour:** `AmayDS.initAccordions()`.

- A 3px `ink` line runs across the top, with a dot per stop. An open stop's dot fills `coral`.
- Most recent role on the left.
- Below 900px the line turns vertical down the left edge.
- The answer is one or two sentences: what the role taught, not what was done.
