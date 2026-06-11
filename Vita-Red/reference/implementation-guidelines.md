# Vita - Red Reference Implementation Guidelines

Use this layer with `../DESIGN.md`, `../tokens/vita-red.tokens.json`, and `../styles/vita-red-open-design.css` when a prototype needs APEX-compatible implementation details.

## Rules

- Keep the prototype scoped to **Vita - Red** and `.apex-theme-vita-red`.
- Prefer APEX utility classes, CSS variables, Button Builder semantics, and Universal Theme component classes before adding custom structures.
- Use color/status modifiers for business states and keep arbitrary colors out of generated enterprise screens.
- Treat JavaScript Events and APIs as implementation notes, not visible product copy.
- Keep canonical URLs on `oracleapex.com`; use `oracleapex.cn` only as fallback evidence.
