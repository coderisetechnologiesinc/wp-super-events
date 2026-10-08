import React from "react";
import styles from "./Card.module.scss";

const PADDING = {
  none: styles.padNone,
  0: styles.padNone,
  sm: styles.padSm,
  md: styles.padMd,
  lg: styles.padLg,
};

// A surface panel. `padding` takes a token name (none | sm | md | lg); the
// legacy numeric 0 is still accepted. `className` remains a pass-through for
// layout-only tweaks from the call site.
const Card = ({
  className = "",
  padding = "none",
  align,
  maxWidth,
  variant, // undefined | "well"
  interactive = false,
  clip = false,
  children,
  ...rest
}) => {
  const classes = [
    styles.card,
    PADDING[padding] ?? styles.padNone,
    align === "center" ? styles.center : "",
    clip ? styles.clip : "",
    interactive ? styles.interactive : "",
    variant === "well" ? styles.well : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...rest} className={classes} style={{ maxWidth: maxWidth || "100%" }}>
      {children}
    </div>
  );
};

export default Card;
