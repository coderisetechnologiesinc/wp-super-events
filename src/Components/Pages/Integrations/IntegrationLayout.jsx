import BreadCrumbs from "../../Menu/BreadCrumbs";
import PageWrapper from "../PageWrapper";
import PageContent from "../../Containers/PageContent";
import PageHeader from "../../Containers/PageHeader";
import styles from "./IntegrationLayout.module.scss";

export function IntegrationSection({ title, description, children }) {
  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <div className={styles.cardBody}>{children}</div>
    </section>
  );
}
export function IntegrationAccount({ label, status = "Connected" }) {
  return label ? (
    <div className={styles.account}>
      <span className={styles.avatar} aria-hidden="true">
        {String(label).slice(0, 2).toUpperCase()}
      </span>
      <div>
        <span className={styles.eyebrow}>Account</span>
        <strong>{label}</strong>
      </div>
      <span
        className={`${styles.status} ${
          status === "Connected" ? styles.connected : ""
        }`}
      >
        {status}
      </span>
    </div>
  ) : (
    <p className={styles.hint}>Please connect your account.</p>
  );
}
export default function IntegrationLayout({
  title,
  description,
  loading = false,
  actions,
  children,
}) {
  return (
    <PageWrapper flush loading={loading}>
      <PageContent>
        <BreadCrumbs
          breadcrumbs={[
            { label: "Integrations", to: "/integrations" },
            { label: title },
          ]}
        />
        <PageHeader
          className={styles.header}
          title={title}
          description={description}
          actions={actions}
        />
        <div className={styles.divider} />
        <div className={styles.sections}>{children}</div>
      </PageContent>
    </PageWrapper>
  );
}
