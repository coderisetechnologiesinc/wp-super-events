import React, { Fragment, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import NewButtonGroup from "../Controls/NewButtonGroup";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./FiltersPanel.module.scss";

// The order and the wording the reference drawer uses. Anything the API sends
// that is not listed here still renders, after these, under its own key.
const GROUPS = {
  locations: { label: "Location", placeholder: "Any location" },
  categories: { label: "Category", placeholder: "Any category" },
  members: { label: "Member", placeholder: "Any member" },
  languages: { label: "Language", placeholder: "Any language" },
};

// Format maps onto the events endpoint, which knows two kinds of event:
// offline and zoom. Picking the kind that is already active clears it.
const FORMATS = [
  { value: "offline", label: "In-person", dot: styles.dotOffline },
  { value: "zoom", label: "Online", dot: styles.dotZoom },
];

const titleCase = (key) => key.charAt(0).toUpperCase() + key.slice(1);

// The Filters drawer: format chips (only where online events are possible) and
// one select per filter group, over the list the caller is showing.
const FiltersPanel = ({
  open = false,
  onClose = () => {},
  filtersList = {},
  selectedFilters = {},
  onSelect = () => {},
  onClear = () => {},
  isApplied = false,
  // Format is only meaningful once a Zoom account can produce online events.
  showFormat = false,
  eventType = "all",
  onEventTypeChange = () => {},
  // The date filters, when the caller's Display options put them in here:
  // { placement, ranges: [{label, value}], activeRange, onRangeChange, dates,
  //   onDatesChange, minDate }.
  dateFilters,
  // A caller whose filters are not filter groups — the bookings list, say —
  // passes its own sections instead: [{ key, title, content }], and what
  // Apply should do beyond closing the drawer.
  sections,
  onApply,
  appliedCount,
}) => {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const groupKeys = [
    ...Object.keys(GROUPS).filter((key) => filtersList[key]?.length > 0),
    ...Object.keys(filtersList).filter(
      (key) => !GROUPS[key] && filtersList[key]?.length > 0,
    ),
  ];

  const activeCount =
    appliedCount ??
    Object.values(selectedFilters).reduce(
      (total, group) => total + (Array.isArray(group) ? group.length : 0),
      0,
    ) + (showFormat && eventType !== "all" ? 1 : 0);

  // react-select hands back option values as strings; the filter state keeps
  // the ids the API sent, so each change is replayed as id-level toggles.
  const handleGroupChange = (group, picked) => {
    const items = filtersList[group] || [];
    const byValue = new Map(items.map((item) => [String(item.id), item.id]));
    const before = (selectedFilters[group] || []).map(String);
    const after = (picked || []).map(String);

    [
      ...before.filter((value) => !after.includes(value)),
      ...after.filter((value) => !before.includes(value)),
    ].forEach((value) => onSelect(group, byValue.get(value) ?? value));
  };

  const renderGroup = (group) => {
    const { label, placeholder } = GROUPS[group] || {
      label: titleCase(group),
      placeholder: `Any ${group}`,
    };

    return (
      <NewSelectControl
        key={group}
        multiple
        label={label}
        helpText={placeholder}
        options={(filtersList[group] || []).map((item) => ({
          value: String(item.id),
          label: item.name,
        }))}
        value={(selectedFilters[group] || []).map(String)}
        onChange={(picked) => handleGroupChange(group, picked)}
      />
    );
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{t("Filters")}</h2>
            <p className={styles.subtitle}>
              {activeCount > 0
                ? `${activeCount} active · applies to this list only`
                : "Applies to this list only"}
            </p>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close filters"
          >
            <XMarkIcon />
          </button>
        </div>

        <div className={styles.body}>
          {dateFilters?.placement === "filters" && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>{t("Date")}</div>

                <div className={styles.fields}>
                  <NewButtonGroup
                    fullWidth
                    title={t("Range")}
                    buttons={(dateFilters.ranges || []).map((range) => ({
                      value: range.value,
                      label: t(range.label),
                    }))}
                    active={dateFilters.activeRange}
                    onChange={dateFilters.onRangeChange}
                  />

                  <div>
                    <div className={styles.fieldLabel}>{t("Dates")}</div>
                    <NewDatePickerControl
                      fullWidth
                      value={dateFilters.dates}
                      onChange={dateFilters.onDatesChange}
                      label={t("Select date")}
                      minDate={dateFilters.minDate}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.divider} />
            </>
          )}

          {sections?.length > 0 &&
            sections.map((section, index) => (
              <Fragment key={section.key}>
                {index > 0 && <div className={styles.divider} />}

                <div className={styles.section}>
                  <div className={styles.sectionTitle}>{section.title}</div>
                  <div className={styles.fields}>{section.content}</div>
                </div>
              </Fragment>
            ))}

          {!sections && showFormat && (
            <>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>{t("Format")}</div>
                <div className={styles.chips}>
                  {FORMATS.map((format) => {
                    const active = eventType === format.value;

                    return (
                      <button
                        key={format.value}
                        type="button"
                        aria-pressed={active}
                        className={[styles.chip, active ? styles.chipActive : ""]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() =>
                          onEventTypeChange(active ? "all" : format.value)
                        }
                      >
                        <span className={`${styles.dot} ${format.dot}`} />
                        {t(format.label)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.divider} />
            </>
          )}

          {!sections && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>{t("Attributes")}</div>

              {groupKeys.length > 0 ? (
                <div className={styles.fields}>{groupKeys.map(renderGroup)}</div>
              ) : (
                <p className={styles.emptyGroups}>
                  {t(
                    "No filter groups yet — add locations, categories, languages or members in Settings → Filters.",
                  )}
                </p>
              )}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <PageActionButton
            type="secondary"
            text={t("Reset")}
            disabled={!isApplied && eventType === "all"}
            onAction={() => {
              onClear();
              onEventTypeChange("all");
            }}
          />
          <PageActionButton
            type="primary"
            text={t("Apply")}
            onAction={() => {
              onApply?.();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
