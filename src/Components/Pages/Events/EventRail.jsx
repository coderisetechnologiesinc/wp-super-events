import React, { useMemo } from "react";
import moment from "moment";
import {
  ArrowPathRoundedSquareIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import CheckboxItem from "../../Controls/CheckboxItem";
import {
  eventKey,
  eventRoutePayload,
  openEventPost,
} from "../../../utilities/events";
import styles from "./EventRail.module.scss";

// "Option B · Date rail" from the events-list reference.
//
// The list arrives already sorted by start time, so grouping is a single pass:
// a new month label opens a new group. Events with no start time (a recurring
// series the API gives no next occurrence for) collect in their own group
// instead of being dropped.
const MARK = {
  offline: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z",
  online: "M4 7h11v10H4zM15 11l5-3v8l-5-3z",
};

const groupByMonth = (events) => {
  const groups = [];
  const index = new Map();

  events.forEach((event) => {
    const at = event._sortKey ? moment(event._sortKey) : null;
    const label = at ? at.format("MMMM YYYY") : t("No date yet");

    if (!index.has(label)) {
      index.set(label, { label, items: [] });
      groups.push(index.get(label));
    }

    index.get(label).items.push({
      event,
      day: at ? at.format("DD") : "–",
      weekday: at ? at.format("ddd") : "",
    });
  });

  return groups;
};

const EventRail = ({
  events = [],
  onOpen = () => {},
  onDelete,
  onOccurrences,
  selectedKeys = new Set(),
  onToggleSelect,
}) => {
  const groups = useMemo(() => groupByMonth(events), [events]);

  return (
    <div className={styles.rail}>
      {groups.map((group) => (
        <section key={group.label} className={styles.group}>
          <div className={styles.groupHead}>
            <h2 className={styles.groupLabel}>{group.label}</h2>
            <span className={styles.groupCount}>{group.items.length}</span>
            <span className={styles.groupRule} />
          </div>

          {group.items.map(({ event, day, weekday }) => {
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

                <div
                  className={[
                    styles.date,
                    online ? styles.dateOnline : styles.dateOffline,
                  ].join(" ")}
                >
                  <div className={styles.day}>{day}</div>
                  <div className={styles.weekday}>{weekday}</div>
                </div>

                <div className={styles.body}>
                  <div className={styles.heading}>
                    <span className={styles.title}>{event.title}</span>
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

                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {event.time || t("Recurring")}
                    </span>

                    <span
                      className={[
                        styles.metaItem,
                        styles.metaType,
                        online ? styles.typeOnline : styles.typeOffline,
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
                      {online ? t("Online") : t("In-person")}
                    </span>

                    {event.location && <span>{event.location}</span>}
                    {event.timezone && (
                      <span className={styles.metaSoft}>{event.timezone}</span>
                    )}
                    <span className={styles.metaSoft}>
                      {t(event.recurrence)}
                    </span>
                  </div>
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
        </section>
      ))}
    </div>
  );
};

export default EventRail;
