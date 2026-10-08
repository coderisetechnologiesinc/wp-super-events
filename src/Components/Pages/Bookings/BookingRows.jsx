import React from "react";
import moment from "moment-timezone";
import {
  PaperAirplaneIcon,
  WalletIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import CheckboxItem from "../../Controls/CheckboxItem";
import styles from "./BookingRows.module.scss";

// Every column the bookings list can show, in the order it shows them. The
// Display options popover decides which are visible; the widths live here so
// the header and the rows cannot disagree.
export const BOOKING_COLUMNS = [
  { value: "order", label: "Order ID", width: "92px" },
  { value: "date", label: "Order Date/Time", width: "148px" },
  { value: "registrant", label: "Registrant", width: "minmax(0, 1.3fr)" },
  { value: "title", label: "Title", width: "minmax(0, 1.7fr)" },
  { value: "occurrence", label: "Occurrence", width: "148px" },
  { value: "paid", label: "Mode", width: "104px" },
  { value: "status", label: "Status", width: "118px" },
];

// Three 32px icon buttons with 4px between them.
const ACTIONS_WIDTH = "104px";

const statusOf = (row) => {
  if (row.active_registrants === 0) return "canceled";
  if (row.reunded_quantity >= row.quantity) return "refunded";
  return "active";
};

const STATUS_LABEL = {
  active: "Active",
  refunded: "Refunded",
  canceled: "Canceled",
};

const BookingRows = ({
  bookings = [],
  columns = [],
  currency = "",
  timeFormat = "hh:mm a",
  selectedIds = [],
  onToggleSelect,
  onResend,
  onRefund,
  onCancel,
}) => {
  const visible = BOOKING_COLUMNS.filter((column) =>
    columns.some((c) => c.value === column.value && c.visible),
  );

  // 18px for the checkbox, the visible columns, then the actions. The actions
  // track must be a NUMBER, not `auto`: the header's last cell is empty, so an
  // auto track measures 0 there and 104px in the rows, and the difference is
  // taken out of the flexible columns — which slides every column after them
  // out of line with its heading.
  const template = [
    onToggleSelect ? "18px" : null,
    ...visible.map((column) => column.width),
    ACTIONS_WIDTH,
  ]
    .filter(Boolean)
    .join(" ");

  const gridStyle = { "--booking-cols": template };

  const renderCell = (column, row) => {
    const ordered = moment(row.created_datetime).tz(row.timezone);
    const starts = moment(row.start_datetime).tz(row.timezone);

    switch (column.value) {
      case "order":
        return <div className={styles.strong}>#{row.id}</div>;

      case "date":
        return (
          <div>
            <div className={styles.strong}>{ordered.format("MMM DD YYYY")}</div>
            <div className={styles.sub}>{ordered.format(timeFormat)}</div>
          </div>
        );

      case "registrant":
        return (
          <div className={styles.text} title={row.email}>
            {row.email}
          </div>
        );

      case "title":
        return (
          <div className={styles.title} title={row.product_name}>
            {row.product_name}
          </div>
        );

      case "occurrence":
        return (
          <div>
            <div className={styles.strong}>{starts.format("MMM DD YYYY")}</div>
            <div className={styles.sub}>{starts.format(timeFormat)}</div>
          </div>
        );

      case "paid":
        return Number(row.price) > 0 ? (
          <div className={styles.money}>
            {Number(row.price)} {currency?.toUpperCase()}
          </div>
        ) : (
          <div className={styles.free}>{t("Free")}</div>
        );

      case "status": {
        const state = statusOf(row);
        return (
          <span
            className={[
              styles.status,
              state === "active" ? styles.statusActive : "",
              state === "refunded" ? styles.statusRefunded : "",
              state === "canceled" ? styles.statusCanceled : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              className={[
                styles.dot,
                state === "active" ? styles.dotActive : "",
                state === "refunded" ? styles.dotRefunded : "",
                state === "canceled" ? styles.dotCanceled : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
            {t(STATUS_LABEL[state])}
          </span>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className={styles.list}>
      <div className={styles.head} style={gridStyle}>
        {onToggleSelect && <div />}
        {visible.map((column) => (
          <div key={column.value}>{t(column.label)}</div>
        ))}
        <div />
      </div>

      {bookings.map((row) => {
        const picked = selectedIds.includes(row.id);
        const live = row.active_registrants > 0;

        return (
          <div
            key={row.id}
            style={gridStyle}
            className={[
              styles.row,
              live ? "" : styles.muted,
              picked ? styles.picked : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {onToggleSelect && (
              <div className={styles.pick}>
                <CheckboxItem
                  checked={picked}
                  ariaLabel={`${t("Select order")} #${row.id}`}
                  onChange={() => onToggleSelect(row.id)}
                />
              </div>
            )}

            {visible.map((column) => (
              <div key={column.value}>{renderCell(column, row)}</div>
            ))}

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.action}
                title={t("Resend confirmation")}
                disabled={!live}
                onClick={() => onResend?.(row)}
              >
                <PaperAirplaneIcon />
              </button>

              <button
                type="button"
                className={styles.action}
                title={t("Issue refund")}
                disabled={!live || !(Number(row.price) > 0)}
                onClick={() => onRefund?.(row)}
              >
                <WalletIcon />
              </button>

              <button
                type="button"
                className={[styles.action, styles.actionDanger].join(" ")}
                title={t("Cancel booking")}
                disabled={!live}
                onClick={() => onCancel?.(row)}
              >
                <XCircleIcon />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingRows;
