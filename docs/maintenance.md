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
7. Run validation.
8. Commit and tag the release.

## Current Theme Style Metadata

| Theme style | Theme style id | Theme class | Live root primary |
| --- | --- | --- | --- |
| Iris | `2243014446517417` | `apex-theme-iris` | `#00688c` |
| Redwood Light | `2599349576570175875` | `apex-theme-redwood-light` | `#5f7d4f` |
| Vita | `2722798454316704879` | `apex-theme-vita` | `#056ac8` |

## Coverage Expectations

Each current theme file should cover:

- 11 Design pages
- 60 Components and Icons pages
- 71 unique page paths
- 73 required menu entries, including aliases
- Full standard component catalog
- Open Design generation rules

## Validation Commands

Run from the repository root.

Check YAML front matter:

```sh
ruby -e "require 'yaml'; %w[Iris/DESIGN.md Redwood-Light/DESIGN.md Vita/DESIGN.md].each { |f| YAML.safe_load(File.read(f).split(/^---$/)[1], aliases: true); puts \"#{f}: yaml ok\" }"
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

## Release Policy

Use semantic versioning tags:

- `v0.1.0`: first expanded Vita design-system coverage.
- `v0.2.0`: expanded Iris and Redwood Light coverage.
- `v0.2.1`: clarified Iris and Redwood Light visual-system rules.

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
