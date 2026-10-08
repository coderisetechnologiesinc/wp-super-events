import React from "react";
import styles from "./NewButtonGroup.module.scss";

// A segment is either a plain string (its own label and value) or an object:
// { value, label, icon, title }. An entry with an icon and no label renders as
// a square icon segment — that is how the dashboard's view switcher is built.
const normalize = (button) =>
  typeof button === "object" && button !== null
    ? {
        value: button.value ?? button.label,
        label: button.label,
        icon: button.icon,
        title: button.title ?? button.label,
      }
    : { value: button, label: button, icon: null, title: button };

const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
  view,
  ariaLabel,
  // Fill the container and split it evenly — how a labelled group reads in a
  // stacked form such as the Filters drawer.
  fullWidth = false,
}) => {
  return (
    <div
      className={[styles.wrapper, fullWidth ? styles.wrapperFull : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {title && <div className={styles.title}>{title}</div>}

      <div
        className={[styles.track, fullWidth ? styles.trackFull : ""]
          .filter(Boolean)
          .join(" ")}
        role="tablist"
        aria-label={ariaLabel}
      >
        {buttons.map((button) => {
          const segment = normalize(button);
          const isActive = active === segment.value;
          const iconOnly = Boolean(segment.icon) && !segment.label;

          return (
            <button
              key={segment.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={iconOnly ? segment.title : undefined}
              title={segment.title}
              disabled={disabled}
              onClick={() => onChange(segment.value)}
              className={[
                styles.segment,
                isActive ? styles.active : styles.inactive,
                view ? styles.compact : "",
                iconOnly ? styles.iconOnly : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {segment.icon && (
                <span className={styles.icon}>{segment.icon}</span>
              )}
              {segment.label && (
                <span className={styles.text}>{segment.label}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NewButtonGroup;
