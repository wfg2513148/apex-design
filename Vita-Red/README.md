# Oracle APEX Universal Theme - Vita - Red Package

Use this directory as one complete Vita - Red design-system package for Open Design or other enterprise web application prototyping tools.

## Files

| File | Purpose |
| --- | --- |
| `DESIGN.md` | Human-readable design-system contract with YAML front matter, source coverage, component patterns, and generation rules. |
| `design-system.manifest.json` | Package manifest with source URLs, runtime asset references, Open Design import hints, and file relationships. |
| `tokens/vita-red.tokens.json` | Machine-readable tokens for colors, type, spacing, radius, shadows, sizes, and APEX class mappings. |
| `styles/vita-red-open-design.css` | Lightweight CSS adapter for prototypes that cannot load the full Oracle APEX runtime. |
| `reference/apex-reference.json` | Machine-readable Reference layer for APEX tools, utility classes, CSS variables, JavaScript events/APIs, and version boundaries. |
| `reference/implementation-guidelines.md` | Practical rules for using Universal Theme Reference pages in enterprise prototypes. |
| `patterns/*.json` | Page templates, enterprise blueprints, and component state matrix. |
| `catalog/*.json` | Component, navigation, icon, and readiness catalogs for deterministic Open Design import. |
| `examples/enterprise-hr-dashboard.html` | Enterprise HR example that exercises shell, title region, cards, report, form, and timeline patterns. |

## Import Guidance

Import the whole `Vita-Red/` directory rather than copying only `DESIGN.md`. Open Design should read `DESIGN.md` as the design-system entrypoint and use the sibling manifest, token JSON, CSS, Reference, patterns, catalogs, and example as supporting evidence.

Recommended mode: `hybrid`.

## Runtime Asset Policy

The manifest lists official Oracle APEX 26.1 runtime CSS, JavaScript, and Font APEX resources. This repository does not vendor those assets. Use the official APEX runtime for exact fidelity; use `styles/vita-red-open-design.css` only as a compact prototype adapter.

## Theme Boundary

This package is Vita - Red-only. Do not merge it with other Universal Theme styles unless the task explicitly asks for a comparison or derived multi-theme system.
