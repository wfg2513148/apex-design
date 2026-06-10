# Oracle APEX Universal Theme Design Systems

Source-backed `DESIGN.md` files for Oracle APEX Universal Theme styles, prepared for Open Design and other design-agent workflows.

This repository is not an Oracle project. It preserves observed Oracle APEX Universal Theme design evidence so teams can generate or review Oracle APEX-style web prototypes without mixing theme styles together.

## What Is Included

| Theme style | Design system file | Verified coverage | Visual signature |
| --- | --- | --- | --- |
| Iris | [Iris/DESIGN.md](Iris/DESIGN.md) | 71 unique Design, Components, and Icons pages; 73 menu entries | Deep neutral shell, warm off-white canvas, pale title band, blue-teal action accents |
| Redwood Light | [Redwood-Light/DESIGN.md](Redwood-Light/DESIGN.md) | 71 unique Design, Components, and Icons pages; 73 menu entries | White header, warm-gray navigation, Redwood decorative title strip, sage/teal accents |
| Vita | [Vita/DESIGN.md](Vita/DESIGN.md) | 71 unique Design, Components, and Icons pages; 73 menu entries | White surfaces, blue navigation/action emphasis, compact APEX application shell |

The top-level [DESIGN.md](DESIGN.md) is the repository index. Each theme directory is an independent design system and contains a single canonical `DESIGN.md` file with YAML front matter plus human-readable guidance.

## Repository Layout

```text
.
|-- README.md
|-- DESIGN.md
|-- Iris/
|   `-- DESIGN.md
|-- Redwood-Light/
|   `-- DESIGN.md
|-- Vita/
|   `-- DESIGN.md
|-- docs/
|   |-- maintenance.md
|   `-- open-design-import.md
`-- CONTRIBUTING.md
```

## Get Started

Clone the repository:

```sh
git clone https://github.com/wfg2513148/apex-design.git
cd apex-design
```

Choose one theme directory and use its `DESIGN.md` as the design-system source.

## Use With Open Design

Import each theme directory as its own design system. Do not import the repository root if you want independent Iris, Redwood Light, and Vita choices.

Example project paths after cloning:

```text
<repo>/Iris
<repo>/Redwood-Light
<repo>/Vita
```

Recommended Open Design import mode:

- Use `hybrid` when you want Open Design to make the system convenient for prototype generation.
- Use `verbatim` when source preservation matters more than normalized generated artifacts.
- Keep the three theme styles separate unless you are intentionally building a comparison or derived multi-theme package.

See [docs/open-design-import.md](docs/open-design-import.md) for step-by-step import guidance.

## Use With AI Prototyping Tools

Give the relevant theme file to the prototyping tool as the design-system source:

```text
Use Iris/DESIGN.md as the only design system. Generate an Oracle APEX Universal Theme screen using the Iris theme style.
```

Practical rules:

- Pick exactly one theme style per prototype unless the task is a comparison.
- Preserve Oracle APEX terms such as Application, Page, Region, Interactive Grid, Interactive Report, Page Items, Dynamic Action, Process, Validation, Breadcrumb, and Wizard.
- Prefer APEX components from the catalog before inventing generic dashboard cards or marketing sections.
- Use canonical URLs recorded in the files for source references.

## Source Evidence

Primary source family:

```text
https://oracleapex.com/ords/r/apex_pm/ut/...
```

Fallback evidence host:

```text
https://oracleapex.cn/ords/r/test/ut/...
```

The fallback host is used only when the primary source times out or when live theme-style switching is needed for verification. Canonical links in this repository should continue to point to `oracleapex.com`.

## Maintenance Status

Current corpus:

- 3 theme styles
- 71 unique Design, Components, and Icons pages per theme
- 73 required menu entries per theme, including aliases
- Machine-readable YAML front matter in every theme file
- Human-readable Open Design generation rules in every theme file

See [docs/maintenance.md](docs/maintenance.md) for refresh, verification, and release notes.

## Contributing

Contributions should preserve observed Oracle APEX behavior rather than redesigning it. Before opening a change, read [CONTRIBUTING.md](CONTRIBUTING.md).

High-level rules:

- Keep each theme style independent.
- Keep YAML front matter machine-readable.
- Keep canonical URLs on `oracleapex.com`.
- Clearly separate observed tokens from interpretation or generation advice.
- Avoid broad formatting churn in extracted Markdown.

## Disclaimer

Oracle, Oracle APEX, and related marks belong to Oracle and/or its affiliates. This repository is an independent documentation and design-system extraction project and is not endorsed by Oracle.
