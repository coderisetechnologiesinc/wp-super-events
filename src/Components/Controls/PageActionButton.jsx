import React from "react";
import styles from "./PageActionButton.module.scss";

// The one button primitive for the admin shell. Styling lives in the SCSS
// module next door; `className` stays a pass-through for layout-only tweaks
// from the call site (width, flex, alignment).
const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
  "danger-secondary": styles.dangerSecondary,
  ghost: styles.ghost,
  "danger-ghost": styles.dangerGhost,
};

const SIZES = {
  md: styles.md,
  sm: styles.sm,
  xs: styles.xs,
};

const PageActionButton = ({
  text,
  icon,
  type = "primary", // primary | secondary | danger | danger-secondary | ghost | danger-ghost
  size = "md", // md | sm | xs
  onAction,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
  className = "",
  style = {},
  hidden,
}) => {
  const classes = [
    styles.button,
    VARIANTS[type] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    fullWidth ? styles.fullWidth : "",
    iconOnly ? styles.iconOnly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      onClick={onAction}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      style={style}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {!iconOnly && text && <span className={styles.label}>{text}</span>}
    </button>
  );
};

export default PageActionButton;
