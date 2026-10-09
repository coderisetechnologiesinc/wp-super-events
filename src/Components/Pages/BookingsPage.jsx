import useCacheRefresh from "../../hooks/useCacheRefresh";
import { useEffect, useState, useRef, Fragment } from "react";
import { toast } from "react-toastify";
import moment from "moment-timezone";
import {
  ArrowDownOnSquareStackIcon,
  PaperAirplaneIcon,
  WalletIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import {
  fetchBookings as fetchBookingsUtil,
  refundBooking as refundBookingUtil,
  cancelBooking,
  resendBookingConfirmation,
} from "../../utilities/bookings";
import { loadHeadings, saveHeadings } from "../../utilities/tableHeadings";
import { timezonesList } from "../../utilities/timezones";
import { useServvStore } from "../../store/useServvStore";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import DisplayOptions from "../Controls/DisplayOptions";
import NewButtonGroup from "../Controls/NewButtonGroup";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import CheckboxItem from "../Controls/CheckboxItem";
import FiltersDropdown from "../Containers/FiltersDropdown";
import BulkBar, { SelectAllRow } from "../Containers/BulkBar";
import ModalShell from "../Modals/ModalShell";
import SpinnerLoader from "./SpinnerLoader";
import DashboardPagination from "../Shared/DashboardPagination";
import BookingRows, { BOOKING_COLUMNS } from "./Bookings/BookingRows";
import styles from "./BookingsPage.module.scss";

// =====================================================================
// HEADINGS STORAGE HELPERS
// =====================================================================

const HEADINGS_STORAGE_KEY = "servv_bookings_headings";

// Which columns the list shows is a per-browser preference, so it lives in
// localStorage and is edited through the Display options popover.
const defaultHeadings = BOOKING_COLUMNS.map(({ label, value }) => ({
  label,
  value,
  visible: true,
}));

// What the destructive bulk actions have to be confirmed for.
const CONFIRMABLE = {
  refund: {
    title: "Refund these bookings?",
    description:
      "The money goes back to the registrant through Stripe. This cannot be undone.",
    action: "Issue refund",
  },
  cancel: {
    title: "Cancel these bookings?",
    description:
      "The registrants lose their place and are notified. This cannot be undone.",
    action: "Cancel booking",
  },
};

// =====================================================================
// COMPONENT
// =====================================================================

const BookingsPage = () => {
  const { settings, stripeCurrency } = useServvStore();
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [loading, setLoading] = useState(false);
  const [timezone, setTimezone] = useState("US/Pacific");
  // Lazy initializer reads from localStorage once on mount
  const [headings, setHeadings] = useState(() => {
    const loaded = loadHeadings(HEADINGS_STORAGE_KEY, defaultHeadings);
    try {
      const saved = JSON.parse(localStorage.getItem(HEADINGS_STORAGE_KEY) || "null");
      if (saved && "status" in saved) {
        const migrated = loaded.map((heading) => heading.value === "paid"
          ? { ...heading, visible: heading.visible || Boolean(saved.status) }
          : heading);
        saveHeadings(HEADINGS_STORAGE_KEY, migrated);
        return migrated;
      }
    } catch { /* unavailable storage uses the loaded defaults */ }
    return loaded;
  });

  const timeIntervals = [
    { label: "All time", value: "all" },
    { label: "12 month", value: "12" },
    { label: "30 days", value: "30" },
    { label: "7 days", value: "7" },
  ];

  const [selectedOrder, setSelectedOrder] = useState([]);
  const [bookings, setBookings] = useState(false);
  const [selectedInterval, setSelectedTimeInterval] = useState("all");
  const [searchString, setSearchString] = useState("");
  const [localSearch, setLocalSearch] = useState("");
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [price, setPrice] = useState({ from: null, to: null });
  const [selectedProvider, setSelectedProvider] = useState({
    offline: true,
    zoom: true,
  });
  const [confirming, setConfirming] = useState(null);
  const [firstFetchDone, setFirstFetchDone] = useState(false);
  const firstFetch = useRef(false);

  const timezones = Object.keys(timezonesList).map((zone) => {
    return { id: zone, name: timezonesList[zone] };
  });

  const getTimezoneFromSettings = (settings) => {
    const hardDefault = "America/Los_Angeles";

    const guessed = moment.tz.guess();
    const raw = settings?.settings?.admin_dashboard;

    if (!raw) return moment.tz.zone(guessed) ? guessed : hardDefault;

    try {
      const parsed = typeof raw === "string" ? JSON.parse(raw.trim()) : raw;
      const savedTz = parsed?.default_timezone;
      if (savedTz && moment.tz.zone(savedTz)) return savedTz;
      return moment.tz.zone(guessed) ? guessed : hardDefault;
    } catch (err) {
      console.warn("Invalid admin_dashboard JSON:", err);
      return moment.tz.zone(guessed) ? guessed : hardDefault;
    }
  };


  useEffect(() => {
    if (settings?.settings) {
      if (settings.settings.time_format_24_hours) setTimeFormat("HH:mm");
    }
  }, [settings]);

  useEffect(() => {
    const timezoneFromSettings = getTimezoneFromSettings();
    setTimezone(timezoneFromSettings);
  }, [settings]);

  const getPostId = (variant) => {
    if (variant.indexOf("0") < variant.length - 1) {
      return {
        id: variant.slice(0, variant.indexOf("0")),
        occurrence: variant.slice(variant.indexOf("0")),
      };
    } else {
      return { id: variant.slice(0, variant.indexOf("0")) };
    }
  };

  const handleOrderSelect = (id) =>
    setSelectedOrder((prev) =>
      prev.includes(id) ? prev.filter((order) => order !== id) : [...prev, id],
    );

  const rows = bookings?.bookings ?? [];

  const handleSelectAll = () =>
    setSelectedOrder((prev) =>
      prev.length === rows.length ? [] : rows.map((booking) => booking.id),
    );

  // A selection only means something while its rows are on screen.
  useEffect(() => {
    const visible = new Set(rows.map((booking) => booking.id));
    setSelectedOrder((prev) => {
      const kept = prev.filter((id) => visible.has(id));
      return kept.length === prev.length ? prev : kept;
    });
  }, [bookings]);

  const resendConfirmations = async ({ id, occurrence, registrant }) => {
    setLoading(true);
    const registrants = registrant.includes(",")
      ? registrant.split(",")
      : [registrant];
    try {
      for (const reg of registrants) {
        await resendBookingConfirmation(id, reg, occurrence);
      }
      toast("Emails successfully resent to the registrant");
    } catch (error) {
      toast("Failed to resend emails");
    } finally {
      setLoading(false);
    }
  };

  const cancelBookings = async (id) => {
    setLoading(true);
    const refundBookingResponse = await cancelBooking(id).catch(() => {
      toast("Failed to cancel booking");
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      toast("Booking successfully cancelled");

      let newBookings = { ...bookings };
      newBookings = {
        ...newBookings,
        bookings: newBookings.bookings.map((booking) => {
          if (booking.id === id) {
            console.log(booking, id);

            return { ...booking, active_registrants: 0 };
          }
          return { ...booking };
        }),
      };
      setBookings(newBookings);

      setLoading(false);
    }
  };

  const handleSetDates = (dates) => {
    let startDate = null;
    if (dates.startDate)
      startDate = moment.tz(
        {
          year: dates.startDate.getFullYear(),
          month: dates.startDate.getMonth(),
          day: dates.startDate.getDate(),
          hour: 0,
          minute: 0,
          second: 0,
        },
        timezone,
      );
    let endDate = null;
    if (dates.endDate)
      endDate = moment.tz(
        {
          year: dates.endDate.getFullYear(),
          month: dates.endDate.getMonth(),
          day: dates.endDate.getDate(),
          hour: 23,
          minute: 59,
          second: 0,
        },
        timezone,
      );
    setDates({ startDate: startDate ?? null, endDate: endDate ?? null });
  };

  const fetchBookings = async ({ page = 1 } = {}) => {
    setLoading(true);

    const endDate = moment();
    let startDate = null;
    let fromDatetime = null;
    let toDatetime = null;

    if (dates.startDate === null) {
      if (selectedInterval === "12" || firstFetch.current) {
        startDate = moment(endDate).subtract(12, "months");
      } else if (selectedInterval === "30") {
        startDate = moment(endDate).subtract(30, "days");
      } else if (selectedInterval === "7") {
        startDate = moment(endDate).subtract(7, "days");
      }
      if (!firstFetch.current && startDate) {
        fromDatetime = startDate.format("YYYY-MM-DD HH:mm:ss");
        toDatetime = endDate.format("YYYY-MM-DD HH:mm:ss");
      }
    } else if (dates.startDate && dates.endDate) {
      fromDatetime = moment(dates.startDate).format("YYYY-MM-DD HH:mm:ss");
      toDatetime = moment(dates.endDate).format("YYYY-MM-DD HH:mm:ss");
    }

    if (!selectedProvider.offline && !selectedProvider.zoom) {
      setLoading(false);
      toast("Please select at least one event type to apply the filter.");
      return;
    }

    try {
      const data = await fetchBookingsUtil({
        page,
        filters: {
          dates: { startDate: fromDatetime, endDate: toDatetime },
          selectedInterval,
          searchString,
          price,
          selectedProvider,
        },
      });
      if (data) setBookings(data);
    } catch (error) {
      toast("WP Super Events was unable to fetch bookings.");
    }
    setLoading(false);
    return { bookings: bookings.bookings, page: bookings.page_number };
  };


  useCacheRefresh(["bookings"], () => fetchBookings({ page: bookings?.page_number || 1 }));

  // Apply and Reset change several pieces of filter state at once, and
  // fetchBookings reads them from its closure — calling it in the same handler
  // would fetch with the values the render started with. Bumping a counter
  // lets the effect below run once React has settled the new state.
  const [filtersRun, setFiltersRun] = useState(0);
  const onFiltering = () => setFiltersRun((run) => run + 1);

  useEffect(() => {
    if (!filtersRun) return;
    fetchBookings();
  }, [filtersRun]);

  useEffect(() => {
    fetchBookings().finally(() => setFirstFetchDone(true));
  }, [dates, selectedInterval]);

  // The field holds what is typed; the list is refetched once typing settles.
  useEffect(() => {
    if (localSearch === searchString) return undefined;

    const timer = setTimeout(() => setSearchString(localSearch), 400);
    return () => clearTimeout(timer);
  }, [localSearch]);

  const searchedRef = useRef(searchString);
  useEffect(() => {
    if (searchedRef.current === searchString) return;
    searchedRef.current = searchString;
    fetchBookings();
  }, [searchString]);

  const handleChangeTimeInterval = (newVal) => setSelectedTimeInterval(newVal);

  const handlePriceChange = (newVal, attribute) => {
    const newPrice = { ...price };
    const newPriceValue = newVal.replace(".", ",");
    if (attribute === "from") newPrice.from = Number.parseFloat(newPriceValue);
    else newPrice.to = Number.parseFloat(newPriceValue);
    setPrice({ ...newPrice });
  };

  const handleSelectProvider = (provider) =>
    setSelectedProvider((prev) => ({ ...prev, [provider]: !prev[provider] }));

  const resetFilters = () => {
    setDates({ startDate: null, endDate: null });
    setSearchString("");
    setLocalSearch("");
    setSelectedProvider({ offline: true, zoom: true });
    setPrice({ from: null, to: null });
    firstFetch.current = true;
  };

  // What the Filters drawer itself holds — the search and the period sit in
  // the toolbar, so they are not part of its badge.
  const drawerFilterCount =
    (Number.isFinite(price.from) ? 1 : 0) +
    (Number.isFinite(price.to) ? 1 : 0) +
    (selectedProvider.offline && selectedProvider.zoom ? 0 : 1);

  const isFiltersApplied =
    Boolean(searchString) || Boolean(dates.startDate) || drawerFilterCount > 0;

  const performBulkAction = async (actionType, ids = selectedOrder) => {
    if (!ids || ids.length === 0) return;
    setLoading(true);
    let successCount = 0;
    let failureCount = 0;

    try {
      for (const variant of ids) {
        const variantData = bookings.bookings.find(
          (booking) => booking.id === variant,
        );
        if (!variantData) continue;

        const { id, occurrence } = getPostId(variantData.variant_id);
        const registrants = variantData.registrants_ids.includes(",")
          ? variantData.registrants_ids.split(",")
          : [variantData.registrants_ids];

        if (actionType !== "resend" && actionType !== "refund" && actionType !== "cancel") {
          toast("Unknown action type.");
          return;
        }

        if (actionType === "refund") {
          try {
            const res = await refundBookingUtil(variant);
            if (res.status === 200) successCount++;
            else failureCount++;
          } catch {
            failureCount++;
          }
        } else if (actionType === "cancel") {
          try {
            const res = await cancelBooking(variant);
            if (res.status === 200) successCount++;
            else failureCount++;
          } catch {
            failureCount++;
          }
        } else {
          try {
            const requests = registrants.map((registrant) =>
              resendBookingConfirmation(id, registrant, occurrence),
            );
            const responses = await Promise.allSettled(requests);
            const succeeded = responses.filter(
              (r) => r.status === "fulfilled" && r.value.status === 200,
            ).length;
            if (succeeded === registrants.length) successCount++;
            else failureCount++;
          } catch {
            failureCount++;
          }
        }
      }

      if (successCount > 0 && failureCount === 0)
        toast("All actions completed successfully.");
      else if (successCount > 0 && failureCount > 0)
        toast(`${successCount} succeeded, ${failureCount} failed.`);
      else toast("All actions failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    let allBookings = [];
    for (let i = 1; i < bookings.page_count + 1; i++) {
      const { bookings, page } = await fetchBookings({ page: i });
      allBookings = allBookings.concat(bookings);
    }
    exportToCSV(allBookings);
  };

  function exportToCSV(data, filename = "export.csv") {
    if (!data || data.length === 0) return;
    const selectedFields = [
      "id",
      "created_datetime",
      "product_name",
      "variant_name",
      "start_datetime",
      "timezone",
      "price",
      "quantity",
      "refunded_quantity",
      "active_registrants",
      "additional_registrants",
    ];
    const headerMap = {
      id: "Booking ID",
      created_datetime: "Created At",
      product_name: "Product Name",
      variant_name: "Variant",
      start_datetime: "Start Time",
      timezone: "Timezone",
      price: "Price",
      quantity: "Quantity",
      refunded_quantity: "Refunded",
      active_registrants: "Active Registrants",
      additional_registrants: "Additional Registrants",
    };
    const rows = data.map((item) => {
      const row = {};
      for (const field of selectedFields) {
        if (field === "additional_registrants") {
          row[field] = Array.isArray(item.additional_registrants)
            ? item.additional_registrants
                .map(
                  (r) =>
                    `${r.first_name || ""} ${r.last_name || ""} (${
                      r.email || ""
                    })`,
                )
                .join(" | ")
            : "";
        } else {
          row[field] = item[field] ?? "";
        }
      }
      return row;
    });
    const headers = selectedFields.map((field) => headerMap[field]);
    const csvRows = [headers.join(",")];
    for (const row of rows) {
      const line = selectedFields
        .map((field) => `"${("" + row[field]).replace(/"/g, '""')}"`)
        .join(",");
      csvRows.push(line);
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }


  // --- single-row actions ---------------------------------------------------
  // Each one runs through the same confirm + bulk path, so there is one place
  // where a refund or a cancellation can actually happen.
  const askFor = (action, ids) => setConfirming({ action, ids });

  const runConfirmed = async () => {
    if (!confirming) return;
    const { action, ids } = confirming;
    setSelectedOrder(ids);
    setConfirming(null);
    await performBulkAction(action, ids);
    await fetchBookings();
  };

  const resendFor = async (ids) => {
    await performBulkAction("resend", ids);
  };

  // --- display options ------------------------------------------------------
  const customizeHeading = (value) => {
    const newHeadings = headings.map((h) =>
      h.value === value ? { ...h, visible: !h.visible } : h,
    );
    setHeadings(newHeadings);
    saveHeadings(HEADINGS_STORAGE_KEY, newHeadings); // persist on every toggle
  };

  const displayGroups = [
    {
      key: "columns",
      type: "checkbox",
      title: t("Columns"),
      note: t("Which columns this list shows. Affects this page only."),
      options: headings.map((heading) => ({
        value: heading.value,
        label: t(heading.label),
        checked: heading.visible,
        // Never let the last column be switched off.
        disabled:
          heading.visible && headings.filter((h) => h.visible).length === 1,
      })),
      onToggle: customizeHeading,
    },
  ];

  // --- filters drawer -------------------------------------------------------
  const filterSections = [
    {
      key: "price",
      title: t("Price"),
      content: (
        <Fragment>
          <NewInputFieldControl
            value={price.from ?? ""}
            placeholder={t("Price from")}
            onChange={(val) => handlePriceChange(val, "from")}
            maxLength={6}
            width="100%"
            type="number"
            step="any"
            minValue="0"
          />
          <NewInputFieldControl
            value={price.to ?? ""}
            placeholder={t("Price to")}
            onChange={(val) => handlePriceChange(val, "to")}
            maxLength={6}
            width="100%"
            type="number"
            step="any"
            minValue="0"
          />
        </Fragment>
      ),
    },
    {
      key: "provider",
      title: t("Event type"),
      content: (
        <Fragment>
          <CheckboxItem
            label={t("In-person")}
            checked={selectedProvider.offline}
            onChange={() => handleSelectProvider("offline")}
          />
          <CheckboxItem
            label={t("Online")}
            checked={selectedProvider.zoom}
            onChange={() => handleSelectProvider("zoom")}
          />
        </Fragment>
      ),
    },
  ];

  const pagination = {
    pageNumber: bookings?.page_number ?? 1,
    pageCount: bookings?.page_count ?? 0,
    totalItems: bookings?.total_records ?? 0,
  };

  return (
    <PageWrapper withBackground={true} flush>
      <PageContent className={styles.page}>
        <PageHeader
          eyebrow="WP Super Events by ServvAI"
          title={t("Bookings")}
          description="View and manage all event bookings in one place"
          actions={
            <Fragment>
              <DisplayOptions groups={displayGroups} />
              <PageActionButton
                type="secondary"
                icon={<ArrowDownOnSquareStackIcon />}
                text={t("Export")}
                disabled={rows.length === 0}
                onAction={handleExport}
              />
            </Fragment>
          }
        >
          <div className={styles.divider} />
        </PageHeader>

        <div className={styles.browser}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarTitle}>
              <h2 className={styles.heading}>{t("All bookings")}</h2>
              {rows.length > 0 && (
                <span className={styles.count}>{rows.length}</span>
              )}
            </div>

            <div className={styles.controls}>
              <NewInputFieldControl
                className={styles.search}
                value={localSearch}
                placeholder={t("Search by event title")}
                onChange={setLocalSearch}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSearchString(localSearch);
                }}
                width="100%"
              />

              <NewButtonGroup
                buttons={timeIntervals.map((interval) => ({
                  value: interval.value,
                  label: t(interval.label),
                }))}
                active={selectedInterval}
                onChange={handleChangeTimeInterval}
              />

              <NewDatePickerControl
                value={dates}
                onChange={handleSetDates}
                label="Select dates"
              />

              <FiltersDropdown
                isApplied={drawerFilterCount > 0}
                appliedCount={drawerFilterCount}
                onClear={() => {
                  resetFilters();
                  onFiltering();
                }}
                sections={filterSections}
                onApply={onFiltering}
              />
            </div>
          </div>

          {!loading ? (
            <Fragment>
              {firstFetchDone && rows.length === 0 ? (
                <div className={styles.empty}>
                  <h2 className={styles.emptyTitle}>
                    {isFiltersApplied
                      ? t("No bookings match this view")
                      : t("No bookings yet")}
                  </h2>
                  <p className={styles.emptyText}>
                    {isFiltersApplied
                      ? t(
                          "Try another period, clear the search, or reset the filters.",
                        )
                      : t(
                          "Bookings appear here as soon as someone registers for one of your events.",
                        )}
                  </p>
                  {isFiltersApplied && (
                    <PageActionButton
                      type="secondary"
                      text={t("Clear filters")}
                      className={styles.emptyAction}
                      onAction={() => {
                        resetFilters();
                        onFiltering();
                      }}
                    />
                  )}
                </div>
              ) : (
                <Fragment>
                  <SelectAllRow
                    total={rows.length}
                    selectedCount={selectedOrder.length}
                    onToggleAll={handleSelectAll}
                  />

                  <BulkBar
                    selectedCount={selectedOrder.length}
                    noun="booking"
                    onClear={() => setSelectedOrder([])}
                  >
                    <PageActionButton
                      type="secondary"
                      size="sm"
                      icon={<PaperAirplaneIcon />}
                      text={t("Resend")}
                      onAction={() => resendFor(selectedOrder)}
                    />
                    <PageActionButton
                      type="secondary"
                      size="sm"
                      icon={<WalletIcon />}
                      text={t("Refund")}
                      onAction={() => askFor("refund", selectedOrder)}
                    />
                    <PageActionButton
                      type="danger-secondary"
                      size="sm"
                      icon={<XCircleIcon />}
                      text={t("Cancel")}
                      onAction={() => askFor("cancel", selectedOrder)}
                    />
                  </BulkBar>

                  <BookingRows
                    bookings={rows}
                    columns={headings}
                    currency={stripeCurrency}
                    timeFormat={timeFormat}
                    selectedIds={selectedOrder}
                    onToggleSelect={handleOrderSelect}
                    onResend={(row) => resendFor([row.id])}
                    onRefund={(row) => askFor("refund", [row.id])}
                    onCancel={(row) => askFor("cancel", [row.id])}
                  />

                  {pagination.pageCount > 1 && (
                    <DashboardPagination
                      currentPage={pagination.pageNumber}
                      totalPages={pagination.pageCount}
                      totalRecords={pagination.totalItems}
                      pageSize={10}
                      onPageChange={(page) => fetchBookings({ page })}
                    />
                  )}
                </Fragment>
              )}
            </Fragment>
          ) : (
            <SpinnerLoader isLoading={loading} customStyling={styles.loader} />
          )}
        </div>
      </PageContent>

      {confirming && (
        <ModalShell
          size="sm"
          title={t(CONFIRMABLE[confirming.action].title)}
          description={t(CONFIRMABLE[confirming.action].description)}
          onClose={() => setConfirming(null)}
          footer={
            <Fragment>
              <PageActionButton
                type="secondary"
                text={t("Keep them")}
                onAction={() => setConfirming(null)}
              />
              <PageActionButton
                type="danger"
                text={t(CONFIRMABLE[confirming.action].action)}
                onAction={runConfirmed}
              />
            </Fragment>
          }
        >
          <ul className={styles.confirmList}>
            {confirming.ids.map((id) => {
              const row = rows.find((booking) => booking.id === id);
              return (
                <li key={id}>
                  #{id}
                  {row ? ` — ${row.product_name} (${row.email})` : ""}
                </li>
              );
            })}
          </ul>
        </ModalShell>
      )}
    </PageWrapper>
  );
};

export default BookingsPage;
