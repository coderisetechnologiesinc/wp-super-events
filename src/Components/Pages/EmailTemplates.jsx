import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DocumentTextIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import BreadCrumbs from "../Menu/BreadCrumbs";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "../../utilities/adminApi";
import { useServvStore } from "../../store/useServvStore";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./EmailTemplates.module.scss";
import { groupEmailTemplates } from "./emailTemplates/groups.mjs";

function RichEditor({ value, disabled, onChange }) {
  const container = useRef(null);
  const callback = useRef(onChange);
  callback.current = onChange;
  useEffect(() => {
    const element = document.createElement("div");
    container.current.appendChild(element);
    const editor = new Quill(element, {
      theme: "snow",
      modules: { toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["link", "clean"]] },
    });
    editor.clipboard.dangerouslyPasteHTML(value || "", "silent");
    editor.enable(!disabled);
    editor.on("text-change", (_delta, _old, source) => {
      if (source === "user") callback.current(editor.getSemanticHTML());
    });
    const host = container.current;
    return () => { host.innerHTML = ""; };
  }, [disabled]);
  return <div ref={container} />;
}
const contentOf = (template) => ({ subject: template?.subject || "", text: template?.text || "" });
const differs = (draft, template) => draft && (draft.subject !== (template.subject || "") || draft.text !== (template.text || ""));

export default function EmailTemplates() {
  const navigate = useNavigate();
  const settings = useServvStore((state) => state.settings);
  const [templates, setTemplates] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [drafts, setDrafts] = useState({});
  const [mode, setMode] = useState("Rich Text");
  const [revision, setRevision] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const selected = templates.find((template) => template.id === selectedId);
  const groups = groupEmailTemplates(templates);
  const draft = drafts[selectedId] || contentOf(selected);
  const dirty = selected && differs(draft, selected);
  const restricted = !settings || Number(settings.current_plan?.id) === 1;
  const disabled = restricted || saving;
  const headers = { "X-WP-Nonce": window.servvData.nonce };

  async function load() {
    setLoading(true); setError("");
    try {
      const response = await axios.get("/wp-json/servv-plugin/v1/wordpress/templates", { headers });
      const items = response.data?.templates;
      if (!Array.isArray(items)) throw new Error("Invalid templates response");
      const sorted = [...items].sort((a, b) => (a.description || "").localeCompare(b.description || ""));
      setTemplates(sorted); setSelectedId(groupEmailTemplates(sorted)[0]?.templates[0]?.id ?? null); setDrafts({});
    } catch { setError("Unable to load email templates. Please try again."); }
    finally { setLoading(false); }
  }
  useEffect(() => { load(); }, []);
  function change(field, value) {
    setDrafts((current) => ({ ...current, [selectedId]: { ...(current[selectedId] || contentOf(selected)), [field]: value } }));
    setNotice("");
  }
  async function save() {
    if (!selected || disabled || !dirty) return;
    if (!draft.subject.trim()) { setError("Enter an email subject before saving."); return; }
    const id = selectedId;
    const payload = { ...draft };
    setSaving(true); setError(""); setNotice("");
    try {
      await axios.patch(`/wp-json/servv-plugin/v1/wordpress/templates/${id}`, payload, { headers });
      setTemplates((current) => current.map((template) => template.id === id ? { ...template, ...payload } : template));
      setNotice("Email template saved.");
    } catch { setError("Unable to save this template. Your changes are still available."); }
    finally { setSaving(false); }
  }
  function reset() {
    setDrafts((current) => ({ ...current, [selectedId]: contentOf(selected) }));
    setRevision((current) => current + 1); setError(""); setNotice("");
  }
  const preview = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;padding:24px;font:14px/1.6 system-ui,sans-serif;color:#17112d;overflow-wrap:anywhere}img,table{max-width:100%}img{height:auto}a{color:#6224e7}</style></head><body>${draft.text}</body></html>`;
  return <PageWrapper flush loading={loading}>
    <PageContent className={styles.page}>
      <BreadCrumbs
        breadcrumbs={[
          { label: t("Settings"), to: "/settings" },
          { label: t("Email templates") },
        ]}
      />
      <PageHeader eyebrow="WP Super Events by ServvAI" title="Email templates"
        description="Customize the emails attendees receive for bookings, reminders, and event updates."
        actions={<div className={styles.actions}>
          <PageActionButton text="View emails" type="secondary" onAction={() => navigate("/notifications")} />
          <PageActionButton text={saving ? "Saving…" : "Save template"} onAction={save} disabled={loading || disabled || !dirty} />
        </div>} />
      <div className={styles.divider} />
      {error && <div className={styles.message} role="alert">{error}{!selected && <PageActionButton text="Try again" size="sm" type="secondary" onAction={load} disabled={loading} />}</div>}
      {notice && <p className={styles.message} role="status">{notice}</p>}
      {restricted && !loading && <p className={styles.message}>Email template editing is available on a paid plan.</p>}
      {!loading && !error && !templates.length && <section className={styles.card}><h2>No email templates available</h2><p>Your notification templates will appear here when available.</p></section>}
      {!!templates.length && <div className={styles.layout}>
        <nav className={styles.templateList} aria-label="Email templates">
          <span className={styles.eyebrow}>Templates</span>
          {groups.map((group, index) => <section key={group.label} className={styles.templateGroup} aria-labelledby={`email-template-group-${index}`}>
            <h2 id={`email-template-group-${index}`} className={styles.groupHeading}><span>{group.label}</span><small className={styles.groupCount}>{group.templates.length}</small></h2>
            {group.templates.map((template) => <button type="button" key={template.id} disabled={saving}
            aria-pressed={selectedId === template.id} className={`${styles.templateItem} ${selectedId === template.id ? styles.active : ""}`}
            onClick={() => { setSelectedId(template.id); setError(""); setNotice(""); }}>
            <DocumentTextIcon className={styles.templateIcon} aria-hidden="true" />
            <span className={styles.templateName}>{template.description || `Template ${template.id}`}</span>
            {differs(drafts[template.id], template) && <small className={styles.unsavedBadge}>Unsaved</small>}
            <ChevronRightIcon className={styles.templateArrow} aria-hidden="true" />
          </button>)}
          </section>)}
        </nav>
        {selected && <div className={styles.workspace}>
          <section className={styles.card}>
            <div className={styles.cardHeader}><h2>{selected.description}</h2>{dirty && <span className={styles.eyebrow}>Unsaved changes</span>}</div>
            <label className={styles.field}><span>Email subject</span><input value={draft.subject} disabled={disabled} onChange={(event) => change("subject", event.target.value)} placeholder="Enter email subject" /></label>
            <div className={styles.cardHeader}><h3>Email content</h3><div className={styles.modes} aria-label="Editor mode">
              {["Rich Text", "HTML"].map((item) => <button type="button" key={item} aria-pressed={mode === item} disabled={saving} className={mode === item ? styles.active : ""} onClick={() => setMode(item)}>{item}</button>)}
            </div></div>
            <div className={styles.editor}>
              {mode === "Rich Text" ? <RichEditor key={`${selectedId}-${revision}`} value={draft.text} disabled={disabled} onChange={(value) => change("text", value)} />
                : <textarea aria-label="Email HTML" value={draft.text} disabled={disabled} onChange={(event) => change("text", event.target.value)} spellCheck={false} rows={16} />}
            </div>
            {Object.keys(selected.params || {}).length > 0 && <details className={styles.parameters}><summary>Template parameters</summary><p>Use these placeholders to include event and attendee details in your email.</p><dl>{Object.entries(selected.params).map(([key, description]) => <div key={key}><dt><code>{key}</code></dt><dd>{String(description)}</dd></div>)}</dl></details>}
            <div className={styles.footer}><PageActionButton text="Discard changes" type="secondary" size="sm" onAction={reset} disabled={disabled || !dirty} /></div>
          </section>
          <aside className={`${styles.card} ${styles.preview}`}><div className={styles.cardHeader}><h2>Email preview</h2><span className={styles.eyebrow}>Live preview</span></div>
            <p>Placeholders are replaced with actual details when the email is sent.</p>
            <div className={styles.subject}><span>Subject</span><strong>{draft.subject || "No subject"}</strong></div>
            <iframe title="Email template preview" sandbox="" srcDoc={preview} referrerPolicy="no-referrer" />
          </aside>
        </div>}
      </div>}
    </PageContent>
  </PageWrapper>;
}
