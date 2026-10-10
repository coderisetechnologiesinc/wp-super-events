import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import { isFreePlan } from "../../utilities/planCapabilities";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./SetupGuide.module.scss";

// The setup banner from the design reference.
//
// Progress is never stored: each step is a question the live store answers, so
// connecting an account on another screen fills its bar the next time this
// renders. The primary action points at whatever step is still open.
const buildSteps = (state) => [
  {
    key: "defaults",
    title: t("Configure business and event defaults"),
    description: t(
      "Review timezone, default duration, ticket defaults, checkout, notifications, and widget settings.",
    ),
    action: t("Open settings"),
    route: "/settings",
    done: state.defaultsSet,
  },
  {
    key: "google",
    title: t("Connect Google Calendar and Gmail"),
    description: t(
      "Sync events to your Google Calendar and send registration email from your Gmail account.",
    ),
    action: t("Manage Google"),
    // Deep-link to whichever half of the Google connection is still missing.
    route: state.gmailConnected
      ? "/integrations/calendars"
      : "/integrations/gmail",
    done: state.gmailConnected && state.calendarConnected,
  },
  // Zoom and Stripe are paid-plan integrations: a free shop has nothing to
  // connect them to, and their accounts are not read on that plan either, so
  // nagging about them would be a step that can never complete.
  {
    key: "zoom",
    title: t("Connect Zoom"),
    description: t(
      "Enable online event creation and meeting-link generation for virtual events.",
    ),
    action: t("Manage Zoom"),
    route: "/integrations/zoom",
    done: state.zoomConnected,
    available: state.paidPlan,
  },
  {
    key: "stripe",
    title: t("Connect Stripe"),
    description: t(
      "Accept paid registrations and configure the payout account for ticket sales.",
    ),
    action: t("Manage Stripe"),
    route: "/integrations/stripe",
    done: state.stripeConnected,
    available: state.paidPlan,
  },
  {
    key: "event",
    title: t("Create your first event"),
    description: t(
      "Create a one-time or recurring event, add tickets, and publish it to your site.",
    ),
    action: t("Create event"),
    route: "/events/new",
    done: state.hasEvents,
  },
];

const SetupGuide = ({ hasEvents = false }) => {
  const settings = useServvStore((s) => s.settings);
  // Every connection flag below starts out false and is only answered by the
  // account sync, so this says whether they mean anything yet.
  const accountsSynced = useServvStore((s) => s.accountsSynced);
  // The calendar read follows the account batch, and the Google step below
  // needs both halves before it can say whether it is done.
  const calendarSynced = useServvStore((s) => s.calendarSynced);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const stripeConnected = useServvStore((s) => s.stripeConnected);
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const calendarConnected = useServvStore((s) => s.calendarConnected);

  const navigate = useNavigate();
  // The option the native onboarding screen writes — the banner starts hidden
  // for a shop that already dismissed it there.
  const [dismissed, setDismissed] = useState(
    Boolean(servvData?.setupDismissed),
  );

  // SettingsStep writes both of these; either one missing means the defaults
  // were never reviewed.
  const defaultsSet = useMemo(() => {
    const raw = settings?.settings?.admin_dashboard;
    if (!raw) return false;
    try {
      const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
      return Boolean(parsed?.default_timezone && parsed?.default_event_type);
    } catch {
      return false;
    }
  }, [settings?.settings?.admin_dashboard]);

  const paidPlan = !isFreePlan(settings);

  const steps = useMemo(
    () =>
      buildSteps({
        defaultsSet,
        gmailConnected,
        calendarConnected,
        zoomConnected,
        stripeConnected,
        hasEvents,
        paidPlan,
      }).filter((step) => step.available !== false),
    [
      defaultsSet,
      gmailConnected,
      calendarConnected,
      zoomConnected,
      stripeConnected,
      hasEvents,
      paidPlan,
    ],
  );

  const doneCount = steps.filter((step) => step.done).length;
  const next = steps.find((step) => !step.done);

  const handleDismiss = () => {
    setDismissed(true);
    if (servvData?.setupDismissUrl) {
      // Persists `servv_onboarding_status`, the same option the WordPress
      // notice used to set; the redirect it answers with is of no interest.
      fetch(servvData.setupDismissUrl, { credentials: "same-origin" }).catch(
        () => {},
      );
    }
  };

  // Nothing to nag about before the settings and the account answers land,
  // once every step is done, or after the shop dismissed it. Rendering while
  // the connections are still unknown shows a guide whose steps are all open
  // and then retracts it as the answers arrive.
  if (!settings || !accountsSynced || !calendarSynced || dismissed || !next)
    return null;

  return (
    <section className={styles.card}>
      <span className={styles.mark}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 8v5M12 16.5v.5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      </span>

      <div className={styles.body}>
        <div className={styles.title}>
          {t("Finish your setup")} — {doneCount} {t("of")} {steps.length}{" "}
          {t("steps done")}
        </div>
        <p className={styles.text}>{next.description}</p>

        <div
          className={styles.progress}
          role="progressbar"
          aria-label={t("Setup progress")}
          aria-valuenow={doneCount}
          aria-valuemin={0}
          aria-valuemax={steps.length}
        >
          {steps.map((step) => (
            <span
              key={step.key}
              className={[styles.bar, step.done ? styles.barDone : ""]
                .filter(Boolean)
                .join(" ")}
              title={step.done ? `${step.title} ✓` : step.title}
            />
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <PageActionButton
          type="primary"
          text={next.action}
          onAction={() => navigate(next.route)}
        />
        <PageActionButton
          type="secondary"
          text={t("Dismiss")}
          onAction={handleDismiss}
        />
      </div>
    </section>
  );
};

export default SetupGuide;
