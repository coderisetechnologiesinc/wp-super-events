import { resourceVersion } from "../../../utilities/requestCache";
import useCacheRefresh from "../../../hooks/useCacheRefresh";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import axios from "../../../utilities/adminApi";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import { timezonesList } from "../../../utilities/timezones";
import timezonesWithOffset from "../../../utilities/timezones";
import { useNavigate } from "react-router-dom";
import { useServvStore } from "../../../store/useServvStore";

export const useEventsLogic = (settings, filtersList, zoomAccount) => {
  const PAGE_SIZE = 10;
  const isZoomConnected = useServvStore((s) => s.zoomConnected);
  const navigate = useNavigate();
  const syncAccountsAfterEvents = useServvStore(
    (s) => s.syncAccountsAfterEvents,
  );
  const syncFiltersFromServer = useServvStore((s) => s.syncFiltersFromServer);
  const setDatePreset = useRef(1);
  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [firstFetchDone, setFirstFetchDone] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isPast, setIsPast] = useState(false);

  // A calendar shows a window of time, not a page of results: while this is on
  // the merged fetch asks for everything inside the date range instead of one
  // PAGE_SIZE page, or a busy month would silently stop at ten events.
  const [wholeRange, setWholeRange] = useState(false);
  const WHOLE_RANGE_SIZE = 200;
  const [eventType, setEventType] = useState("all");
  const [dateSelected, setDateSelected] = useState(false);
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [searchString, setSearchString] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const [meetingsList, setMeetingsList] = useState([]);
  const [eventOccurrencess, setEventOccurrencess] = useState([]);

  const [pagination, setPagination] = useState({});
  const [occurrencesPagination, setOccurrencesPagination] = useState({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] =
    useState(null);

  const [mergedList, setMergedList] = useState([]);
  const [mergedPagination, setMergedPagination] = useState({});
  const [mergedLoading, setMergedLoading] = useState(false);

  const [view, setView] = useState("events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);

  const [attributes, setAttributes] = useState({
    meeting: {},
    product: {},
    notifications: {},
    tickets: [],
  });

  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [timezone, setTimezone] = useState("US/Pacific");
  const [showError, setShowError] = useState(null);

  // =====================================================================
  // HELPERS
  // =====================================================================

  const getFilteringParameterName = (type) => {
    switch (type) {
      case "locations":
        return "location_id";
      case "languages":
        return "language_id";
      case "categories":
        return "category_id";
      case "members":
        return "member_id";
      default:
        return null;
    }
  };

  const timezones = useMemo(
    () =>
      Object.keys(timezonesList).map((zone) => ({
        id: zone,
        name: timezonesList[zone],
      })),
    [],
  );

  const normalizeDate = (d) => {
    if (!d) return null;
    if (moment.isMoment(d)) return d;
    if (d instanceof Date) return moment(d);
    return null;
  };

  const resetFilters = () => {
    setSearchString("");
    setDates({ startDate: null, endDate: null });
    setSelectedFilters({});
  };

  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate && dateSelected) return true;
    return Object.values(selectedFilters).some((arr) => arr.length > 0);
  };

  const handleFilterSelect = (filter, id) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[filter]) {
        updated[filter] = [id];
      } else if (updated[filter].includes(id)) {
        updated[filter] = updated[filter].filter((i) => i !== id);
      } else {
        updated[filter].push(id);
      }
      return updated;
    });
  };

  const handleEventChange = (newAttr) => {
    setAttributes((prev) => ({ ...prev, ...newAttr }));
  };

  // =====================================================================
  // DATE HELPERS
  // =====================================================================

  const handleSetDates = (dates, isDefault) => {
    const start = normalizeDate(dates.startDate);
    const end = normalizeDate(dates.endDate);

    const startDate = start
      ? moment.tz(
          {
            year: start.year(),
            month: start.month(),
            day: start.date(),
            hour: 0,
            minute: 0,
            second: 0,
          },
          timezone.id,
        )
      : null;

    const endDate = end
      ? moment.tz(
          {
            year: end.year(),
            month: end.month(),
            day: end.date(),
            hour: 23,
            minute: 59,
            second: 0,
          },
          timezone.id,
        )
      : null;

    if ((startDate || endDate) && setDatePreset.current > 1) {
      setDateSelected(true);
    } else if (!startDate && !endDate) {
      setDateSelected(false);
    }
    setDates({ startDate, endDate });
  };

  // A range preset is the window AND which side of now it is on. Both have to
  // land in one render: `applyDatePreset` fetches immediately with whatever
  // `isPast` the closure captured, so flipping to Past through it would fire a
  // request with the old flag and race the corrected one. This only sets
  // state — the FILTER CHANGES effect below sees both and fetches once.
  const applyRangePreset = ({
    past = false,
    startDate = null,
    endDate = null,
  }) => {
    setIsPast(past);
    setDatePreset.current = 2;
    handleSetDates({ startDate, endDate });
  };

  const applyDatePreset = (dates) => {
    handleSetDates(dates);
    setDatePreset.current = 2;
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: searchString,
        datesObj: { startDate: dates.startDate, endDate: dates.endDate },
        filtersObj: selectedFilters,
        page: 1,
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: searchString,
        datesObj: { startDate: dates.startDate, endDate: dates.endDate },
        filtersObj: selectedFilters,
        page: 1,
      });
    }
  };

  // =====================================================================
  // SEARCH
  // =====================================================================

  const handleSearchSubmit = (value) => {
    setSearchString(value);

    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters,
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters,
      });
    }
  };

  // =====================================================================
  // NAVIGATION
  // =====================================================================

  const handleOpenEvent = (selected) => {
    const { id, occurrence_id, type } = selected;
    const pathType =
      type === "Zoom" ? "zoom" : eventType === "all" ? "offline" : eventType;

    if (occurrence_id) {
      navigate(`/events/${pathType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${pathType}/${id}`);
    }
  };

  // =====================================================================
  // URL BUILDER
  // =====================================================================

  const buildEventsUrl = ({
    type,
    page,
    pageSize = PAGE_SIZE,
    is_Past,
    search,
    datesObj,
    filtersObj,
  }) => {
    let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=${pageSize}&page=${page}&without_occurrences=true`;

    if (!is_Past && search) url += `&search=${search}`;

    if (!is_Past && datesObj?.startDate && datesObj?.endDate) {
      url +=
        `&start_datetime=${moment(datesObj.startDate).format(
          "YY-MM-DD HH:mm:ss",
        )}` +
        `&end_datetime=${moment(datesObj.endDate).format("YY-MM-DD HH:mm:ss")}`;
    }

    if (!is_Past && filtersObj) {
      Object.entries(filtersObj).forEach(([group, ids]) => {
        const param = getFilteringParameterName(group);
        if (!param) return;
        ids.forEach((id) => (url += `&${param}=${id}`));
      });
    }

    if (is_Past) url += `&is_past=1`;

    return url;
  };

  // =====================================================================
  // ROW MAPPER
  // =====================================================================

  const mapEventRows = (meetings, type, is_Past) =>
    (meetings || []).map((m) => {
      const dt = m.start_time ? moment.tz(m.start_time, m.timezone) : null;
      return {
        id: m.id,
        occurrence_id: m.occurrence_id,
        title: m.topic || "(No title)",
        post_id: m.shop_post_object_id,
        date: dt ? dt.format("MMM DD, YYYY") : null,
        time: dt ? dt.format("hh:mm a") : null,
        _sortKey: dt ? dt.valueOf() : 0,
        timezone: m.timezone,
        location: m.location || "",
        type: type === "offline" ? "Event" : "Zoom",
        recurrence:
          (m.type === 2 && type === "offline") ||
          (m.type === 8 && type === "zoom")
            ? "Recurring"
            : "One-time",
        status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
      };
    });

  // =====================================================================
  // MAIN FETCH — SINGLE TYPE (offline | zoom)
  // =====================================================================

  const syncedAfterEventsRef = useRef(false);

  const stateRef = useRef({});
  stateRef.current = {
    eventType,
    isPast,
    wholeRange,
    searchString,
    dates,
    selectedFilters,
    settings,
    isZoomConnected,
  };

  const getEventsList = useCallback(
    async ({ page = 1, type, is_Past, search, datesObj, filtersObj } = {}) => {
      const s = stateRef.current;
      type = type ?? s.eventType;
      is_Past = is_Past ?? s.isPast;
      search = search ?? s.searchString;
      datesObj = datesObj ?? s.dates;
      filtersObj = filtersObj ?? s.selectedFilters;

      if (!s.settings) return;
      setLoading(true);

      try {
        const url = buildEventsUrl({
          type,
          page,
          is_Past,
          search,
          datesObj,
          filtersObj,
        });
        const res = await axios.get(url, {
          headers: { "X-WP-Nonce": servvData.nonce },
        });
        const rows = mapEventRows(res.data.meetings, type, is_Past);

        setMeetingsList(rows);
        setFirstFetchDone(true);
        setPagination({
          pageNumber: res.data.page_number,
          pageCount: res.data.page_count,
        });
      } catch (e) {
        console.error(e);
        toast("Error fetching events");
      } finally {
        setFirstFetchDone(true);
        setLoading(false);
      }

      if (!syncedAfterEventsRef.current) {
        syncedAfterEventsRef.current = true;
        await syncAccountsAfterEvents?.();
        await syncFiltersFromServer?.();
      }
    },
    [], // stable — reads live values via stateRef
  );

  // =====================================================================
  // MERGED FETCH — offline always, zoom only if isZoomConnected
  // =====================================================================

  const getMergedEventsList = useCallback(
    async ({ page = 1, is_Past, search, datesObj, filtersObj, pageSize } = {}) => {
      const s = stateRef.current;
      is_Past = is_Past ?? s.isPast;
      search = search ?? s.searchString;
      datesObj = datesObj ?? s.dates;
      filtersObj = filtersObj ?? s.selectedFilters;
      if (!s.settings) return;
      const version = resourceVersion("events");
      setMergedLoading(true);
      const headers = { "X-WP-Nonce": servvData.nonce };

      // Whole-range mode asks both endpoints for the full window, so there is
      // nothing to balance between them and nothing to page through.
      const unpaged = Boolean(pageSize);
      const TARGET = pageSize ?? PAGE_SIZE; // 10 total
      const ITEMS_PER_TYPE = unpaged ? TARGET : 5;

      try {
        // ── STEP 1: fetch from both endpoints ─────────────────────────────────
        // if zoom not connected, fetch full TARGET from offline right away
        const offlinePageSize = s.isZoomConnected ? ITEMS_PER_TYPE : TARGET;

        const [offlineRes, zoomRes] = await Promise.all([
          axios.get(
            buildEventsUrl({
              type: "offline",
              page,
              pageSize: offlinePageSize,
              is_Past,
              search,
              datesObj,
              filtersObj,
            }),
            { headers },
          ),
          s.isZoomConnected
            ? axios.get(
                buildEventsUrl({
                  type: "zoom",
                  page,
                  pageSize: ITEMS_PER_TYPE,
                  is_Past,
                  search,
                  datesObj,
                  filtersObj,
                }),
                { headers },
              )
            : Promise.resolve(null),
        ]);

        let offlineMeetings = offlineRes.data.meetings ?? [];
        let zoomMeetings = zoomRes ? zoomRes.data.meetings ?? [] : [];
        const offlineTotal = offlineRes.data.total_records ?? 0;
        const zoomTotal = zoomRes ? zoomRes.data.total_records ?? 0 : 0;

        // ── STEP 2: balance — only needed when zoom is connected ───────────────
        if (s.isZoomConnected && !unpaged) {
          const offlineGot = offlineMeetings.length;
          const zoomGot = zoomMeetings.length;
          const deficit = TARGET - (offlineGot + zoomGot);

          if (deficit > 0) {
            if (offlineGot < ITEMS_PER_TYPE && zoomGot >= ITEMS_PER_TYPE) {
              // offline ran short, top up from zoom
              const extraZoomRes = await axios.get(
                buildEventsUrl({
                  type: "zoom",
                  page,
                  pageSize: ITEMS_PER_TYPE + deficit,
                  is_Past,
                  search,
                  datesObj,
                  filtersObj,
                }),
                { headers },
              );
              zoomMeetings = extraZoomRes.data.meetings ?? [];
            } else if (
              zoomGot < ITEMS_PER_TYPE &&
              offlineGot >= ITEMS_PER_TYPE
            ) {
              // zoom ran short, top up from offline
              const extraOfflineRes = await axios.get(
                buildEventsUrl({
                  type: "offline",
                  page,
                  pageSize: ITEMS_PER_TYPE + deficit,
                  is_Past,
                  search,
                  datesObj,
                  filtersObj,
                }),
                { headers },
              );
              offlineMeetings = extraOfflineRes.data.meetings ?? [];
            }
          }
        }

        // ── STEP 3: map, merge, sort ───────────────────────────────────────────
        const allOffline = mapEventRows(offlineMeetings, "offline", is_Past);
        const allZoom = mapEventRows(zoomMeetings, "zoom", is_Past);

        let merged = [...allOffline, ...allZoom].sort((a, b) =>
          is_Past ? b._sortKey - a._sortKey : a._sortKey - b._sortKey,
        );

        // ── STEP 3b: the past half of a calendar window ───────────────────────
        // The endpoint cannot answer "events inside a past window": a window
        // that has already passed comes back empty whether or not is_past is
        // set, and is_past=1 ignores the window (and the search and filters)
        // and returns every past event. So a calendar month that reaches into
        // the past is topped up from that list and trimmed here.
        const windowStartsInPast =
          unpaged &&
          datesObj?.startDate &&
          moment(datesObj.startDate).isBefore(moment());

        if (windowStartsInPast) {
          const pastArgs = { page: 1, pageSize: TARGET, is_Past: true };
          const [pastOffline, pastZoom] = await Promise.all([
            axios.get(buildEventsUrl({ type: "offline", ...pastArgs }), {
              headers,
            }),
            s.isZoomConnected
              ? axios.get(buildEventsUrl({ type: "zoom", ...pastArgs }), {
                  headers,
                })
              : Promise.resolve(null),
          ]);

          const from = moment(datesObj.startDate).valueOf();
          const to = datesObj.endDate
            ? moment(datesObj.endDate).valueOf()
            : Infinity;

          const past = [
            ...mapEventRows(pastOffline.data.meetings ?? [], "offline", true),
            ...mapEventRows(pastZoom?.data.meetings ?? [], "zoom", true),
          ].filter((row) => row._sortKey >= from && row._sortKey <= to);

          const seen = new Set(merged.map((row) => `${row.id}${row.occurrence_id || ""}`));
          merged = [
            ...merged,
            ...past.filter(
              (row) => !seen.has(`${row.id}${row.occurrence_id || ""}`),
            ),
          ].sort((a, b) => a._sortKey - b._sortKey);
        }

        // ── STEP 4: pagination — based on server totals ────────────────────────
        const totalItems = offlineTotal + zoomTotal;
        const totalPages = unpaged
          ? 1
          : Math.max(1, Math.ceil(totalItems / TARGET));
        const safePage = Math.min(Math.max(1, page), totalPages);

        if (version !== resourceVersion("events")) {
          return await getMergedEventsList({ page, is_Past, search, datesObj, filtersObj, pageSize });
        }
        setMergedList(merged);
        setMergedPagination({
          pageNumber: safePage,
          pageCount: totalPages,
          totalItems,
        });
        setFirstFetchDone(true);
      } catch (e) {
        console.error(e);
        toast("Error fetching merged events");
      } finally {
        setMergedLoading(false);
      }

      if (!syncedAfterEventsRef.current) {
        syncedAfterEventsRef.current = true;
        await syncAccountsAfterEvents?.();
        await syncFiltersFromServer?.();
      }
    },
    [],
  );

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = useCallback(
    async (event, page = 1) => {
      const s = stateRef.current;
      if (!s.settings) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`,
          { headers: { "X-WP-Nonce": servvData.nonce } },
        );

        const rows = (res.data.meetings ?? []).map((m) => {
          const dt = moment.tz(m.start_time, m.timezone);
          return {
            id: m.id,
            occurrence_id: m.occurrence_id,
            title: m.topic || "(No title)",
            post_id: m.shop_post_object_id,
            timezone: m.timezone,
            date: dt.format("MMM DD, YYYY"),
            time: dt.format("hh:mm a"),
            location: m.location || "",
            type: eventType === "offline" ? "Event" : "Zoom",
            recurrence:
              m.type === 2 && eventType === "offline"
                ? "One-time"
                : "Recurring",
            status: isPast ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
            tickets: "0/0",
          };
        });

        setEventOccurrencess(rows || []);
        setSelectedEventForOccurrences(event);
        setView("occurrences");
        setOccurrencesPagination({
          pageNumber: res.data.page_number,
          pageCount: res.data.page_count,
        });
      } catch {
        toast("Error fetching occurrences.");
      } finally {
        setLoading(false);
      }
    },
    [], // stable — reads live values via stateRef
  );

  // =====================================================================
  // DELETE
  // =====================================================================

  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) url += `?occurrence_id=${occurrenceID}`;

    await axios({
      url,
      method: "DELETE",
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (occurrenceID) {
      setEventOccurrencess((prev) =>
        prev.filter((o) => o.occurrence_id !== occurrenceID),
      );

      if (selectedEventForOccurrences) {
        await getEventOccurrencess(
          selectedEventForOccurrences,
          occurrencesPagination.pageNumber ?? 1,
        );
      }
    } else {
      if (eventType === "all") getMergedEventsList();
      else getEventsList();
    }
  };

  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map((event) => ({
      id: event.post_id,
      occurrenceId: event.occurrence_id,
    }));
    try {
      await Promise.all(
        eventsIDs.map(({ id, occurrenceId }) =>
          handleEventDelete(id, occurrenceId),
        ),
      );
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // =====================================================================
  // EFFECTS
  // =====================================================================

  const lastFetchedRef = useRef(null);

  const shouldFetch = useCallback(() => {
    const s = stateRef.current;
    if (!s.settings) return false;

    const next = {
      eventType: s.eventType,
      isPast: s.isPast,
      startDate: s.dates.startDate?.valueOf() ?? null,
      endDate: s.dates.endDate?.valueOf() ?? null,
      filters: JSON.stringify(s.selectedFilters),
      isZoomConnected: s.isZoomConnected, // re-fetch if zoom connection changes
      wholeRange: s.wholeRange, // a calendar needs the window, not a page
    };

    const prev = lastFetchedRef.current;
    if (
      prev &&
      prev.eventType === next.eventType &&
      prev.isPast === next.isPast &&
      prev.startDate === next.startDate &&
      prev.endDate === next.endDate &&
      prev.filters === next.filters &&
      prev.isZoomConnected === next.isZoomConnected &&
      prev.wholeRange === next.wholeRange
    )
      return false;

    lastFetchedRef.current = next;
    return true;
  }, []);

  const doFetch = useCallback(() => {
    const s = stateRef.current;
    if (s.eventType === "all") {
      getMergedEventsList({
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters,
        pageSize: s.wholeRange ? WHOLE_RANGE_SIZE : undefined,
      });
    } else {
      getEventsList({
        type: s.eventType,
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters,
      });
    }
  }, [getMergedEventsList, getEventsList]);

  const initialLoadDoneRef = useRef(false);

  useCacheRefresh(["events"], () => {
    if (!initialLoadDoneRef.current) return;
    if (view === "occurrences" && selectedEventForOccurrences) {
      return getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber || 1);
    }
    if (stateRef.current.eventType === "all") {
      return getMergedEventsList({ page: mergedPagination.pageNumber || 1, pageSize: stateRef.current.wholeRange ? WHOLE_RANGE_SIZE : undefined });
    }
    return getEventsList({ page: pagination.pageNumber || 1 });
  });

  // 1) INITIAL LOAD
  useEffect(() => {
    if (!settings || initialLoadDoneRef.current) return;
    initialLoadDoneRef.current = true;
    shouldFetch();
    doFetch();
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // 2) FILTER / TYPE / ZOOM CONNECTION CHANGES
  useEffect(() => {
    if (!initialLoadDoneRef.current) return;
    if (!shouldFetch()) return;
    doFetch();
  }, [
    isPast,
    wholeRange,
    eventType,
    dates.startDate?.valueOf(),
    dates.endDate?.valueOf(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(selectedFilters),
    isZoomConnected, // re-fetch when zoom connects/disconnects
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  // 3) TOAST ERRORS
  useEffect(() => {
    if (showError) toast(showError);
  }, [showError]);

  // 4) TIME FORMAT & TIMEZONE — runs once
  const settingsAppliedRef = useRef(false);
  useEffect(() => {
    if (!settings || settingsAppliedRef.current) return;
    settingsAppliedRef.current = true;

    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");
    else setTimeFormat("hh:mm a");

    let tzGuess = moment.tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find((z) => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // =====================================================================
  // EXPOSE
  // =====================================================================

  return {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    // A boolean sets the side explicitly; no argument keeps the old toggle.
    handleIsPastChange: (value) =>
      setIsPast((p) => (typeof value === "boolean" ? value : !p)),
    handleTypeChange: (t) => setEventType(t),
    handleSetDates,
    applyDatePreset,
    applyRangePreset,
    setWholeRange,
    handleSearchChange: setSearchString,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError: (err) => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () =>
      pagination.pageNumber > 1 &&
      getEventsList({ page: pagination.pageNumber - 1 }),
    handleGetNextPage: () =>
      pagination.pageNumber < pagination.pageCount &&
      getEventsList({ page: pagination.pageNumber + 1 }),
    handleGetPrevMergedPage: () =>
      mergedPagination.pageNumber > 1 &&
      getMergedEventsList({ page: mergedPagination.pageNumber - 1 }),
    handleGetNextMergedPage: () =>
      mergedPagination.pageNumber < mergedPagination.pageCount &&
      getMergedEventsList({ page: mergedPagination.pageNumber + 1 }),
    handleGetPrevOccurrencessPage: () =>
      occurrencesPagination.pageNumber > 1 &&
      getEventOccurrencess(
        selectedEventForOccurrences,
        occurrencesPagination.pageNumber - 1,
      ),
    handleGetNextOccurrencessPage: () =>
      occurrencesPagination.pageNumber < occurrencesPagination.pageCount &&
      getEventOccurrencess(
        selectedEventForOccurrences,
        occurrencesPagination.pageNumber + 1,
      ),
    handleEventDelete,
    handleMultipleEventsDelete,
    selectedEvents,
    setSelectedEvents,
    dateSelected,
  };
};
