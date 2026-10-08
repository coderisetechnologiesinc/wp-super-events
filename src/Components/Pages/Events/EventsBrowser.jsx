import React, { Fragment, useEffect, useMemo, useState } from "react";
import { PlusIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import NewButtonGroup from "../../Controls/NewButtonGroup";
import NewDatePickerControl from "../../Controls/NewDatePickerControl";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";
import PageActionButton from "../../Controls/PageActionButton";
import FiltersDropdown from "../../Containers/FiltersDropdown";
import ModalShell from "../../Modals/ModalShell";
import { TrashIcon } from "@heroicons/react/24/outline";
import SpinnerLoader from "../SpinnerLoader";
import DashboardPagination from "../../Shared/DashboardPagination";
import EventCard from "./EventCard";
import EventRows from "./EventRows";
import EventRail from "./EventRail";
import EventCalendar from "./EventCalendar";
import BulkBar, { SelectAllRow } from "../../Containers/BulkBar";
import { eventKey } from "../../../utilities/events";
import styles from "./EventsBrowser.module.scss";

// The list of events as both the dashboard and the events screen show it:
// toolbar, the view the Display options picked, selection and its bulk bar,
// empty states and pagination. The page above it owns the data (it holds the
// events hook) and its own header.
const EventsBrowser = ({
  title,
  // --- display options, from useDisplayOptions ---
  view = "grid",
  datePlacement = "toolbar",

  // --- data ---
  events = [],
  loading = false,
  pagination = {},
  firstFetchDone = false,
  onPage = () => {},

  // --- search ---
  search = "",
  onSearchSubmit = () => {},

  // --- date range ---
  ranges = [],
  activeRange,
  onRangeChange = () => {},
  dates,
  onDatesChange = () => {},
  minDate,

  // --- filters ---
  filtersList = {},
  selectedFilters = {},
  onFilterSelect = () => {},
  onClearFilters = () => {},
  isFiltersApplied = false,
  showFormat = false,
  eventType = "all",
  onEventTypeChange = () => {},

  // --- rows ---
  onOpen = () => {},
  onDelete,
  onOccurrences,

  // --- selection ---
  selectedEvents = [],
  setSelectedEvents = () => {},
  onBulkDelete,

  // The calendar owns its own range; see EventCalendar.
  onCalendarRange,

  // --- drill-down (the events screen's occurrences list) ---
  backLabel,
  onBack,

  // --- empty state for a shop with no events at all ---
  onCreate,
}) => {
  // The field holds what is typed; the list is refetched once typing settles.
  const [localSearch, setLocalSearch] = useState(search || "");

  useEffect(() => {
    if (localSearch === search) return undefined;

    const timer = setTimeout(() => onSearchSubmit(localSearch), 400);
    return () => clearTimeout(timer);
  }, [localSearch]);

  const isCalendar = view === "calendar";

  // Only the row and rail views carry checkboxes, as in the reference.
  const selectable =
    (view === "rows" || view === "rail") && Boolean(onBulkDelete);
  const selectedKeys = useMemo(
    () => new Set(selectedEvents.map(eventKey)),
    [selectedEvents],
  );

  const toggleSelect = (event) =>
    setSelectedEvents((prev) =>
      prev.some((picked) => eventKey(picked) === eventKey(event))
        ? prev.filter((picked) => eventKey(picked) !== eventKey(event))
        : [...prev, event],
    );

  const toggleSelectAll = () =>
    setSelectedEvents((prev) =>
      prev.length === events.length ? [] : [...events],
    );

  // A selection only means something while the rows are on screen: drop
  // anything the current page no longer shows, and everything when the view
  // loses its checkboxes.
  useEffect(() => {
    if (!selectable) {
      setSelectedEvents((prev) => (prev.length ? [] : prev));
      return;
    }

    const visible = new Set(events.map(eventKey));
    setSelectedEvents((prev) => {
      const kept = prev.filter((picked) => visible.has(eventKey(picked)));
      return kept.length === prev.length ? prev : kept;
    });
  }, [events, selectable]);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const runBulkDelete = async () => {
    setDeleting(true);
    const count = selectedEvents.length;

    try {
      await onBulkDelete();
      setSelectedEvents([]);
      toast.success(count === 1 ? "Event deleted" : `${count} events deleted`);
    } catch (e) {
      console.error("Bulk delete error", e);
      toast.error("Could not delete every selected event.");
    } finally {
      setDeleting(false);
      setConfirmDelete(false);
    }
  };

  // An empty list means two different things: a shop with no events at all, or
  // a search / filter / range that happens to match nothing.
  const isNarrowed = Boolean(localSearch) || isFiltersApplied;

  const clearNarrowing = () => {
    setLocalSearch("");
    if (ranges.length) onRangeChange(ranges[0].value);
    onClearFilters();
    onSearchSubmit("");
  };

  const dateFilters = {
    // The drawer must not offer the range either while the calendar owns it.
    placement: isCalendar ? "toolbar" : datePlacement,
    ranges,
    activeRange,
    onRangeChange,
    dates,
    onDatesChange,
    minDate,
  };

  const renderList = () => {
    if (isCalendar)
      return (
        <EventCalendar
          events={events}
          loading={loading}
          onOpen={onOpen}
          onRangeChange={onCalendarRange}
        />
      );

    if (view === "rows")
      return (
        <EventRows
          events={events}
          onOpen={onOpen}
          onDelete={onDelete}
          onOccurrences={onOccurrences}
          selectedKeys={selectedKeys}
          onToggleSelect={selectable ? toggleSelect : undefined}
        />
      );

    if (view === "rail")
      return (
        <EventRail
          events={events}
          onOpen={onOpen}
          onDelete={onDelete}
          onOccurrences={onOccurrences}
          selectedKeys={selectedKeys}
          onToggleSelect={selectable ? toggleSelect : undefined}
        />
      );

    return (
      <div className={styles.grid}>
        {events.map((meeting) => (
          <EventCard
            key={eventKey(meeting)}
            meeting={meeting}
            handleOpenEvent={onOpen}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarTitle}>
          {onBack && (
            <PageActionButton
              type="ghost"
              size="sm"
              icon={<ArrowLeftIcon />}
              text={backLabel || t("Back")}
              onAction={onBack}
            />
          )}
          <h2 className={styles.heading}>{title}</h2>
          {events.length > 0 && (
            <span className={styles.count}>{events.length}</span>
          )}
        </div>

        <div className={styles.controls}>
          <NewInputFieldControl
            className={styles.search}
            value={localSearch}
            placeholder={t("Search events by name")}
            onChange={setLocalSearch}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearchSubmit(localSearch);
            }}
            width="100%"
          />

          {datePlacement === "toolbar" && !isCalendar && (
            <Fragment>
              {ranges.length > 0 && (
                <NewButtonGroup
                  buttons={ranges.map((range) => ({
                    value: range.value,
                    label: t(range.label),
                  }))}
                  active={activeRange}
                  onChange={onRangeChange}
                />
              )}

              <NewDatePickerControl
                value={dates}
                onChange={onDatesChange}
                label="Select date"
                minDate={minDate}
              />
            </Fragment>
          )}

          <FiltersDropdown
            filtersList={filtersList}
            selectedFilters={selectedFilters}
            onSelect={onFilterSelect}
            onClear={onClearFilters}
            isApplied={isFiltersApplied}
            showFormat={showFormat}
            eventType={eventType}
            onEventTypeChange={onEventTypeChange}
            dateFilters={dateFilters}
          />
        </div>
      </div>

      {/* The calendar is never swapped out for the spinner: it owns the month
          on screen, and unmounting it would reset that month to today on every
          fetch — which is exactly what its own navigation triggers. */}
      {!loading || isCalendar ? (
        <Fragment>
          {firstFetchDone && events.length === 0 && !isCalendar ? (
            isNarrowed ? (
              <div className={styles.empty}>
                <h2 className={styles.emptyTitle}>
                  {t("No events match this view")}
                </h2>
                <p className={styles.emptyText}>
                  {t(
                    "Try another date range, clear the search, or reset the filters.",
                  )}
                </p>
                <PageActionButton
                  type="secondary"
                  text={t("Clear filters")}
                  onAction={clearNarrowing}
                  className={styles.emptyAction}
                />
              </div>
            ) : (
              <div className={styles.empty}>
                <div className={styles.emptyMark}>
                  <PlusIcon />
                </div>
                <h2 className={styles.emptyTitle}>
                  {t("You don't have any events yet")}
                </h2>
                <p className={styles.emptyText}>
                  {t(
                    "Create your first event to start selling tickets, collecting bookings, and syncing with your connected calendar.",
                  )}
                </p>
                {onCreate && (
                  <PageActionButton
                    type="primary"
                    icon={<PlusIcon />}
                    text={t("Create event")}
                    onAction={onCreate}
                    className={styles.emptyAction}
                  />
                )}
              </div>
            )
          ) : (
            <Fragment>
              {selectable && (
                <Fragment>
                  <SelectAllRow
                    view={view}
                    total={events.length}
                    selectedCount={selectedEvents.length}
                    onToggleAll={toggleSelectAll}
                  />

                  <BulkBar
                    selectedCount={selectedEvents.length}
                    onClear={() => setSelectedEvents([])}
                  >
                    <PageActionButton
                      type="danger-secondary"
                      size="sm"
                      icon={<TrashIcon />}
                      text={t("Delete")}
                      onAction={() => setConfirmDelete(true)}
                    />
                  </BulkBar>
                </Fragment>
              )}

              {renderList()}

              {!isCalendar && events.length > 0 && pagination.pageCount > 1 && (
                <DashboardPagination
                  currentPage={pagination.pageNumber}
                  totalPages={pagination.pageCount}
                  totalRecords={pagination.totalItems || events.length}
                  pageSize={10}
                  onPageChange={onPage}
                />
              )}
            </Fragment>
          )}
        </Fragment>
      ) : (
        <SpinnerLoader isLoading={loading} customStyling={styles.loader} />
      )}

      {confirmDelete && (
        <ModalShell
          size="sm"
          title={
            selectedEvents.length === 1
              ? t("Delete this event?")
              : `${t("Delete")} ${selectedEvents.length} ${t("events")}?`
          }
          description={t(
            "They are removed from the site and from any connected calendar. This cannot be undone.",
          )}
          onClose={() => setConfirmDelete(false)}
          footer={
            <Fragment>
              <PageActionButton
                type="secondary"
                text={t("Cancel")}
                disabled={deleting}
                onAction={() => setConfirmDelete(false)}
              />
              <PageActionButton
                type="danger"
                text={deleting ? t("Deleting…") : t("Delete")}
                disabled={deleting}
                onAction={runBulkDelete}
              />
            </Fragment>
          }
        >
          <ul className={styles.confirmList}>
            {selectedEvents.map((event) => (
              <li key={eventKey(event)}>
                {event.title}
                {event.date ? ` — ${event.date}` : ""}
              </li>
            ))}
          </ul>
        </ModalShell>
      )}
    </div>
  );
};

export default EventsBrowser;
