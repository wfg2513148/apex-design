# Maintenance Guide

This guide describes how to maintain the extracted Oracle APEX Universal Theme design systems.

## Design Principles

- Preserve observed Oracle APEX behavior.
- Keep theme styles independent.
- Keep canonical links on `oracleapex.com`.
- Use `oracleapex.cn` only as fallback evidence.
- Separate observed tokens from interpretation and generation guidance.
- Avoid broad formatting churn.

## Refresh Workflow

1. Identify the theme style to refresh.
2. Switch the Universal Theme application to that theme style.
3. Verify the body theme class and root primary token.
4. Visit the Design, Components, and Icons page inventory.
5. Update only the relevant theme `DESIGN.md`.
6. Update the top-level `DESIGN.md` only when coverage counts or theme inventory change.
7. If refreshing companion resources, update the relevant theme's `design-system.manifest.json`, `tokens/*`, `styles/*`, `reference/*`, `patterns/*`, `catalog/*`, and examples that depend on those tokens, patterns, or catalogs.
8. Run validation.
9. Commit and tag the release.

## Current Theme Style Metadata

| Theme style | Theme style id | Theme class | Live root primary |
| --- | --- | --- | --- |
| Iris | `2243014446517417` | `apex-theme-iris` | `#00688c` |
| Redwood Light | `2599349576570175875` | `apex-theme-redwood-light` | `#5f7d4f` |
| Vita | `2722798454316704879` | `apex-theme-vita` | `#056ac8` |
| Vita - Dark | `3546271551760430036` | `apex-theme-vita-dark` | `#056ac8` |
| Vita - Red | `1941380852169028559` | `apex-theme-vita-red` | `#da1b1b` |
| Vita - Slate | `3294906487728305352` | `apex-theme-vita-slate` | `#505f6d` |

## Coverage Expectations

Each current theme file should cover:

- 11 Design pages
- 60 Components and Icons pages
- 71 unique page paths
- 73 required menu entries, including aliases
- Full standard component catalog
- Open Design generation rules

Each theme also has companion resources for enterprise-grade prototype generation:

- `<theme>/design-system.manifest.json`
- `<theme>/tokens/<theme>.tokens.json`
- `<theme>/styles/<theme>-open-design.css`
- `<theme>/reference/apex-reference.json`
- `<theme>/reference/implementation-guidelines.md`
- `<theme>/patterns/page-templates.json`
- `<theme>/patterns/enterprise-patterns.json`
- `<theme>/patterns/component-state-matrix.json`
- `<theme>/patterns/README.md`
- `<theme>/catalog/component-catalog.json`
- `<theme>/catalog/navigation-icon-catalog.json`
- `<theme>/catalog/open-design-readiness.json`
- `<theme>/catalog/README.md`
- `<theme>/examples/enterprise-hr-dashboard.html`

## Validation Commands

Run from the repository root.

Check YAML front matter:

```sh
ruby -e "require 'yaml'; %w[Iris/DESIGN.md Redwood-Light/DESIGN.md Vita/DESIGN.md Vita-Dark/DESIGN.md Vita-Red/DESIGN.md Vita-Slate/DESIGN.md].each { |f| YAML.safe_load(File.read(f).split(/^---$/)[1], aliases: true); puts \"#{f}: yaml ok\" }"
```

Check for whitespace errors:

```sh
git diff --check
```

Inspect changed files:

```sh
git status --short
git diff --stat
```

Check companion JSON files:

```sh
python3 - <<'PY'
import json
from pathlib import Path
for theme in ["Iris", "Redwood-Light", "Vita", "Vita-Dark", "Vita-Red", "Vita-Slate"]:
    for path in Path(theme).glob("**/*.json"):
        json.loads(path.read_text())
        print(f"{path}: json ok")
PY
```

Check the Open Design sync script:

```sh
node --test tests/import-open-design.test.mjs
node --check scripts/import-open-design.mjs
node scripts/import-open-design.mjs --dry-run --no-verify
```

## Release Policy

Use semantic versioning tags:

- `v0.1.0`: first expanded Vita design-system coverage.
- `v0.2.0`: expanded Iris and Redwood Light coverage.
- `v0.2.1`: clarified Iris and Redwood Light visual-system rules.
- `v0.2.2`: added public repository documentation and bilingual usage guidance.
- `v0.2.3`: replaced README diagrams with PNG visual guides for GitHub readers.
- `v0.2.4`: added live component extraction matrices for Iris, Redwood Light, and Vita.
- `v0.3.0`: added Vita - Dark, Vita - Red, and Vita - Slate design systems with live component extraction matrices.
- `v0.4.0`: added companion manifest, token JSON, CSS adapter, Reference layer, enterprise pattern layer, machine-readable catalogs, and enterprise HR example for higher-fidelity Open Design prototypes across all six theme styles.
- `v0.4.1`: added a one-command local Open Design sync script with tests, overwrite-safe metadata preservation, local API verification, and bilingual usage documentation.

Future release guidance:

- Patch: corrections to wording, tokens, import guidance, or generation rules.
- Minor: refreshed coverage, added theme style, or meaningful component catalog expansion.
- Major: schema changes that require importer or downstream consumer updates.

## Public Repository Checklist

Before publishing a release:

- README explains the purpose, usage, source evidence, and disclaimer.
- CONTRIBUTING explains source priority and validation expectations.
- Open Design import instructions are current.
- Theme files have valid YAML front matter.
- Canonical URLs remain on `oracleapex.com`.
- Worktree is clean after commit and tag.

## Notes On Trademark And Source Use

Keep the disclaimer visible in public documentation. This repository is an independent documentation and extraction project. It is not an Oracle project and should not imply Oracle endorsement.
