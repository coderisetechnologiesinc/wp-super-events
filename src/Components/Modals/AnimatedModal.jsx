import { useEffect, useState } from "react";
import styles from "./AnimatedModal.module.scss";

const AnimatedModal = ({ open, onClose, children }) => {
  const [visible, setVisible] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    }
  }, [open]);

  const close = () => {
    if (closing) return;

    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose?.();
    }, 160);
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ""}`}
      onClick={close}
    >
      <div
        className={`${styles.panel} ${closing ? styles.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {typeof children === "function" ? children({ close }) : children}
      </div>
    </div>
  );
};

export default AnimatedModal;
