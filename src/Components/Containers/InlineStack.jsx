import React from "react";
import styles from "./InlineStack.module.scss";

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

// Horizontal layout primitive.
// `align`: left (default, grows) | center | right. `justify="space"` spreads.
const InlineStack = ({
  className = "",
  forceAlign,
  align,
  gap,
  cardsLayout,
  justify,
  wrap = false,
  children,
  ...rest
}) => {
  const alignClass = forceAlign
    ? ""
    : align === "right"
      ? styles.right
      : align === "center"
        ? styles.center
        : styles.left;

  return (
    <div
      {...rest}
      className={[
        styles.stack,
        alignClass,
        justify === "space" ? styles.between : "",
        gap !== undefined ? (GAPS[gap] ?? "") : "",
        cardsLayout ? styles.cards : "",
        wrap ? styles.wrap : "",
        forceAlign || "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default InlineStack;
