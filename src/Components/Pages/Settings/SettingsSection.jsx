// components/Settings/SettingsSection.jsx
import React, { useState } from "react";
import BreadCrumbs from "../../Menu/BreadCrumbs";
import PageActionButton from "../../Controls/PageActionButton";
import ServiceCard from "../../Containers/ServiceCard";
import PageHeader from "../../Containers/PageHeader";
import styles from "./SettingsForm.module.scss";

const SettingsSection = ({
  icon: Icon,
  title = "General Settings",
  description = "Configure your general settings",
  editDescription,
  statusText = "Settings configured",
  status = "available", // "available" | "unavailable"
  children,
  onSave,
  onCancel,
  onView, // callback for View button
  direct = false, // if true, shows View button instead of Edit settings
  showActions = true,
  sectionId,
  activeSection,
  setActiveSection,
}) => {
  const isEditing = activeSection === sectionId;
  const [mode, setMode] = useState("card");
  const handleSave = () => {
    if (onSave) onSave();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();

    setMode("closing");

    setTimeout(() => {
      setMode("card");
    }, 250);
    setTimeout(() => {
      setActiveSection(null);
    }, 248);
  };

  if (mode === "card" && !isEditing) {
    // CARD VIEW — the Settings landing card from the design reference.
    return (
      <ServiceCard
        glyph={Icon ? <Icon /> : null}
        title={title}
        description={description}
        status={status === "available" ? t("Configured") : t("Not configured")}
        tone={status === "available" ? "on" : "neutral"}
        meta={statusText}
        actionLabel={direct && onView ? t("View") : t("Configure")}
        onAction={() => {
          if (direct && onView) {
            onView();
            return;
          }
          setMode("editing");
          setActiveSection(sectionId);
        }}
      />
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <BreadCrumbs
          breadcrumbs={[
            { label: t("Settings"), action: handleCancel },
            { label: title },
          ]}
        />
        <PageHeader
          title={title}
          description={editDescription || description}
          actions={
            showActions ? (
              <>
                <PageActionButton
                  text={t("Cancel")}
                  type="secondary"
                  onAction={handleCancel}
                />
                <PageActionButton
                  text={t("Save changes")}
                  type="primary"
                  onAction={handleSave}
                />
              </>
            ) : null
          }
        >
          <div className={styles.divider} />
        </PageHeader>
      </div>
      {sectionId === "general" ? (
        children
      ) : (
        <div className={styles.panel}>
          <div className={styles.group}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={sectionId === "billing" ? styles.billing : undefined}>
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

export default SettingsSection;
