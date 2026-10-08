import React, { useState, useEffect, useRef } from "react";
import FiltersDropdown from "../Containers/FiltersDropdown";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import {
  EyeIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import PageWrapper from "./PageWrapper";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import EventCalendar from "./Events/EventCalendar";
import styles from "./CalendarPage.module.scss";
import { useServvStore } from "../../store/useServvStore";
import { useEventsLogic } from "./Events/useEventsLogicMerged";

const EventsCalendarPage = () => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    mergedList,
    mergedLoading,
    handleSetDates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
  } = useEventsLogic(settings, filtersList, zoomAccount);

  const [activePopover, setActivePopover] = useState(null);
  const [popoverEvent, setPopoverEvent] = useState(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
  const popoverRef = useRef(null);

  const [queryValue, setQueryValue] = useState("");

  useEffect(() => {
    if (!activePopover) return;
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
        setPopoverEvent(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopover]);

  const filteredEvents = mergedList.filter((event) =>
    queryValue
      ? event.title?.toLowerCase().includes(queryValue.toLowerCase())
      : true,
  );

  const getMeetingURL = (postId) => {
    fetch(`/wp-json/wp/v2/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => open(post.link, "_blank"))
      .catch((e) => console.error(e));
  };

  const handleOpenEvent = (meeting) => {
    const pathType = meeting.type === "Zoom" ? "zoom" : "offline";
    let url = `/events/${pathType}/${meeting.id}`;
    if (meeting.occurrence_id) url += `?occurrence_id=${meeting.occurrence_id}`;
    if (meeting.registrants_view && !meeting.occurrence_id)
      url += `?registrants=true`;
    else if (meeting.registrants_view && meeting.occurrence_id)
      url += `&registrants=true`;
    navigate(url, { state: { from: location.pathname } });
  };

  const handleEventClick = (e, event) => {
    const id = event.occurrence_id ?? event.id;
    if (activePopover === id) {
      setActivePopover(null);
      setPopoverEvent(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPos({
      x: Math.max(8, Math.min(rect.left, window.innerWidth - 320)),
      y: rect.bottom + 4,
    });
    setActivePopover(id);
    setPopoverEvent(event);
  };

  const renderEventPopover = () => {
    if (!activePopover || !popoverEvent) return null;
    const event = popoverEvent;
    const isOneTime = event.recurrence === "One-time";

    return (
      <div
        ref={popoverRef}
        className="cal-popover bg-white border border-gray-200 rounded-xl shadow-lg p-4"
        style={{ top: popoverPos.y, left: popoverPos.x }}
      >
        <div className="flex justify-between items-start mb-3">
          <span
            className="font-semibold text-sm cursor-pointer hover:text-purple-600 leading-snug pr-2"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
              })
            }
          >
            {event.title}
          </span>
          <button
            onClick={() => {
              setActivePopover(null);
              setPopoverEvent(null);
            }}
            type="button"
            aria-label={t("Close event details")}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-base leading-none"
          >
            ✕
          </button>
        </div>

        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5S14.5 11.59 14.5 8 11.59 1.5 8 1.5zm.5 7H5.5V7h2V4.5h1V8.5z"
              fill="currentColor"
            />
          </svg>
          {event.time}
        </div>

        <div className="mb-3">
          <span
            className={`inline-flex items-center text-xs px-2 py-1 rounded-full font-medium ${
              isOneTime
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {event.recurrence}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="event-action-btn view"
            title="View event"
            onClick={() => getMeetingURL(event.post_id)}
          >
            <EyeIcon className="event-action-icon" />
          </button>
          <button
            className="event-action-btn edit"
            title="View registrants"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
                registrants_view: true,
              })
            }
          >
            <UserCircleIcon className="event-action-icon" />
          </button>
          <button
            className="event-action-btn edit"
            title="Edit event"
            onClick={() =>
              handleOpenEvent({
                id: event.post_id,
                type: event.type,
                occurrence_id: event.occurrence_id,
              })
            }
          >
            <PencilSquareIcon className="event-action-icon" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <PageWrapper withBackground flush>
      <PageContent className={styles.page}>
        <PageHeader
          eyebrow="WP Super Events by ServvAI"
          title={t("Events Calendar")}
          description={t("Plan your events by month, week, or day.")}
        />
        <div className={styles.divider} />
        <div className={styles.toolbar}>
          <NewInputFieldControl
            placeholder={t("Search events by name")}
            value={queryValue}
            onChange={setQueryValue}
          />
          <FiltersDropdown
            filtersList={filtersList}
            selectedFilters={selectedFilters}
            onSelect={handleFilterSelect}
            onClear={resetFilters}
            isApplied={isFiltersApplied()}
          />
        </div>
        <EventCalendar
          events={filteredEvents}
          loading={mergedLoading}
          onRangeChange={handleSetDates}
          onEventClick={handleEventClick}
        />
      </PageContent>
      {renderEventPopover()}
    </PageWrapper>
  );
};

export default EventsCalendarPage;
