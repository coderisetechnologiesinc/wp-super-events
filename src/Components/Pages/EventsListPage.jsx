import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useEventsLogic } from "./Events/useEventsLogicMerged";
import { useServvStore } from "../../store/useServvStore";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import DisplayOptions from "../Controls/DisplayOptions";
import EventsBrowser from "./Events/EventsBrowser";
import useDisplayOptions from "./Events/useDisplayOptions";
import useTimeRange from "./Events/useTimeRange";
import Guideline from "./Guideline";
import styles from "./EventsListPage.module.scss";

// The events screen is the dashboard's list on a page of its own: same
// toolbar, same three views, same Display options. What it adds is the
// drill-down into a recurring event's occurrences.
const EventsListPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
  redirect = () => {},
}) => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const fetchZoomAccount = useServvStore((s) => s.fetchZoomAccount);

  const {
    // merged list — used when eventType === "all"
    mergedList,
    mergedPagination,
    mergedLoading,
    getMergedEventsList,

    // single-type list — used once the Format filter narrows to one kind
    meetingsList,
    pagination,
    loading,
    getEventsList,
    eventType,
    handleTypeChange,

    // the occurrences drill-down
    view: listMode,
    setView: setListMode,
    eventOccurrencess,
    occurrencesPagination,
    getEventOccurrencess,

    // actions
    searchString,
    handleSearchSubmit,
    handleSetDates,
    applyRangePreset,
    setWholeRange,
    isPast,
    dates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    firstFetchDone,
    showGuide,
    setShowGuide,
    selectedEvent,
    resetSubpageSelection,
    handleOpenEvent,

    // bulk selection
    selectedEvents,
    setSelectedEvents,
    handleMultipleEventsDelete,
  } = useEventsLogic(settings, filtersList, zoomAccount);

  const navigate = useNavigate();

  const { view, datePlacement, groups: displayGroups } = useDisplayOptions(
    "events",
    { defaultView: "rows" },
  );
  const { timeRange, setTimeRange, ranges, applyCurrentRange } =
    useTimeRange(applyRangePreset);


  // The calendar owns the range while it is on screen and needs the whole
  // window rather than a page; leaving it hands the range back to the
  // switcher, which is otherwise showing a preset the list no longer matches.
  const isCalendar = view === "calendar";
  const wasCalendar = useRef(isCalendar);

  useEffect(() => {
    setWholeRange(isCalendar);

    if (wasCalendar.current && !isCalendar) applyCurrentRange();
    wasCalendar.current = isCalendar;
  }, [isCalendar]);

  const [drilldownTitle, setDrilldownTitle] = useState("");
  const isOccurrences = listMode === "occurrences";

  // The Format filter swaps the data source: "all" merges both endpoints,
  // anything else comes from the single-type fetch.
  const isMerged = eventType === "all";
  const eventsList = isMerged ? mergedList : meetingsList;
  const eventsPagination = isMerged ? mergedPagination : pagination;

  const activeList = isOccurrences ? eventOccurrencess ?? [] : eventsList;
  const activePagination = isOccurrences
    ? occurrencesPagination
    : eventsPagination;

  const goToPage = (page) => {
    if (isOccurrences) return;
    if (isMerged) getMergedEventsList({ page });
    else getEventsList({ page });
  };

  useEffect(() => {
    if (!settings) return;
    const planId = settings.current_plan?.id;
    if (planId === 2 && zoomConnected === null) fetchZoomAccount();
  }, [settings]);

  useEffect(() => {
    if (resetSelectedSubpage) {
      resetSubpageSelection();
      handleResetSubpage(false);
    }
  }, [resetSelectedSubpage, resetSubpageSelection, handleResetSubpage]);

  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active) navigate("/events/new", "_top");
    else
      toast.warn(
        "Please activate Gutenberg Blocks to use the WP Super Events plugin.",
      );
  };

  const openOccurrences = (event) => {
    setDrilldownTitle(event.title);
    setListMode("occurrences");
    getEventOccurrencess(event.post_id);
  };

  const backToEvents = () => {
    setListMode("events");
    setDrilldownTitle("");
  };

  if (selectedEvent) return null;

  if (showGuide && (!zoomAccount || !zoomAccount.id)) {
    return <Guideline showGuide={setShowGuide} redirect={redirect} />;
  }

  return (
    <PageWrapper withBackground={true} flush>
      <PageContent className={styles.page}>
        <PageHeader
          eyebrow="WP Super Events by ServvAI"
          title={t("Events")}
          description="Every event you have published, with its schedule, format and visibility"
          actions={
            <Fragment>
              <DisplayOptions groups={displayGroups} />
              <PageActionButton
                type="primary"
                icon={<PlusIcon />}
                text={t("Create event")}
                onAction={handleCreateNewEvent}
              />
            </Fragment>
          }
        >
          <div className={styles.divider} />
        </PageHeader>

        <EventsBrowser
          title={isOccurrences ? drilldownTitle || t("Occurrences") : t("All events")}
          view={view}
          datePlacement={datePlacement}
          events={activeList}
          loading={isMerged ? mergedLoading : loading}
          pagination={activePagination}
          firstFetchDone={firstFetchDone}
          onPage={goToPage}
          search={searchString}
          onSearchSubmit={handleSearchSubmit}
          ranges={ranges}
          activeRange={timeRange}
          onRangeChange={setTimeRange}
          dates={dates}
          onDatesChange={handleSetDates}
          minDate={isPast ? undefined : new Date()}
          filtersList={filtersList}
          selectedFilters={selectedFilters}
          onFilterSelect={handleFilterSelect}
          onClearFilters={resetFilters}
          isFiltersApplied={isFiltersApplied()}
          showFormat={zoomConnected}
          eventType={eventType}
          onEventTypeChange={handleTypeChange}
          onOpen={handleOpenEvent}
          onCalendarRange={applyRangePreset}
          onOccurrences={isOccurrences ? undefined : openOccurrences}
          selectedEvents={selectedEvents}
          setSelectedEvents={setSelectedEvents}
          onBulkDelete={handleMultipleEventsDelete}
          onCreate={handleCreateNewEvent}
          backLabel={t("All events")}
          onBack={isOccurrences ? backToEvents : undefined}
        />
      </PageContent>
    </PageWrapper>
  );
};

export default EventsListPage;
