import domReady from "@wordpress/dom-ready";
import { createRoot, useEffect, useRef, useState } from "@wordpress/element";
import axios from "axios";
import moment from "moment-timezone";
import { loadStripe } from "@stripe/stripe-js";
import "./checkout.css";

const isFree = (ticket) => !ticket.is_donation && Number(ticket.price || 0) === 0;
const inSalesWindow = (ticket, now = moment()) =>
  (!ticket.start_datetime || now.isSameOrAfter(moment(ticket.start_datetime))) &&
  (!ticket.end_datetime || now.isBefore(moment(ticket.end_datetime)));
const amount = (person) => person.ticket.is_donation
  ? Number(person.donation || 0) : Number(person.ticket.price || 0);
const validContact = (person) => Boolean(person &&
  /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(person.email.trim()) &&
  person.firstName.trim() && person.lastName.trim() &&
  !/[,;]/.test(person.firstName + person.lastName));

const PaymentForm = () => {
  const [data, setData] = useState(null);
  const [settings, setSettings] = useState(null);
  const [occurrenceId, setOccurrenceId] = useState("");
  const [people, setPeople] = useState([]);
  const [sameForAll, setSameForAll] = useState(true);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [session, setSession] = useState(null);
  const [now, setNow] = useState(() => moment());
  const checkoutRef = useRef(null);
  const submitting = useRef(false);
  const paymentSlot = useRef(null);
  const request = async (action, values = {}) => {
    const params = new URLSearchParams({ action, security: servvCheckoutData.nonce,
      post_id: servvCheckoutData.postId, ...values });
    const response = await axios.post(servvCheckoutData.ajaxUrl, params);
    if (response.data?.success === false) {
      throw new Error(response.data.data?.message || response.data.message || "Unable to complete registration. Please try again.");
    }
    return response.data;
  };

  useEffect(() => {
    let active = true;
    Promise.all([request("servv_get_event_info"), request("servv_get_shop_settings")])
      .then(([event, shop]) => {
        if (!active) return;
        if (!event?.meeting) throw new Error("Event information is unavailable.");
        setData(event);
        setSettings(shop);
        setOccurrenceId(String(event.meeting.occurrences?.[0]?.id || ""));
      }).catch((failure) => { if (active) setError(failure.message); })
      .finally(() => { if (active) setLoading(false); });
    const timer = setInterval(() => setNow(moment()), 1000);
    return () => { active = false; clearInterval(timer); };
  }, []);

  useEffect(() => {
    if (!session || step !== 3) return;
    let active = true;
    let embedded;
    (async () => {
      try {
        const stripe = await loadStripe(session.public_key,
          servvCheckoutData.stripeAccountId ? { stripeAccount: servvCheckoutData.stripeAccountId } : undefined);
        if (!active) return;
        if (!stripe) throw new Error("Unable to load payment form.");
        embedded = await stripe.initEmbeddedCheckout({ clientSecret: session.client_secret,
          onComplete: () => { if (active) setStep(4); } });
        if (!active) { embedded.destroy(); return; }
        checkoutRef.current = embedded;
        embedded.mount(paymentSlot.current);
      } catch (failure) { if (active) setError(failure.message); }
      finally { if (active) setLoading(false); }
    })();
    return () => { active = false; embedded?.destroy(); checkoutRef.current = null; };
  }, [session, step]);

  const meeting = data?.meeting;
  const occurrences = meeting?.occurrences || [];
  const occurrence = occurrences.find((item) => String(item.id) === occurrenceId);
  const product = occurrence ? occurrence.product : data?.product;
  const eventTickets = occurrence ? occurrence.tickets : meeting?.tickets;
  const ticketed = Boolean(eventTickets?.length);
  const tickets = ticketed ? eventTickets : product ? [{ ...product, id: "standard", name: "Standard", currency: data?.currency }] : [];
  const currency = String(data?.currency || "USD").toUpperCase();
  const money = (value, code = currency) => `${Number(value || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${String(code || currency).toUpperCase()}`;
  const date = (value) => moment(value).tz(meeting?.timezone || moment.tz.guess()).format("MMM DD, YYYY · h:mm a");
  const used = Number(occurrence?.free_registrants_used ?? meeting?.free_registrants_used ?? data?.free_registrants_used ?? 0);
  const limit = Number(settings?.free_registrants_limit || 0);
  const freeCount = people.filter((person) => isFree(person.ticket)).length;
  const count = (ticket) => people.filter((person) => person.ticket.id === ticket.id).length;
  const remaining = (ticket) => ticket.current_quantity == null ? Infinity : Number(ticket.current_quantity) - count(ticket);
  const canAdd = (ticket) => inSalesWindow(ticket, now) && remaining(ticket) > 0 &&
    (!isFree(ticket) || used + freeCount < limit);
  const total = people.reduce((sum, person) => sum + amount(person), 0);
  const freeOrder = people.length > 0 && people.every((person) => isFree(person.ticket));
  const selectionValid = people.length > 0 && people.every((person) =>
    inSalesWindow(person.ticket, now) && remaining(person.ticket) >= 0) && used + freeCount <= limit;
  const updatePerson = (index, key, value) => setPeople((previous) => previous.map((person, i) =>
    i === index ? { ...person, [key]: value } : person));
  const removePerson = (index) => {
    setPeople((previous) => previous.filter((_, i) => i !== index));
    if (people.length === 1) setStep(1);
  };
  const addPerson = (ticket) => {
    if (!canAdd(ticket)) return;
    setPeople((previous) => [...previous, { ticket, firstName: "", lastName: "", email: "", donation: "" }]);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    setInvalid(true);
    if (!selectionValid || !people.every((person, index) =>
      (sameForAll && index > 0 || validContact(person)) &&
      (!person.ticket.is_donation || Number.isFinite(Number(person.donation)) && Number(person.donation) > 0))) {
      setError("Please complete all required fields and check ticket availability.");
      return;
    }
    submitting.current = true;
    setLoading(true);
    setError("");
    const first = people[0];
    const values = { email: first.email.trim(), first_name: first.firstName.trim(), last_name: first.lastName.trim() };
    if (occurrence) values.occurrence_id = occurrence.id;
    if (sameForAll) values.same_for_all = "true";
    if (ticketed) values.ticket_id = first.ticket.id;
    if (first.ticket.is_donation) values.donation_amount = first.donation;
    values.additional_registrants = people.slice(1).map((person) => {
      const contact = sameForAll ? first : person;
      const fields = [contact.email.trim(), contact.firstName.trim(), contact.lastName.trim()];
      if (ticketed) fields.push(person.ticket.id);
      if (person.ticket.is_donation) fields.push(person.donation);
      return fields.join(",");
    }).join(";");
    try {
      const result = await request(freeOrder ? "servv_process_free_order" : "servv_create_checkout_session", values);
      if (freeOrder) setStep(4);
      else {
        if (!result.data?.client_secret || !result.data?.public_key) throw new Error("Payment session is unavailable.");
        setSession(result.data);
        setStep(3);
      }
    } catch (failure) { setError(failure.message); }
    finally { submitting.current = false; setLoading(false); }
  };

  const summary = () => <aside className="svvc-summary">
    <h3>Order summary</h3>
    {tickets.filter((ticket) => count(ticket)).map((ticket) => <div className="svvc-summary-line" key={ticket.id}>
      <span>{ticket.name} <span className="svvc-summary-qty">× {count(ticket)}</span></span>
      <span>{money(people.filter((person) => person.ticket.id === ticket.id).reduce((sum, person) => sum + amount(person), 0), ticket.currency)}</span>
    </div>)}
    <div className="svvc-summary-total"><span>Total</span><strong>{money(total)}</strong></div>
  </aside>;
  const field = (person, index, key, label, type = "text") => {
    const bad = invalid && (key === "email" ? !validContact({ ...person, firstName: "a", lastName: "b" }) : !person[key].trim() || /[,;]/.test(person[key]));
    const id = `svvc-${index}-${key}`;
    return <div className={`svvc-field${bad ? " svvc-has-error" : ""}`}>
      <label htmlFor={id}>{label} *</label>
      <input id={id} type={type} required disabled={loading} value={person[key]} autoComplete={key === "email" ? "email" : key === "firstName" ? "given-name" : "family-name"}
        aria-invalid={bad} aria-describedby={bad ? `${id}-error` : undefined}
        onChange={(event) => updatePerson(index, key, event.target.value)} />
      {bad && <span id={`${id}-error`} className="svvc-field-error">Enter a valid {label.toLowerCase()}.</span>}
    </div>;
  };

  return <div className="svvc-form" aria-busy={loading}>
    <div className="svvc-step-head">
      <h2>{["", "Select your tickets", "Registrant details", "Payment", "Confirmation"][step]}</h2>
      {meeting && <div className="svvc-step-meta">
        {step === 1 && occurrences.length > 0 ? <>
          <label className="svvc-sr" htmlFor="svvc-occurrence">Event date</label>
          <select id="svvc-occurrence" className="svvc-occurrence" value={occurrenceId} onChange={(event) => {
            setOccurrenceId(event.target.value); setPeople([]); setError(""); setInvalid(false);
          }}>{occurrences.map((item) => <option key={item.id} value={String(item.id)}>{date(item.start_time)}</option>)}</select>
        </> : <span>{date(occurrence?.start_time || meeting.start_time)}</span>}
        {step > 1 && <span>{people.length} {people.length === 1 ? "attendee" : "attendees"}</span>}
      </div>}
    </div>
    {error && <div className="svvc-alert" role="alert">{error}</div>}
    {loading && <p role="status">Loading…</p>}
    {meeting && step === 1 && <>
      <div className="svvc-ticket-list">{tickets.map((ticket) => {
        const available = inSalesWindow(ticket, now) && remaining(ticket) > 0;
        const sold = ticket.current_quantity != null && Number(ticket.current_quantity) <= 0;
        const low = available && remaining(ticket) <= 5;
        return <div key={ticket.id} className={`svvc-ticket${sold ? " svvc-is-unavailable" : ""}`}>
          <div><div className="svvc-ticket-name"><strong>{ticket.name}</strong>
            <span className={`svvc-badge ${sold ? "svvc-is-sold" : low ? "svvc-is-low" : available ? "svvc-is-available" : ""}`}>
              {sold ? "Sold out" : !inSalesWindow(ticket, now) ? "Not available" : low ? `${remaining(ticket)} left` : available ? "Available" : "All selected"}
            </span></div>{ticket.description && <div className="svvc-ticket-note">{ticket.description}</div>}
            {isFree(ticket) && used + freeCount >= limit && <div className="svvc-ticket-note">Free registration limit reached.</div>}
          </div>
          <div className="svvc-ticket-right"><div className={`svvc-price${isFree(ticket) ? " svvc-is-free" : ""}`}>
            {ticket.is_donation ? "Donation" : isFree(ticket) ? "Free" : money(ticket.price, ticket.currency)}</div>
            {inSalesWindow(ticket, now) ? <div className="svvc-stepper">
              <button type="button" aria-label={`Remove one ${ticket.name} ticket`} disabled={!count(ticket) || loading} onClick={() => removePerson(people.map((person) => person.ticket.id).lastIndexOf(ticket.id))}>−</button>
              <span aria-live="polite">{count(ticket)}</span>
              <button type="button" aria-label={`Add one ${ticket.name} ticket`} disabled={!canAdd(ticket) || loading} onClick={() => addPerson(ticket)}>+</button>
            </div> : <div className="svvc-sales-window">{ticket.start_datetime && now.isBefore(moment(ticket.start_datetime)) ? `Available · ${date(ticket.start_datetime)}` : "Ticket sale ended"}</div>}
          </div>
        </div>;
      })}</div>
      {people.length > 0 && <div className="svvc-cart-bar"><div className="svvc-cart-summary"><span>{people.length} {people.length === 1 ? "ticket" : "tickets"}</span><strong>{money(total)}</strong></div>
        <button type="button" className="svvc-primary" disabled={!selectionValid || loading} onClick={() => { setStep(2); setError(""); }}>Proceed to checkout</button></div>}
    </>}
    {meeting && step === 2 && <form onSubmit={submit} noValidate className="svvc-columns">
      <div className="svvc-attendees">{people.map((person, index) => <div className="svvc-attendee-card" key={index}>
        <div className="svvc-attendee-head"><div className="svvc-attendee-title"><strong>Attendee {index + 1}{index === 0 ? " (Main contact)" : ""}</strong><span className="svvc-badge">{person.ticket.name}</span></div>
          <button type="button" className="svvc-remove" aria-label={`Remove attendee ${index + 1}`} disabled={loading} onClick={() => removePerson(index)}>×</button></div>
        <div className="svvc-attendee-price">{isFree(person.ticket) ? "Free" : person.ticket.is_donation ? "Donation" : money(person.ticket.price, person.ticket.currency)}</div>
        {(!sameForAll || index === 0) ? <div className="svvc-field-grid"><div className="svvc-field-row">{field(person, index, "firstName", "First name")}{field(person, index, "lastName", "Last name")}</div>{field(person, index, "email", "Email", "email")}</div> : <p className="svvc-ticket-note">Uses the main contact details.</p>}
        {person.ticket.is_donation && <div className="svvc-field"><label htmlFor={`svvc-donation-${index}`}>Donation ({currency}) *</label><input id={`svvc-donation-${index}`} type="number" min="0.01" step="0.01" required disabled={loading} value={person.donation} aria-invalid={invalid && !(Number(person.donation) > 0)} onChange={(event) => updatePerson(index, "donation", event.target.value)} /></div>}
        {index === 0 && people.length > 1 && <label className="svvc-checkbox"><input type="checkbox" disabled={loading} checked={sameForAll} onChange={(event) => setSameForAll(event.target.checked)} />Use the same contact details for all tickets</label>}
      </div>)}<div className="svvc-required-note">* Required fields</div><div className="svvc-step-actions"><button type="button" className="svvc-secondary" disabled={loading} onClick={() => { setStep(1); setError(""); }}>Back</button><button type="submit" className="svvc-primary" disabled={loading || !selectionValid}>{freeOrder ? "Complete registration" : "Continue to checkout"}</button></div></div>
      {summary()}
    </form>}
    {step === 3 && <div className="svvc-payment"><div id="servv-payment-element" ref={paymentSlot} />{error && <button type="button" className="svvc-secondary" onClick={() => { setStep(2); setSession(null); setError(""); }}>Back to registrant details</button>}</div>}
    {meeting && step === 4 && <div className="svvc-confirm"><div className="svvc-confirm-hero"><div className="svvc-check" aria-hidden="true">✓</div><h2>Registration complete!</h2><p>You will receive confirmation emails shortly for each attendee.</p><div className="svvc-confirm-event"><strong>{meeting.topic}</strong><div className="svvc-kv"><span>Date and time</span><strong>{date(occurrence?.start_time || meeting.start_time)}</strong></div></div></div>
      <div className="svvc-panel"><h3>Booking summary</h3><div className="svvc-stat-row"><div className="svvc-kv"><span>Total paid</span><strong>{money(total)}</strong></div><div className="svvc-kv"><span>Tickets / Attendees</span><strong>{people.length}</strong></div></div><h3>Registrant details</h3><div className="svvc-registrant-list">{people.map((person, index) => {
        const contact = sameForAll ? people[0] : person;
        return <div className="svvc-registrant" key={index}><div className="svvc-kv"><strong>{contact.firstName} {contact.lastName}</strong><span>{contact.email}</span></div><div className="svvc-registrant-ticket"><strong>{person.ticket.name}</strong><span>{isFree(person.ticket) ? "Free" : money(amount(person), person.ticket.currency)}</span></div></div>;
      })}</div></div></div>}
  </div>;
};

domReady(() => {
  const element = document.getElementById("servv-on-product-widget");
  if (element) createRoot(element).render(<PaymentForm />);
});
