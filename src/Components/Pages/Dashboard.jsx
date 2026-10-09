import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import SetupGuide from "../Containers/SetupGuide";
import { useMemo, useRef, useState, Fragment, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import { useEventsLogic } from "./Events/useEventsLogicMerged";
import { PlusIcon } from "@heroicons/react/16/solid";
import DisplayOptions from "../Controls/DisplayOptions";
import PageActionButton from "../Controls/PageActionButton";
import EventsBrowser from "./Events/EventsBrowser";
import useDisplayOptions from "./Events/useDisplayOptions";
import useTimeRange from "./Events/useTimeRange";
import { toast } from "react-toastify";
import { getSentEmails } from "../../utilities/mails";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const accountsSynced = useServvStore((s) => s.accountsSynced);

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

    // actions
    handleIsPastChange,
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

    // bulk selection — the hook owns it, and its bulk delete reads it
    selectedEvents,
    setSelectedEvents,
    handleMultipleEventsDelete,
  } = useEventsLogic(settings, filtersList, zoomAccount);
  // eventType defaults to "all" in the merged hook — no override needed

  const navigate = useNavigate();

  // The Format filter swaps the data source: "all" merges both endpoints,
  // anything else comes from the single-type fetch.
  const isMerged = eventType === "all";
  const eventsList = isMerged ? mergedList : meetingsList;
  const eventsPagination = isMerged ? mergedPagination : pagination;
  const eventsLoading = isMerged ? mergedLoading : loading;
  const goToPage = (page) =>
    isMerged ? getMergedEventsList({ page }) : getEventsList({ page });

  const widgetStyleSettings = useMemo(() => {
    if (!settings?.settings?.widget_style_settings) return {};
    try {
      return JSON.parse(settings.settings.widget_style_settings) || {};
    } catch {
      return {};
    }
  }, [settings?.settings?.widget_style_settings]);

  const { pw_title, pw_address, pw_avatar, pw_email } = widgetStyleSettings;

  const handleOpenEvent = (meeting) => {
    const pathType = meeting.type === "Zoom" ? "zoom" : "offline";
    let url = `/events/${pathType}/${meeting.id}`;
    if (meeting.occurrence_id) {
      url += `?occurrence_id=${meeting.occurrence_id}`;
    }

    if (meeting?.registrants_view && !meeting.occurrence_id) {
      url += `?registrants=true`;
    } else if (meeting?.registrants_view && meeting.occurrence_id) {
      url += `&registrants=true`;
    }

    navigate(url, { state: { from: location.pathname } });
  };
  useEffect(() => {
    const onboardingRedirect = localStorage.getItem("redirectToOnboarding");
    if (onboardingRedirect && onboardingRedirect.length > 0) {
      localStorage.removeItem("redirectToOnboarding");
      navigate("/onboarding?step=settings");
    }
  }, []);
  // useEffect(() => {
  //   getSentEmails();
  // }, []);
  useEffect(() => {
    const onboardingSkipped =
      localStorage.getItem("onboardingSkipped") === window.location.origin;

    if (
      firstFetchDone &&
      // An empty list proves nothing until the zoom answer is in: the merged
      // fetch leaves zoom out while the connection is still unknown.
      accountsSynced &&
      mergedList.length === 0 &&
      !zoomConnected &&
      !onboardingSkipped &&
      !isFiltersApplied()
    ) {
      navigate("/onboarding");
    } else if (
      settings?.is_wp_marketplace &&
      (settings?.current_plan?.id === 1 || !settings.current_plan)
    ) {
      navigate("/onboarding?activate_plan");
    }
  }, [firstFetchDone, accountsSynced, zoomConnected, mergedList.length]);

  const handleCreateNewEvent = () => {
    if (servvData.gutenberg_active)
      navigate("/events/new", { state: { from: location.pathname } });
    else
      toast.warn(
        "Please activate Gutenberg Blocks to use the WP Super Events plugin.",
      );
  };

  const { timeRange, setTimeRange, ranges, applyCurrentRange } =
    useTimeRange(applyRangePreset);

  // How this page draws its list; the popover lives in the header below.
  const {
    view,
    datePlacement,
    groups: displayGroups,
  } = useDisplayOptions("dashboard");

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

  // Whether the shop has any events at all is a different question from what
  // the list is showing right now: a search that matches nothing must not tell
  // the setup banner the shop has no events. Latched, never cleared.
  const [hasAnyEvent, setHasAnyEvent] = useState(false);

  useEffect(() => {
    if (eventsList.length > 0) setHasAnyEvent(true);
  }, [eventsList.length]);

  // The setup banner asks whether the shop has events, so it may only appear
  // once a fetch has finished — a list still waiting for its zoom half would
  // make it advertise "create your first event" and then take it back. Latched
  // too, so later refetches do not blink it off the page.
  const [eventsSettled, setEventsSettled] = useState(false);

  useEffect(() => {
    if (firstFetchDone && !eventsLoading) setEventsSettled(true);
  }, [firstFetchDone, eventsLoading]);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createStatus = params.get("created");

    if (createStatus === "success") {
      toast.success("Event created successfully");
      params.delete("created");
      navigate(
        { pathname: location.pathname, search: params.toString() },
        { replace: true },
      );
    }
  }, [location.search]);

  // The date filters live either here or inside the Filters drawer; the drawer
  // always owns the switch, so they can be fetched back from there.
  // Reference: the header's right-hand side — the page's primary action on the
  // same row as the title and description. The profile is ours, and leads it.
  const renderHeaderActions = () => (
    <Fragment>
      {renderProfile()}
      <DisplayOptions groups={displayGroups} />
      <PageActionButton
        type="primary"
        icon={<PlusIcon />}
        text={t("Create event")}
        onAction={handleCreateNewEvent}
      />
    </Fragment>
  );

  const renderProfile = () =>
    pw_title ? (
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src={
            pw_avatar ||
            `${servvData.pluginUrl}/public/assets/images/avatarPlaceholder.png`
          }
          alt="Profile image"
        />
        <div className={styles.profileText}>
          <div className={styles.profileName}>{pw_title}</div>
          <div className={styles.profileEmail}>{pw_email}</div>
          {!settings?.is_wp_marketplace && (
            <a
              className={styles.profileLink}
              onClick={(e) => {
                e.preventDefault();
                open(servvData.homepage, "_blank");
              }}
            >
              View store
            </a>
          )}
        </div>
      </div>
    ) : null;

  return (
    <PageWrapper withBackground={true} flush>
      <PageContent className={styles.page}>
        {/* The first-run checklist, above the page like the reference. It
            hides itself once every step is done or the shop dismisses it. */}
        {eventsSettled && <SetupGuide hasEvents={hasAnyEvent} />}

        <PageHeader
          eyebrow="WP Super Events by ServvAI"
          title={`Welcome${pw_title ? ", " + pw_title : ""}`}
          description="Create, sell, and manage paid events, bookings, and customers from one revenue platform"
          actions={renderHeaderActions()}
        >
          <div className={styles.divider} />
        </PageHeader>

        <EventsBrowser
          title={t("All events")}
          view={view}
          datePlacement={datePlacement}
          events={eventsList}
          loading={eventsLoading}
          pagination={eventsPagination}
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
          selectedEvents={selectedEvents}
          setSelectedEvents={setSelectedEvents}
          onBulkDelete={handleMultipleEventsDelete}
          onCreate={handleCreateNewEvent}
        />
      </PageContent>
    </PageWrapper>
  );
};

export default Dashboard;
