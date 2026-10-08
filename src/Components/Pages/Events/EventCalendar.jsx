import React, { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import NewButtonGroup from "../../Controls/NewButtonGroup";
import PageActionButton from "../../Controls/PageActionButton";
import { eventRoutePayload } from "../../../utilities/events";
import styles from "./EventCalendar.module.scss";

// The calendar view of the events list.
//
// Unlike the other views it does not read the range the toolbar picked — it
// OWNS the range: whatever month, week or day is on screen is handed back
// through `onRangeChange`, which refetches the list for exactly that window.
const PERIODS = [
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
];

const rangeFor = (date, period) => {
  if (period === "week")
    return {
      startDate: date.clone().startOf("week"),
      endDate: date.clone().endOf("week"),
    };

  if (period === "day")
    return {
      startDate: date.clone().startOf("day"),
      endDate: date.clone().endOf("day"),
    };

  return {
    startDate: date.clone().startOf("month").startOf("week"),
    endDate: date.clone().endOf("month").endOf("week"),
  };
};

const daysFor = (date, period) => {
  if (period === "day") return [{ date: date.clone(), outside: false }];

  if (period === "week") {
    const start = date.clone().startOf("week");
    return Array.from({ length: 7 }, (_, i) => ({
      date: start.clone().add(i, "day"),
      outside: false,
    }));
  }

  const { startDate, endDate } = rangeFor(date, "month");
  const days = [];
  const cursor = startDate.clone();

  while (cursor.isSameOrBefore(endDate, "day")) {
    days.push({
      date: cursor.clone(),
      outside: cursor.month() !== date.month(),
    });
    cursor.add(1, "day");
  }

  return days;
};

const EventCalendar = ({
  events = [],
  loading = false,
  onOpen = () => {},
  onRangeChange,
  onEventClick,
}) => {
  const [cursor, setCursor] = useState(() => moment());
  const [period, setPeriod] = useState(() =>
    window.innerWidth < 768 ? "day" : "month",
  );
  const scheduleRef = useRef(null);

  useEffect(() => {
    const rows = scheduleRef.current?.querySelectorAll(`.${styles.hourRow}`);
    if (rows?.[8])
      scheduleRef.current.scrollTop = rows[8].offsetTop - rows[0].offsetTop;
  }, [period, cursor.valueOf()]);

  // Whatever is on screen decides what is fetched.
  useEffect(() => {
    onRangeChange?.(rangeFor(cursor, period));
  }, [cursor.valueOf(), period]);

  const days = useMemo(() => daysFor(cursor, period), [cursor, period]);

  const byDay = useMemo(() => {
    const map = new Map();

    events.forEach((event) => {
      if (!event._sortKey) return;
      const key = moment(event._sortKey).format("YYYY-MM-DD");
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(event);
    });

    return map;
  }, [events]);

  const step = (direction) =>
    setCursor((prev) =>
      prev.clone().add(direction, period === "month" ? "month" : period),
    );

  const title = () => {
    if (period === "day") return cursor.format("DD MMM YYYY");

    if (period === "week")
      return `${cursor.clone().startOf("week").format("DD MMM")} – ${cursor
        .clone()
        .endOf("week")
        .format("DD MMM YYYY")}`;

    return cursor.format("MMMM YYYY");
  };

  const renderEvent = (event, detailed = false) => (
    <button
      key={`${event.type}-${event.id}-${event.occurrence_id || ""}`}
      type="button"
      title={`${event.time || ""} · ${event.title}`}
      className={[
        styles.chip,
        detailed ? styles.eventCard : "",
        event.status === "Past"
          ? styles.chipPast
          : event.type === "Zoom"
          ? styles.chipOnline
          : styles.chipOffline,
      ].join(" ")}
      onClick={(e) =>
        onEventClick ? onEventClick(e, event) : onOpen(eventRoutePayload(event))
      }
    >
      <span className={styles.eventTitle}>{event.title}</span>
      <span className={styles.eventMeta}>
        {event.time}
        {detailed &&
          `${event.time ? " · " : ""}${t(
            event.type === "Zoom" ? "Online" : "In person",
          )}`}
      </span>
    </button>
  );

  const hourOf = (event) => {
    const time = moment(event.time || "", ["hh:mm a", "HH:mm"], true);
    return time.isValid() ? time.hour() : moment(event._sortKey).hour();
  };

  const dayHeading = (date) => (
    <div className={styles.dateHeading}>
      <span>{date.format("ddd")}</span>
      <span
        className={[
          styles.dayNumber,
          date.isSame(moment(), "day") ? styles.today : "",
        ].join(" ")}
      >
        {date.date()}
      </span>
    </div>
  );

  return (
    <div className={styles.calendar}>
      <div className={styles.bar}>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navButton}
            aria-label={t("Previous")}
            onClick={() => step(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <span className={styles.title}>{title()}</span>

          <button
            type="button"
            className={styles.navButton}
            aria-label={t("Next")}
            onClick={() => step(1)}
          >
            <ChevronRightIcon />
          </button>

          <PageActionButton
            type="ghost"
            size="sm"
            text={t("Today")}
            onAction={() => setCursor(moment())}
          />
        </div>

        <NewButtonGroup
          buttons={PERIODS.map((item) => ({
            value: item.value,
            label: t(item.label),
          }))}
          active={period}
          onChange={setPeriod}
          ariaLabel={t("Calendar period")}
        />
      </div>

      <div className={styles.legend} aria-label={t("Event formats")}>
        <span>
          <i className={styles.offlineDot} />
          {t("In person")}
        </span>
        <span>
          <i className={styles.onlineDot} />
          {t("Online")}
        </span>
      </div>
      <div
        className={[styles.sheet, loading ? styles.busy : ""].join(" ")}
        aria-busy={loading}
      >
        {period === "month" ? (
          <div className={styles.monthGrid}>
            {moment.weekdaysShort().map((day) => (
              <div key={day} className={styles.weekday}>
                {day}
              </div>
            ))}
            {days.map(({ date, outside }) => {
              const key = date.format("YYYY-MM-DD");
              const dayEvents = byDay.get(key) || [];
              return (
                <div
                  key={key}
                  className={[styles.day, outside ? styles.outside : ""].join(
                    " ",
                  )}
                >
                  <div className={styles.dayTop}>
                    <time
                      dateTime={key}
                      className={[
                        styles.dayNumber,
                        date.isSame(moment(), "day") ? styles.today : "",
                      ].join(" ")}
                    >
                      {date.date()}
                    </time>
                    {!!dayEvents.length && (
                      <span className={styles.dayCount}>
                        {dayEvents.length}
                      </span>
                    )}
                  </div>
                  <div className={styles.events}>
                    {dayEvents.map((event) => renderEvent(event))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div ref={scheduleRef} className={styles.scheduleScroll}>
            <div
              className={[
                styles.schedule,
                period === "week" ? styles.weekSchedule : styles.daySchedule,
              ].join(" ")}
            >
              <div className={styles.scheduleHeader}>
                <div className={styles.timeHeading}>{t("Time")}</div>
                {days.map(({ date }) => (
                  <div
                    key={date.format("YYYY-MM-DD")}
                    className={styles.weekday}
                  >
                    {dayHeading(date)}
                  </div>
                ))}
              </div>
              {Array.from({ length: 24 }, (_, hour) => (
                <div key={hour} className={styles.hourRow}>
                  <time className={styles.hourLabel}>
                    {moment().startOf("day").hour(hour).format("h A")}
                  </time>
                  {days.map(({ date }) => {
                    const key = date.format("YYYY-MM-DD");
                    const events = (byDay.get(key) || []).filter(
                      (event) => hourOf(event) === hour,
                    );
                    return (
                      <div key={key} className={styles.hourCell}>
                        {events.map((event) => renderEvent(event, true))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
        {!loading &&
          days.every(
            ({ date }) => !byDay.get(date.format("YYYY-MM-DD"))?.length,
          ) && (
            <p className={styles.dayEmpty} role="status">
              {t("No events in this period")}
            </p>
          )}
      </div>
    </div>
  );
};

export default EventCalendar;
