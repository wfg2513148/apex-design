# Open Design Import Guide

This guide explains how to import the Oracle APEX Universal Theme design systems into a local Open Design instance.

## Import Model

Import one theme directory at a time:

```text
Iris/
Redwood-Light/
Vita/
Vita-Dark/
Vita-Red/
Vita-Slate/
```

Do not import the repository root if you want separate design-system choices. Each theme directory contains its own canonical `DESIGN.md` and companion resources for higher-fidelity prototypes:

```text
<theme>/design-system.manifest.json
<theme>/tokens/<theme>.tokens.json
<theme>/styles/<theme>-open-design.css
<theme>/reference/apex-reference.json
<theme>/reference/implementation-guidelines.md
<theme>/patterns/page-templates.json
<theme>/patterns/enterprise-patterns.json
<theme>/patterns/component-state-matrix.json
<theme>/catalog/component-catalog.json
<theme>/catalog/navigation-icon-catalog.json
<theme>/catalog/open-design-readiness.json
<theme>/examples/enterprise-hr-dashboard.html
```

## Manual Import In Open Design

1. Open your local Open Design web UI.
2. Open Settings.
3. Go to Design Systems.
4. Choose Add design system.
5. Choose Local as the source.
6. Enter one absolute project path.
7. Choose the import structure.
8. Click Import from project.
9. Repeat for the other themes.

Use absolute paths on your machine. For example, if the repository is cloned at `<repo>`, import:

```text
<repo>/Iris
<repo>/Redwood-Light
<repo>/Vita
<repo>/Vita-Dark
<repo>/Vita-Red
<repo>/Vita-Slate
```

## Import Modes

Use `hybrid` for most prototype work. It preserves the design-system document while allowing Open Design to use normalized helper files such as the theme token JSON, CSS adapter, patterns, and catalogs.

Use `verbatim` when you want the imported package to stay as close as possible to the source `DESIGN.md`.

Use `normalized` only when you intentionally want Open Design to derive more of its own structure from the source material.

## Recommended Display Names

Use these names in Open Design:

| Theme directory | Open Design title |
| --- | --- |
| `Iris` | Oracle APEX Iris Theme |
| `Redwood-Light` | Oracle APEX Redwood Light Theme |
| `Vita` | Oracle APEX Vita Theme |
| `Vita-Dark` | Oracle APEX Vita Dark Theme |
| `Vita-Red` | Oracle APEX Vita Red Theme |
| `Vita-Slate` | Oracle APEX Vita Slate Theme |

## Updating An Existing Import

If a design system already exists in Open Design, update the existing id instead of creating a duplicate.

Example ids used by a typical local import:

```text
user:iris
user:redwood-light
user:oracle-apex-vita-theme-design-system
user:oracle-apex-vita-dark-theme-design-system
user:oracle-apex-vita-red-theme-design-system
user:oracle-apex-vita-slate-theme-design-system
```

After update, verify:

- The title is still the expected Oracle APEX theme title.
- The category is `Oracle APEX`.
- The status is `published` if the system should appear as a ready-to-use design system.
- The imported `DESIGN.md` body matches the source file.

## Using A Theme In A Prototype

Prompt pattern:

```text
Use Oracle APEX Iris Theme as the only design system. Create an Oracle APEX-style administration page with a side navigation shell, title region, toolbar, and Interactive Report.
```

Rules:

- Use one theme at a time.
- Ask for APEX components by name when possible.
- Do not mix visual signatures from different theme styles unless the task is a comparison.
- For data-heavy screens, prefer Interactive Grid, Interactive Report, Classic Report, Cards, Metric Card, and Region patterns.

## Troubleshooting

If the imported design system looks too generic:

- Confirm you imported the theme directory, not the repository root.
- Confirm Open Design is reading the intended `DESIGN.md`.
- Confirm Open Design can also read `design-system.manifest.json`, the theme token JSON, the theme CSS adapter, `reference/`, `patterns/`, `catalog/`, and `examples/enterprise-hr-dashboard.html`.
- Confirm the body includes the theme-specific "Open Design Generation Rules" section.
- Reimport or update the existing design-system id after pulling new repository changes.

If duplicate systems appear:

- Keep the intended id.
- Remove duplicate ids such as `iris-2` or `redwood-light-2`.
- Update the original system rather than importing again with a conflicting name.
