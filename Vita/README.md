# Oracle APEX Universal Theme - Vita Package

Use this directory as one complete Vita design-system package for Open Design or other enterprise web application prototyping tools.

## Files

| File | Purpose |
| --- | --- |
| `DESIGN.md` | Human-readable design-system contract with YAML front matter, source coverage, component patterns, and generation rules. |
| `design-system.manifest.json` | Package manifest with source URLs, runtime asset references, Open Design import hints, and file relationships. |
| `tokens/vita.tokens.json` | Machine-readable tokens for colors, type, spacing, radius, shadows, sizes, and APEX class mappings. |
| `styles/vita-open-design.css` | Lightweight CSS adapter for prototypes that cannot load the full Oracle APEX runtime. |
| `reference/apex-reference.json` | Machine-readable Reference layer for APEX tools, utility classes, CSS variables, JavaScript events/APIs, and version boundaries. |
| `reference/implementation-guidelines.md` | Practical rules for using Universal Theme Reference pages in enterprise prototypes. |
| `patterns/page-templates.json` | Page shell, grid, page-template, Dialog, Drawer, and inline overlay guidance. |
| `patterns/enterprise-patterns.json` | Enterprise page blueprints for dashboards, reports, grids, master-detail pages, transaction forms, approvals, and wizards. |
| `patterns/component-state-matrix.json` | Component variants and states for buttons, forms, reports, filters, badges, overlays, timelines, and wizards. |
| `patterns/README.md` | Notes for using the Vita-only enterprise pattern layer. |
| `catalog/component-catalog.json` | Machine-readable standard component catalog for component selection. |
| `catalog/navigation-icon-catalog.json` | Navigation classes, navigation entries, Font APEX families, icon categories, and representative icon classes. |
| `catalog/open-design-readiness.json` | Import readiness audit for enterprise Open Design generation. |
| `catalog/README.md` | Notes for using the Vita-only machine-readable catalogs. |
| `examples/enterprise-hr-dashboard.html` | Enterprise HR example that exercises shell, title region, cards, report, form, and timeline patterns. |

## Import Guidance

Import the whole `Vita/` directory rather than copying only `DESIGN.md`. Open Design should read `DESIGN.md` as the design-system entrypoint and use the sibling manifest, token JSON, CSS, and example as supporting evidence.

Recommended mode: `hybrid`.

## Runtime Asset Policy

The manifest lists official Oracle APEX 26.1 runtime CSS, JavaScript, and Font APEX resources. This repository does not vendor those assets. Use the official APEX runtime for exact fidelity; use `styles/vita-open-design.css` only as a compact prototype adapter.

## Reference Layer

The `reference/` files cover the Universal Theme Reference pages reachable from the `getting-started` page: Migration Guide, Button Builder, Template Directives, color/status modifiers, layout modifiers, content modifiers, CSS Variables, JavaScript Events, JavaScript APIs, and Change Log. Use this layer when generated prototypes need APEX-compatible classes, template logic, or runtime behavior notes.

## Enterprise Pattern Layer

The `patterns/` files translate observed Vita pages into Open Design-friendly generation blueprints: page templates, 12-column layout rules, report and grid workspaces, transaction forms, approval flows, and component state matrices. Use this layer when a prototype needs a complete enterprise application screen rather than a single component sample.

## Catalog Layer

The `catalog/` files provide structured component, navigation, icon, and readiness data. Use them when an importer or design agent needs deterministic component selection without parsing the long Markdown tables in `DESIGN.md`.

## Theme Boundary

This package is Vita-only. Do not merge it with Iris, Redwood Light, Vita Dark, Vita Red, or Vita Slate unless the task explicitly asks for a comparison or derived multi-theme system.
