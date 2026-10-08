import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import postcss from 'postcss';
import { compile } from 'sass';

const SOURCE_DIR = 'src/styles';
const OUT_DIR = 'dist';
const UNSCOPED_AT_RULES = /^(keyframes|font-face|property)$/;
const GLASS_FILTER_ID = 'url(#svv-glass-dist)';

const scopeSelector = (selector, scope) => {
  if (selector.startsWith('.svv-wgt-v2-container')) {
    return selector.replace(/^\.svv-wgt-v2-container/, `.svv-wgt-v2-container${scope}`);
  }

  if (/^\.svv-wgt-v2(?![\w-])/.test(selector)) {
    return `.svv-wgt-v2-container${scope} ${selector}`;
  }

  throw new Error(`unscopable selector: ${selector}`);
};

const scopeCss = (css, scope) => {
  const root = postcss.parse(css);

  root.walkRules((rule) => {
    if (rule.parent.type === 'atrule' && UNSCOPED_AT_RULES.test(rule.parent.name)) return;

    rule.selectors = rule.selectors.map((selector) => scopeSelector(selector, scope));
  });

  root.walkDecls('filter', (decl) => {
    if (decl.value.includes(GLASS_FILTER_ID)) decl.value = 'var(--svv-glass-distortion, none)';
  });

  return root.toString();
};

const render = (path) => compile(path, { style: 'compressed' }).css;

const sheets = (dir) =>
  readdirSync(join(SOURCE_DIR, dir))
    .filter((file) => file.endsWith('.scss') && !file.startsWith('_'))
    .map((file) => basename(file, '.scss'));

mkdirSync(OUT_DIR, { recursive: true });

for (const skin of sheets('skins')) {
  const css = render(join(SOURCE_DIR, 'skins', `${skin}.scss`));

  writeFileSync(
    join(OUT_DIR, `servv-events-v2-skin-${skin}.css`),
    `${scopeCss(css, `[data-svv-skin="${skin}"]`)}\n`,
  );
}

for (const id of sheets('schemes')) {
  const base = id.slice(0, id.indexOf('-'));
  const scheme = id.slice(id.indexOf('-') + 1);
  const css = render(join(SOURCE_DIR, 'schemes', `${id}.scss`));
  const scope = `[data-svv-skin="${base}"][data-svv-scheme="${scheme}"]`;

  writeFileSync(join(OUT_DIR, `servv-events-v2-scheme-${id}.css`), `${scopeCss(css, scope)}\n`);
}

writeFileSync(
  join(OUT_DIR, 'servv-events-v2-mobile.css'),
  `${render(join(SOURCE_DIR, 'mobile.scss'))}\n`,
);
