import useCacheRefresh from "../../hooks/useCacheRefresh";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import PageWrapper from "./PageWrapper";
import FilterTable from "../Containers/FilterTable";
import ListPagination from "../Controls/ListPagination";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import SpinnerLoader from "./SpinnerLoader";
import Badge from "../Containers/Badge";
import Card from "../Containers/Card";
import NewSelectControl from "../Controls/NewSelectControl";
import { getSentEmails, getEmailContent } from "../../utilities/mails";
import moment from "moment-timezone";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import PageActionButton from "../Controls/PageActionButton";
import { useServvStore } from "../../store/useServvStore";
import { useNavigate } from "react-router-dom";
const STATUS_OPTIONS = [
  { value: "", label: "All statuses" },
  { value: "accepted", label: "Accepted" },
  { value: "failed", label: "Failed" },
  { value: "pending", label: "Pending" },
];

const STATUS_COLOR = {
  sent: "success",
  delivered: "success",
  failed: "critical",
  bounced: "critical",
  pending: "warning",
};

const HARD_TZ_DEFAULT = "America/Los_Angeles";

const getTimezoneFromSettings = (settings) => {
  const guessed = moment.tz.guess();
  const raw = settings?.settings?.admin_dashboard;
  if (!raw) return moment.tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw.trim()) : raw;
    const savedTz = parsed?.default_timezone;
    if (savedTz && moment.tz.zone(savedTz)) return savedTz;
    return moment.tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  } catch {
    return moment.tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  }
};

const SentEmails = () => {
  const settings = useServvStore((s) => s.settings);
  const timezone = useMemo(() => getTimezoneFromSettings(settings), [settings]);
  const isFreePlan = settings?.current_plan?.id === 1;
  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [stats, setStats] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emailContent, setEmailContent] = useState(null);
  const [contentLoading, setContentLoading] = useState(false);

  const [localSearch, setLocalSearch] = useState("");
  const [search, setSearch] = useState("");
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [status, setStatus] = useState("");

  const PAGE_SIZE = 20;
  const initialFetchDone = useRef(false);

  const navigate = useNavigate();
  const fetchEmails = async (pageNum = 1, overrides = {}) => {
    setLoading(true);
    const q = "search" in overrides ? overrides.search : search;
    const d = "dates" in overrides ? overrides.dates : dates;
    const st = "status" in overrides ? overrides.status : status;

    const res = await getSentEmails({
      page: pageNum,
      page_size: PAGE_SIZE,
      q: q || undefined,
      date_from: d?.startDate
        ? moment(d.startDate).format("YYYY-MM-DD")
        : undefined,
      date_to: d?.endDate ? moment(d.endDate).format("YYYY-MM-DD") : undefined,
      email_status: st || undefined,
    });
    if (res) {
      setEmails(res.emails ?? []);
      setStats(res.stats ?? null);
      setPage(res.page_number ?? 1);
      setPageCount(res.page_count ?? 1);
      setTotalRecords(res.total_records ?? 0);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (settings && !isFreePlan && !initialFetchDone.current) {
      initialFetchDone.current = true;
      fetchEmails(1);
    }
  }, [settings]);

  const handleSearchSubmit = () => {
    setSearch(localSearch);
    fetchEmails(1, { search: localSearch });
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") handleSearchSubmit();
  };

  const handleDatesChange = (newDates) => {
    setDates(newDates);
    fetchEmails(1, { dates: newDates });
  };

  const handleStatusChange = (val) => {
    setStatus(val);
    fetchEmails(1, { status: val });
  };

  useCacheRefresh(["emails"], () => fetchEmails(page));

  const handleOpenEmail = async (email) => {
    setSelectedEmail(email);
    setEmailContent(null);
    setContentLoading(true);
    const content = await getEmailContent({ id: email.id });
    setEmailContent(content);
    setContentLoading(false);
  };

  const handleCloseModal = () => {
    setSelectedEmail(null);
    setEmailContent(null);
  };

  const handlePrev = () => {
    const prev = page - 1;
    setPage(prev);
    fetchEmails(prev);
  };

  const handleNext = () => {
    const next = page + 1;
    setPage(next);
    fetchEmails(next);
  };

  const renderHeadings = () => (
    <Fragment>
      <th>Event</th>
      <th>Recipient</th>
      <th>Provider</th>
      <th>Status</th>
      <th>Date</th>
    </Fragment>
  );

  const renderRows = () =>
    emails.map((row) => (
      <tr className="table-row" key={row.id}>
        <td>
          <a
            className="filter-table-link"
            onClick={(e) => {
              e.preventDefault();
              handleOpenEmail(row);
            }}
          >
            {row.event_name || `Event #${row.event_id}`}
          </a>
        </td>
        <td>{row.to || row.recipient || "—"}</td>
        <td>
          <Badge
            text={row.provider.toUpperCase() ?? "—"}
            size="small"
            align="center"
            additionalType="badge-short"
          />
        </td>
        <td>
          {row.status ? (
            <Badge
              text={row.status?.charAt(0).toUpperCase() + row.status?.slice(1)}
              type="pill-colour"
              color={STATUS_COLOR[row.status?.toLowerCase()] ?? ""}
              size="small"
              align="center"
              additionalType="badge-short"
            />
          ) : (
            "—"
          )}
        </td>
        <td>
          {row.status_updated_datetime
            ? moment(row.status_updated_datetime)
                .tz(timezone)
                .format("MMM DD, YYYY HH:mm")
            : "—"}
        </td>
      </tr>
    ));

  const renderMobileCards = () =>
    emails.map((row) => (
      <div
        key={row.id}
        className="mobile-event-row flex items-center justify-between px-4 py-3 mb-3 bg-white rounded-xl shadow-sm cursor-pointer"
        onClick={() => handleOpenEmail(row)}
      >
        <div>
          <div className="mobile-event-title font-semibold text-base text-gray-900">
            {row.event_name || `Event #${row.event_id}`}
          </div>
          <div className="mobile-event-date text-sm text-purple-700">
            {row.to || row.recipient || "—"}
          </div>
        </div>
        <EnvelopeIcon className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
      </div>
    ));
  const handleOpenTemaplates = () => {
    navigate("/templates");
  };
  return (
    <Fragment>
      <PageWrapper loading={false} withBackground={true}>
        <div className="dashboard-card">
          <div className="servv-dashboard-header">
            <div className="dashboard-heading flex flex-row justify-between">
              <div>
                <h1 className="dashboard-title">Sent Emails</h1>
                <p className="dashboard-description">
                  History of all outgoing email notifications
                </p>
              </div>
              <PageActionButton
                type="primary whitespace-nowrap text-[12px] md:text-[16px]"
                size="md"
                // icon={<PlusIcon className="w-5 h-5" />}
                text="Templates"
                onAction={handleOpenTemaplates}
                disabled={isFreePlan}
              />
            </div>
          </div>

          <div className="header-line" />

          {/* Stats */}
          {stats && (
            <div className="flex flex-row gap-4 pr-4 py-3 flex-wrap">
              <div className="flex flex-col items-center bg-gray-50 rounded-xl px-5 py-3 min-w-[100px]">
                <span className="text-2xl font-bold text-purple-700">
                  {stats.last_24_hours ?? 0}
                </span>
                <span className="text-xs text-gray-500 mt-1">Last 24h</span>
              </div>
              <div className="flex flex-col items-center bg-gray-50 rounded-xl px-5 py-3 min-w-[100px]">
                <span className="text-2xl font-bold text-purple-700">
                  {stats.last_week ?? 0}
                </span>
                <span className="text-xs text-gray-500 mt-1">Last 7 days</span>
              </div>
              <div className="flex flex-col items-center bg-gray-50 rounded-xl px-5 py-3 min-w-[100px]">
                <span className="text-2xl font-bold text-purple-700">
                  {stats.last_month ?? 0}
                </span>
                <span className="text-xs text-gray-500 mt-1">Last 30 days</span>
              </div>
            </div>
          )}

          <SpinnerLoader isLoading={!settings} customStyling="h-[50vh]">
          <Card className="w-full max-w-none px-0 mt-1">
            {/* Filters bar — desktop */}
            <div className="hidden md:flex items-center gap-3 px-4 py-3 flex-wrap">
              <div className="flex-1 min-w-[180px]">
                <NewInputFieldControl
                  value={localSearch}
                  placeholder="Search by event or recipient"
                  onChange={setLocalSearch}
                  onKeyDown={handleSearchKeyPress}
                  width="100%"
                  align="left"
                  disabled={isFreePlan}
                />
              </div>

              <div className="min-w-[265px]">
                <NewDatePickerControl
                  value={dates}
                  label="Select dates"
                  fullWidth
                  onChange={handleDatesChange}
                  disabled={isFreePlan}
                />
              </div>

              <div className="min-w-[160px]">
                <NewSelectControl
                  options={STATUS_OPTIONS}
                  value={status}
                  onChange={handleStatusChange}
                  iconRight={<ChevronDownIcon />}
                  disabled={isFreePlan}
                />
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block w-full">
              <SpinnerLoader isLoading={loading} customStyling="h-[50vh]">
                <FilterTable
                  tableClassName="events-table emails-table"
                  headings={renderHeadings()}
                  rows={renderRows()}
                />
                {!loading && emails.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                    <EnvelopeIcon className="w-10 h-10 mb-3" />
                    {isFreePlan ? (
                      <span className="text-sm text-center">
                        Email history is not available on the free plan.{" "}
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/settings");
                          }}
                          href="/settings"
                          className="text-purple-600 hover:underline"
                        >
                          Upgrade your plan
                        </a>{" "}
                        to view sent emails.
                      </span>
                    ) : (
                      <span className="text-sm">No sent emails found</span>
                    )}
                  </div>
                )}
              </SpinnerLoader>
            </div>

            {/* Mobile cards */}
            <div className="mobile-cards-container">
              {loading ? null : emails.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <EnvelopeIcon className="w-8 h-8 mb-2" />
                  {isFreePlan ? (
                    <span className="text-sm text-center px-4">
                      Email history is not available on the free plan.{" "}
                      <a
                        href="/upgrade"
                        className="text-purple-600 hover:underline"
                      >
                        Upgrade your plan
                      </a>{" "}
                      to view sent emails.
                    </span>
                  ) : (
                    <span className="text-sm">No sent emails found</span>
                  )}
                </div>
              ) : (
                renderMobileCards()
              )}
            </div>

            {pageCount > 1 && (
              <ListPagination
                hasPrev={page > 1}
                hasNext={page < pageCount}
                pageNumber={page}
                pageCount={pageCount}
                totalItems={totalRecords}
                showingItems={emails.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            )}
          </Card>
          </SpinnerLoader>
        </div>
      </PageWrapper>

      {/* Email detail modal */}
      {selectedEmail && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-[720px] rounded-2xl shadow-xl flex flex-col max-h-[90vh]">
            {/* Modal header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 shrink-0">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedEmail.subject || selectedEmail.event_name || "Email"}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {selectedEmail.to || selectedEmail.recipient || ""}
                  {selectedEmail.status_updated_datetime && (
                    <span className="ml-3 text-gray-400">
                      {moment(selectedEmail.status_updated_datetime)
                        .tz(timezone)
                        .format("MMM DD, YYYY HH:mm")}
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg hover:bg-gray-100 transition ml-4 shrink-0"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Meta row */}
            <div className="flex flex-row gap-3 px-6 py-3 border-b border-gray-100 shrink-0 flex-wrap">
              {selectedEmail.event_name && (
                <span className="text-sm text-gray-500">
                  Event: {selectedEmail.event_name}
                </span>
              )}
              <Badge
                text={selectedEmail.provider ?? "—"}
                size="small"
                additionalType="badge-short"
              />
              {selectedEmail.status && (
                <Badge
                  text={selectedEmail.status}
                  type="pill-colour"
                  color={
                    STATUS_COLOR[selectedEmail.status?.toLowerCase()] ?? ""
                  }
                  size="small"
                  additionalType="badge-short"
                />
              )}
            </div>

            {/* Modal body */}
            <div className="overflow-y-auto flex-1 px-6 py-4">
              {contentLoading ? (
                <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
                  Loading…
                </div>
              ) : emailContent ? (
                <div
                  className="prose max-w-none text-sm"
                  dangerouslySetInnerHTML={{
                    __html:
                      emailContent.html_content ??
                      emailContent.content ??
                      emailContent.body ??
                      "<p>No content available.</p>",
                  }}
                />
              ) : (
                <div className="text-sm text-gray-400 text-center py-8">
                  No content available.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SentEmails;
