@/Users/kwang/.codex/RTK.md

# apex-design Agent Notes

## Project Purpose

This repository maintains design-pattern documentation for the latest Oracle APEX Universal Theme.

The current corpus contains extracted design systems for three official Universal Theme styles:

- `Iris`
- `Redwood-Light`
- `Vita`

Each theme directory contains:

- `DESIGN.md`: the human-readable design-system document with YAML front matter for machine-readable tokens.
- `extraction-summary.json`: extraction coverage, theme metadata, and canonical/source URL mapping.
- `extraction-progress.json`: page-level extraction progress evidence.

The top-level `DESIGN.md` is the index and source-scope summary.

## Source Priority

Prefer evidence from the official Universal Theme application:

- Primary: `https://oracleapex.com/ords/r/apex_pm/ut/...`
- Fallback only when the primary source times out: `https://oracleapex.cn/ords/r/test/ut/...`

Do not redesign, normalize, or "improve" Oracle's observed design values unless the task explicitly asks for a derived design system. Preserve extracted evidence and clearly separate observed tokens from any interpretation.

## Editing Rules

- Keep changes surgical and documentation-focused.
- Preserve the existing schema shape in each theme `DESIGN.md`.
- Keep YAML front matter machine-readable.
- Keep canonical URLs pointed at `oracleapex.com`; use fallback URLs only as source evidence.
- When adding or refreshing a theme, update the top-level `DESIGN.md` index and include coverage counts.
- Avoid broad formatting churn in extracted Markdown or JSON.

## Verification

For documentation-only edits, verify with:

```bash
rtk find . -maxdepth 2 -type f | sort
rtk wc -l DESIGN.md */DESIGN.md */extraction-*.json
```

For extraction refreshes, also verify:

- attempted, extracted, and failed counts in `extraction-summary.json`
- source host split between `oracleapex.com` and fallback hosts
- corresponding Source Coverage section in each changed `DESIGN.md`
