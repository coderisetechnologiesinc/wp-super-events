import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./ModalShell.module.scss";

const SIZES = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
};

// The centred dialog from the design reference.
const ModalShell = ({
  title,
  eyebrow,
  description,
  footer,
  size = "lg",
  // Opt-in: the existing call sites close through their own controls only, so
  // the default keeps their behaviour unchanged.
  closeOnOverlay = false,
  children,
  onClose,
}) => {
  return (
    <div
      className={styles.overlay}
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className={`${styles.dialog} ${SIZES[size] || SIZES.lg}`}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>

          <button type="button" className={styles.close} onClick={onClose}>
            <XMarkIcon />
          </button>
        </div>

        <div className={styles.body}>{children}</div>

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default ModalShell;
