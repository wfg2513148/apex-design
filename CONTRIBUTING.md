# Contributing

This repository maintains source-backed design-system documentation for Oracle APEX Universal Theme styles.

The goal is not to redesign Oracle APEX. The goal is to preserve observed theme behavior in a format that is useful for Open Design and AI-assisted prototyping.

## Contribution Scope

Good changes include:

- Refreshing a theme file from current Universal Theme evidence.
- Adding a missing official theme style as a new directory with its own `DESIGN.md`.
- Improving source-backed wording that helps Open Design generate more faithful prototypes.
- Fixing broken links, stale coverage counts, or malformed YAML front matter.
- Improving repository documentation.

Avoid changes that:

- Merge multiple theme styles into one design system.
- Replace observed Oracle APEX values with personal design preferences.
- Change canonical source links from `oracleapex.com` to a fallback host.
- Reformat large extracted sections without a behavioral reason.
- Add generated assets or screenshots unless they are required evidence.

## Theme File Requirements

Each theme directory must contain:

```text
<Theme-Directory>/DESIGN.md
```

The file must include:

- YAML front matter with machine-readable colors, typography, spacing, rounded values, component patterns, and coverage metadata.
- A clear H1 naming the Oracle APEX Universal Theme style.
- A theme style section with the theme style id and theme class when known.
- Coverage counts for Design, Components, and Icons pages.
- Open Design generation rules.
- Source coverage notes with canonical URLs.

## Source Priority

Use evidence in this order:

1. Primary: `https://oracleapex.com/ords/r/apex_pm/ut/...`
2. Fallback: `https://oracleapex.cn/ords/r/test/ut/...`

Use the fallback only when the primary source times out or when live theme switching is needed for verification.

## Verification Checklist

Before submitting a change:

- Confirm every edited `DESIGN.md` still has valid YAML front matter.
- Confirm coverage counts match the page inventory.
- Confirm canonical links still use `oracleapex.com`.
- Confirm any fallback evidence is described as fallback evidence.
- Confirm generated guidance does not make one theme look like another theme.
- Review `git diff --check` for whitespace errors.

Example YAML check:

```sh
ruby -e "require 'yaml'; %w[Iris/DESIGN.md Redwood-Light/DESIGN.md Vita/DESIGN.md].each { |f| YAML.safe_load(File.read(f).split(/^---$/)[1], aliases: true); puts \"#{f}: ok\" }"
```

## Release Notes

Use semantic versioning for tags:

- Patch release: documentation correction, clearer generation guidance, or token wording fix.
- Minor release: refreshed coverage, added pages, or added a new theme style.
- Major release: schema changes that affect importers or downstream consumers.

Record important user-facing changes in the Git commit message and tag the release.
