import React from "react";
import styles from "./BlockStack.module.scss";

// Vertical layout primitive. `gap` keeps the historic numeric scale
// (4 → 16px); the token names are accepted too for new code.
const GAPS = {
  0: styles.gap0,
  1: styles.gap1,
  2: styles.gap2,
  3: styles.gap3,
  4: styles.gap4,
  5: styles.gap5,
  6: styles.gap6,
  8: styles.gap8,
  none: styles.gap0,
  xs: styles.gap1,
  sm: styles.gap2,
  md: styles.gap4,
  lg: styles.gap6,
  xl: styles.gap8,
};

const BlockStack = ({
  gap = 4,
  cardsLayout,
  action,
  disabled,
  onAction,
  className = "",
  children,
  ...rest
}) => (
  <div
    {...rest}
    onClick={onAction ? () => onAction() : undefined}
    className={[
      styles.stack,
      GAPS[gap] ?? GAPS[4],
      cardsLayout ? styles.cards : "",
      action || onAction ? styles.clickable : "",
      disabled ? styles.disabled : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </div>
);

export default BlockStack;
