"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_EventRegistrantsPage_jsx"],{

/***/ "./src/Components/Containers/PageContent.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Containers/PageContent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent.module.scss */ "./src/Components/Containers/PageContent.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// A full-size page shell with responsive gutters and 24px content spacing.
// `className` lands on the column, where the call sites have always put it.

const PageContent = ({
  className = "",
  maxWidth,
  flush = false,
  children,
  ...rest
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: `${_PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].shell} ${flush ? _PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].flush : ""}`.trim(),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...rest,
    className: `${_PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container} ${className}`.trim(),
    style: maxWidth ? {
      maxWidth
    } : undefined,
    children: children
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContent);

/***/ }),

/***/ "./src/Components/Containers/PageHeader.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/PageHeader.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.module.scss */ "./src/Components/Containers/PageHeader.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The page header from the design reference: eyebrow, title, description on the
// left, actions on the right.
//
// Passing `title` renders that structure. Without it the children are laid out
// in the same row, which is how the existing call sites use the component.

const PageHeader = ({
  className = "",
  bottomLine,
  eyebrow,
  title,
  description,
  actions,
  children,
  ...rest
}) => {
  const classes = [_PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header, bottomLine ? _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bottomLine : "", className].filter(Boolean).join(" ");
  if (!title) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ...rest,
      className: classes,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
        children: children
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    ...rest,
    className: classes,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text,
        children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].eyebrow,
          children: eyebrow
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
          children: title
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
          children: description
        })]
      }), actions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].actions,
        children: actions
      })]
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./src/Components/Controls/CheckboxItem.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Controls/CheckboxItem.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxItem.module.scss */ "./src/Components/Controls/CheckboxItem.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// `indeterminate` is the select-all's third state: some rows picked, not all.
// It fills the box like a checked one but draws a dash instead of a tick.

const CheckboxItem = ({
  label = "",
  name,
  checked = false,
  indeterminate = false,
  disabled = false,
  ariaLabel,
  onChange = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: `${_CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item} ${disabled ? _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "checkbox",
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange,
      className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
      "aria-label": ariaLabel || undefined,
      ref: node => {
        if (node) node.indeterminate = !checked && indeterminate;
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: `${_CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].box} ${!checked && indeterminate ? _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mixed : ""}`,
      children: [!checked && indeterminate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dash
      }), checked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].check,
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          d: "M2.5 6.5L5 9L9.5 3",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxItem);

/***/ }),

/***/ "./src/Components/Controls/NewInputControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewInputControl.module.scss */ "./src/Components/Controls/NewInputControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// A labelled field: NewInputFieldControl plus a label and error message.

const NewInputControl = ({
  label = "",
  helpText = "",
  placeholder = "",
  error,
  style = {},
  width = "100%",
  ...inputProps
}) => {
  let errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error;
  } else if (error) {
    errorMessage = "This field is required.";
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].wrapper,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...inputProps,
      placeholder: placeholder || helpText,
      error: Boolean(error),
      width: width,
      style: style
    }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errorText,
      role: "alert",
      children: errorMessage
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputControl);

/***/ }),

/***/ "./src/Components/Controls/NewInputFieldControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewInputFieldControl.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl.module.scss */ "./src/Components/Controls/NewInputFieldControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The single text-entry primitive: a bare input (or textarea) in the recessed
// field chrome. NewInputControl wraps this with a label and error text; use
// this directly when the surrounding markup already supplies them.

const ALIGN = {
  left: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].left,
  center: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].center,
  right: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].right
};
const NewInputFieldControl = ({
  id,
  placeholder = "",
  value = "",
  type = "text",
  inputMode,
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  onKeyDown = () => {},
  maxLength,
  minValue,
  maxValue,
  align = "left",
  step,
  width,
  textarea = false,
  rows = 4,
  className = "",
  style,
  error = false
}) => {
  const InputTag = textarea ? "textarea" : "input";
  const wrapperClasses = [_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].field, error ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error : "", disabled ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : "", className].filter(Boolean).join(" ");
  const contentClasses = [_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, textarea ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textarea : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: wrapperClasses,
    style: {
      width: width || "384px",
      ...style
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: contentClasses,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InputTag, {
        id: id,
        type: textarea ? undefined : type,
        inputMode: inputMode,
        rows: textarea ? rows : undefined,
        className: `${_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].native} ${ALIGN[align] || ALIGN.left}`,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        "aria-invalid": Boolean(error),
        maxLength: maxLength,
        min: minValue,
        max: maxValue,
        step: step,
        onChange: e => onChange(e.target.value),
        onBlur: onBlur,
        onKeyDown: onKeyDown,
        autoComplete: "off"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputFieldControl);

/***/ }),

/***/ "./src/Components/CreateEvent/eventFormData.js":
/*!*****************************************************!*\
  !*** ./src/Components/CreateEvent/eventFormData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayEventTime: () => (/* binding */ displayEventTime),
/* harmony export */   eventPayload: () => (/* binding */ eventPayload),
/* harmony export */   initialEvent: () => (/* binding */ initialEvent),
/* harmony export */   loadEvent: () => (/* binding */ loadEvent),
/* harmony export */   parseEventTime: () => (/* binding */ parseEventTime),
/* harmony export */   readDefaults: () => (/* binding */ readDefaults),
/* harmony export */   registrantsPayload: () => (/* binding */ registrantsPayload),
/* harmony export */   ticketPayload: () => (/* binding */ ticketPayload),
/* harmony export */   uses24HourClock: () => (/* binding */ uses24HourClock)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/numbers */ "./src/utilities/numbers.js");


const uses24HourClock = settings => [true, 1, "1", "true"].includes(settings?.settings?.time_format_24_hours);
const displayEventTime = (value, use24Hours) => {
  const parsed = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(value || "00:00", "HH:mm", true);
  return {
    time: parsed.isValid() ? parsed.format(use24Hours ? "HH:mm" : "hh:mm") : "",
    period: parsed.isValid() ? parsed.format("A") : "AM"
  };
};
const parseEventTime = (value, period, use24Hours) => {
  if (!/^\d{1,2}:\d{2}$/.test(value.trim())) return null;
  const [hours, minutes] = value.trim().split(":").map(Number);
  if (minutes > 59 || hours > (use24Hours ? 23 : 12) || !use24Hours && hours < 1) return null;
  const parsed = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(use24Hours ? value.trim() : `${value.trim()} ${period}`, use24Hours ? ["HH:mm", "H:mm"] : ["hh:mm A", "h:mm A"], true);
  return parsed.isValid() ? parsed.format("HH:mm") : null;
};
const readDefaults = settings => {
  const raw = settings?.settings?.admin_dashboard;
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const initialEvent = settings => {
  const defaults = readDefaults(settings);
  const timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.zone(defaults.default_timezone) ? defaults.default_timezone : moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.guess();
  const start = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().tz(timezone).add(1, "day").second(0);
  const time = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(defaults.default_start_time, ["h:mm a", "HH:mm"], true);
  if (time.isValid()) start.hour(time.hour()).minute(time.minute());
  return {
    location: ["offline", "zoom", "custom", "hybrid"].includes(defaults.default_event_type) ? defaults.default_event_type : "offline",
    meeting: {
      topic: "",
      agenda: "",
      startTime: start.format("YYYY-MM-DDTHH:mm:ss"),
      timezone,
      duration: Number(defaults.default_duration || 1) * 60,
      recurrence: null,
      is_hidden: false
    },
    tickets: [],
    product: {
      price: 0,
      quantity: Number(defaults.default_quantity) || 5
    },
    filters: {},
    custom_fields: {},
    notifications: {
      google_calendar: false,
      disable_emails: false
    }
  };
};
const loadEvent = (data, location) => {
  var _ref, _data$product$current;
  const meeting = data.meeting || {};
  const timezone = meeting.timezone || "UTC";
  const start = meeting.start_time || meeting.occurrences?.[0]?.start_time;
  const customFields = data.custom_fields || {};
  return {
    ...data,
    location: location === "zoom" ? "zoom" : customFields.custom_field_1_value ? data.types?.location_id ? "hybrid" : "custom" : "offline",
    meeting: {
      ...meeting,
      startTime: start ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz(start, timezone).format("YYYY-MM-DDTHH:mm:ss") : "",
      recurrence: meeting.recurrence?.type ? {
        ...meeting.recurrence,
        weekly_days: typeof meeting.recurrence.weekly_days === "string" ? meeting.recurrence.weekly_days.split(",").map(Number) : meeting.recurrence.weekly_days
      } : null
    },
    tickets: (data.tickets || []).map(ticket => ({
      ...ticket,
      persisted: true,
      title: ticket.name,
      type: ticket.is_donation ? "donation" : Number(ticket.price) === 0 ? "free" : "paid",
      ...Object.fromEntries(["start_datetime", "end_datetime"].map(key => [key, ticket[key] ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().utc(ticket[key]).tz(timezone).format("YYYY-MM-DDTHH:mm:ss") : null]))
    })),
    product: {
      ...data.product,
      quantity: (_ref = (_data$product$current = data.product?.current_quantity) !== null && _data$product$current !== void 0 ? _data$product$current : data.product?.quantity) !== null && _ref !== void 0 ? _ref : 5
    },
    filters: data.types || {},
    custom_fields: customFields,
    notifications: data.notifications || {}
  };
};
const ticketPayload = (ticket, timezone) => ({
  name: ticket.title,
  quantity: (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(ticket.quantity),
  price: ticket.type === "free" ? 0 : ticket.type === "donation" ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toNumber)(ticket.price),
  is_donation: ticket.type === "donation",
  ...Object.fromEntries(["start_datetime", "end_datetime"].map(key => [key, ticket[key] ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz(ticket[key], timezone).utc().format("YYYY-MM-DDTHH:mm:ss[Z]") : null]))
});

// The API takes one recurrence shape per type, and the end condition is either
// a number of occurrences or an end date — never both. An event loaded for
// editing can carry leftovers from another variant (its own API response, or a
// type the user switched away from), so the body is rebuilt from scratch.
const recurrencePayload = (recurrence, isNew) => {
  const type = Number(recurrence.type);
  if (!type) return null;
  const payload = {
    type,
    repeat_interval: Number(recurrence.repeat_interval) || 1
  };
  if (type === 2) {
    var _recurrence$weekly_da;
    const days = Array.isArray(recurrence.weekly_days) ? recurrence.weekly_days : String((_recurrence$weekly_da = recurrence.weekly_days) !== null && _recurrence$weekly_da !== void 0 ? _recurrence$weekly_da : "").split(",").filter(Boolean);
    // 1 Sunday through 7 Saturday. PHP joins the array for the create call;
    // the update body reaches the API unchanged.
    const numbers = days.map(Number).filter(Number.isFinite);
    payload.weekly_days = isNew ? numbers : numbers.join(",");
  }
  if (type === 3) {
    if (recurrence.monthly_week_day) {
      payload.monthly_week = Number(recurrence.monthly_week) || 1;
      payload.monthly_week_day = Number(recurrence.monthly_week_day);
    } else {
      payload.monthly_day = Number(recurrence.monthly_day) || 1;
    }
  }
  // A cleared occurrence count is not an end condition, so the date is used.
  if (Number(recurrence.end_times) > 0) payload.end_times = (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(recurrence.end_times);else if (recurrence.end_date_time) payload.end_date_time = recurrence.end_date_time;
  return payload;
};
const eventPayload = (event, isNew, freePlan) => {
  const {
    meeting,
    filters
  } = event;
  const offline = event.location !== "zoom";
  // Hosts are ids in the form, but the event endpoint may describe them as
  // objects. An event that never had hosts sends no attribute at all.
  const members = Array.isArray(filters.members) ? filters.members.map(m => {
    var _m$id;
    return Number((_m$id = m?.id) !== null && _m$id !== void 0 ? _m$id : m);
  }).filter(Number.isFinite) : null;
  const type = meeting.recurrence?.type ? offline ? 2 : 8 : offline ? 1 : 2;
  const payload = {
    meeting: {
      topic: meeting.topic.trim(),
      agenda: meeting.agenda || "",
      timezone: meeting.timezone,
      duration: Number(meeting.duration),
      recurrence: meeting.recurrence ? recurrencePayload(meeting.recurrence, isNew) : null,
      is_hidden: Boolean(meeting.is_hidden),
      [isNew ? "startTime" : "start_time"]: meeting.startTime,
      [isNew ? "eventType" : "type"]: type
    },
    // Only the documented attributes are forwarded: the event endpoint returns
    // read-only extras next to them (the *_name labels, current_quantity) that
    // the API must not receive back on update.
    types: {
      location_id: ["zoom", "custom"].includes(event.location) ? null : filters.location_id || null,
      category_id: filters.category_id || null,
      language_id: filters.language_id || null,
      ...(members ? {
        members
      } : {})
    },
    custom_fields: event.custom_fields,
    notifications: {
      google_calendar: Boolean(event.notifications?.google_calendar),
      disable_emails: Boolean(event.notifications?.disable_emails)
    },
    // A cleared number input holds "" until it is saved, and the API only
    // takes numbers here — an empty field means 0.
    product: {
      quantity: event.product?.quantity == null ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(event.product.quantity),
      price: event.product?.price == null ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toNumber)(event.product.price)
    }
  };
  if (event.image_content?.startsWith("data:image/")) payload.image_content = event.image_content.split(",")[1];
  if (isNew && freePlan) payload.product = {
    quantity: event.tickets.filter(t => t.action !== "remove").reduce((sum, t) => sum + (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(t.quantity), 0) || (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(event.product.quantity) || 1
  };
  if (isNew && !freePlan) payload.tickets = event.tickets.filter(t => t.action !== "remove").map(t => ticketPayload(t, meeting.timezone));
  if (!isNew && event.registrants) payload.registrants = event.registrants.filter(r => r.status === "create").map(r => ({
    first_name: r.firstName,
    last_name: r.lastName,
    email: r.email
  }));
  return payload;
};

// The event endpoint rejects an update that carries only registrants ("Invalid
// meeting type"), so a manual registration resends the event as loaded with
// the new registrants attached, the way the event form's registrants step does.
const registrantsPayload = (data, location, freePlan, registrants) => eventPayload({
  ...loadEvent(data, location),
  registrants: registrants.map(registrant => ({
    ...registrant,
    status: "create"
  }))
}, false, freePlan);

/***/ }),

/***/ "./src/Components/Menu/BreadCrumbs.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Menu/BreadCrumbs.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/textResolver */ "./src/utilities/textResolver.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const BackChevron = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "m14 6-6 6 6 6"
  })
});
const Separator = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  className: "sv-crumbs__sep",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#B4BCCE",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "m9 6 6 6-6 6"
  })
});
const BreadCrumbs = ({
  breadcrumbs = [],
  onBreadCrumbClick = () => {}
}) => {
  const items = breadcrumbs.filter(Boolean);
  const trail = items.slice(0, -1);
  const current = items[items.length - 1];
  const parent = trail[trail.length - 1];
  const announce = item => onBreadCrumbClick(item.label);
  const crumb = (item, className, children, extra = {}) => {
    const shared = {
      className,
      ...extra
    };
    if (item.to) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: item.to,
        ...shared,
        onClick: () => announce(item),
        children: children
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "button",
      ...shared,
      onClick: () => {
        item.action?.();
        announce(item);
      },
      children: children
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    className: `sv-crumbs${items.length > 1 ? "" : " sv-crumbs--idle"}`,
    "aria-label": (0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Breadcrumb"),
    children: [parent && crumb(parent, "sv-crumbs__back", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BackChevron, {}), {
      title: `${(0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Back to")} ${parent.label}`,
      "aria-label": `${(0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Back to")} ${parent.label}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "sv-crumbs__track",
      children: [trail.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [crumb(item, "sv-crumbs__link", item.label), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Separator, {})]
      }, item.label)), current && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "sv-crumbs__current",
        "aria-current": "page",
        children: current.label
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);

/***/ }),

/***/ "./src/Components/Menu/Spinner.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Menu/Spinner.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/BarLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const override = {
  display: "block",
  margin: "0 auto"
  //   borderColor: "#7319C6",
};
const Spinner = ({
  loading,
  color = "#7319C6"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "svv-sweet-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: color,
      loading: loading,
      cssOverride: override,
      size: 75,
      "aria-label": "Loading Spinner",
      "data-testid": "loader"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/Components/Modals/ModalShell.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Modals/ModalShell.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalShell.module.scss */ "./src/Components/Modals/ModalShell.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SIZES = {
  sm: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sm,
  md: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].md,
  lg: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lg,
  xl: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].xl
};

// The centred dialog from the design reference.
const ModalShell = ({
  title,
  eyebrow,
  description,
  footer,
  size = "lg",
  // Opt-in: the existing call sites close through their own controls only, so
  // the default keeps their behaviour unchanged.
  closeOnOverlay = false,
  children,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].overlay,
    onClick: closeOnOverlay ? onClose : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `${_ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dialog} ${SIZES[size] || SIZES.lg}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": typeof title === "string" ? title : undefined,
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].eyebrow,
            children: eyebrow
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
            children: title
          }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
            children: description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close,
          onClick: onClose,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body,
        children: children
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
        children: footer
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalShell);

/***/ }),

/***/ "./src/Components/Pages/EventRegistrantsPage.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/EventRegistrantsPage.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventRegistrantsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _utilities_registrants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/registrants */ "./src/utilities/registrants.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EventRegistrantsPage.module.scss */ "./src/Components/Pages/EventRegistrantsPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















const PAGE_SIZE = 20;
const emptyContact = {
  firstName: "",
  lastName: "",
  email: ""
};
const failureMessage = failure => failure.response?.data?.message || failure.message || "Please try again.";
const csvCell = value => {
  let text = String(value || "");
  if (/^[=+@-]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
};
function EventRegistrantsPage() {
  const {
    id,
    provider
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const [query] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useSearchParams)();
  const occurrenceId = query.get("occurrence_id") || query.get("occurrenceId") || query.get("occ");
  const isZoom = provider === "zoom" || location.pathname.includes("/zoom/");
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(store => store.settings);
  const canAdd = !!settings?.current_plan && Number(settings.current_plan.id) !== 1;
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    pageCount: 1
  });
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [contact, setContact] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(emptyContact);
  const [contactError, setContactError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const tokens = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    1: null
  });
  const generation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const actionLock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routeKey = `${id}:${isZoom}:${occurrenceId || ""}`;
  const previousRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(routeKey);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      generation.current++;
    };
  }, []);
  const fetchPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(number => isZoom ? (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrantsWithToken)({
    postID: id,
    occurrenceId,
    next_page_token: tokens.current[number],
    pageSize: PAGE_SIZE,
    throwOnError: true
  }) : (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrants)({
    postID: id,
    occurrenceId,
    page: number,
    throwOnError: true
  }), [id, occurrenceId, isZoom]);
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async number => {
    const current = ++generation.current;
    setLoading(true);
    setError("");
    try {
      const result = await fetchPage(number);
      if (!mounted.current || current !== generation.current) return;
      setRows(result.registrants);
      setPagination(result.pagination);
      setSelected([]);
      if (result.pagination.nextPageToken) tokens.current[number + 1] = result.pagination.nextPageToken;else delete tokens.current[number + 1];
    } catch (failure) {
      if (mounted.current && current === generation.current) setError(`Unable to load registrants. ${failureMessage(failure)}`);
    } finally {
      if (mounted.current && current === generation.current) setLoading(false);
    }
  }, [fetchPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let active = true;
    setTitle("");
    (0,_utilities_events__WEBPACK_IMPORTED_MODULE_3__.getEvent)(id, occurrenceId).then(data => {
      if (active) setTitle(data.meeting?.topic || data.topic || "");
    }).catch(() => {});
    return () => {
      active = false;
    };
  }, [id, occurrenceId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (previousRoute.current !== routeKey) {
      previousRoute.current = routeKey;
      tokens.current = {
        1: null
      };
      setSelected([]);
      setModal(null);
      setRows([]);
      if (page !== 1) {
        setPage(1);
        return;
      }
    }
    load(page);
    return () => {
      generation.current++;
    };
  }, [routeKey, page, load]);
  const runAction = async (action, success) => {
    if (actionLock.current) return;
    actionLock.current = true;
    setBusy(true);
    try {
      await action();
      if (!mounted.current) return;
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(success);
      setModal(null);
      setContact(emptyContact);
      setSelected([]);
      await load(page);
    } catch (failure) {
      if (mounted.current) react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(failureMessage(failure));
    } finally {
      actionLock.current = false;
      if (mounted.current) setBusy(false);
    }
  };
  const create = () => {
    if (!canAdd) return;
    if (!contact.firstName.trim() || !contact.lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      setContactError("Enter a first name, last name and valid email address.");
      return;
    }
    runAction(() => (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.addRegistrant)({
      postID: id,
      occurrenceId,
      ...contact,
      freePlan: Number(settings?.current_plan?.id) === 1
    }), "Registrant added.");
  };
  const performForSelected = async (action, ids) => {
    const results = await Promise.allSettled(ids.map(registrantID => action({
      postID: id,
      occurrenceId,
      registrantID
    })));
    const failed = results.filter(result => result.status === "rejected");
    if (failed.length) {
      await load(page);
      throw new Error(`${ids.length - failed.length} of ${ids.length} completed. ${failureMessage(failed[0].reason)}`);
    }
  };
  const resend = () => runAction(() => selected.length ? performForSelected(_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.resendRegistrantNotification, selected) : (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.resendAllNotifications)({
    postID: id,
    occurrenceId
  }), "Notifications resent.");
  const exportCSV = async () => {
    if (actionLock.current) return;
    actionLock.current = true;
    setBusy(true);
    try {
      const all = [];
      let number = 1,
        nextToken = null;
      const seen = new Set();
      do {
        const result = isZoom ? await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrantsWithToken)({
          postID: id,
          occurrenceId,
          next_page_token: nextToken,
          pageSize: PAGE_SIZE,
          throwOnError: true
        }) : await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrants)({
          postID: id,
          occurrenceId,
          page: number,
          throwOnError: true
        });
        all.push(...result.registrants);
        if (!isZoom) {
          if (number >= (result.pagination.pageCount || 1)) break;
          number++;
        } else {
          nextToken = result.pagination.nextPageToken;
          if (nextToken && seen.has(nextToken)) throw new Error("Unable to finish the export: repeated pagination token.");
          seen.add(nextToken);
        }
      } while (!isZoom || nextToken);
      if (!all.length) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("No registrants to export.");
        return;
      }
      const csv = ["First Name,Last Name,Email", ...all.map(person => [person.firstName, person.lastName, person.email].map(csvCell).join(","))].join("\r\n");
      const url = URL.createObjectURL(new Blob([csv], {
        type: "text/csv;charset=utf-8;"
      }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "registrants.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`Exported ${all.length} registrants.`);
    } catch (failure) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(failureMessage(failure));
    } finally {
      actionLock.current = false;
      if (mounted.current) setBusy(false);
    }
  };
  const disabled = loading || busy;
  const allSelected = rows.length > 0 && selected.length === rows.length;
  const editPath = `/events/${isZoom ? "zoom" : "offline"}/${id}${occurrenceId ? `?occurrence_id=${encodeURIComponent(occurrenceId)}` : ""}`;
  const hasNext = isZoom ? !!pagination.nextPageToken : page < (pagination.pageCount || 1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breadcrumbs: [{
          label: "Events",
          to: "/events"
        }, {
          label: title || "Event",
          to: editPath
        }, {
          label: "Registrants"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Registrants",
        description: title || "Manage attendees for this event.",
        actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Edit event",
            type: "secondary",
            onAction: () => navigate(editPath),
            disabled: busy
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Add registrant",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {}),
            disabled: disabled || !canAdd,
            onAction: () => {
              setContactError("");
              setModal({
                type: "add"
              });
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].divider
      }), !canAdd && settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].note,
        children: "Manual registration is available on a paid plan."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("section", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].card,
        "aria-busy": disabled,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].toolbar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
              children: "Registrants list"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              children: selected.length ? `${selected.length} selected` : pagination.totalRecords != null ? `${pagination.totalRecords} registrants` : "Attendees registered for this event"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actions,
            children: [selected.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Delete selected",
              type: "danger-secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
              disabled: disabled,
              onAction: () => setModal({
                type: "delete",
                ids: selected
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: selected.length ? "Resend to selected" : "Resend notifications",
              type: "secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
              disabled: disabled || !rows.length || !!error,
              onAction: resend
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Export CSV",
              type: "secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {}),
              disabled: disabled || !!error,
              onAction: exportCSV
            })]
          })]
        }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].state,
          role: "alert",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            children: error
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Try again",
            type: "secondary",
            onAction: () => load(page),
            disabled: disabled
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isLoading: loading,
          children: rows.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].table,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: `${_EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].row} ${_EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].tableHeader}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                ariaLabel: "Select all registrants on this page",
                checked: allSelected,
                indeterminate: selected.length > 0 && !allSelected,
                disabled: disabled,
                onChange: () => setSelected(allSelected ? [] : rows.map(person => person.id))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Actions"
              })]
            }), rows.map(person => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].row,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                ariaLabel: `Select ${person.email}`,
                checked: selected.includes(person.id),
                disabled: disabled,
                onChange: () => setSelected(previous => previous.includes(person.id) ? previous.filter(value => value !== person.id) : [...previous, person.id])
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].name,
                children: [person.firstName, person.lastName].filter(Boolean).join(" ") || "Registrant"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].email,
                children: person.email
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                text: "Delete",
                type: "danger-ghost",
                size: "sm",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
                disabled: disabled,
                onAction: () => setModal({
                  type: "delete",
                  ids: [person.id]
                })
              })]
            }, person.id))]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].state,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
              children: "No registrants yet"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              children: "Registrations for this event will appear here."
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].pagination,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            children: ["Page ", page, !isZoom ? ` of ${pagination.pageCount || 1}` : ""]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Previous",
              type: "secondary",
              disabled: disabled || page === 1,
              onAction: () => setPage(value => value - 1)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Next",
              type: "secondary",
              disabled: disabled || !hasNext || !!error,
              onAction: () => setPage(value => value + 1)
            })]
          })]
        })]
      }), modal?.type === "add" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Add registrant",
        description: "Register an attendee for this event.",
        onClose: () => !busy && setModal(null),
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Cancel",
            type: "secondary",
            disabled: busy,
            onAction: () => setModal(null)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: busy ? "Adding…" : "Add registrant",
            disabled: busy || !canAdd,
            onAction: create
          })]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].form,
          children: [[["firstName", "First name"], ["lastName", "Last name"], ["email", "Email"]].map(([key, label]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: `registrant-${key}`,
            label: label,
            placeholder: label,
            type: key === "email" ? "email" : "text",
            value: contact[key],
            disabled: busy,
            onChange: value => {
              setContactError("");
              setContact(previous => ({
                ...previous,
                [key]: value
              }));
            }
          }, key)), contactError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            role: "alert",
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].error,
            children: contactError
          })]
        })
      }), modal?.type === "delete" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: modal.ids.length === 1 ? "Delete registrant?" : "Delete selected registrants?",
        description: "These attendees will be removed from the event.",
        onClose: () => !busy && setModal(null),
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Cancel",
            type: "secondary",
            disabled: busy,
            onAction: () => setModal(null)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: busy ? "Deleting…" : "Delete",
            type: "danger",
            disabled: busy,
            onAction: () => runAction(() => performForSelected(_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.deleteRegistrant, modal.ids), "Registrants deleted.")
          })]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          children: ["This removes ", modal.ids.length, " ", modal.ids.length === 1 ? "registrant" : "registrants", "."]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/PageWrapper.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper.module.scss */ "./src/Components/Pages/PageWrapper.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// `flush` drops the wrapper's own side padding for pages that already frame
// themselves with <PageContent>, so the reference's 32px gutter is not doubled.

const PageWrapper = props => {
  const useNativeNavigation = Boolean(window.servvData?.nativeAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.Intercom) {
      window.Intercom("update", {
        hide_default_launcher: true
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && !useNativeNavigation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].backdrop
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].root, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterLeft].filter(Boolean).join(" "),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner,
        children: props.loading && !props.withoutSpinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterRight,
        // `loading` is a legacy global (input.css) blur, not a module class.
        props.loading ? "loading" : ""].filter(Boolean).join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpinnerLoader.module.scss */ "./src/Components/Pages/SpinnerLoader.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// `customStyling` is a pass-through for the overlay's box — call sites use it
// to give the spinner a height when there are no children to cover.

const SpinnerLoader = ({
  isLoading,
  children,
  customStyling = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: isLoading ? _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].blurred : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: [_SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].overlay, customStyling].filter(Boolean).join(" "),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

/***/ }),

/***/ "./src/utilities/adminApiFetch.js":
/*!****************************************!*\
  !*** ./src/utilities/adminApiFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ adminApiFetch)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestCache */ "./src/utilities/requestCache.js");


async function adminApiFetch(options) {
  if (!(0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.adminCacheEnabled)() || !options.path || options.parse === false) return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  const url = (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.canonicalRequestURL)(`/wp-json${options.path}`);
  const method = (options.method || "GET").toUpperCase();
  const resource = (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.requestResource)(url.pathname);
  if (method === "GET" && resource && !options.signal) {
    const response = await (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.cachedRequest)({
      key: `api:${window.servvData.nonce}:${url.href}`,
      tags: [resource],
      ttl: (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.resourceTtl)(resource),
      load: async () => ({
        data: JSON.stringify(await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options)),
        status: 200,
        statusText: "OK",
        headers: {}
      }),
      isValid: ({
        data,
        status
      }) => status >= 200 && status < 300 && (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.isSuccessfulData)(typeof data === "string" ? JSON.parse(data) : data)
    });
    return typeof response.data === "string" ? JSON.parse(response.data) : response.data;
  }
  const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  if (method !== "GET" && method !== "HEAD" && (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.isSuccessfulData)(data)) {
    (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.invalidateRequests)((0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.mutationResources)(url.pathname));
  }
  return data;
}

/***/ }),

/***/ "./src/utilities/events.js":
/*!*********************************!*\
  !*** ./src/utilities/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   eventAdminPath: () => (/* binding */ eventAdminPath),
/* harmony export */   eventFormatLabel: () => (/* binding */ eventFormatLabel),
/* harmony export */   eventKey: () => (/* binding */ eventKey),
/* harmony export */   eventRoutePayload: () => (/* binding */ eventRoutePayload),
/* harmony export */   generateEventData: () => (/* binding */ generateEventData),
/* harmony export */   getEvent: () => (/* binding */ getEvent),
/* harmony export */   getFeaturedImage: () => (/* binding */ getFeaturedImage),
/* harmony export */   isOnlineEvent: () => (/* binding */ isOnlineEvent),
/* harmony export */   openEventPost: () => (/* binding */ openEventPost),
/* harmony export */   updateEvent: () => (/* binding */ updateEvent)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getEvent = async (postId, occurrenceId = null) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {},
    headers: headers()
  });
  return response.data;
};
const createEvent = async (location, data) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/events/${location}`, data, {
    headers: headers()
  });
  return response.data;
};

// Asks the API for a description and tags, and for a cover image when
// withImage is set. A non-empty existing_description switches the API to
// rewrite mode, so callers leave it out when they want a fresh description.
const generateEventData = async (data, {
  withImage = false
} = {}) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/event/data/generate${withImage ? "?with_image=1" : ""}`, data, {
    headers: headers()
  });
  return response.data;
};
const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].patch(url, data, {
    headers: headers()
  });
  return response.data;
};
const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `/wp-json/wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, {
    signal,
    credentials: "same-origin",
    headers: headers()
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};

// Opens the public post an event is published as. The events endpoint only
// knows the post id, so the permalink has to come from WordPress itself.
const openEventPost = postId => {
  if (!postId) return;
  fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => {
    if (post?.link) open(post.link, "_blank");
  }).catch(e => console.log(e));
};

// One event can appear as its series and as a single occurrence, so neither id
// alone identifies a row.
const eventKey = event => `${event.id}${event.occurrence_id || ""}`;

// The shape Dashboard's handleOpenEvent expects. Kept in one place so every
// view — cards, rows, rail — navigates identically.
const eventRoutePayload = (event, {
  registrants = false
} = {}) => ({
  id: event.post_id,
  occurrence_id: event.occurrence_id,
  provider: event.provider || (String(event.type).toLowerCase() === "zoom" ? "zoom" : "offline"),
  ...(registrants ? {
    registrants_view: true
  } : {})
});
const eventAdminPath = (selected, fallbackProvider = "offline") => {
  const provider = selected.provider || selected.type || fallbackProvider;
  const pathType = String(provider).toLowerCase() === "zoom" ? "zoom" : "offline";
  const query = new URLSearchParams();
  if (selected.occurrence_id != null && selected.occurrence_id !== "") query.set("occurrence_id", selected.occurrence_id);
  return `/events/${pathType}/${selected.id}${selected.registrants_view ? "/registrants" : ""}${query.size ? `?${query}` : ""}`;
};

// An event the shop hosts on its own link is created through the offline
// route, so its row type says "Event" while the event is in fact online.
const isOnlineEvent = event => event.type === "Zoom" || Boolean(event.hasOwnMeetingLink);
const eventFormatLabel = event => event.isHybrid ? "Hybrid" : isOnlineEvent(event) ? "Online" : "In-person";

/***/ }),

/***/ "./src/utilities/numbers.js":
/*!**********************************!*\
  !*** ./src/utilities/numbers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceNumbers: () => (/* binding */ coerceNumbers),
/* harmony export */   toInteger: () => (/* binding */ toInteger),
/* harmony export */   toNumber: () => (/* binding */ toNumber)
/* harmony export */ });
// Number inputs keep whatever the user typed, including the empty string left
// behind when the last character is deleted — coercing on every keystroke would
// snap the field back to 0 and make it impossible to clear. These helpers are
// the save-time boundary instead: an empty or unparsable field becomes 0 (or an
// explicit fallback), never "", NaN or null.
const toNumber = (value, fallback = 0) => {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};
const toInteger = (value, fallback = 0) => Math.trunc(toNumber(value, fallback));
// Replaces only the keys the object already carries, so a setting the shop has
// never stored stays absent instead of being written as 0.
const coerceNumbers = (source, coercions) => {
  if (!source || typeof source !== "object") return source;
  const next = {
    ...source
  };
  Object.entries(coercions).forEach(([key, coerce]) => {
    if (key in next) next[key] = coerce(next[key]);
  });
  return next;
};

/***/ }),

/***/ "./src/utilities/registrants.js":
/*!**************************************!*\
  !*** ./src/utilities/registrants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRegistrant: () => (/* binding */ addRegistrant),
/* harmony export */   deleteRegistrant: () => (/* binding */ deleteRegistrant),
/* harmony export */   fetchRegistrants: () => (/* binding */ fetchRegistrants),
/* harmony export */   fetchRegistrantsWithToken: () => (/* binding */ fetchRegistrantsWithToken),
/* harmony export */   resendAllNotifications: () => (/* binding */ resendAllNotifications),
/* harmony export */   resendRegistrantNotification: () => (/* binding */ resendRegistrantNotification)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _adminApiFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminApiFetch */ "./src/utilities/adminApiFetch.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/utilities/events.js");
/* harmony import */ var _Components_CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/CreateEvent/eventFormData */ "./src/Components/CreateEvent/eventFormData.js");





/* ------------------ helpers ------------------ */

// Shared registrant shape. The paged and token-paged fetches used to map their
// own subsets of this; callers read only the fields they need.
const mapRegistrant = registrant => {
  if (!registrant) return null;
  return {
    id: registrant.id,
    firstName: registrant.first_name,
    lastName: registrant.last_name,
    email: registrant.email,
    status: registrant.status,
    joinUrl: registrant.join_url,
    createdAt: registrant.created_datetime
  };
};
const mapRegistrants = res => res.registrants?.map(mapRegistrant).filter(Boolean) || [];
const withOccurrence = (url, occurrenceId) => occurrenceId ? `${url}&occurrence_id=${encodeURIComponent(occurrenceId)}` : url;
const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return {
      "X-WP-Nonce": servvData.nonce
    };
  }
  return {};
};

/* ------------------ fetch registrants ------------------ */

const fetchRegistrants = async ({
  postID,
  page = 1,
  occurrenceId = null,
  throwOnError = false
}) => {
  const url = withOccurrence(`/servv-plugin/v1/event/${postID}/registrants?page_size=20&page=${page}`, occurrenceId);
  try {
    const res = await (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
      path: url
    });
    return {
      registrants: mapRegistrants(res),
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count,
        totalRecords: res.total_records
      }
    };
  } catch (e) {
    if (throwOnError) throw e;
    return {
      registrants: [],
      pagination: {
        pageNumber: 1,
        pageCount: 1
      }
    };
  }
};
const fetchRegistrantsWithToken = async ({
  postID,
  next_page_token = null,
  occurrenceId = null,
  pageSize = 20,
  throwOnError = false
}) => {
  let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=${pageSize}`;
  if (next_page_token) {
    url += `&next_page_token=${encodeURIComponent(next_page_token)}`;
  }
  url = withOccurrence(url, occurrenceId);
  try {
    var _res$total_records, _res$page_size;
    const res = await (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
      path: url
    });
    const registrants = mapRegistrants(res);
    return {
      registrants,
      pagination: {
        nextPageToken: res.next_page_token || null,
        totalRecords: (_res$total_records = res.total_records) !== null && _res$total_records !== void 0 ? _res$total_records : registrants.length,
        pageSize: (_res$page_size = res.page_size) !== null && _res$page_size !== void 0 ? _res$page_size : pageSize
      }
    };
  } catch (e) {
    if (throwOnError) throw e;
    console.error("fetchRegistrantsWithToken failed", e);
    return {
      registrants: [],
      pagination: {
        nextPageToken: null,
        totalRecords: 0,
        pageSize
      }
    };
  }
};

/* ------------------ delete registrant ------------------ */

const deleteRegistrant = async ({
  postID,
  registrantID,
  occurrenceId = null
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`;
  if (occurrenceId) {
    path += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
    path,
    method: "DELETE"
  });
};

/* ------------------ resend one ------------------ */

const resendRegistrantNotification = async ({
  postID,
  registrantID,
  occurrenceId = null
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
  if (occurrenceId) {
    path += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
    path,
    method: "POST"
  });
};

/* ------------------ resend all ------------------ */

const resendAllNotifications = async ({
  postID,
  occurrenceId = null
}) => {
  let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
  if (occurrenceId) {
    url += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url,
    method: "POST",
    headers: getNonceHeaders()
  });
};
const addRegistrant = async ({
  postID,
  occurrenceId = null,
  firstName,
  lastName,
  email,
  freePlan = false
}) => {
  const event = await (0,_events__WEBPACK_IMPORTED_MODULE_2__.getEvent)(postID, occurrenceId);
  const location = event.meeting?.provider === "zoom" ? "zoom" : "offline";
  const data = (0,_Components_CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_3__.registrantsPayload)(event, location, freePlan, [{
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim()
  }]);
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/wp-json/servv-plugin/v1/event/${postID}`, data, {
    headers: getNonceHeaders(),
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {}
  });
  return response.data;
};

/***/ }),

/***/ "./src/Components/Containers/PageContent.module.scss":
/*!***********************************************************!*\
  !*** ./src/Components/Containers/PageContent.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"shell":"hYf27RiwlyFWwm5KClLO","flush":"a6Ch_fJZ7nWrwzrktMXT","container":"t_beMJmTHY9tOuVGYINQ","svRise":"hEL4_Hi3yhmLC95m6Gv9"});

/***/ }),

/***/ "./src/Components/Containers/PageHeader.module.scss":
/*!**********************************************************!*\
  !*** ./src/Components/Containers/PageHeader.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"UJKBfoKQX0ArollQPz1S","bottomLine":"EPa4Qs8Sg0DGkgQqTqgN","row":"OUo7N4uA10rjSEMICOeL","text":"sgJsCMx9FF0yFMt2kZ3Z","eyebrow":"ktHdDumXPTPovEbmrc1M","title":"yq9VS55_ovalh9J5Nb6w","description":"sj2HMNvNWGjuE5qbOg9r","actions":"PUXWCGzj1cI1x1_j3IoJ"});

/***/ }),

/***/ "./src/Components/Controls/CheckboxItem.module.scss":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/CheckboxItem.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"item":"L5QmqxV1Bu2rNw8DJeSB","input":"q8SEsQe7l63aMna9ck0i","box":"yem57zYUvpvi38MwhqOw","mixed":"GcjwpLI0WN2rVhrMlIQ9","dash":"SeY4qpLx7n1s3uZWp_Mk","check":"q8SHrYV01jys1Mf5huSK","label":"ebOb4aWbE8HyJh2PDpkO","disabled":"X9ZmoZnvOZHQ8fApo7kh"});

/***/ }),

/***/ "./src/Components/Controls/NewInputControl.module.scss":
/*!*************************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"IFKo2Oy4jAQImQYKp3th","label":"NWAvKcaQuc1HAdNqx3XR","errorText":"zP6FRtHJ4yJjeWueA9uo"});

/***/ }),

/***/ "./src/Components/Controls/NewInputFieldControl.module.scss":
/*!******************************************************************!*\
  !*** ./src/Components/Controls/NewInputFieldControl.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"field":"mnkZ919trJuW2iv63ypl","content":"_FGd5GJTpG4M_jEm0TPQ","disabled":"qdwYYi7sJT_cRtD8ZXMF","textarea":"fx0sZxO2auf836gJwJSc","native":"EWAiYY_5e6MWQVZT0nkg","left":"BY4ZYyoot9eqQrv6a85U","center":"dAdXU7WqEMXyVrL4Ixvj","right":"jbHOWMLsSp0Wmi85kDYz","error":"D1cdINycMkHcDXE1A7an"});

/***/ }),

/***/ "./src/Components/Modals/ModalShell.module.scss":
/*!******************************************************!*\
  !*** ./src/Components/Modals/ModalShell.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"zaqd_YWTGq9h9BrDhnml","svFade":"lQqxKZGLcAKV1Jn8Vt2F","dialog":"XXcDzcz01ytVnY3hpKJj","svPop":"DdditGgnQd2jVs8QrqsH","sm":"HW1Ittu6VG1nOuS1qg32","md":"vJ0FZD6KHZ4i9D5apaFY","lg":"YHKB1jznvv4OseMsi_Az","xl":"Efc0HlnFAqkwM15HiCNa","header":"R3wk4fdBZ02XilBUvvKA","eyebrow":"WERcf127A0gFANECWp8h","title":"iXgumjbKr876OyoPtlx9","description":"MPu8eTML6zZvnQl6CbB4","close":"MV0wlpfgIbnXq6oksmES","body":"EySeA5xUa9n4fl1YJ9vW","footer":"uM3hTqX_1dotCASYgHwQ"});

/***/ }),

/***/ "./src/Components/Pages/EventRegistrantsPage.module.scss":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/EventRegistrantsPage.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"divider":"ZomF4BqatqqcUoAwhaJo","card":"rFYTfZKc8Z50Lcp5cpaz","toolbar":"VDZsXqit36qpVC9xMGRm","actions":"UbL0J6IP61ZnvYHkQEJQ","row":"RFZ7rydAiqlJ4aDESRvY","tableHeader":"qmQjhOQ2QTXaFyCEARrY","name":"njRSc3wEnAo3SYJRiXvV","email":"xTYq6igeHtUk7hcykxeP","pagination":"KuyfVDofb44itB16T4so","state":"mr9Azb2BOpUVBKiB0pUs","note":"gIayzBSxE0djO8rGFOTg","form":"o1Juglv7mk7reUMiaUK1","error":"a_1Zbg1qv8X2KC8BLI7t"});

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.module.scss":
/*!******************************************************!*\
  !*** ./src/Components/Pages/PageWrapper.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"backdrop":"GwbBdwO7UxUbci6wtyds","root":"whZeFIc454jkDbuWw6zj","gutterLeft":"nH2l6oxNCJ28ihBOUf7w","gutterRight":"KKg_qLS4gdJXh4u6HnvG","spinner":"Al4EqMTkXH8MiW77lCyS","content":"DhHmGpnbQlurQkapo8Ei"});

/***/ }),

/***/ "./src/Components/Pages/SpinnerLoader.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"NvXIBF17sKtsJ5DppGj6","blurred":"s8xU0aT_Upum9VaMUtFv","overlay":"rwBQn7Ep0HRpuD73wvEE"});

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowDownTrayIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownTrayIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PaperAirplaneIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaperAirplaneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function TrashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_EventRegistrantsPage_jsx.js.map?ver=190baa89ae1ad86145ba