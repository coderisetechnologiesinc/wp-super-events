import { useEffect, useId, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import CheckboxItem from "../Controls/CheckboxItem";
import { generateEventData } from "../../utilities/events";
import { asImageDataUrl, prepareCoverDataUrl } from "./coverImage";
import styles from "./GenerateDescription.module.scss";

// The API's own limits: a longer prompt or base description is refused before
// anything is generated.
const PROMPT_LIMIT = 2000;
const DESCRIPTION_LIMIT = 10000;

const PLACEHOLDER =
  "Write a welcoming beginner yoga description, around 60 words. Do not include dates, times or emojis.";

// Named filter values are what the generator reads; ids mean nothing to it.
const filterNames = (ids, list = []) =>
  (Array.isArray(ids) ? ids : [ids])
    .filter((id) => id !== null && id !== undefined && id !== "")
    .map((id) => list.find((item) => Number(item.id) === Number(id))?.name)
    .filter(Boolean);

export const generationFilters = (eventFilters = {}, filtersList = {}) => {
  const filters = {
    locations: filterNames(eventFilters.location_id, filtersList.locations),
    members: filterNames(eventFilters.members, filtersList.members),
    categories: filterNames(eventFilters.category_id, filtersList.categories),
    languages: filterNames(eventFilters.language_id, filtersList.languages),
  };
  return Object.fromEntries(
    Object.entries(filters).filter(([, names]) => names.length),
  );
};

export default function GenerateDescription({
  title,
  startDatetime,
  timezone,
  filters,
  description = "",
  onDescription,
  onCover,
  onBusyChange,
}) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  // A description already in the field is what the writer most often wants
  // shortened or re-toned, so rewriting is the default once one exists.
  const [rewrite, setRewrite] = useState(true);
  const [withImage, setWithImage] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [tags, setTags] = useState([]);

  // Saving while the generator is still writing would store the old text and
  // then overwrite the field under the writer, so the form blocks on this.
  useEffect(() => {
    onBusyChange?.(busy);
    return () => onBusyChange?.(false);
  }, [busy, onBusyChange]);

  const current = description.trim();
  // Over the limit the API refuses rewrite mode, so only generation is left.
  const canRewrite = Boolean(current) && current.length <= DESCRIPTION_LIMIT;
  const rewriting = canRewrite && rewrite;

  const generate = async () => {
    const instruction = prompt.trim();
    if (!instruction || busy) return;
    setBusy(true);
    setError("");
    try {
      const body = {
        prompt: instruction,
        title: title || "",
        start_datetime: startDatetime || "",
        timezone: timezone || "",
        ...(Object.keys(filters || {}).length ? { filters } : {}),
        ...(rewriting ? { existing_description: current } : {}),
      };
      const data = await generateEventData(body, { withImage });
      if (!data?.description) throw new Error("The generator returned no text.");
      onDescription(data.description);
      setTags(Array.isArray(data.tags) ? data.tags : []);
      const image = withImage ? asImageDataUrl(data.image) : "";
      if (image && onCover) onCover(await prepareCoverDataUrl(image));
    } catch (failure) {
      setError(
        failure?.response?.data?.message ||
          failure?.message ||
          "The description could not be generated. Try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <SparklesIcon className={styles.triggerIcon} />
        {rewriting ? "Rewrite description" : "Generate description"}
      </button>

      {open && (
        <div className={styles.panel} id={panelId}>
          <label className={styles.field}>
            <span>What should the description say?</span>
            <textarea
              rows="3"
              autoFocus
              value={prompt}
              maxLength={PROMPT_LIMIT}
              disabled={busy}
              placeholder={PLACEHOLDER}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <small>
              The event title, date and filters are sent along with the prompt.{" "}
              {prompt.length}/{PROMPT_LIMIT}
            </small>
          </label>

          <div className={styles.options}>
            {canRewrite && (
              <CheckboxItem
                label="Rewrite the current description"
                checked={rewrite}
                disabled={busy}
                onChange={(e) => setRewrite(e.target.checked)}
              />
            )}
            {onCover && (
              <CheckboxItem
                label="Also generate a cover image"
                checked={withImage}
                disabled={busy}
                onChange={(e) => setWithImage(e.target.checked)}
              />
            )}
          </div>

          {Boolean(current) && !canRewrite && (
            <small className={styles.note}>
              The current description is longer than {DESCRIPTION_LIMIT}{" "}
              characters, so it cannot be rewritten — a new one will be written
              instead.
            </small>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.generate}
              disabled={busy || !prompt.trim()}
              onClick={generate}
            >
              {busy ? (
                <span className={styles.spinner} aria-hidden="true" />
              ) : (
                <SparklesIcon className={styles.triggerIcon} />
              )}
              {busy
                ? "Generating…"
                : rewriting
                ? "Rewrite description"
                : "Generate description"}
            </button>
            <button
              type="button"
              className={styles.cancel}
              disabled={busy}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {busy && (
            <div
              className={styles.progress}
              role="status"
              aria-label="Generating the description"
            >
              <span />
            </div>
          )}

          {error && (
            <small role="alert" className={styles.error}>
              {error}
            </small>
          )}

          {tags.length > 0 && (
            <div className={styles.tags}>
              <strong>Suggested tags</strong>
              <div className={styles.tagList}>
                {tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
