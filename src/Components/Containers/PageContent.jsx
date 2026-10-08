import React from "react";
import styles from "./PageContent.module.scss";

// The page shell from the design reference: a padded frame around a centred
// 1180px column whose children are spaced 24px apart.
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
