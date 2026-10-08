import { useRef, useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./PlansSupport.module.scss";

const links = [
  {
    title: "Documentation",
    note: "Find guides and product information.",
    url: "https://wpsuperevents.com",
    Icon: BookOpenIcon,
  },
  {
    title: "WordPress.org support",
    note: "Ask questions through the official support forum.",
    url: "https://wordpress.org/support/plugin/servvai-event-booking",
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "GitHub issues",
    note: "Report bugs and implementation issues.",
    url: "https://github.com/coderisetechnologiesinc/wp-super-events/issues",
    Icon: CodeBracketIcon,
  },
];
const label = (key) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
export default function SupportPage() {
  const diagnostics = window.servvData?.diagnostics || {};
  const report = JSON.stringify(diagnostics, null, 2);
  const [message, setMessage] = useState("");
  const reportField = useRef(null);
  async function copy() {
    try {
      await navigator.clipboard.writeText(report);
      setMessage("System report copied.");
    } catch {
      reportField.current?.focus();
      reportField.current?.select();
      setMessage("Copy the selected system report manually.");
    }
  }
  return (
    <PageWrapper flush>
      <PageContent>
        <PageHeader
          title="Help & support"
          description="Use the official support channels for product help, bug reports, and implementation questions."
        />
        <div className={styles.divider} />
        <div className={styles.supportLayout}>
          <div className={styles.stack}>
            <div className={styles.linkGrid}>
              {links.map(({ title, note, url, Icon }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.card} ${styles.resource}`}
                >
                  <span className={styles.resourceIcon}>
                    <Icon />
                  </span>
                  <h2>{title}</h2>
                  <p>{note}</p>
                  <ArrowTopRightOnSquareIcon className={styles.external} />
                </a>
              ))}
            </div>
            <section className={styles.card}>
              <h2>Safe diagnostics</h2>
              <p>
                This system report excludes tokens, secrets, and private
                integration credentials.
              </p>
              <textarea
                ref={reportField}
                className={styles.report}
                aria-label="System report"
                rows={12}
                value={report}
                readOnly
              />
              <div className={styles.reportActions}>
                <PageActionButton
                  text="Copy system report"
                  icon={<DocumentDuplicateIcon />}
                  size="sm"
                  onAction={copy}
                />
                <span role="status">{message}</span>
              </div>
            </section>
          </div>
          <aside className={`${styles.card} ${styles.system}`}>
            <span className={styles.eyebrow}>System information</span>
            <h2>Site health</h2>
            <dl className={styles.facts}>
              {Object.entries(diagnostics).map(([key, value]) => (
                <div key={key}>
                  <dt>{label(key)}</dt>
                  <dd>
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : String(value)}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
