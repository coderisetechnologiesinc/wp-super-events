import { TicketIcon, PlusIcon, MinusIcon } from "../../assets/icons";
import StepActions from "./StepActions";
import { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import InteractiveCard from "../Containers/InteractiveCard";
import RadioGroup from "../Controls/RadioGroup";
import NewInputControl from "../Controls/NewInputControl";
import NewTimeInputControl from "../Controls/NewTimeInputControl";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import moment from "moment";
const TicketsStep = ({
  attributes,
  setAttributes,
  changeStep,
  stripeConnected,
  isNew,
  settings,
  isError,
  handleFormSubmit,
  setError = () => {},
  isOnboarding,
  setFullWidth,
}) => {
  const {
    quantity = 100,
    availability = "open", // "open" | "scheduled"
  } = attributes || {};

  const MIN_QTY = 1;
  const [MAX_QTY, SET_MAX_QTY] = useState(
    settings.free_registrants_limit || 15,
  );
  const [defaultQty, setDefaultQty] = useState(1);
  const [defaultPrice, setDefaultPrice] = useState(1);
  const isFreePlanRestricted = settings?.current_plan?.id === 1;

  const AVAILABILITY_OPTIONS = [
    { value: "open", label: "Open" },
    { value: "scheduled", label: "Sales Start & End" },
  ];
  const [TIYCKET_TYPES, setTicketTypes] = useState([
    { value: "free", label: "Free" },
    { value: "paid", label: "Paid", disabled: true },
    { value: "donation", label: "Donation", disabled: true },
  ]);

  const tickets = attributes?.tickets || [];
  const timezone = attributes?.meeting?.timezone || "UTC";

  const product = attributes?.product;
  const hasProduct = product?.product_id && product?.product_id !== "0";
  const isProductMode = !tickets.length && hasProduct;

  const updateProduct = (patch) => {
    setAttributes({
      product: {
        ...product,
        ...patch,
      },
    });
  };

  const updateTickets = (next) => {
    const updated = next.map((ticket) => {
      if (ticket.action === "remove") return ticket;

      if (ticket.event_id) {
        return {
          ...ticket,
          action: ticket.action || "update",
        };
      }

      return ticket;
    });

    setAttributes({ tickets: updated });
  };

  const updateTicket = (id, patch) => {
    updateTickets(tickets.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };
  const getTimeFromISO = (iso) => {
    if (!iso) return "";
    return moment(iso).tz(timezone).format("HH:mm");
  };

  useEffect(() => {
    const visibleFreeTickets = tickets.filter(
      (t) => t.action !== "remove" && t.type === "free",
    );

    const usedFreeQuantity = visibleFreeTickets.reduce(
      (sum, ticket) => sum + Number(ticket.quantity || 0),
      0,
    );

    const remaining = Math.max(
      0,
      (settings.free_registrants_limit || 15) - usedFreeQuantity,
    );

    SET_MAX_QTY(remaining);
  }, [tickets, settings.free_registrants_limit]);

  useEffect(() => {
    if (settings?.settings?.admin_dashboard) {
      let adminSettings = JSON.parse(settings.settings.admin_dashboard);
      let defaultQtyFromSettings =
        Number.parseInt(adminSettings.default_quantity) || 1;
      setDefaultQty(defaultQtyFromSettings);
      let defaultPriceFromSettings =
        Number.parseFloat(adminSettings.default_price) || 1;
      setDefaultPrice(defaultPriceFromSettings);
    }
  }, [settings]);

  useEffect(() => {
    if (stripeConnected) {
      setTicketTypes([
        { value: "free", label: "Free" },
        { value: "paid", label: "Paid" },
        { value: "donation", label: "Donation" },
      ]);
    }
  }, [stripeConnected]);

  // useEffect(() => {
  //   if (!isFreePlanRestricted) return;

  //   if (!tickets.length) {
  //     setAttributes({
  //       tickets: [
  //         {
  //           id: uuidv4(),
  //           type: "free",
  //           title: "Standard",
  //           quantity: defaultQty,
  //           availability: "open",
  //         },
  //       ],
  //     });
  //   }
  // }, [isFreePlanRestricted]);

  const setTimeToISO = (iso, time) => {
    const base = iso ? moment(iso).tz(timezone) : moment().tz(timezone);

    let hour, minute;

    if (typeof time === "string") {
      [hour, minute] = time.split(":").map(Number);
    } else if (typeof time === "object" && time !== null) {
      ({ hour, minute } = time);

      if (time.period === "PM" && hour < 12) hour += 12;
      if (time.period === "AM" && hour === 12) hour = 0;
    } else {
      console.warn("Unsupported time format:", time);
      return base.format("YYYY-MM-DDTHH:mm:ss");
    }

    base.set({ hour, minute, second: 0 });
    return base.format("YYYY-MM-DDTHH:mm:ss");
  };

  const getSaleStartDate = () => {
    if (!activeTicket?.start_datetime) {
      return { date: null, label: "Select date" };
    }
    const dateMoment = moment.tz(activeTicket.start_datetime, timezone);
    const dateStr = dateMoment.format("YYYY-MM-DD");
    return {
      date: dateStr,
      label: dateStr,
    };
  };

  const getSaleEndDate = () => {
    if (!activeTicket?.end_datetime) {
      return { date: null, label: "Select date" };
    }
    const dateMoment = moment.tz(activeTicket.end_datetime, timezone);
    const dateStr = dateMoment.format("YYYY-MM-DD");
    return {
      date: dateStr,
      label: dateStr,
    };
  };

  const getSaleStartTime = () => {
    return activeTicket?.start_datetime
      ? moment.tz(activeTicket.start_datetime, timezone)
      : moment().tz(timezone);
  };

  const getSaleEndTime = () => {
    return activeTicket?.end_datetime
      ? moment.tz(activeTicket.end_datetime, timezone)
      : moment().add(1, "hour").tz(timezone);
  };
  const handleSaleStartDateChange = (date) => {
    const base = activeTicket?.start_datetime
      ? moment.tz(activeTicket.start_datetime, "YYYY-MM-DDTHH:mm:ss", timezone)
      : moment().tz(timezone);

    const selectedMoment = moment.isMoment(date) ? date : moment(date);

    const newDateTime = moment.tz(
      {
        year: selectedMoment.year(),
        month: selectedMoment.month(),
        date: selectedMoment.date(),
        hour: base.hour(),
        minute: base.minute(),
        second: 0,
      },
      timezone,
    );

    const formatted = newDateTime.format("YYYY-MM-DDTHH:mm:ss");

    updateTicket(activeTicketId, {
      start_datetime: formatted,
    });
  };

  const handleSaleEndDateChange = (date) => {
    const base = activeTicket?.end_datetime
      ? moment.tz(activeTicket.end_datetime, "YYYY-MM-DDTHH:mm:ss", timezone)
      : moment().add(1, "day").tz(timezone);

    const selectedMoment = moment.isMoment(date) ? date : moment(date);

    const newDateTime = moment.tz(
      {
        year: selectedMoment.year(),
        month: selectedMoment.month(),
        date: selectedMoment.date(),
        hour: base.hour(),
        minute: base.minute(),
        second: 0,
      },
      timezone,
    );

    const formatted = newDateTime.format("YYYY-MM-DDTHH:mm:ss");

    updateTicket(activeTicketId, {
      end_datetime: formatted,
    });
  };

  const handleSaleStartTimeChange = (momentObj) => {
    if (!momentObj) return;

    const formatted = momentObj.format("YYYY-MM-DDTHH:mm:ss");

    updateTicket(activeTicketId, {
      start_datetime: formatted,
    });
  };

  const handleSaleEndTimeChange = (momentObj) => {
    if (!momentObj) return;

    const formatted = momentObj.format("YYYY-MM-DDTHH:mm:ss");

    updateTicket(activeTicketId, {
      end_datetime: formatted,
    });
  };

  const [activeTicketId, setActiveTicketId] = useState(tickets[0]?.id || null);
  const visibleTickets = tickets.filter((t) => t.action !== "remove");

  useEffect(() => {
    const current = tickets.find((ticket) => ticket.id === activeTicketId);

    if (!current) return;

    if (current.start_datetime || current.end_datetime) {
      updateTicket(activeTicketId, {
        availability: "scheduled",
      });
    }
  }, [activeTicketId]);
  const removeTicket = (id) => {
    const ticketIndex = tickets.findIndex((t) => t.id === id);
    if (ticketIndex === -1) return;

    const ticket = tickets[ticketIndex];

    if (ticket.event_id) {
      const updatedTickets = [...tickets];
      updatedTickets[ticketIndex] = {
        ...ticket,
        action: "remove",
      };

      updateTickets(updatedTickets);
      setActiveTicketId(null);
    } else {
      updateTickets(tickets.filter((t) => t.id !== id));
      setActiveTicketId(null);
    }
  };

  useEffect(() => {
    if (!activeTicketId && tickets.length) {
      setActiveTicketId(tickets[0].id);
    }
  }, [tickets]);

  const activeTicket = visibleTickets.find((t) => t.id === activeTicketId);

  useEffect(() => {
    if (!activeTicket && visibleTickets.length) {
      setActiveTicketId(visibleTickets[0].id);
    }
    if (!visibleTickets.length) {
      setActiveTicketId(null);
    }
  }, [visibleTickets, activeTicket]);

  const qty = activeTicket?.quantity ?? MIN_QTY;
  const isFreeTicket = activeTicket?.type === "free";
  const productMaxQty = settings.free_registrants_limit || 15;
  const productQty =
    product.quantity ?? product.current_quantity ?? productMaxQty;
  const activeFreeQty =
    isFreeTicket && typeof activeTicket?.quantity === "number"
      ? activeTicket.quantity
      : 0;

  const MAX_TICKET_QTY = isFreeTicket ? activeFreeQty + MAX_QTY : 500;

  const freeQuotaExcludingActive = (() => {
    if (!activeTicket) return MAX_QTY;

    if (activeTicket.type !== "free") {
      return MAX_QTY;
    }

    return MAX_QTY + Number(activeTicket.quantity || 0);
  })();

  const addTicket = () => {
    const remainingFreeQuota = MAX_QTY;

    const initialQty =
      remainingFreeQuota > 0 ? Math.min(defaultQty, remainingFreeQuota) : 0;

    const newTicket = {
      id: uuidv4(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open",
    };

    updateTickets([...tickets, newTicket]);
    setActiveTicketId(newTicket.id);
  };

  useEffect(() => {
    if (isOnboarding) setFullWidth?.(false);
  }, [isOnboarding]);

  useEffect(() => {
    if (!isOnboarding || tickets.length) return;
    const initialQty = Math.min(defaultQty, MAX_QTY > 0 ? MAX_QTY : 1);
    const newTicket = {
      id: uuidv4(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open",
    };
    updateTickets([newTicket]);
    setActiveTicketId(newTicket.id);
  }, [isOnboarding]);

  const handleOnboardingTypeSelect = (type) => {
    if (activeTicket?.type === type) return;

    if (activeTicket) {
      const prevQty = Number(activeTicket.quantity || MIN_QTY);
      let nextQty = prevQty;

      if (type === "free") {
        nextQty = Math.min(prevQty, freeQuotaExcludingActive);
      }
      nextQty = Math.max(MIN_QTY, nextQty);

      const patch = { type, quantity: nextQty };

      if (type === "paid" || type === "donation") {
        const currentPrice = Number(activeTicket?.price);
        patch.price =
          currentPrice > 0 ? String(activeTicket.price) : String(defaultPrice);
      }

      updateTicket(activeTicketId, patch);
    } else {
      const initialQty =
        type === "free"
          ? Math.min(defaultQty, MAX_QTY > 0 ? MAX_QTY : 1)
          : defaultQty;
      const newTicket = {
        id: uuidv4(),
        type,
        title: "Standard",
        quantity: initialQty,
        availability: "open",
        ...(type === "paid" ? { price: String(defaultPrice) } : {}),
      };
      updateTickets([newTicket]);
      setActiveTicketId(newTicket.id);
    }
  };

  return (
    <div className="step__wrapper servv_tickets">
      {/* Header */}
      <div className="step__header">
        <TicketIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Tickets</h4>
          <p className="step__description">
            Create ticket types and quantities
          </p>
        </div>
        {!isNew &&
          attributes.meeting?.occurrences &&
          attributes.meeting?.occurrences?.length > 0 && (
            <p className="step__description">
              This is a recurring event. To see tickets for a specific date,
              please view that occurrence.
            </p>
          )}
      </div>
      {/* Content */}
      {isOnboarding ? (
        <div className="step__content w-full">
          <div className="grid grid-cols-2 gap-4">
            <InteractiveCard
              onClick={() => handleOnboardingTypeSelect("free")}
              selected={activeTicket?.type === "free"}
              style={{ minHeight: 0, cursor: "pointer" }}
              subtitle={
                <p
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#872CFA" }}
                >
                  Tickets
                </p>
              }
              title={
                <h2 className="text-3xl font-bold" style={{ color: "#070908" }}>
                  Free
                </h2>
              }
            />
            <InteractiveCard
              onClick={
                stripeConnected
                  ? () => handleOnboardingTypeSelect("paid")
                  : undefined
              }
              selected={activeTicket?.type === "paid"}
              style={{
                minHeight: 0,
                opacity: stripeConnected ? 1 : 0.45,
                cursor: stripeConnected ? "pointer" : "not-allowed",
              }}
              subtitle={
                <p
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#872CFA" }}
                >
                  {stripeConnected ? "Tickets" : "Requires Stripe"}
                </p>
              }
              title={
                <h2 className="text-3xl font-bold" style={{ color: "#070908" }}>
                  Paid
                </h2>
              }
            />
          </div>

          {activeTicket && (
            <div
              className={
                isOnboarding
                  ? "flex flex-col gap-4 mt-4 w-full max-w-[384px] self-stretch mx-auto"
                  : `flex flex-col gap-4 mt-4`
              }
            >
              <div className="step__content_block">
                <span className="step__content_title">Title</span>
                <NewInputControl
                  placeholder="Enter title"
                  disabled={isFreePlanRestricted}
                  value={activeTicket.title || ""}
                  onChange={(val) =>
                    updateTicket(activeTicketId, { title: val })
                  }
                />
              </div>

              {activeTicket.type === "paid" && (
                <div className="step__content_block">
                  <span className="step__content_title">Price</span>
                  <NewInputControl
                    type="text"
                    inputMode="decimal"
                    placeholder="Enter price, up to 1000"
                    value={activeTicket.price ?? ""}
                    error={isError ? "Please enter valid price" : ""}
                    onChange={(val) => {
                      if (val === "") {
                        updateTicket(activeTicketId, { price: "" });
                        setError(true);
                        return;
                      } else {
                        setError(false);
                      }
                      if (!/^\d+(\.\d{0,2})?$/.test(val)) return;
                      if (Number.parseFloat(val) > 1000) return;
                      if (Number.parseInt(val) === 0) {
                        setError(true);
                      } else {
                        setError(false);
                      }
                      updateTicket(activeTicketId, { price: val });
                    }}
                  />
                </div>
              )}

              <div className="servv_ticket_quantity">
                <label className="step__content_title">Quantity</label>
                <div className="servv_ticket_quantity__input">
                  <button
                    type="button"
                    onClick={() => {
                      if (qty > MIN_QTY)
                        updateTicket(activeTicketId, { quantity: qty - 1 });
                    }}
                    disabled={qty <= MIN_QTY}
                  >
                    <MinusIcon />
                  </button>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="servv_ticket_quantity__field"
                    placeholder="Enter a quantity"
                    value={qty === "" ? "" : String(qty)}
                    onChange={(e) => {
                      const raw = e.target.value;
                      if (raw === "") {
                        updateTicket(activeTicketId, { quantity: "" });
                        return;
                      }
                      if (!/^\d+$/.test(raw)) return;
                      const num = Number(raw);
                      if (num >= MIN_QTY && num <= MAX_TICKET_QTY)
                        updateTicket(activeTicketId, { quantity: num });
                    }}
                    onBlur={() => {
                      if (activeTicket.quantity === "")
                        updateTicket(activeTicketId, { quantity: MIN_QTY });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (qty < MAX_TICKET_QTY)
                        updateTicket(activeTicketId, { quantity: qty + 1 });
                    }}
                    disabled={qty >= MAX_TICKET_QTY}
                  >
                    <PlusIcon />
                  </button>
                </div>
                {isFreeTicket && (
                  <p className="servv_ticket_quantity__hint">
                    Maximum number of tickets {MAX_QTY}
                  </p>
                )}
              </div>
            </div>
          )}

          <StepActions
            onPrevious={() => changeStep("venue")}
            onPrimary={activeTicket ? () => handleFormSubmit(true) : undefined}
            primaryText="Create"
            primaryDisabled={isError}
          />
        </div>
      ) : isProductMode ? (
        <div className="step__content">
          <div className="step__content_block">
            <div className={`servv_ticket_card servv_ticket_card--active`}>
              <div className="servv_ticket_card__title">
                <span>Standard (free)</span>
              </div>
              <div className="servv_ticket_card__count">
                <strong>{productQty}</strong>
                <span>{productQty !== 1 ? "tickets" : "ticket"}</span>
              </div>
            </div>
          </div>

          <div className="servv_ticket_quantity">
            <label className="step__content_title">Quantity</label>
            <div className="servv_ticket_quantity__input">
              <button
                type="button"
                onClick={() => {
                  const qty = Number(productQty);
                  if (qty > MIN_QTY) updateProduct({ quantity: qty - 1 });
                }}
                disabled={Number(productQty) <= MIN_QTY}
              >
                <MinusIcon />
              </button>

              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="servv_ticket_quantity__field"
                placeholder="Enter a quantity"
                value={productQty === "" ? "" : String(productQty)}
                onChange={(e) => {
                  const raw = e.target.value;
                  if (raw === "") {
                    updateProduct({ quantity: "" });
                    return;
                  }
                  if (!/^\d+$/.test(raw)) return;
                  const num = Number(raw);
                  if (num >= MIN_QTY && num <= productMaxQty)
                    updateProduct({ quantity: num });
                }}
                onBlur={() => {
                  if (!product.quantity) updateProduct({ quantity: MIN_QTY });
                }}
              />

              <button
                type="button"
                onClick={() => {
                  const qty = Number(productQty);
                  if (qty < productMaxQty) updateProduct({ quantity: qty + 1 });
                }}
                disabled={Number(productQty) >= productMaxQty}
              >
                <PlusIcon />
              </button>
            </div>
            <p className="servv_ticket_quantity__hint">
              Maximum number of tickets {MAX_QTY}
            </p>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="step__content">
            <button
              type="button"
              className="servv_ticket_add"
              onClick={addTicket}
              disabled={isFreePlanRestricted}
            >
              <PlusIcon />
              <span>Add ticket</span>
            </button>
            <div className="step__content_block">
              {tickets
                .filter((t) => t.action !== "remove")
                .map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`servv_ticket_card ${
                      activeTicketId === ticket.id
                        ? "servv_ticket_card--active"
                        : ""
                    }`}
                    onClick={() => setActiveTicketId(ticket.id)}
                  >
                    <div className="servv_ticket_card__title">
                      <span>
                        {ticket.title || "Untitled"} ({ticket.type})
                      </span>

                      <button
                        type="button"
                        className="servv_ticket_card__remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeTicket(ticket.id);
                        }}
                        disabled={isFreePlanRestricted}
                      >
                        <MinusIcon />
                      </button>
                    </div>

                    <div className="servv_ticket_card__count">
                      <strong>{ticket.quantity}</strong>
                      <span>{ticket.quantity > 1 ? "tickets" : "ticket"}</span>
                    </div>
                  </div>
                ))}
            </div>

            {tickets.length > 0 && activeTicketId && (
              <Fragment>
                {
                  <div className="step__content_block">
                    <span className="step__content_title">Type</span>
                    <RadioGroup
                      name="ticket-type"
                      value={activeTicket?.type || "free"}
                      options={TIYCKET_TYPES}
                      disabled={isFreePlanRestricted}
                      onChange={(val) => {
                        const prevType = activeTicket?.type;
                        const prevQty = Number(
                          activeTicket?.quantity || MIN_QTY,
                        );

                        let nextQty = prevQty;
                        let nextPrice = activeTicket?.price;

                        if (val === "free") {
                          nextQty = Math.min(prevQty, freeQuotaExcludingActive);
                          nextPrice = undefined;
                        }

                        if (prevType === "free" && val !== "free") {
                          nextQty = Math.min(prevQty, 500);
                        }

                        if (val === "paid") {
                          const currentPrice = Number(activeTicket?.price);

                          if (!currentPrice || currentPrice <= 0) {
                            nextPrice = String(defaultPrice);
                          }
                        }

                        nextQty = Math.max(MIN_QTY, nextQty);

                        const patch = {
                          type: val,
                          quantity: nextQty,
                        };

                        if (val === "paid" || val === "donation") {
                          patch.price = nextPrice ?? "";
                        }

                        updateTicket(activeTicketId, patch);
                      }}
                    />
                    {!stripeConnected && (
                      <p className="servv_ticket_quantity__hint text-justify">
                        To create paid or donation tickets, you need to connect
                        your Stripe account.
                      </p>
                    )}
                  </div>
                }

                <div className="step__content_block">
                  <span className="step__content_title">Title</span>
                  <NewInputControl
                    placeholder="Enter title"
                    value={activeTicket?.title || ""}
                    onChange={(val) =>
                      updateTicket(activeTicketId, { title: val })
                    }
                  />
                </div>
                {activeTicket?.type === "paid" && (
                  <div className="step__content_block">
                    <span className="step__content_title">Price</span>

                    <NewInputControl
                      type="text"
                      inputMode="decimal"
                      placeholder="Enter price, up to 1000"
                      value={activeTicket?.price ?? ""}
                      error={isError ? "Please enter valid price" : ""}
                      maxValue={1000}
                      onChange={(val) => {
                        if (val === "") {
                          updateTicket(activeTicketId, { price: "" });
                          setError(true);
                          return;
                        } else {
                          setError(false);
                        }

                        if (!/^\d+(\.\d{0,2})?$/.test(val)) return;

                        const numVal = Number.parseFloat(val);
                        if (numVal > 1000) {
                          // setError(true);
                          return;
                        }

                        if (Number.parseInt(val) === 0) {
                          setError(true);
                        } else {
                          setError(false);
                        }

                        updateTicket(activeTicketId, { price: val });
                      }}
                    />
                  </div>
                )}
                {/* Quantity */}
                <div className="servv_ticket_quantity">
                  <label className="step__content_title">Quantity</label>

                  <div className="servv_ticket_quantity__input">
                    {/* Decrease */}
                    <button
                      type="button"
                      onClick={() => {
                        if (qty > MIN_QTY) {
                          updateTicket(activeTicketId, { quantity: qty - 1 });
                        }
                      }}
                      disabled={qty <= MIN_QTY}
                    >
                      <MinusIcon />
                    </button>

                    {/* Input */}
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="servv_ticket_quantity__field"
                      placeholder="Enter a quantity"
                      value={qty === "" ? "" : String(qty)}
                      onChange={(e) => {
                        const raw = e.target.value;

                        if (raw === "") {
                          updateTicket(activeTicketId, { quantity: "" });
                          return;
                        }

                        if (!/^\d+$/.test(raw)) return;

                        const num = Number(raw);

                        if (num >= MIN_QTY && num <= MAX_TICKET_QTY) {
                          updateTicket(activeTicketId, { quantity: num });
                        }
                      }}
                      onBlur={() => {
                        // normalize empty → MIN_QTY
                        if (activeTicket.quantity === "") {
                          updateTicket(activeTicketId, { quantity: MIN_QTY });
                        }
                      }}
                    />

                    {/* Increase */}
                    <button
                      type="button"
                      onClick={() => {
                        if (qty < MAX_TICKET_QTY) {
                          updateTicket(activeTicketId, { quantity: qty + 1 });
                        }
                      }}
                      disabled={qty >= MAX_TICKET_QTY}
                    >
                      <PlusIcon />
                    </button>
                  </div>

                  {isFreeTicket && (
                    <p className="servv_ticket_quantity__hint">
                      Maximum number of tickets {MAX_QTY}
                    </p>
                  )}
                </div>

                {/* Availability */}
                {
                  <div className="step__content_block">
                    <span className="step__content_title">Availability</span>

                    <RadioGroup
                      name="ticket-availability"
                      value={activeTicket?.availability || "open"}
                      options={AVAILABILITY_OPTIONS}
                      onChange={(val) =>
                        updateTicket(activeTicketId, {
                          availability: val,
                          ...(val === "open"
                            ? {
                                start_datetime: undefined,
                                end_datetime: undefined,
                              }
                            : {}),
                        })
                      }
                      disabled={
                        settings?.current_plan?.id === 1 ||
                        !settings.current_plan
                      }
                    />
                  </div>
                }

                {activeTicket?.availability === "scheduled" && (
                  <div className="servv_ticket_sales_block">
                    {/* <span className="step__content_title">Ticket sales period</span> */}
                    {/* <span className="servv_ticket_quantity__hint text-start">
                  Timezone: {timezone}
                </span> */}

                    {/* START */}
                    <div className="servv_datetime_row">
                      <div className="servv_datetime_col">
                        <label className="step__content_title">
                          Start date
                        </label>
                        <NewDatePickerControl
                          mode="single"
                          label={getSaleStartDate().label}
                          value={getSaleStartDate().date}
                          onChange={handleSaleStartDateChange}
                          fullWidth
                          minDate={new Date()}
                        />
                      </div>

                      <div className="servv_datetime_col">
                        <label className="step__content_title">
                          Start time
                        </label>
                        <NewTimeInputControl
                          time={getSaleStartTime()}
                          onChange={handleSaleStartTimeChange}
                        />
                      </div>
                    </div>

                    {/* END */}
                    <div className="servv_datetime_row">
                      <div className="servv_datetime_col">
                        <label className="step__content_title">End date</label>
                        <NewDatePickerControl
                          mode="single"
                          label={getSaleEndDate().label}
                          value={getSaleEndDate().date}
                          onChange={handleSaleEndDateChange}
                          fullWidth
                          minDate={new Date()}
                        />
                      </div>

                      <div className="servv_datetime_col">
                        <label className="step__content_title">End time</label>
                        <NewTimeInputControl
                          time={getSaleEndTime()}
                          onChange={handleSaleEndTimeChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
      {!isOnboarding && (
        <StepActions
          onSaveAndExit={isNew ? undefined : () => handleFormSubmit(true)}
          onPrevious={() => changeStep("venue")}
          onPrimary={() =>
            isOnboarding ? handleFormSubmit(true) : changeStep("filters")
          }
          primaryDisabled={isError}
        />
      )}
    </div>
  );
};

export default TicketsStep;
