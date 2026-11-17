/** Amay Design System. Components are HTML + CSS classes from bundle.css; two need this script. */
declare namespace AmayDS {
  /** Wires every `.faq-item` under root (default: document): toggles `is-open` and `aria-expanded`. Used by Accordion and JourneyTimeline. */
  function initAccordions(root?: ParentNode): void;
  /** Wires every `.photo-carousel` under root: prev/next buttons (`data-dir`), generated dots, disabled ends. */
  function initCarousels(root?: ParentNode): void;
  const version: string;
}
