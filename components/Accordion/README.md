# Accordion

Expandable question-and-answer rows: the "WAQs" on the writer site.

**Markup:** `.faq-list` > `.faq-item` > `h3.faq-question-wrap` > `button.faq-question` (with `.faq-q-text` and `.faq-icon`), then `.faq-answer` > `.faq-answer-inner` > `p`. Add `is-open` to start open.

**Behaviour:** call `AmayDS.initAccordions()` once the markup is on the page. It toggles `is-open` and keeps `aria-expanded` in sync.

- The plus rotates into an ×, and the open question turns `coral` (18px semibold Fraunces: 3.0:1, fine as large text).
- The answer slides open by animating the grid row from 0fr to 1fr.
- Hover nudges the item up-left with `shadow-nudge`.
