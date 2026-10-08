import React, { useRef, useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

// `surface` draws the white card around the menu. Pass false when the child is
// already a surface of its own (CalendarInline) so it isn't framed twice.
const Dropdown = ({
  activator,
  status,
  children,
  onClose,
  align = "right",
  surface = true,
  className = "",
  dropdownClassName = "",
  ...rest
}) => {
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({ minWidth: 240 });

  useEffect(() => {
    if (!status) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [status, onClose]);

  useEffect(() => {
    if (status && dropdownRef.current) {
      const dropdown = dropdownRef.current.querySelector(
        ".dropdown-content-fix"
      );
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        let newStyle = { minWidth: 240 };
        if (rect.right > viewportWidth) {
          newStyle.right = 0;
          newStyle.left = "auto";
        }
        if (rect.left < 0) {
          newStyle.left = 0;
          newStyle.right = "auto";
        }
        setDropdownStyle({ ...newStyle });
      }
    }
  }, [status, children]);

  return (
    <div
      ref={dropdownRef}
      className={[styles.root, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {activator}
      {status && (
        <div
          className={[styles.menu, dropdownClassName].filter(Boolean).join(" ")}
          style={
            align === "left"
              ? { minWidth: 240, left: 0, right: "auto" }
              : { minWidth: 240, right: 0, left: "auto" }
          }
        >
          <div
            className={[
              "dropdown-content-fix",
              surface ? styles.surface : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={dropdownStyle}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
