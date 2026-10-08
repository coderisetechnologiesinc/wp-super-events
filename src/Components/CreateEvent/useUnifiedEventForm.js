import { useEffect, useRef, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import { useServvStore } from "../../store/useServvStore";
import { mergeAttributesPatch } from "../../utilities/attributes";
import {
  createEvent,
  getEvent,
  getFeaturedImage,
  updateEvent,
} from "../../utilities/events";
import axios from "../../utilities/adminApi";
import {
  eventPayload,
  initialEvent,
  loadEvent,
  ticketPayload,
} from "./eventFormData";

export default function useUnifiedEventForm() {
  const settings = useServvStore((s) => s.settings);
  const { id } = useParams();
  const [query] = useSearchParams();
  const occurrence =
    query.get("occurrence_id") || query.get("occurrenceId") || query.get("occ");
  const registrantsView = Boolean(query.get("registrants"));
  const location = useLocation();
  const navigate = useNavigate();
  const [event, setEvent] = useState(() => initialEvent(settings));
  const [loading, setLoading] = useState(Boolean(id));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [recoverDraft, setRecoverDraft] = useState(false);
  const initialized = useRef(false);
  const saveLock = useRef(false);
  const draftKey = `servv:event-draft:${window.servvData?.nonce}:${
    id || "new"
  }:${occurrence || ""}`;
  const patch = (update) =>
    setEvent((prev) => mergeAttributesPatch(prev, update));

  useEffect(() => {
    let active = true;
    initialized.current = false;
    setError("");
    if (!id) {
      setLoading(false);
      return () => {
        active = false;
      };
    }
    setLoading(true);
    getEvent(id, occurrence)
      .then(async (data) => {
        const next = loadEvent(
          data,
          location.pathname.includes("/zoom/") ? "zoom" : "offline",
        );
        if (occurrence) {
          const response = await axios.get(
            `/wp-json/servv-plugin/v1/event/${id}/tickets`,
            {
              params: { occurrence_id: occurrence },
              headers: { "X-WP-Nonce": window.servvData.nonce },
            },
          );
          const tickets = Array.isArray(response.data)
            ? response.data
            : response.data.tickets;
          if (!Array.isArray(tickets))
            throw new Error("Invalid occurrence tickets response");
          next.tickets = loadEvent({ ...data, tickets }, next.location).tickets;
        }
        // An unavailable WordPress media endpoint must not prevent event editing.
        try {
          next.image_content = await getFeaturedImage(id);
        } catch {
          /* optional cover */
        }
        if (active) {
          setEvent(next);
          initialized.current = true;
        }
      })
      .catch(() => {
        if (active)
          setError(
            "Unable to load this event. Return to Events and try again.",
          );
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id, occurrence]);

  useEffect(() => {
    if (id || initialized.current || !settings) return;
    let draft;
    try {
      draft = JSON.parse(sessionStorage.getItem(draftKey));
    } catch {
      /* storage unavailable */
    }
    setEvent(draft || initialEvent(settings));
    setRecoverDraft(Boolean(draft));
    initialized.current = true;
  }, [settings, id, draftKey]);

  const saveDraft = () => {
    try {
      sessionStorage.setItem(draftKey, JSON.stringify(event));
      toast.success(
        "Draft saved in this browser tab. It has not been published.",
      );
    } catch {
      toast.error("Unable to save draft in this browser.");
    }
  };

  const save = async () => {
    if (saveLock.current || error || loading) return;
    const start = moment.tz(event.meeting.startTime, event.meeting.timezone);
    if (
      !event.meeting.topic?.trim() ||
      !start.isValid() ||
      !Number.isFinite(Number(event.meeting.duration)) ||
      Number(event.meeting.duration) <= 0
    ) {
      toast.error(
        "Enter an event title, a valid start date and a positive duration.",
      );
      return;
    }
    if (!id && start.isBefore(moment())) {
      toast.error("Start time must be in the future.");
      return;
    }
    if (event.location === "zoom" && !useServvStore.getState().zoomConnected) {
      toast.error("Connect Zoom before publishing this meeting.");
      return;
    }
    const tickets = event.tickets.filter((t) => t.action !== "remove");
    if (
      tickets.some(
        (t) =>
          !t.title?.trim() ||
          !Number.isInteger(Number(t.quantity)) ||
          Number(t.quantity) < 1 ||
          (t.type === "paid" && !(Number(t.price) > 0)),
      )
    ) {
      toast.error(
        "Each ticket needs a name, a positive whole-number capacity and a valid price.",
      );
      return;
    }
    if (
      tickets.some(
        (t) =>
          t.start_datetime &&
          t.end_datetime &&
          t.end_datetime <= t.start_datetime,
      )
    ) {
      toast.error("Ticket sales must end after they start.");
      return;
    }
    const freePlan = Number(settings?.current_plan?.id) === 1;
    if (freePlan && tickets.some((t) => t.type !== "free")) {
      toast.error("Your current plan supports free registrations only.");
      return;
    }
    if (
      freePlan &&
      tickets.reduce((sum, t) => sum + Number(t.quantity), 0) >
        Number(settings.free_registrants_limit || 15)
    ) {
      toast.error("Ticket capacity exceeds your plan's registration limit.");
      return;
    }
    if (
      (tickets.some((t) => t.type !== "free") ||
        (!tickets.length && Number(event.product.price) > 0)) &&
      !useServvStore.getState().stripeConnected
    ) {
      toast.error("Connect Stripe before publishing paid registrations.");
      return;
    }
    saveLock.current = true;
    setSaving(true);
    try {
      const data = eventPayload(event, !id, freePlan);
      if (!id) {
        await createEvent(event.location === "zoom" ? "zoom" : "offline", data);
      } else {
        // Reconcile each completed mutation immediately so retrying a later
        // failure cannot duplicate ticket creation or repeat deletion.
        for (const ticket of event.tickets) {
          if (ticket.persisted && !ticket.action) continue;
          if (!ticket.persisted && ticket.action === "remove") continue;
          const response = await axios({
            method:
              ticket.action === "remove"
                ? "DELETE"
                : ticket.persisted
                ? "PATCH"
                : "POST",
            url: `/wp-json/servv-plugin/v1/event/${id}/tickets${
              ticket.persisted ? `/${ticket.id}` : ""
            }`,
            params: occurrence ? { occurrence_id: occurrence } : {},
            headers: { "X-WP-Nonce": window.servvData.nonce },
            ...(ticket.action !== "remove"
              ? { data: ticketPayload(ticket, event.meeting.timezone) }
              : {}),
          });
          const result = response.data?.ticket || response.data;
          if (!ticket.persisted && !result?.id) {
            setError(
              "A ticket was saved without a returned ID. Reload this event before saving again.",
            );
            throw new Error(
              "Ticket created but no ticket ID returned. Reload before retrying.",
            );
          }
          setEvent((prev) => ({
            ...prev,
            tickets: prev.tickets.flatMap((t) =>
              t.id !== ticket.id
                ? [t]
                : ticket.action === "remove"
                ? []
                : [
                    {
                      ...t,
                      id: ticket.persisted ? t.id : result.id,
                      persisted: true,
                      action: undefined,
                    },
                  ],
            ),
          }));
        }
        await updateEvent(id, data, occurrence);
      }
      try {
        sessionStorage.removeItem(draftKey);
      } catch {
        /* storage unavailable */
      }
      toast.success(
        id ? "Event updated successfully." : "Event published successfully.",
      );
      navigate("/events");
    } catch (failure) {
      toast.error(
        failure.response?.data?.message ||
          failure.message ||
          "Unable to save event. Please try again.",
      );
    } finally {
      saveLock.current = false;
      setSaving(false);
    }
  };
  return {
    event,
    patch,
    settings: settings || {},
    loading: loading || !settings,
    saving,
    error,
    save,
    saveDraft,
    isNew: !id,
    id,
    occurrence,
    registrantsView,
    recoverDraft,
  };
}
