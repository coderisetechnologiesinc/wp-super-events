import React from "react";
import {
  ArrowPathRoundedSquareIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import CheckboxItem from "../../Controls/CheckboxItem";
import { eventKey, eventRoutePayload, openEventPost } from "../../../utilities/events";
import styles from "./EventRows.module.scss";

// "Option A · Floating rows" from the events-list reference.
//
// The row mapper gives us title/venue/date/time/format/recurrence/status, so
// the reference's Category column is filled by recurrence — the one attribute
// the dashboard list actually carries.
const MARK = {
  offline: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z",
  online: "M4 7h11v10H4zM15 11l5-3v8l-5-3z",
};

const EventRows = ({
  events = [],
  onOpen = () => {},
  onDelete,
  onOccurrences,
  selectedKeys = new Set(),
  onToggleSelect,
}) => (
  <div className={styles.list}>
    <div
      className={[styles.head, onToggleSelect ? "" : styles.noPick]
        .filter(Boolean)
        .join(" ")}
    >
      {onToggleSelect && <div />}
      <div>{t("Event")}</div>
      <div>{t("Schedule")}</div>
      <div>{t("Format")}</div>
      <div>{t("Recurrence")}</div>
      <div>{t("Visibility")}</div>
      <div />
    </div>

    {events.map((event) => {
      const online = event.type === "Zoom";
      const live = event.status === "On sale";
      const picked = selectedKeys.has(eventKey(event));

      return (
        <div
          key={eventKey(event)}
          role="button"
          tabIndex={0}
          className={[
            styles.row,
            live ? "" : styles.muted,
            picked ? styles.picked : "",
            onToggleSelect ? "" : styles.noPick,
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onOpen(eventRoutePayload(event))}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen(eventRoutePayload(event));
            }
          }}
        >
          {onToggleSelect && (
            <div
              className={styles.pick}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <CheckboxItem
                checked={picked}
                ariaLabel={`${t("Select")} ${event.title}`}
                onChange={() => onToggleSelect(event)}
              />
            </div>
          )}

          <div className={styles.event}>
            <span
              className={[
                styles.mark,
                online ? styles.markOnline : styles.markOffline,
              ].join(" ")}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={online ? MARK.online : MARK.offline} />
              </svg>
            </span>

            <div className={styles.eventText}>
              <div className={styles.title}>{event.title}</div>
              <div className={styles.venue}>
                {event.location || event.timezone || "—"}
              </div>
            </div>
          </div>

          <div>
            <div className={styles.date}>{event.date || t("Recurring")}</div>
            <div className={styles.time}>
              {event.time ? `${event.time} · ${event.timezone || ""}` : "—"}
            </div>
          </div>

          <div className={styles.format}>
            {online ? t("Online") : t("In-person")}
          </div>

          <div className={styles.recurrence}>{t(event.recurrence)}</div>

          <div>
            <span
              className={[styles.status, live ? styles.statusLive : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={[styles.dot, live ? styles.dotLive : ""]
                  .filter(Boolean)
                  .join(" ")}
              />
              {t(event.status)}
            </span>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.action}
              title={t("View event")}
              onClick={(e) => {
                e.stopPropagation();
                openEventPost(event.post_id);
              }}
            >
              <EyeIcon />
            </button>

            <button
              type="button"
              className={styles.action}
              title={t("Registrants")}
              onClick={(e) => {
                e.stopPropagation();
                onOpen(eventRoutePayload(event, { registrants: true }));
              }}
            >
              <UserCircleIcon />
            </button>

            <button
              type="button"
              className={styles.action}
              title={t("Edit event")}
              onClick={(e) => {
                e.stopPropagation();
                onOpen(eventRoutePayload(event));
              }}
            >
              <PencilSquareIcon />
            </button>

            {onOccurrences && event.recurrence === "Recurring" && (
              <button
                type="button"
                className={styles.action}
                title={t("View occurrences")}
                onClick={(e) => {
                  e.stopPropagation();
                  onOccurrences(event);
                }}
              >
                <ArrowPathRoundedSquareIcon />
              </button>
            )}

            {onDelete && (
              <button
                type="button"
                className={[styles.action, styles.actionDanger].join(" ")}
                title={t("Delete")}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(event);
                }}
              >
                <TrashIcon />
              </button>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default EventRows;
