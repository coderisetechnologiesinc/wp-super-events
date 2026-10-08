import React from "react";
import styles from "./PageHeader.module.scss";

// The page header from the design reference: eyebrow, title, description on the
// left, actions on the right.
//
// Passing `title` renders that structure. Without it the children are laid out
// in the same row, which is how the existing call sites use the component.
const PageHeader = ({
  className = "",
  bottomLine,
  eyebrow,
  title,
  description,
  actions,
  children,
  ...rest
}) => {
  const classes = [styles.header, bottomLine ? styles.bottomLine : "", className]
    .filter(Boolean)
    .join(" ");

  if (!title) {
    return (
      <div {...rest} className={classes}>
        <div className={styles.row}>{children}</div>
      </div>
    );
  }

  return (
    <header {...rest} className={classes}>
      <div className={styles.row}>
        <div className={styles.text}>
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {children}
    </header>
  );
};

export default PageHeader;
