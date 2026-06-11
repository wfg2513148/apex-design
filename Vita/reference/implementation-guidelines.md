# Vita Reference Implementation Guidelines

This reference layer complements `DESIGN.md`, `tokens/vita.tokens.json`, and `styles/vita-open-design.css`. It covers the Oracle APEX Universal Theme Reference pages that are reachable from the `getting-started` entrypoint and verified in a Vita browser session.

## Verified Reference Scope

The following 11 reference pages were checked in Vita context. Each page used `apex-theme-vita` and resolved the root primary token to `#056ac8`.

| Area | Page | Canonical path | Prototype impact |
| --- | --- | --- | --- |
| Reference | Reference Overview | `reference` | Entry point for tools, CSS utilities, CSS variables, JavaScript events/APIs, and change log. |
| Tools | Migration Guide | `migration-guide` | Keep generated screens compatible with refreshable Universal Theme structures. |
| Tools | Button Builder | `button-builder` | Generate APEX button markup, options, icons, and report/static-content button patterns. |
| Tools | Template Directives | `template-directives` | Preserve APEX template logic syntax when demonstrating conditional/loop/case rendering. |
| CSS Utilities | Color and Status Modifiers | `color-and-status-modifiers` | Use APEX status/color utility classes instead of arbitrary custom color classes. |
| CSS Utilities | Layout Modifiers | `layout-modifiers` | Use APEX classes for floats, flex, spacing, display, visibility, and responsive behavior. |
| CSS Utilities | Content Modifiers | `content-modifiers` | Use APEX text, heading, wrapping, weight, transform, and alignment utilities. |
| CSS Utilities | CSS Variables | `css-variables` | Bind custom prototype styles to APEX/Vita variables and local tokens. |
| Runtime | JavaScript Events | `javascript-events` | Treat documented events as interaction contracts for implementation notes. |
| Runtime | JavaScript APIs | `javascript-apis` | Treat widget APIs as implementation constraints, not visual UI elements. |
| Versioning | Change Log | `change-log` | Target Universal Theme 26.1 behavior unless a legacy migration task says otherwise. |

## Generation Rules

- Prefer APEX utility classes and CSS variables before adding one-off custom styles.
- Keep button patterns aligned with Button Builder semantics: appearance, Template Options, advanced attributes, and Font APEX icon picker choices.
- Use status modifiers for semantic states such as success, warning, danger, information, disabled, and pending.
- Use layout modifiers for spacing, alignment, responsive visibility, and flex behavior in dense enterprise pages.
- Use content modifiers to adjust copy density, headings, truncation, wrapping, and text alignment without inventing a separate typography system.
- Use Template Directives only when the prototype is explicitly showing APEX template logic. Otherwise show the rendered state a user would see.
- Use JavaScript Events and APIs only as implementation notes for dynamic behavior. Do not expose internal event/API names as visible product copy.
- Keep Change Log evidence scoped to the current Universal Theme version shown in the source app, `26.1.0`.

## Relationship To Other Vita Files

- `DESIGN.md` is the design-system contract and component catalog.
- `tokens/vita.tokens.json` is the machine-readable token source.
- `styles/vita-open-design.css` is a compact local CSS adapter for prototypes that cannot load the Oracle APEX runtime.
- `reference/apex-reference.json` is the machine-readable Reference layer.
- `examples/enterprise-hr-dashboard.html` demonstrates how shell, regions, buttons, forms, cards, reports, and activity patterns work together.
