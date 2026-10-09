import useCacheRefresh from "../../hooks/useCacheRefresh";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import ModalShell from "../Modals/ModalShell";
import styles from "./SentEmails.module.scss";
import ListPagination from "../Controls/ListPagination";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import SpinnerLoader from "./SpinnerLoader";
import Badge from "../Containers/Badge";
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
  accepted: "success",
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

  const eventName = (email) => email.event_name || `Event #${email.event_id}`;
  const providerName = (email) => email.provider?.toUpperCase() || "—";
  const statusBadge = (email) => email.status ? (
    <Badge text={email.status.charAt(0).toUpperCase() + email.status.slice(1)}
      type="pill-colour" color={STATUS_COLOR[email.status.toLowerCase()] || ""}
      size="small" additionalType="badge-short" />
  ) : "—";
  const sentDate = (email) => email.status_updated_datetime
    ? moment(email.status_updated_datetime).tz(timezone).format("MMM DD, YYYY HH:mm") : "—";

  return (
    <Fragment>
      <PageWrapper flush>
        <PageContent>
          <PageHeader eyebrow="WP Super Events by ServvAI" title="Notifications"
            description="History of all outgoing email notifications"
            actions={<PageActionButton text="Templates" onAction={() => navigate("/templates")} disabled={isFreePlan} />}>
            <div className={styles.divider} />
          </PageHeader>
          {stats && !isFreePlan && (
            <div className={styles.stats}>
              {[["Last 24h", stats.last_24_hours], ["Last 7 days", stats.last_week], ["Last 30 days", stats.last_month]].map(([label, value]) => (
                <div key={label} className={styles.stat}><strong>{value ?? 0}</strong><span>{label}</span></div>
              ))}
            </div>
          )}
          <div className={styles.browser}>
            <div className={styles.toolbar}>
              <div className={styles.toolbarTitle}><h2>All notifications</h2><span className={styles.count}>{totalRecords}</span></div>
              <div className={styles.controls}>
                <div className={styles.search}>
                  <NewInputFieldControl value={localSearch} placeholder="Search by event or recipient"
                    onChange={setLocalSearch} onKeyDown={handleSearchKeyPress} width="100%" disabled={isFreePlan} />
                </div>
                <PageActionButton text="Search" icon={<MagnifyingGlassIcon />} type="secondary" onAction={handleSearchSubmit} disabled={isFreePlan || loading} />
                <NewDatePickerControl value={dates} label="Select dates" onChange={handleDatesChange} disabled={isFreePlan} />
                <div className={styles.statusFilter}>
                  <NewSelectControl options={STATUS_OPTIONS} value={status} onChange={handleStatusChange} disabled={isFreePlan} />
                </div>
              </div>
            </div>
            <SpinnerLoader isLoading={!settings || loading} customStyling={styles.loader}>
              {emails.length > 0 && !isFreePlan ? (
                <div className={styles.list} role="table" aria-label="Notifications">
                  <div className={styles.head} role="row">
                    {["Event", "Recipient", "Provider", "Status", "Date"].map(label => <div role="columnheader" key={label}>{label}</div>)}
                  </div>
                  {emails.map(email => (
                    <div className={styles.row} key={email.id} role="row">
                      <div className={styles.event} role="cell" data-label="Event">
                        <span className={styles.mark}><EnvelopeIcon /></span>
                        <button type="button" className={styles.title} title={eventName(email)} onClick={() => handleOpenEmail(email)}>{eventName(email)}</button>
                      </div>
                      <div className={styles.recipient} role="cell" data-label="Recipient" title={email.to || email.recipient}>{email.to || email.recipient || "—"}</div>
                      <div role="cell" data-label="Provider"><span className={styles.provider}>{providerName(email)}</span></div>
                      <div role="cell" data-label="Status">{statusBadge(email)}</div>
                      <div className={styles.date} role="cell" data-label="Date">{sentDate(email)}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.empty}>
                  <EnvelopeIcon /><h3>{isFreePlan ? "Email history requires a paid plan" : "No notifications found"}</h3>
                  <p>{isFreePlan ? "Upgrade your plan to view sent emails." : "Try another search, date range, or status."}</p>
                  {isFreePlan && <PageActionButton text="View plans" onAction={() => navigate("/plans")} />}
                </div>
              )}
              {!isFreePlan && pageCount > 1 && <ListPagination hasPrev={page > 1} hasNext={page < pageCount} pageNumber={page} pageCount={pageCount} totalItems={totalRecords} showingItems={emails.length} onPrev={handlePrev} onNext={handleNext} />}
            </SpinnerLoader>
          </div>
        </PageContent>
      </PageWrapper>
      {selectedEmail && (
        <ModalShell title={selectedEmail.subject || eventName(selectedEmail)} eyebrow="Notification"
          description={`${selectedEmail.to || selectedEmail.recipient || ""} · ${sentDate(selectedEmail)}`}
          onClose={handleCloseModal}>
          <div className={styles.metadata}><span className={styles.provider}>{providerName(selectedEmail)}</span>{statusBadge(selectedEmail)}</div>
          <SpinnerLoader isLoading={contentLoading} customStyling={styles.contentLoader}>
            {emailContent ? <div className={styles.emailContent} dangerouslySetInnerHTML={{__html: emailContent.html_content ?? emailContent.content ?? emailContent.body ?? "<p>No content available.</p>"}} /> : <p>No content available.</p>}
          </SpinnerLoader>
        </ModalShell>
      )}
    </Fragment>
  );
};

export default SentEmails;
