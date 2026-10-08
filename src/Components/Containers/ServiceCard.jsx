import React from "react";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./ServiceCard.module.scss";

// One card of the Settings and Integrations landings, from the design
// reference: a mark and a status on top, the copy, a groove, then what the
// card is for and the way into it.
//
// `tone` follows the reference's STATUS table: on = connected/configured,
// info = informational, warn = needs attention, neutral = everything else.
const TONES = {
  on: [styles.statusOn, styles.dotOn],
  info: [styles.statusInfo, styles.dotInfo],
  warn: [styles.statusWarn, styles.dotWarn],
};

const ServiceCard = ({
  glyph,
  tile = "tint", // tint | raised
  title,
  description,
  status,
  tone = "neutral",
  meta,
  actionLabel,
  actionType = "secondary",
  onAction,
  disabled = false,
  accountLabel,
  onDisconnect,
  busy = false,
}) => {
  const [statusTone, dotTone] = TONES[tone] || [];
  const clickable = Boolean(onAction) && !disabled && !onDisconnect;

  return (
    <div
      className={[
        styles.card,
        clickable ? styles.clickable : "",
        disabled ? styles.dimmed : "",
      ]
        .filter(Boolean)
        .join(" ")}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? onAction : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onAction();
              }
            }
          : undefined
      }
    >
      <div className={styles.top}>
        <span
          className={[
            styles.tile,
            tile === "raised" ? styles.tileRaised : styles.tileTint,
          ].join(" ")}
          aria-hidden="true"
        >
          {glyph}
        </span>

        {status && (
          <span
            className={[styles.status, statusTone].filter(Boolean).join(" ")}
          >
            <span className={[styles.dot, dotTone].filter(Boolean).join(" ")} />
            {status}
          </span>
        )}
      </div>

      <div>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {accountLabel && (
        <div className={styles.account}>
          <span className={styles.avatar} aria-hidden="true">
            {accountLabel.slice(0, 2).toUpperCase()}
          </span>
          <div>
            <span className={styles.accountTitle}>Account</span>
            <span className={styles.accountLabel} title={accountLabel}>
              {accountLabel}
            </span>
          </div>
        </div>
      )}
      <div className={styles.groove} />

      <div className={styles.foot}>
        <span className={styles.meta}>{meta}</span>

        <div className={styles.actions}>
          {onDisconnect && (
            <PageActionButton
              type="danger-secondary"
              size="sm"
              text="Disconnect"
              disabled={busy}
              onAction={(e) => {
                e?.stopPropagation?.();
                onDisconnect();
              }}
            />
          )}
          {actionLabel && (
            <PageActionButton
              type={actionType}
              size="sm"
              text={actionLabel}
              disabled={disabled || busy}
              // The card already handles the click; this keeps it from firing
              // twice and still gives the action its own focus stop.
              onAction={(e) => {
                e?.stopPropagation?.();
                onAction?.();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
