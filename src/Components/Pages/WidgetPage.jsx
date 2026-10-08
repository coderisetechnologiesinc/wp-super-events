import React, { useEffect, useMemo, useRef, useState } from 'react';
import PageWrapper from './PageWrapper';
import PageContent from '../Containers/PageContent';
import PageHeader from '../Containers/PageHeader';
import PageActionButton from '../Controls/PageActionButton';
import { Squares2X2Icon, FunnelIcon, RectangleStackIcon, SwatchIcon, PhotoIcon, CalendarDaysIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import schema from '../../../inc/widget-v2-schema.json';
import styles from './WidgetPage.module.scss';

const fields = schema.filter((field) => field.id);
const defaults = Object.fromEntries(fields.map((field) => [field.id, field.default ?? '']));
const colorSwatch = (value) => {
  const raw = String(value || '#000000');
  return raw.length === 4 || raw.length === 5 ? '#' + raw.slice(1, 4).split('').map((char) => char + char).join('') : raw.slice(0, 7);
};
const cleanText = (value) => String(value).replace(/[;{}<>\[\]"]/g, '').slice(0, 300);
export function widgetShortcode(config) {
  return `[servv_events ${fields.map((field) => {
    const value = config[field.id] ?? defaults[field.id];
    return `${field.id}="${field.type === 'checkbox' ? (value ? 'true' : 'false') : (field.type === 'text' ? cleanText(value) : String(value).replace(/["\[\]]/g, (char) => encodeURIComponent(char)))}"`;
  }).join(' ')}]`;
}
async function request(action, config, signal) {
  const response = await fetch(window.servvData.ajaxUrl, {
    method: 'POST', credentials: 'same-origin', signal,
    body: new URLSearchParams({ action, security: window.servvData.nonce, ...(config ? { config: JSON.stringify(config) } : {}) }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result?.data?.message || 'Unable to load widget settings.');
  return result.data;
}
const sections = [];
for (const field of schema) {
  if (field.type === 'header') sections.push({ title: field.content, fields: [] });
  else if (field.id) sections[sections.length - 1].fields.push(field);
}
const sectionIcons = [Squares2X2Icon, FunnelIcon, RectangleStackIcon, SwatchIcon, PhotoIcon, CalendarDaysIcon];
export default function WidgetPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [config, setConfig] = useState(defaults);
  const [saved, setSaved] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [preview, setPreview] = useState('');
  const [previewError, setPreviewError] = useState('');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewConfig, setPreviewConfig] = useState(null);
  const form = useRef(null);
  const shortcode = useMemo(() => widgetShortcode(config), [config]);
  const dirty = JSON.stringify(config) !== JSON.stringify(saved);

  useEffect(() => {
    const controller = new AbortController();
    request('servv_widget_v2_settings', null, controller.signal).then((data) => {
      setConfig(data.config); setSaved(data.config); setPreviewConfig(data.config);
    }).catch((error) => { if (error.name !== 'AbortError') setError(error.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (!previewConfig) return;
    const controller = new AbortController();
    setPreviewLoading(true); setPreviewError('');
    request('servv_widget_v2_preview', previewConfig, controller.signal).then((data) => setPreview(data.html))
      .catch((error) => { if (error.name !== 'AbortError') setPreviewError(error.message); })
      .finally(() => { if (!controller.signal.aborted) setPreviewLoading(false); });
    return () => controller.abort();
  }, [previewConfig]);

  function change(field, value) {
    setConfig((current) => ({ ...current, [field.id]: field.type === 'range' ? Number(value) : value }));
    setNotice('');
  }
  async function save(event) {
    event.preventDefault(); setSaving(true); setError(''); setNotice('');
    try {
      const result = await request('servv_widget_v2_settings', config);
      setConfig(result.config); setSaved(result.config); setPreviewConfig(result.config); setNotice('Widget settings saved.');
    } catch (error) { setError(error.message); }
    finally { setSaving(false); }
  }
  async function copy() {
    if (!form.current?.reportValidity()) return;
    try { await navigator.clipboard.writeText(shortcode); setNotice('Shortcode copied.'); }
    catch { setError('Select the shortcode below and copy it manually.'); }
  }
  function chooseImage(field) {
    if (!window.wp?.media) { setError('The media library is unavailable. Enter an image URL instead.'); return; }
    const frame = window.wp.media({ title: 'Choose widget background', button: { text: 'Use image' }, library: { type: 'image' }, multiple: false });
    frame.on('select', () => change(field, frame.state().get('selection').first().toJSON().url));
    frame.open();
  }
  function renderField(field) {
    if (field.id === 'view_mode') return <div className={styles.modes} role="radiogroup" aria-label="Display mode">
      {field.options.map((option) => <label key={option.value} className={config.view_mode === option.value ? styles.selected : ''}>
        <input type="radio" name="view_mode" value={option.value} checked={config.view_mode === option.value} onChange={() => change(field, option.value)} />
        <span>{option.label}</span>
      </label>)}
    </div>;
    if (field.type === 'checkbox') return <label className={styles.toggle} key={field.id}>
      <input type="checkbox" role="switch" checked={!!config[field.id]} onChange={(event) => change(field, event.target.checked)} />
      <span>{field.label}{field.info && <small>{field.info}</small>}</span>
    </label>;
    return <label className={styles.field} key={field.id}>
      <span>{field.label}</span>
      {field.type === 'select' ? <select value={config[field.id]} onChange={(event) => change(field, event.target.value)}>
        {field.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select> : field.type === 'color' ? <div className={styles.colorControl}>
        <input type="color" aria-label={`${field.label} color picker`} value={colorSwatch(config[field.id])}
          onChange={(event) => change(field, event.target.value + (String(config[field.id]).length === 9 ? String(config[field.id]).slice(7) : ''))} />
        <input type="text" aria-label={`${field.label} hex value`} value={config[field.id]} pattern="#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8}" required
          onChange={(event) => change(field, event.target.value)} />
      </div> : <input
        type={field.type === 'range' ? 'number' : field.type === 'color' ? 'color' : field.type === 'url' ? 'url' : 'text'}
        value={config[field.id] ?? ''} min={field.min} max={field.max} step={field.step}
        required={field.type === 'range'} onChange={(event) => change(field, event.target.value)}
      />}
      {field.id === 'background_image' && <PageActionButton type="secondary" size="sm" text="Choose from media library" onAction={() => chooseImage(field)} />}
      {field.info && <small>{field.info}</small>}
    </label>;
  }
  return <PageWrapper loading={loading} withBackground flush>
    <PageContent className={styles.page} maxWidth="100%">
      <form ref={form} onSubmit={save} onInvalidCapture={(event) => {
        const firstInvalid = form.current.querySelector(':invalid');
        const section = event.target.closest('[data-section]');
        if (section && Number(section.dataset.section) !== activeSection) {
          event.preventDefault();
          if (event.target !== firstInvalid) return;
          setActiveSection(Number(section.dataset.section));
          requestAnimationFrame(() => { firstInvalid.focus(); firstInvalid.reportValidity(); });
        }
      }}>
        <PageHeader eyebrow="WP Super Events by ServvAI" title="Widget"
          description="Choose how events appear on the public page, then copy the shortcode."
          actions={<div className={styles.headerActions}>
            {dirty && <span className={styles.dirty}>Unsaved changes</span>}
            <PageActionButton text={saving ? 'Saving…' : 'Save settings'} disabled={loading || saving} onAction={() => form.current.requestSubmit()} />
          </div>} />
        {error && <p className={styles.error} role="alert">{error}</p>}
        {notice && <p className={styles.notice} role="status">{notice}</p>}
        <div className={styles.divider} />
        <div className={styles.layout}>
          <div className={styles.sections}>
            <nav className={styles.navigation} aria-label="Widget settings">
              {[...sections, { title: 'Embed your widget', fields: [] }].map((section, index) => {
                const Icon = sectionIcons[index] || CodeBracketIcon;
                return <button key={section.title} type="button" aria-pressed={activeSection === index}
                  className={activeSection === index ? styles.active : ''} onClick={() => setActiveSection(index)}>
                  <span className={styles.navIcon}><Icon aria-hidden="true" /></span><span>{section.title}</span>
                  {section.fields.length > 0 && <small>{section.fields.length}</small>}
                </button>;
              })}
            </nav>
            {sections.map((section, index) => <section key={section.title} data-section={index} hidden={activeSection !== index} className={styles.card}>
              <header><h2>{section.title}</h2></header>
              <div className={styles.fields}>{section.fields.map((field) => <React.Fragment key={field.id}>{renderField(field)}</React.Fragment>)}</div>
            </section>)}
            <section hidden={activeSection !== sections.length} className={`${styles.card} ${styles.embed}`}>
              <header><h2>Embed your widget</h2><p>Copy this shortcode into a WordPress page or a Shortcode block. It includes all selected settings.</p></header>
              <textarea aria-label="Widget shortcode" readOnly value={shortcode} rows={6} onFocus={(event) => event.target.select()} />
              <div className={styles.embedActions}><PageActionButton text="Copy shortcode" onAction={copy} disabled={loading} />
                <span>{dirty ? 'Unsaved changes are included in this shortcode.' : 'Settings saved.'}</span></div>
              <p className={styles.hint}>Use <code>[servv_events]</code> to follow the saved defaults. A shortcode with attributes keeps its own appearance.</p>
            </section>
          </div>
          <aside className={styles.preview}>
            <div className={styles.previewHead}><div><strong className={styles.live}>Live preview</strong><span className={styles.previewMeta}>Live events. Registration and payment are disabled in preview.</span></div>
              <PageActionButton type="secondary" size="sm" text={previewLoading ? 'Loading…' : 'Update preview'} onAction={() => { if (form.current.reportValidity()) setPreviewConfig({ ...config }); }} disabled={loading || previewLoading} /></div>
            {previewError && <p role="alert" className={styles.error}>{previewError}</p>}
            {preview && <iframe title="Events widget preview" srcDoc={preview} className={styles.frame} />}
          </aside>
        </div>
      </form>
    </PageContent>
  </PageWrapper>;
}
