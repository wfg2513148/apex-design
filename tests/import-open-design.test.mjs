import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, writeFile, mkdir } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  APEX_OPEN_DESIGN_THEMES,
  syncOpenDesignDesignSystems,
} from '../scripts/import-open-design.mjs';

async function createTheme(root, themeDir, slug) {
  const dir = path.join(root, themeDir);
  await mkdir(path.join(dir, 'styles'), { recursive: true });
  await mkdir(path.join(dir, 'examples'), { recursive: true });
  await mkdir(path.join(dir, 'tokens'), { recursive: true });
  await writeFile(
    path.join(dir, 'DESIGN.md'),
    `---\nname: "${themeDir}"\n---\n# ${themeDir}\n\nDesign rules for ${themeDir}.\n`,
  );
  await writeFile(path.join(dir, 'README.md'), `# ${themeDir}\n`);
  await writeFile(path.join(dir, 'design-system.manifest.json'), `{"themeStyle":"${themeDir}"}\n`);
  await writeFile(path.join(dir, 'tokens', `${slug}.tokens.json`), `{"source":{"themeStyle":"${themeDir}"}}\n`);
  await writeFile(path.join(dir, 'styles', `${slug}-open-design.css`), `:root { --accent: #056ac8; }\n`);
  await writeFile(
    path.join(dir, 'examples', 'enterprise-hr-dashboard.html'),
    `<!doctype html><title>${themeDir}</title><main>${themeDir}</main>\n`,
  );
}

async function createFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'apex-od-import-test-'));
  const sourceRoot = path.join(root, 'source');
  const targetRoot = path.join(root, 'open-design', '.od', 'design-systems');
  await mkdir(targetRoot, { recursive: true });

  for (const theme of APEX_OPEN_DESIGN_THEMES) {
    await createTheme(sourceRoot, theme.sourceDir, theme.slug);
  }

  return { root, sourceRoot, targetRoot };
}

test('syncOpenDesignDesignSystems overwrites existing Open Design theme files and preserves metadata identity', async () => {
  const { root, sourceRoot, targetRoot } = await createFixture();
  try {
    const targetId = 'oracle-apex-vita-theme-design-system';
    const targetDir = path.join(targetRoot, targetId);
    await mkdir(path.join(targetDir, 'revisions'), { recursive: true });
    await writeFile(
      path.join(targetDir, 'metadata.json'),
      JSON.stringify({
        title: 'Old Title',
        category: 'Old',
        status: 'draft',
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
        projectId: 'ds-oracle-apex-vita-theme-design-system',
      }, null, 2),
    );
    await writeFile(path.join(targetDir, 'stale.txt'), 'remove me');
    await writeFile(path.join(targetDir, 'revisions', 'keep.json'), '{"keep":true}\n');

    const result = await syncOpenDesignDesignSystems({
      sourceRoot,
      targetRoot,
      themes: ['Vita'],
      now: new Date('2026-06-11T01:02:03.000Z'),
    });

    assert.equal(result.synced.length, 1);
    assert.equal(result.synced[0].id, targetId);
    assert.deepEqual(await readdir(path.join(targetDir, 'revisions')), ['keep.json']);
    await assert.rejects(readFile(path.join(targetDir, 'stale.txt'), 'utf8'));
    assert.equal(await readFile(path.join(targetDir, 'DESIGN.md'), 'utf8'), await readFile(path.join(sourceRoot, 'Vita', 'DESIGN.md'), 'utf8'));
    assert.match(await readFile(path.join(targetDir, 'tokens.css'), 'utf8'), /--accent: #056ac8/);
    assert.match(await readFile(path.join(targetDir, 'components.html'), 'utf8'), /<!doctype html>/);

    const metadata = JSON.parse(await readFile(path.join(targetDir, 'metadata.json'), 'utf8'));
    assert.equal(metadata.title, 'Oracle APEX Vita Theme');
    assert.equal(metadata.category, 'Oracle APEX');
    assert.equal(metadata.status, 'published');
    assert.equal(metadata.createdAt, '2026-01-01T00:00:00.000Z');
    assert.equal(metadata.updatedAt, '2026-06-11T01:02:03.000Z');
    assert.equal(metadata.projectId, 'ds-oracle-apex-vita-theme-design-system');

    const manifest = JSON.parse(await readFile(path.join(targetDir, 'manifest.json'), 'utf8'));
    assert.equal(manifest.schemaVersion, 'od-design-system-project/v1');
    assert.equal(manifest.id, targetId);
    assert.equal(manifest.files.design, 'DESIGN.md');
    assert.equal(manifest.files.tokens, 'tokens.css');
    assert.equal(manifest.files.components, 'components.html');
    assert.equal(manifest.importMode, 'hybrid');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('syncOpenDesignDesignSystems can sync one selected theme without touching existing siblings', async () => {
  const { root, sourceRoot, targetRoot } = await createFixture();
  try {
    const siblingDir = path.join(targetRoot, 'oracle-apex-iris-theme-design-system');
    await mkdir(siblingDir, { recursive: true });
    await writeFile(path.join(siblingDir, 'DESIGN.md'), 'unchanged\n');

    const result = await syncOpenDesignDesignSystems({
      sourceRoot,
      targetRoot,
      themes: ['Vita-Red'],
      now: new Date('2026-06-11T01:02:03.000Z'),
    });

    assert.deepEqual(result.synced.map((item) => item.sourceDir), ['Vita-Red']);
    assert.equal(await readFile(path.join(siblingDir, 'DESIGN.md'), 'utf8'), 'unchanged\n');
    assert.match(
      await readFile(path.join(targetRoot, 'oracle-apex-vita-red-theme-design-system', 'DESIGN.md'), 'utf8'),
      /# Vita-Red/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('syncOpenDesignDesignSystems rejects a missing target root unless creation is explicit', async () => {
  const { root, sourceRoot } = await createFixture();
  try {
    await assert.rejects(
      syncOpenDesignDesignSystems({
        sourceRoot,
        targetRoot: path.join(root, 'missing', 'design-systems'),
        themes: ['Vita'],
      }),
      /Open Design design-systems target does not exist/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
