# Oracle APEX Universal Theme Design Systems

This repository contains extracted design-system documentation for Oracle APEX Universal Theme styles. Each theme keeps its own `DESIGN.md` so Open Design can import or review a single theme style without blending values across styles.

## Theme Index

| Theme style | File | Source coverage | Component coverage |
| --- | --- | --- | --- |
| Iris | `Iris/DESIGN.md` + `Iris/design-system.manifest.json` | 71 unique Design/Components/Icons pages HTTP/theme verified; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |
| Redwood Light | `Redwood-Light/DESIGN.md` + `Redwood-Light/design-system.manifest.json` | 71 unique Design/Components/Icons pages HTTP/theme verified; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |
| Vita | `Vita/DESIGN.md` + `Vita/design-system.manifest.json` | 71 unique Design/Components/Icons pages verified in Vita; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |
| Vita - Dark | `Vita-Dark/DESIGN.md` + `Vita-Dark/design-system.manifest.json` | 71 unique Design/Components/Icons pages verified in Vita - Dark; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |
| Vita - Red | `Vita-Red/DESIGN.md` + `Vita-Red/design-system.manifest.json` | 71 unique Design/Components/Icons pages verified in Vita - Red; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |
| Vita - Slate | `Vita-Slate/DESIGN.md` + `Vita-Slate/design-system.manifest.json` | 71 unique Design/Components/Icons pages verified in Vita - Slate; companion tokens/CSS/Reference/patterns/catalogs/example added | 73 required menu entries covered; 59 live component pages scraped; 31 pages with Template Options captured |

## Notes

- Canonical source URLs should remain on `https://oracleapex.com/ords/r/apex_pm/ut/...`.
- `https://oracleapex.cn/ords/r/test/ut/...` is used only as fallback evidence when primary pages time out or when the live Theme Style switch is needed for verification.
- Keep theme styles independent. Do not merge Iris, Redwood Light, Vita, or Vita variant tokens into a single design system unless a task explicitly asks for a comparison or derived multi-theme package.
