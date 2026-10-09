import React from "react";
import styles from "./PageContent.module.scss";

// A full-size page shell with responsive gutters and 24px content spacing.
// `className` lands on the column, where the call sites have always put it.
const PageContent = ({
  className = "",
  maxWidth,
  flush = false,
  children,
  ...rest
}) => (
  <div className={`${styles.shell} ${flush ? styles.flush : ""}`.trim()}>
    <div
      {...rest}
      className={`${styles.container} ${className}`.trim()}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {children}
    </div>
  </div>
);

export default PageContent;
