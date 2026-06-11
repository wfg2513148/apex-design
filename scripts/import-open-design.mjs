#!/usr/bin/env node
import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SOURCE_ROOT = path.resolve(SCRIPT_DIR, '..');

export const APEX_OPEN_DESIGN_THEMES = [
  {
    sourceDir: 'Iris',
    slug: 'iris',
    id: 'oracle-apex-iris-theme-design-system',
    title: 'Oracle APEX Iris Theme',
  },
  {
    sourceDir: 'Redwood-Light',
    slug: 'redwood-light',
    id: 'oracle-apex-redwood-light-theme-design-system',
    title: 'Oracle APEX Redwood Light Theme',
  },
  {
    sourceDir: 'Vita',
    slug: 'vita',
    id: 'oracle-apex-vita-theme-design-system',
    title: 'Oracle APEX Vita Theme',
  },
  {
    sourceDir: 'Vita-Dark',
    slug: 'vita-dark',
    id: 'oracle-apex-vita-dark-theme-design-system',
    title: 'Oracle APEX Vita Dark Theme',
  },
  {
    sourceDir: 'Vita-Red',
    slug: 'vita-red',
    id: 'oracle-apex-vita-red-theme-design-system',
    title: 'Oracle APEX Vita Red Theme',
  },
  {
    sourceDir: 'Vita-Slate',
    slug: 'vita-slate',
    id: 'oracle-apex-vita-slate-theme-design-system',
    title: 'Oracle APEX Vita Slate Theme',
  },
];

export async function syncOpenDesignDesignSystems(options = {}) {
  const sourceRoot = path.resolve(options.sourceRoot ?? DEFAULT_SOURCE_ROOT);
  const targetRoot = path.resolve(options.targetRoot ?? await detectOpenDesignTargetRoot(sourceRoot));
  const selectedThemes = selectThemes(options.themes);
  const now = options.now instanceof Date ? options.now : new Date();

  await assertDirectory(sourceRoot, `source root does not exist: ${sourceRoot}`);
  if (options.createTarget) {
    await mkdir(targetRoot, { recursive: true });
  } else {
    await assertDirectory(
      targetRoot,
      `Open Design design-systems target does not exist: ${targetRoot}. Pass --target-root or --create-target.`,
    );
  }

  const synced = [];
  for (const theme of selectedThemes) {
    const sourceDir = path.join(sourceRoot, theme.sourceDir);
    await validateThemeSource(sourceDir, theme);

    const targetDir = path.join(targetRoot, theme.id);
    const existingMetadata = await readJsonIfExists(path.join(targetDir, 'metadata.json'));
    const metadata = buildMetadata(theme, sourceDir, existingMetadata, now);
    const odManifest = buildOpenDesignManifest(theme, sourceDir, now);

    if (!options.dryRun) {
      await mkdir(targetDir, { recursive: true });
      await removeTargetContents(targetDir);
      await copyDirectory(sourceDir, targetDir);
      await writeFile(path.join(targetDir, 'tokens.css'), await renderTokensCss(sourceDir, theme), 'utf8');
      await writeFile(path.join(targetDir, 'components.html'), await renderComponentsHtml(sourceDir), 'utf8');
      await writeJson(path.join(targetDir, 'manifest.json'), odManifest);
      await writeJson(path.join(targetDir, 'metadata.json'), metadata);
    }

    synced.push({
      id: theme.id,
      title: theme.title,
      sourceDir: theme.sourceDir,
      sourcePath: sourceDir,
      targetDir,
    });
  }

  return { sourceRoot, targetRoot, dryRun: Boolean(options.dryRun), synced };
}

export async function verifyOpenDesignCatalog(baseUrl, synced) {
  const url = baseUrl === 'auto' || !baseUrl ? await detectOpenDesignApiUrl() : normalizeBaseUrl(baseUrl);
  const resp = await fetch(`${url}/api/design-systems`, {
    headers: { Origin: url },
    signal: AbortSignal.timeout(3000),
  });
  if (!resp.ok) {
    throw new Error(`Open Design catalog verification failed: HTTP ${resp.status}`);
  }
  const json = await resp.json();
  const systems = Array.isArray(json.designSystems) ? json.designSystems : [];
  const ids = new Set(systems.map((item) => item.id));
  const missing = synced
    .map((item) => `user:${item.id}`)
    .filter((id) => !ids.has(id));
  if (missing.length > 0) {
    throw new Error(`Open Design catalog is missing imported systems: ${missing.join(', ')}`);
  }
  return {
    url,
    catalogCount: systems.length,
    verifiedIds: synced.map((item) => `user:${item.id}`),
  };
}

export async function detectOpenDesignApiUrl() {
  const candidates = [
    process.env.OPEN_DESIGN_URL,
    'http://127.0.0.1:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5175',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    ...(await localListeningHttpCandidates()),
  ].filter(Boolean).map(normalizeBaseUrl);

  const seen = new Set();
  for (const candidate of candidates) {
    if (seen.has(candidate)) continue;
    seen.add(candidate);
    try {
      const resp = await fetch(`${candidate}/api/design-systems`, {
        headers: { Origin: candidate },
        signal: AbortSignal.timeout(1200),
      });
      if (!resp.ok) continue;
      const json = await resp.json();
      if (Array.isArray(json.designSystems)) return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  throw new Error('could not detect a running Open Design API. Pass --verify-url or --no-verify.');
}

async function localListeningHttpCandidates() {
  try {
    const output = await execFileText('lsof', ['-nP', '-iTCP', '-sTCP:LISTEN']);
    const ports = new Set();
    for (const match of output.matchAll(/TCP\s+(?:127\.0\.0\.1|\*|\[?::1\]?):(\d+)\s+\(LISTEN\)/g)) {
      ports.add(match[1]);
    }
    return [...ports].map((port) => `http://127.0.0.1:${port}`);
  } catch {
    return [];
  }
}

function execFileText(command, args) {
  return new Promise((resolve, reject) => {
    execFile(command, args, { timeout: 2000, maxBuffer: 1024 * 1024 }, (err, stdout) => {
      if (err) reject(err);
      else resolve(stdout);
    });
  });
}

function selectThemes(requested) {
  if (!requested || requested.length === 0) return APEX_OPEN_DESIGN_THEMES;
  const wanted = new Set(requested.flatMap((item) => String(item).split(',')).map((item) => item.trim()).filter(Boolean));
  const selected = APEX_OPEN_DESIGN_THEMES.filter((theme) =>
    wanted.has(theme.sourceDir) || wanted.has(theme.slug) || wanted.has(theme.id) || wanted.has(`user:${theme.id}`),
  );
  if (selected.length !== wanted.size) {
    const known = new Set(selected.flatMap((theme) => [theme.sourceDir, theme.slug, theme.id, `user:${theme.id}`]));
    const unknown = [...wanted].filter((item) => !known.has(item));
    throw new Error(`unknown theme selection: ${unknown.join(', ')}`);
  }
  return selected;
}

async function detectOpenDesignTargetRoot(sourceRoot) {
  const envTarget = process.env.OPEN_DESIGN_USER_DESIGN_SYSTEMS_DIR;
  if (envTarget) return envTarget;

  const envRoot = process.env.OPEN_DESIGN_ROOT;
  if (envRoot) return path.join(envRoot, '.od', 'design-systems');

  const candidates = [
    path.join(path.dirname(sourceRoot), 'open-design', '.od', 'design-systems'),
    path.join(os.homedir(), 'open-design', '.od', 'design-systems'),
  ];
  for (const candidate of candidates) {
    try {
      const info = await stat(candidate);
      if (info.isDirectory()) return candidate;
    } catch {
      // Try next candidate.
    }
  }
  return candidates[0];
}

async function validateThemeSource(sourceDir, theme) {
  const required = [
    'DESIGN.md',
    'README.md',
    'design-system.manifest.json',
    path.join('tokens', `${theme.slug}.tokens.json`),
    path.join('styles', `${theme.slug}-open-design.css`),
    path.join('examples', 'enterprise-hr-dashboard.html'),
  ];
  for (const rel of required) {
    await assertFile(path.join(sourceDir, rel), `${theme.sourceDir} is missing ${rel}`);
  }
}

async function removeTargetContents(targetDir) {
  let entries = [];
  try {
    entries = await readdir(targetDir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name === 'revisions') continue;
    await rm(path.join(targetDir, entry.name), { recursive: true, force: true });
  }
}

async function copyDirectory(sourceDir, targetDir) {
  await mkdir(targetDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.DS_Store') continue;
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      await copyFile(sourcePath, targetPath);
    }
  }
}

async function renderTokensCss(sourceDir, theme) {
  const css = await readFile(path.join(sourceDir, 'styles', `${theme.slug}-open-design.css`), 'utf8');
  return [
    '/*',
    ` * Open Design tokens adapter for ${theme.title}.`,
    ` * Generated from ${theme.sourceDir}/styles/${theme.slug}-open-design.css by scripts/import-open-design.mjs.`,
    ' */',
    '',
    css.trimEnd(),
    '',
  ].join('\n');
}

async function renderComponentsHtml(sourceDir) {
  return readFile(path.join(sourceDir, 'examples', 'enterprise-hr-dashboard.html'), 'utf8');
}

function buildOpenDesignManifest(theme, sourceDir, now) {
  return {
    schemaVersion: 'od-design-system-project/v1',
    id: theme.id,
    name: theme.title,
    category: 'Oracle APEX',
    description: `${theme.title} imported from ${theme.sourceDir}.`,
    source: {
      type: 'local',
      path: sourceDir,
      importedAt: now.toISOString(),
    },
    files: {
      design: 'DESIGN.md',
      tokens: 'tokens.css',
      components: 'components.html',
    },
    usage: 'README.md',
    importMode: 'hybrid',
    craft: {
      applies: ['color', 'typography', 'spacing', 'layout', 'components'],
      suggested: [],
      exemptions: [],
    },
    preview: {
      dir: 'examples',
      pages: [
        {
          path: 'examples/enterprise-hr-dashboard.html',
          role: 'enterprise application example',
          title: 'Enterprise HR Dashboard',
        },
      ],
    },
    sourceFiles: {
      scanned: 'design-system.manifest.json',
      evidence: 'reference/implementation-guidelines.md',
      tokens: `tokens/${theme.slug}.tokens.json`,
      snippets: 'catalog/component-catalog.json',
    },
  };
}

function buildMetadata(theme, sourceDir, existingMetadata, now) {
  return {
    ...(isObject(existingMetadata) ? existingMetadata : {}),
    title: theme.title,
    category: 'Oracle APEX',
    surface: 'web',
    status: 'published',
    artifactMode: 'agent-managed',
    createdAt: isObject(existingMetadata) && typeof existingMetadata.createdAt === 'string'
      ? existingMetadata.createdAt
      : now.toISOString(),
    updatedAt: now.toISOString(),
    provenance: {
      ...(isObject(existingMetadata?.provenance) ? existingMetadata.provenance : {}),
      companyBlurb: 'Oracle APEX Universal Theme',
      githubUrls: ['https://github.com/wfg2513148/apex-design'],
      sourceNotes: `Synced from ${sourceDir} by scripts/import-open-design.mjs`,
    },
  };
}

async function readJsonIfExists(filePath) {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch {
    return null;
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function assertDirectory(dir, message) {
  try {
    const info = await stat(dir);
    if (info.isDirectory()) return;
  } catch {
    // Report below.
  }
  throw new Error(message);
}

async function assertFile(filePath, message) {
  try {
    const info = await stat(filePath);
    if (info.isFile()) return;
  } catch {
    // Report below.
  }
  throw new Error(message);
}

function normalizeBaseUrl(value) {
  return String(value || 'http://127.0.0.1:5174').replace(/\/+$/, '');
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseCliArgs(argv) {
  const options = {
    sourceRoot: DEFAULT_SOURCE_ROOT,
    themes: [],
    verifyUrl: process.env.OPEN_DESIGN_URL || 'auto',
    verify: true,
    json: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = () => {
      index += 1;
      if (index >= argv.length) throw new Error(`${arg} requires a value`);
      return argv[index];
    };

    if (arg === '--source-root') options.sourceRoot = next();
    else if (arg === '--target-root') options.targetRoot = next();
    else if (arg === '--open-design-root') options.targetRoot = path.join(next(), '.od', 'design-systems');
    else if (arg === '--theme') options.themes.push(next());
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--create-target') options.createTarget = true;
    else if (arg === '--verify-url') options.verifyUrl = next();
    else if (arg === '--no-verify') options.verify = false;
    else if (arg === '--json') options.json = true;
    else if (arg === '--help' || arg === '-h') options.help = true;
    else throw new Error(`unknown argument: ${arg}`);
  }
  return options;
}

function printHelp() {
  console.log(`Usage:
  node scripts/import-open-design.mjs [options]

Options:
  --theme <name>              Sync one theme. Repeat or comma-separate. Default: all 6 themes.
  --source-root <path>        apex-design repository root. Default: current repository.
  --target-root <path>        Open Design user design-systems directory.
  --open-design-root <path>   Open Design repository root; uses <path>/.od/design-systems.
  --create-target            Create target directory if it does not exist.
  --dry-run                  Validate and print planned sync without writing.
  --verify-url <url>          Verify against Open Design HTTP API. Default: auto-detect or OPEN_DESIGN_URL.
  --no-verify                Skip Open Design HTTP catalog verification.
  --json                     Print machine-readable JSON output.
  --help                     Show this help.

Environment:
  OPEN_DESIGN_USER_DESIGN_SYSTEMS_DIR  Direct target directory override.
  OPEN_DESIGN_ROOT                     Open Design root directory.
  OPEN_DESIGN_URL                      Open Design web/API URL.
`);
}

async function main() {
  const options = parseCliArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  const result = await syncOpenDesignDesignSystems(options);
  let verification = null;
  if (options.verify && !options.dryRun) {
    try {
      verification = await verifyOpenDesignCatalog(options.verifyUrl, result.synced);
    } catch (err) {
      verification = {
        warning: err instanceof Error ? err.message : String(err),
      };
    }
  }

  const output = { ...result, verification };
  if (options.json) {
    console.log(JSON.stringify(output, null, 2));
    return;
  }

  console.log(`${result.dryRun ? 'Planned' : 'Synced'} ${result.synced.length} Open Design design systems`);
  console.log(`Source: ${result.sourceRoot}`);
  console.log(`Target: ${result.targetRoot}`);
  for (const item of result.synced) {
    console.log(`- ${item.title}: ${item.sourceDir} -> user:${item.id}`);
  }
  if (verification?.verifiedIds) {
    console.log(`Verified in Open Design catalog at ${verification.url}: ${verification.verifiedIds.length} ids`);
  } else if (verification?.warning) {
    console.warn(`Warning: ${verification.warning}`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  });
}
