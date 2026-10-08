import React, { useState } from "react";
import Dropdown from "../Containers/Dropdown";
import CheckboxItem from "./CheckboxItem";
import PageActionButton from "./PageActionButton";
import styles from "./DisplayOptions.module.scss";

// The "Display settings" popover from the events-list reference, next to the
// page's primary action: everything about how a list is drawn, nothing about
// what it contains. Each group is a radiogroup of raised slabs.
const SlidersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// A group of independent switches — which columns a table shows, say. The
// reference's slabs are for picking one of several; a set of toggles reads
// better as a plain list.
const CheckboxGroup = ({ title, note, options, onToggle }) => (
  <div className={styles.group}>
    <h3 className={styles.title}>{title}</h3>
    {note && <p className={styles.note}>{note}</p>}

    <div className={styles.checks}>
      {options.map((option) => (
        <CheckboxItem
          key={option.value}
          label={option.label}
          checked={option.checked}
          disabled={option.disabled}
          onChange={() => onToggle(option.value)}
        />
      ))}
    </div>
  </div>
);

const OptionGroup = ({ title, note, options, value, onChange }) => (
  <div className={styles.group} role="radiogroup" aria-label={title}>
    <h3 className={styles.title}>{title}</h3>
    {note && <p className={styles.note}>{note}</p>}

    {options.map((option) => {
      const active = option.value === value;

      return (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={active}
          className={[styles.opt, active ? styles.optActive : ""]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onChange(option.value)}
        >
          <span className={styles.mark} />
          <span>
            <span className={styles.label}>{option.label}</span>
            {option.hint && (
              <span className={styles.hint}>{option.hint}</span>
            )}
          </span>
        </button>
      );
    })}
  </div>
);

const DisplayOptions = ({ groups = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      className={styles.root}
      align="right"
      surface={false}
      status={open}
      onClose={() => setOpen(false)}
      activator={
        <PageActionButton
          type="secondary"
          icon={<SlidersIcon />}
          text={t("Display options")}
          ariaLabel={t("Display options")}
          onAction={() => setOpen((prev) => !prev)}
        />
      }
    >
      <div className={styles.pop}>
        {groups.map((group) =>
          group.type === "checkbox" ? (
            <CheckboxGroup
              key={group.key}
              title={group.title}
              note={group.note}
              options={group.options}
              onToggle={group.onToggle}
            />
          ) : (
            <OptionGroup
              key={group.key}
              title={group.title}
              note={group.note}
              options={group.options}
              value={group.value}
              onChange={(value) => {
                group.onChange(value);
                if (group.closeOnPick) setOpen(false);
              }}
            />
          ),
        )}
      </div>
    </Dropdown>
  );
};

export default DisplayOptions;
