import React from "react";
import settingsStyles from "../Pages/Settings/SettingsForm.module.scss";

// variant "default" lays the title column out with flex and lets it shrink;
// "form" pins it to a fixed grid column, which keeps stacked form rows aligned.
const COLUMN_LAYOUT = {
  default: "flex flex-col md:flex-row gap-4 md:gap-8 items-start",
  form: "grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-4 md:gap-8",
};

const HEADER_LAYOUT = {
  default: "flex-shrink-0 w-full md:w-32 lg:w-64",
  form: "",
};

const CONTENT_LAYOUT = {
  default: "flex-1 w-full min-w-0",
  form: "w-full",
};

const AnnotatedSection = ({
  title,
  description,
  children,
  variant = "default",
  className = "",
  titleClassName = "",
  contentClassName = "",
}) => {
  const layout = COLUMN_LAYOUT[variant] ? variant : "default";

  if (variant === "settings") {
    return (
      <div className={`${settingsStyles.row} ${className}`}>
        <div className={settingsStyles.label}>
          <h3 className={titleClassName}>{title}</h3>
        </div>
        <div className={`${settingsStyles.value} ${contentClassName}`}>
          {children}
          {description && <p className={settingsStyles.hint}>{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={`annotated-section ${COLUMN_LAYOUT[layout]} ${className}`}>
      {/* Title and description: full width on mobile, left column on desktop */}
      <div className={`annotated-section-header ${HEADER_LAYOUT[layout]}`}>
        <h3
          className={`text-sm font-semibold text-gray-900 mb-1 ${titleClassName}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-sm text-gray-600 hidden md:block leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Content: full width on mobile, right column on desktop */}
      <div
        className={`annotated-section-content ${CONTENT_LAYOUT[layout]} ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnnotatedSection;
