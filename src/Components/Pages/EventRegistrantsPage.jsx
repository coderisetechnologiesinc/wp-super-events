import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowDownTrayIcon, PaperAirplaneIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useServvStore } from "../../store/useServvStore";
import { getEvent } from "../../utilities/events";
import { addRegistrant, deleteRegistrant, fetchRegistrants, fetchRegistrantsWithToken, resendAllNotifications, resendRegistrantNotification } from "../../utilities/registrants";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import BreadCrumbs from "../Menu/BreadCrumbs";
import PageActionButton from "../Controls/PageActionButton";
import NewInputControl from "../Controls/NewInputControl";
import CheckboxItem from "../Controls/CheckboxItem";
import ModalShell from "../Modals/ModalShell";
import SpinnerLoader from "./SpinnerLoader";
import styles from "./EventRegistrantsPage.module.scss";

const PAGE_SIZE = 20;
const emptyContact = { firstName: "", lastName: "", email: "" };
const failureMessage = (failure) => failure.response?.data?.message || failure.message || "Please try again.";
const csvCell = (value) => {
  let text = String(value || "");
  if (/^[=+@-]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
};

export default function EventRegistrantsPage() {
  const { id, provider } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const occurrenceId = query.get("occurrence_id") || query.get("occurrenceId") || query.get("occ");
  const isZoom = provider === "zoom" || location.pathname.includes("/zoom/");
  const settings = useServvStore((store) => store.settings);
  const canAdd = !!settings?.current_plan && Number(settings.current_plan.id) !== 1;
  const [title, setTitle] = useState("");
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ pageCount: 1 });
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(null);
  const [contact, setContact] = useState(emptyContact);
  const [contactError, setContactError] = useState("");
  const tokens = useRef({ 1: null });
  const generation = useRef(0);
  const actionLock = useRef(false);
  const mounted = useRef(false);
  const routeKey = `${id}:${isZoom}:${occurrenceId || ""}`;
  const previousRoute = useRef(routeKey);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; generation.current++; }; }, []);

  const fetchPage = useCallback((number) => isZoom
    ? fetchRegistrantsWithToken({ postID: id, occurrenceId, next_page_token: tokens.current[number], pageSize: PAGE_SIZE, throwOnError: true })
    : fetchRegistrants({ postID: id, occurrenceId, page: number, throwOnError: true }), [id, occurrenceId, isZoom]);

  const load = useCallback(async (number) => {
    const current = ++generation.current;
    setLoading(true); setError("");
    try {
      const result = await fetchPage(number);
      if (!mounted.current || current !== generation.current) return;
      setRows(result.registrants); setPagination(result.pagination); setSelected([]);
      if (result.pagination.nextPageToken) tokens.current[number + 1] = result.pagination.nextPageToken;
      else delete tokens.current[number + 1];
    } catch (failure) {
      if (mounted.current && current === generation.current) setError(`Unable to load registrants. ${failureMessage(failure)}`);
    } finally { if (mounted.current && current === generation.current) setLoading(false); }
  }, [fetchPage]);

  useEffect(() => {
    let active = true;
    setTitle("");
    getEvent(id, occurrenceId).then((data) => { if (active) setTitle(data.meeting?.topic || data.topic || ""); }).catch(() => {});
    return () => { active = false; };
  }, [id, occurrenceId]);
  useEffect(() => {
    if (previousRoute.current !== routeKey) {
      previousRoute.current = routeKey; tokens.current = { 1: null }; setSelected([]); setModal(null); setRows([]);
      if (page !== 1) { setPage(1); return; }
    }
    load(page);
    return () => { generation.current++; };
  }, [routeKey, page, load]);

  const runAction = async (action, success) => {
    if (actionLock.current) return;
    actionLock.current = true; setBusy(true);
    try {
      await action();
      if (!mounted.current) return;
      toast.success(success); setModal(null); setContact(emptyContact); setSelected([]);
      await load(page);
    } catch (failure) { if (mounted.current) toast.error(failureMessage(failure)); }
    finally { actionLock.current = false; if (mounted.current) setBusy(false); }
  };
  const create = () => {
    if (!canAdd) return;
    if (!contact.firstName.trim() || !contact.lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      setContactError("Enter a first name, last name and valid email address."); return;
    }
    runAction(() => addRegistrant({ postID: id, occurrenceId, ...contact, freePlan: Number(settings?.current_plan?.id) === 1 }), "Registrant added.");
  };
  const performForSelected = async (action, ids) => {
    const results = await Promise.allSettled(ids.map((registrantID) => action({ postID: id, occurrenceId, registrantID })));
    const failed = results.filter((result) => result.status === "rejected");
    if (failed.length) {
      await load(page);
      throw new Error(`${ids.length - failed.length} of ${ids.length} completed. ${failureMessage(failed[0].reason)}`);
    }
  };
  const resend = () => runAction(
    () => selected.length ? performForSelected(resendRegistrantNotification, selected) : resendAllNotifications({ postID: id, occurrenceId }),
    "Notifications resent.",
  );
  const exportCSV = async () => {
    if (actionLock.current) return;
    actionLock.current = true; setBusy(true);
    try {
      const all = []; let number = 1, nextToken = null; const seen = new Set();
      do {
        const result = isZoom
          ? await fetchRegistrantsWithToken({ postID: id, occurrenceId, next_page_token: nextToken, pageSize: PAGE_SIZE, throwOnError: true })
          : await fetchRegistrants({ postID: id, occurrenceId, page: number, throwOnError: true });
        all.push(...result.registrants);
        if (!isZoom) { if (number >= (result.pagination.pageCount || 1)) break; number++; }
        else {
          nextToken = result.pagination.nextPageToken;
          if (nextToken && seen.has(nextToken)) throw new Error("Unable to finish the export: repeated pagination token.");
          seen.add(nextToken);
        }
      } while (!isZoom || nextToken);
      if (!all.length) { toast.info("No registrants to export."); return; }
      const csv = ["First Name,Last Name,Email", ...all.map((person) => [person.firstName, person.lastName, person.email].map(csvCell).join(","))].join("\r\n");
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
      const link = document.createElement("a"); link.href = url; link.download = "registrants.csv";
      document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
      toast.success(`Exported ${all.length} registrants.`);
    } catch (failure) { toast.error(failureMessage(failure)); }
    finally { actionLock.current = false; if (mounted.current) setBusy(false); }
  };
  const disabled = loading || busy;
  const allSelected = rows.length > 0 && selected.length === rows.length;
  const editPath = `/events/${isZoom ? "zoom" : "offline"}/${id}${occurrenceId ? `?occurrence_id=${encodeURIComponent(occurrenceId)}` : ""}`;
  const hasNext = isZoom ? !!pagination.nextPageToken : page < (pagination.pageCount || 1);

  return (
    <PageWrapper flush>
      <PageContent>
        <BreadCrumbs breadcrumbs={[{ label: "Events", to: "/events" }, { label: title || "Event", to: editPath }, { label: "Registrants" }]} />
        <PageHeader title="Registrants" description={title || "Manage attendees for this event."} actions={<>
          <PageActionButton text="Edit event" type="secondary" onAction={() => navigate(editPath)} disabled={busy} />
          <PageActionButton text="Add registrant" icon={<PlusIcon />} disabled={disabled || !canAdd} onAction={() => { setContactError(""); setModal({ type: "add" }); }} />
        </>} />
        <div className={styles.divider} />
        {!canAdd && settings && <p className={styles.note}>Manual registration is available on a paid plan.</p>}
        <section className={styles.card} aria-busy={disabled}>
          <div className={styles.toolbar}>
            <div><h2>Registrants list</h2><p>{selected.length ? `${selected.length} selected` : pagination.totalRecords != null ? `${pagination.totalRecords} registrants` : "Attendees registered for this event"}</p></div>
            <div className={styles.actions}>
              {selected.length > 0 && <PageActionButton text="Delete selected" type="danger-secondary" icon={<TrashIcon />} disabled={disabled} onAction={() => setModal({ type: "delete", ids: selected })} />}
              <PageActionButton text={selected.length ? "Resend to selected" : "Resend notifications"} type="secondary" icon={<PaperAirplaneIcon />} disabled={disabled || !rows.length || !!error} onAction={resend} />
              <PageActionButton text="Export CSV" type="secondary" icon={<ArrowDownTrayIcon />} disabled={disabled || !!error} onAction={exportCSV} />
            </div>
          </div>
          {error ? <div className={styles.state} role="alert"><p>{error}</p><PageActionButton text="Try again" type="secondary" onAction={() => load(page)} disabled={disabled} /></div> : <SpinnerLoader isLoading={loading}>
            {rows.length ? <div className={styles.table}>
              <div className={`${styles.row} ${styles.tableHeader}`}>
                <CheckboxItem ariaLabel="Select all registrants on this page" checked={allSelected} indeterminate={selected.length > 0 && !allSelected} disabled={disabled} onChange={() => setSelected(allSelected ? [] : rows.map((person) => person.id))} />
                <span>Name</span><span>Email</span><span>Actions</span>
              </div>
              {rows.map((person) => <div className={styles.row} key={person.id}>
                <CheckboxItem ariaLabel={`Select ${person.email}`} checked={selected.includes(person.id)} disabled={disabled} onChange={() => setSelected((previous) => previous.includes(person.id) ? previous.filter((value) => value !== person.id) : [...previous, person.id])} />
                <div className={styles.name}>{[person.firstName, person.lastName].filter(Boolean).join(" ") || "Registrant"}</div>
                <div className={styles.email}>{person.email}</div>
                <PageActionButton text="Delete" type="danger-ghost" size="sm" icon={<TrashIcon />} disabled={disabled} onAction={() => setModal({ type: "delete", ids: [person.id] })} />
              </div>)}
            </div> : <div className={styles.state}><h3>No registrants yet</h3><p>Registrations for this event will appear here.</p></div>}
          </SpinnerLoader>}
          <div className={styles.pagination}>
            <span>Page {page}{!isZoom ? ` of ${pagination.pageCount || 1}` : ""}</span>
            <div className={styles.actions}><PageActionButton text="Previous" type="secondary" disabled={disabled || page === 1} onAction={() => setPage((value) => value - 1)} /><PageActionButton text="Next" type="secondary" disabled={disabled || !hasNext || !!error} onAction={() => setPage((value) => value + 1)} /></div>
          </div>
        </section>
        {modal?.type === "add" && <ModalShell title="Add registrant" description="Register an attendee for this event." onClose={() => !busy && setModal(null)} footer={<><PageActionButton text="Cancel" type="secondary" disabled={busy} onAction={() => setModal(null)} /><PageActionButton text={busy ? "Adding…" : "Add registrant"} disabled={busy || !canAdd} onAction={create} /></>}>
          <div className={styles.form}>{[["firstName", "First name"], ["lastName", "Last name"], ["email", "Email"]].map(([key, label]) => <NewInputControl key={key} id={`registrant-${key}`} label={label} placeholder={label} type={key === "email" ? "email" : "text"} value={contact[key]} disabled={busy} onChange={(value) => { setContactError(""); setContact((previous) => ({ ...previous, [key]: value })); }} />)}{contactError && <p role="alert" className={styles.error}>{contactError}</p>}</div>
        </ModalShell>}
        {modal?.type === "delete" && <ModalShell title={modal.ids.length === 1 ? "Delete registrant?" : "Delete selected registrants?"} description="These attendees will be removed from the event." onClose={() => !busy && setModal(null)} footer={<><PageActionButton text="Cancel" type="secondary" disabled={busy} onAction={() => setModal(null)} /><PageActionButton text={busy ? "Deleting…" : "Delete"} type="danger" disabled={busy} onAction={() => runAction(() => performForSelected(deleteRegistrant, modal.ids), "Registrants deleted.")} /></>}><p>This removes {modal.ids.length} {modal.ids.length === 1 ? "registrant" : "registrants"}.</p></ModalShell>}
      </PageContent>
    </PageWrapper>
  );
}
