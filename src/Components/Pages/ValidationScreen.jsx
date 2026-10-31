/* global servvData */
import React, { useEffect, useState } from "react";
import {
  ArrowPathIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import LiveChatButton from "../Controls/LiveChatButton";
import PageActionButton from "../Controls/PageActionButton";
import { injectIntercom } from "../../utilities/intercom";
import styles from "./ValidationScreen.module.scss";

// The gate shown instead of the admin app while the install is still finishing,
// or when it cannot be reached at all. `variant` picks the tile and its icon;
// everything else is copy supplied by the caller.
const VARIANTS = {
  progress: {
    tile: [styles.tile, styles.tileBusy].join(" "),
    Icon: ArrowPathIcon,
  },
  warning: {
    tile: [styles.tile, styles.tileWarning].join(" "),
    Icon: ExclamationTriangleIcon,
  },
  error: {
    tile: [styles.tile, styles.tileError].join(" "),
    Icon: XCircleIcon,
  },
};

const link = (href, text) => (
  <a className={styles.link} href={href} target="_blank" rel="noreferrer">
    {text}
  </a>
);

// Activation is scheduled from servv_plugin_activate(), so turning the plugin
// off and on again is the one fix an admin can apply without leaving WordPress
// — which is why it leads the list whenever activation is what failed.
const reactivateStep = () => (
  <>
    Deactivate and activate WP Super Events again on the{" "}
    <a className={styles.link} href={servvData.pluginsUrl || "plugins.php"}>
      Plugins page
    </a>{" "}
    — that re-runs the setup from scratch.
  </>
);

const TROUBLESHOOT_STEPS = [
  () => (
    <>
      Review our{" "}
      {link(
        "https://support.servv.ai/getting-started/troubleshooting/faq/",
        "Troubleshooting Guide",
      )}{" "}
      to resolve common setup issues.
    </>
  ),
  () => (
    <>
      Watch the WP Super Events{" "}
      {link("https://wpsuperevents.com/demo", "Demo")} to see how the platform
      works.
    </>
  ),
  () => (
    <>
      Explore our WP Super Events{" "}
      {link(
        "https://www.youtube.com/channel/UCiUGsW6_-iTqUw-tebA9CEQ",
        "Video Library",
      )}{" "}
      to learn more.
    </>
  ),
];

const ValidationScreen = ({
  variant = "progress",
  eyebrow = "Installation & setup",
  title,
  message,
  reactivate = false,
  troubleshoot = false,
  actions = [],
}) => {
  const [intercomLoaded, setIntercomLoaded] = useState(false);
  const { tile, Icon } = VARIANTS[variant] || VARIANTS.progress;

  const steps = [
    ...(reactivate ? [reactivateStep] : []),
    ...(troubleshoot ? TROUBLESHOOT_STEPS : []),
  ];

  useEffect(() => {
    setIntercomLoaded(injectIntercom());
  }, []);

  return (
    <div className={styles.screen}>
      <section className={styles.card}>
        <div className={styles.head}>
          <span className={tile} aria-hidden="true">
            <Icon />
          </span>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {message && <p className={styles.message}>{message}</p>}
        </div>

        {variant === "progress" && (
          <div
            className={styles.track}
            role="status"
            aria-live="polite"
            aria-busy="true"
            aria-label="Checking the installation"
          >
            <div className={styles.bar} />
          </div>
        )}

        {steps.length > 0 && (
          <ol className={styles.steps}>
            {steps.map((Step, index) => (
              // The list is fixed for a given screen, so the index is stable.
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className={styles.step}>
                <span>
                  <Step />
                </span>
              </li>
            ))}
          </ol>
        )}

        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((entry) => (
              <PageActionButton
                key={entry.text}
                type={entry.type || "secondary"}
                text={entry.text}
                onAction={entry.onAction}
              />
            ))}
          </div>
        )}

        <div className={styles.groove} />

        <div className={styles.support}>
          <span className={styles.supportLabel}>Need help?</span>
          <div className={styles.supportActions}>
            <a href="mailto:support@servv.ai" className={styles.mail}>
              <EnvelopeIcon />
              <span>Email Us</span>
            </a>
            {intercomLoaded && <LiveChatButton />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidationScreen;
