"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_BookingsPage_jsx"],{

/***/ "./src/Components/Containers/BulkBar.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Containers/BulkBar.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAllRow: () => (/* binding */ SelectAllRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BulkBar.module.scss */ "./src/Components/Containers/BulkBar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// The select-all row and the bulk bar from events-views.html. The actions are
// the caller's — this only owns the count, the clear and the chrome.

const SelectAllRow = ({
  total = 0,
  selectedCount = 0,
  view = "rows",
  label,
  onToggleAll = () => {}
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: [_BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].selectAll, view === "rail" ? _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].insetRail : _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].insetRows].join(" "),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label || t("Select all"),
    checked: total > 0 && selectedCount === total,
    indeterminate: selectedCount > 0 && selectedCount < total,
    disabled: total === 0,
    onChange: onToggleAll
  })
});
const BulkBar = ({
  selectedCount = 0,
  noun = "event",
  nounPlural,
  onClear = () => {},
  children
}) => {
  if (selectedCount < 1) return null;
  const plural = nounPlural || `${noun}s`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bar,
    role: "status",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].count,
      children: selectedCount === 1 ? `1 ${t(noun)} ${t("selected")}` : `${selectedCount} ${t(plural)} ${t("selected")}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spacer
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "ghost",
      size: "sm",
      text: t("Clear"),
      onAction: onClear
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulkBar);

/***/ }),

/***/ "./src/Components/Containers/Dropdown.jsx":
/*!************************************************!*\
  !*** ./src/Components/Containers/Dropdown.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.module.scss */ "./src/Components/Containers/Dropdown.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// `surface` draws the white card around the menu. Pass false when the child is
// already a surface of its own (CalendarInline) so it isn't framed twice.

const Dropdown = ({
  activator,
  status,
  children,
  onClose,
  align = "right",
  surface = true,
  className = "",
  dropdownClassName = "",
  ...rest
}) => {
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [dropdownStyle, setDropdownStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    minWidth: 240
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!status) return;
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [status, onClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status && dropdownRef.current) {
      const dropdown = dropdownRef.current.querySelector(".dropdown-content-fix");
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        let newStyle = {
          minWidth: 240
        };
        if (rect.right > viewportWidth) {
          newStyle.right = 0;
          newStyle.left = "auto";
        }
        if (rect.left < 0) {
          newStyle.left = 0;
          newStyle.right = "auto";
        }
        setDropdownStyle({
          ...newStyle
        });
      }
    }
  }, [status, children]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ref: dropdownRef,
    className: [_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].root, className].filter(Boolean).join(" "),
    ...rest,
    children: [activator, status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: [_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].menu, dropdownClassName].filter(Boolean).join(" "),
      style: align === "left" ? {
        minWidth: 240,
        left: 0,
        right: "auto"
      } : {
        minWidth: 240,
        right: 0,
        left: "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: ["dropdown-content-fix", surface ? _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].surface : ""].filter(Boolean).join(" "),
        style: dropdownStyle,
        children: children
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./src/Components/Containers/FiltersDropdown.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/FiltersDropdown.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FiltersPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersPanel */ "./src/Components/Containers/FiltersPanel.jsx");
/* harmony import */ var _FiltersDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FiltersDropdown.module.scss */ "./src/Components/Containers/FiltersDropdown.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// The Filters button as the dashboard and the calendar show it: the applied
// count on the trigger, and the drawer from the reference behind it.

const FiltersDropdown = ({
  filtersList = {},
  selectedFilters = {},
  onSelect = () => {},
  onClear = () => {},
  isApplied = false,
  showFormat = false,
  eventType = "all",
  onEventTypeChange = () => {},
  // Optional: when the caller keeps its date filters in the drawer rather than
  // in its own toolbar. See FiltersPanel for the shape.
  dateFilters,
  // A caller whose filters are not filter groups passes its own sections, the
  // count to show on the trigger, and what Apply should do.
  sections,
  appliedCount,
  onApply
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const count = appliedCount !== null && appliedCount !== void 0 ? appliedCount : Object.values(selectedFilters).reduce((total, group) => total + (Array.isArray(group) ? group.length : 0), 0) + (showFormat && eventType !== "all" ? 1 : 0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _FiltersDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      type: "button",
      className: _FiltersDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button,
      onClick: () => setOpen(true),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: _FiltersDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].icon,
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "M3 6h18M6 12h12M10 18h4",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: t("Filters")
      }), count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _FiltersDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].count,
        children: count
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FiltersPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: open,
      onClose: () => setOpen(false),
      filtersList: filtersList,
      selectedFilters: selectedFilters,
      onSelect: onSelect,
      onClear: onClear,
      isApplied: isApplied,
      showFormat: showFormat,
      eventType: eventType,
      onEventTypeChange: onEventTypeChange,
      dateFilters: dateFilters,
      sections: sections,
      onApply: onApply,
      appliedCount: appliedCount
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersDropdown);

/***/ }),

/***/ "./src/Components/Containers/FiltersPanel.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Containers/FiltersPanel.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FiltersPanel.module.scss */ "./src/Components/Containers/FiltersPanel.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








// The order and the wording the reference drawer uses. Anything the API sends
// that is not listed here still renders, after these, under its own key.

const GROUPS = {
  locations: {
    label: "Location",
    placeholder: "Any location"
  },
  categories: {
    label: "Category",
    placeholder: "Any category"
  },
  members: {
    label: "Member",
    placeholder: "Any member"
  },
  languages: {
    label: "Language",
    placeholder: "Any language"
  }
};

// Format maps onto the events endpoint, which knows two kinds of event:
// offline and zoom. Picking the kind that is already active clears it.
const FORMATS = [{
  value: "offline",
  label: "In-person",
  dot: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dotOffline
}, {
  value: "zoom",
  label: "Online",
  dot: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dotZoom
}];
const titleCase = key => key.charAt(0).toUpperCase() + key.slice(1);

// The Filters drawer: format chips (only where online events are possible) and
// one select per filter group, over the list the caller is showing.
const FiltersPanel = ({
  open = false,
  onClose = () => {},
  filtersList = {},
  selectedFilters = {},
  onSelect = () => {},
  onClear = () => {},
  isApplied = false,
  // Format is only meaningful once a Zoom account can produce online events.
  showFormat = false,
  eventType = "all",
  onEventTypeChange = () => {},
  // The date filters, when the caller's Display options put them in here:
  // { placement, ranges: [{label, value}], activeRange, onRangeChange, dates,
  //   onDatesChange, minDate }.
  dateFilters,
  // A caller whose filters are not filter groups — the bookings list, say —
  // passes its own sections instead: [{ key, title, content }], and what
  // Apply should do beyond closing the drawer.
  sections,
  onApply,
  appliedCount
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open) return undefined;
    const onKeyDown = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  const groupKeys = [...Object.keys(GROUPS).filter(key => filtersList[key]?.length > 0), ...Object.keys(filtersList).filter(key => !GROUPS[key] && filtersList[key]?.length > 0)];
  const activeCount = appliedCount !== null && appliedCount !== void 0 ? appliedCount : Object.values(selectedFilters).reduce((total, group) => total + (Array.isArray(group) ? group.length : 0), 0) + (showFormat && eventType !== "all" ? 1 : 0);

  // react-select hands back option values as strings; the filter state keeps
  // the ids the API sent, so each change is replayed as id-level toggles.
  const handleGroupChange = (group, picked) => {
    const items = filtersList[group] || [];
    const byValue = new Map(items.map(item => [String(item.id), item.id]));
    const before = (selectedFilters[group] || []).map(String);
    const after = (picked || []).map(String);
    [...before.filter(value => !after.includes(value)), ...after.filter(value => !before.includes(value))].forEach(value => {
      var _byValue$get;
      return onSelect(group, (_byValue$get = byValue.get(value)) !== null && _byValue$get !== void 0 ? _byValue$get : value);
    });
  };
  const renderGroup = group => {
    const {
      label,
      placeholder
    } = GROUPS[group] || {
      label: titleCase(group),
      placeholder: `Any ${group}`
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      multiple: true,
      label: label,
      helpText: placeholder,
      options: (filtersList[group] || []).map(item => ({
        value: String(item.id),
        label: item.name
      })),
      value: (selectedFilters[group] || []).map(String),
      onChange: picked => handleGroupChange(group, picked)
    }, group);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].overlay,
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panel,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Filters",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title,
            children: t("Filters")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].subtitle,
            children: activeCount > 0 ? `${activeCount} active · applies to this list only` : "Applies to this list only"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].close,
          onClick: onClose,
          "aria-label": "Close filters",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body,
        children: [dateFilters?.placement === "filters" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].section,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionTitle,
              children: t("Date")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fields,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
                fullWidth: true,
                title: t("Range"),
                buttons: (dateFilters.ranges || []).map(range => ({
                  value: range.value,
                  label: t(range.label)
                })),
                active: dateFilters.activeRange,
                onChange: dateFilters.onRangeChange
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fieldLabel,
                  children: t("Dates")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  fullWidth: true,
                  value: dateFilters.dates,
                  onChange: dateFilters.onDatesChange,
                  label: t("Select date"),
                  minDate: dateFilters.minDate
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].divider
          })]
        }), sections?.length > 0 && sections.map((section, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].divider
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].section,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionTitle,
              children: section.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fields,
              children: section.content
            })]
          })]
        }, section.key)), !sections && showFormat && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].section,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionTitle,
              children: t("Format")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chips,
              children: FORMATS.map(format => {
                const active = eventType === format.value;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                  type: "button",
                  "aria-pressed": active,
                  className: [_FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chip, active ? _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chipActive : ""].filter(Boolean).join(" "),
                  onClick: () => onEventTypeChange(active ? "all" : format.value),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: `${_FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dot} ${format.dot}`
                  }), t(format.label)]
                }, format.value);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].divider
          })]
        }), !sections && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].section,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionTitle,
            children: t("Attributes")
          }), groupKeys.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fields,
            children: groupKeys.map(renderGroup)
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyGroups,
            children: t("No filter groups yet — add locations, categories, languages or members in Settings → Filters.")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _FiltersPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "secondary",
          text: t("Reset"),
          disabled: !isApplied && eventType === "all",
          onAction: () => {
            onClear();
            onEventTypeChange("all");
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "primary",
          text: t("Apply"),
          onAction: () => {
            onApply?.();
            onClose();
          }
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersPanel);

/***/ }),

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

/***/ "./src/Components/Controls/CalendarInline.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/CalendarInline.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/dist/esm/DayPicker.js");
/* harmony import */ var _CalendarInline_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarInline.module.scss */ "./src/Components/Controls/CalendarInline.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



// The calendar surface shared by every date control: a DayPicker in servv
// chrome. Render it directly when the surrounding markup is already a panel
// (a modal, a form block); wrap it in NewDatePickerControl for a popover.
//
// react-day-picker speaks { from, to } for ranges while the admin pages store
// { startDate, endDate }; the translation lives here so no call site has to
// know about either shape.

const CalendarInline = ({
  mode = "single",
  value,
  onChange = () => {},
  disabled,
  defaultMonth
}) => {
  var _value$startDate, _value$endDate;
  const isRange = mode === "range";
  const selected = isRange ? value?.startDate || value?.endDate ? {
    from: (_value$startDate = value.startDate) !== null && _value$startDate !== void 0 ? _value$startDate : undefined,
    to: (_value$endDate = value.endDate) !== null && _value$endDate !== void 0 ? _value$endDate : undefined
  } : undefined : value !== null && value !== void 0 ? value : undefined;
  const handleSelect = next => {
    var _next$from, _ref, _next$to;
    if (!isRange) {
      onChange(next);
      return;
    }
    onChange({
      startDate: (_next$from = next?.from) !== null && _next$from !== void 0 ? _next$from : null,
      endDate: (_ref = (_next$to = next?.to) !== null && _next$to !== void 0 ? _next$to : next?.from) !== null && _ref !== void 0 ? _ref : null
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `date-picker-menu ${_CalendarInline_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].surface}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_day_picker__WEBPACK_IMPORTED_MODULE_2__.DayPicker, {
      mode: mode,
      selected: selected,
      defaultMonth: defaultMonth !== null && defaultMonth !== void 0 ? defaultMonth : isRange ? selected?.from : selected,
      onSelect: handleSelect,
      disabled: disabled,
      weekStartsOn: 1 // Mo → Su
      ,
      showOutsideDays: true
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarInline);

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

/***/ "./src/Components/Controls/DisplayOptions.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/DisplayOptions.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _CheckboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayOptions.module.scss */ "./src/Components/Controls/DisplayOptions.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// The "Display settings" popover from the events-list reference, next to the
// page's primary action: everything about how a list is drawn, nothing about
// what it contains. Each group is a radiogroup of raised slabs.

const SlidersIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })
});

// A group of independent switches — which columns a table shows, say. The
// reference's slabs are for picking one of several; a set of toggles reads
// better as a plain list.
const CheckboxGroup = ({
  title,
  note,
  options,
  onToggle
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
  className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].group,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title,
    children: title
  }), note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].note,
    children: note
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checks,
    children: options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: option.label,
      checked: option.checked,
      disabled: option.disabled,
      onChange: () => onToggle(option.value)
    }, option.value))
  })]
});
const OptionGroup = ({
  title,
  note,
  options,
  value,
  onChange
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
  className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].group,
  role: "radiogroup",
  "aria-label": title,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title,
    children: title
  }), note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].note,
    children: note
  }), options.map(option => {
    const active = option.value === value;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      type: "button",
      role: "radio",
      "aria-checked": active,
      className: [_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].opt, active ? _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].optActive : ""].filter(Boolean).join(" "),
      onClick: () => onChange(option.value),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].mark
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label,
          children: option.label
        }), option.hint && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].hint,
          children: option.hint
        })]
      })]
    }, option.value);
  })]
});
const DisplayOptions = ({
  groups = []
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root,
    align: "right",
    surface: false,
    status: open,
    onClose: () => setOpen(false),
    activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "secondary",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SlidersIcon, {}),
      text: t("Display options"),
      ariaLabel: t("Display options"),
      onAction: () => setOpen(prev => !prev)
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].pop,
      children: groups.map(group => group.type === "checkbox" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CheckboxGroup, {
        title: group.title,
        note: group.note,
        options: group.options,
        onToggle: group.onToggle
      }, group.key) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(OptionGroup, {
        title: group.title,
        note: group.note,
        options: group.options,
        value: group.value,
        onChange: value => {
          group.onChange(value);
          if (group.closeOnPick) setOpen(false);
        }
      }, group.key))
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayOptions);

/***/ }),

/***/ "./src/Components/Controls/NewButtonGroup.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewButtonGroup.module.scss */ "./src/Components/Controls/NewButtonGroup.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// A segment is either a plain string (its own label and value) or an object:
// { value, label, icon, title }. An entry with an icon and no label renders as
// a square icon segment — that is how the dashboard's view switcher is built.

const normalize = button => {
  var _button$value, _button$title;
  return typeof button === "object" && button !== null ? {
    value: (_button$value = button.value) !== null && _button$value !== void 0 ? _button$value : button.label,
    label: button.label,
    icon: button.icon,
    title: (_button$title = button.title) !== null && _button$title !== void 0 ? _button$title : button.label
  } : {
    value: button,
    label: button,
    icon: null,
    title: button
  };
};
const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
  view,
  ariaLabel,
  // Fill the container and split it evenly — how a labelled group reads in a
  // stacked form such as the Filters drawer.
  fullWidth = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper, fullWidth ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapperFull : ""].filter(Boolean).join(" "),
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].track, fullWidth ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].trackFull : ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": ariaLabel,
      children: buttons.map(button => {
        const segment = normalize(button);
        const isActive = active === segment.value;
        const iconOnly = Boolean(segment.icon) && !segment.label;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          type: "button",
          role: "tab",
          "aria-selected": isActive,
          "aria-label": iconOnly ? segment.title : undefined,
          title: segment.title,
          disabled: disabled,
          onClick: () => onChange(segment.value),
          className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].segment, isActive ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inactive, view ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].compact : "", iconOnly ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconOnly : ""].filter(Boolean).join(" "),
          children: [segment.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
            children: segment.icon
          }), segment.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text,
            children: segment.label
          })]
        }, segment.value);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewButtonGroup);

/***/ }),

/***/ "./src/Components/Controls/NewDatePickerControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewDatePickerControl.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _CalendarInline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarInline */ "./src/Components/Controls/CalendarInline.jsx");
/* harmony import */ var _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewDatePickerControl.module.scss */ "./src/Components/Controls/NewDatePickerControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_FORMAT = "MMM DD, YYYY";
const toDate = value => {
  if (!value) return null;
  const parsed = moment__WEBPACK_IMPORTED_MODULE_1___default().isMoment(value) ? value : moment__WEBPACK_IMPORTED_MODULE_1___default()(value);
  return parsed.isValid() ? parsed.startOf("day").toDate() : null;
};

// A calendar icon button that opens CalendarInline in a popover.
//
// mode="range" takes and emits { startDate, endDate } as Dates — the shape the
// filter pages already keep in state. mode="single" takes anything
// moment-parsable and emits a moment, matching the event form's handlers.
const NewDatePickerControl = ({
  mode = "range",
  value,
  onChange = () => {},
  label = "Select dates",
  displayFormat = DEFAULT_FORMAT,
  minDate,
  maxDate,
  disabled = false,
  fullWidth = false,
  className = "",
  variant = "toolbar",
  ariaLabel
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isRange = mode === "range";
  const selected = isRange ? {
    startDate: toDate(value?.startDate),
    endDate: toDate(value?.endDate)
  } : toDate(value);
  const before = toDate(minDate);
  const after = toDate(maxDate);
  const disabledDays = before || after ? {
    ...(before ? {
      before
    } : {}),
    ...(after ? {
      after
    } : {})
  } : undefined;
  const triggerLabel = () => {
    if (!isRange) {
      return selected ? moment__WEBPACK_IMPORTED_MODULE_1___default()(selected).format(displayFormat) : label;
    }
    if (!selected.startDate) return label;
    const from = moment__WEBPACK_IMPORTED_MODULE_1___default()(selected.startDate).format(displayFormat);
    if (!selected.endDate || selected.endDate.valueOf() === selected.startDate.valueOf()) {
      return from;
    }
    return `${from} – ${moment__WEBPACK_IMPORTED_MODULE_1___default()(selected.endDate).format(displayFormat)}`;
  };
  const handleSelect = next => {
    if (!isRange) {
      if (!next) return;
      onChange(moment__WEBPACK_IMPORTED_MODULE_1___default()(next));
      setOpen(false);
      return;
    }
    onChange(next);
    // Hold the popover open until both ends of the range are picked.
    if (next?.startDate && next?.endDate) setOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: [_NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root, fullWidth ? _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].block : "", className].filter(Boolean).join(" "),
    align: "left",
    surface: false,
    status: open && !disabled,
    onClose: () => setOpen(false),
    onKeyDown: event => {
      if (event.key === "Escape") setOpen(false);
    },
    activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      type: "button",
      className: `${_NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button} ${variant === "field" ? _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].field : ""}`,
      disabled: disabled,
      "aria-label": ariaLabel,
      "aria-expanded": open && !disabled,
      onClick: () => setOpen(prev => !prev),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
        className: _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].icon,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
          x: "3",
          y: "5",
          width: "18",
          height: "16",
          rx: "3",
          stroke: "currentColor",
          strokeWidth: "1.9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M8 3v4M16 3v4M3 11h18",
          stroke: "currentColor",
          strokeWidth: "1.9"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label,
        children: triggerLabel()
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CalendarInline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mode: mode,
      value: selected,
      onChange: handleSelect,
      disabled: disabledDays
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewDatePickerControl);

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

/***/ "./src/Components/Controls/NewSelectControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewSelectControl.module.scss */ "./src/Components/Controls/NewSelectControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Caret = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  stroke: "currentColor",
  width: 18,
  height: 18,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  })
});
const DropdownIndicator = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__.c.DropdownIndicator, {
  ...props,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Caret, {})
});

// react-select renders its own DOM, so it is styled through the same tokens
// exposed as custom properties on #servv-wrap (see src/styles/base.scss).
const reactSelectStyles = style => ({
  container: base => ({
    ...base,
    width: "100%",
    ...style
  }),
  control: (base, state) => ({
    ...base,
    minHeight: "40px",
    border: `1px solid ${state.isFocused ? "var(--sv-primary-border)" : "var(--sv-border-field)"}`,
    borderRadius: "var(--sv-radius-lg)",
    backgroundColor: "var(--sv-surface)",
    // No halo on focus: the border colour already says which select is
    // active, and the ring sat heavily on a control this wide.
    boxShadow: "var(--sv-shadow-field)",
    paddingLeft: "6px",
    paddingRight: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
      borderColor: "var(--sv-primary-border)"
    }
  }),
  valueContainer: base => ({
    ...base,
    padding: "0 6px"
  }),
  placeholder: base => ({
    ...base,
    color: "var(--sv-text-placeholder)"
  }),
  singleValue: base => ({
    ...base,
    color: "var(--sv-text)"
  }),
  input: base => ({
    ...base,
    color: "var(--sv-text)"
  }),
  multiValue: base => ({
    ...base,
    borderRadius: "99px",
    backgroundColor: "var(--sv-primary-surface)",
    border: "1px solid var(--sv-primary-border)"
  }),
  multiValueLabel: base => ({
    ...base,
    color: "var(--sv-primary-strong)",
    fontSize: "12px",
    fontWeight: 600
  }),
  multiValueRemove: base => ({
    ...base,
    color: "var(--sv-primary-strong)",
    borderRadius: "0 99px 99px 0",
    ":hover": {
      backgroundColor: "var(--sv-primary-border)",
      color: "var(--sv-primary-strong)"
    }
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: "0 6px",
    color: "var(--sv-text-soft)",
    ":hover": {
      color: "var(--sv-primary)"
    }
  }),
  menu: base => ({
    ...base,
    overflow: "hidden",
    marginTop: "6px",
    borderRadius: "var(--sv-radius-2xl)",
    border: "1px solid var(--sv-border)",
    boxShadow: "0 12px 32px rgba(16, 24, 40, 0.14)",
    zIndex: 40
  }),
  menuList: base => ({
    ...base,
    padding: "6px"
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "7px",
    padding: "8px 10px",
    fontSize: "13px",
    fontWeight: 500,
    color: state.isSelected ? "var(--sv-primary-strong)" : "var(--sv-text-strong)",
    backgroundColor: state.isSelected ? "var(--sv-primary-surface)" : state.isFocused ? "var(--sv-primary-surface)" : "transparent",
    cursor: "pointer",
    ":active": {
      backgroundColor: "var(--sv-primary-surface)"
    }
  })
});
const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  multiple = false,
  onChange = () => {},
  iconRight = null,
  style = {}
}) => {
  // A native <select> can only render text, so options carrying JSX labels
  // (badges, icons) go through react-select as well.
  const hasRichLabels = options.some(option => option && typeof option.label !== "string");
  if (multiple) {
    const selected = Array.isArray(value) ? value.map(String) : [];
    const selectedOptions = options.filter(o => selected.includes(o.value));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isMulti: true,
        options: options,
        value: selectedOptions,
        onChange: picked => onChange((picked || []).map(o => o.value)),
        isDisabled: disabled,
        placeholder: helpText || "Select...",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator
        },
        styles: reactSelectStyles(style)
      })]
    });
  }
  if (hasRichLabels) {
    var _options$find;
    const selectedOption = (_options$find = options.find(o => String(o.value) === String(value))) !== null && _options$find !== void 0 ? _options$find : null;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        options: options,
        value: selectedOption,
        onChange: picked => onChange(picked ? picked.value : ""),
        isDisabled: disabled,
        isSearchable: false,
        placeholder: helpText || "Select...",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator
        },
        styles: reactSelectStyles(style)
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `${_NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].control} ${disabled ? _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : ""}`,
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].native,
        value: value !== null && value !== void 0 ? value : "",
        onChange: e => onChange(e.target.value),
        disabled: disabled,
        children: [helpText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "",
          disabled: true,
          children: helpText
        }), options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))]
      }), iconRight ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
        children: iconRight
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].caret,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Caret, {})
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSelectControl);

/***/ }),

/***/ "./src/Components/Controls/PageActionButton.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/PageActionButton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageActionButton.module.scss */ "./src/Components/Controls/PageActionButton.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The one button primitive for the admin shell. Styling lives in the SCSS
// module next door; `className` stays a pass-through for layout-only tweaks
// from the call site (width, flex, alignment).

const VARIANTS = {
  primary: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].primary,
  secondary: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].secondary,
  danger: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].danger,
  "danger-secondary": _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dangerSecondary,
  ghost: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghost,
  "danger-ghost": _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dangerGhost
};
const SIZES = {
  md: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].md,
  sm: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sm,
  xs: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].xs
};
const PageActionButton = ({
  text,
  icon,
  type = "primary",
  // primary | secondary | danger | danger-secondary | ghost | danger-ghost
  size = "md",
  // md | sm | xs
  onAction,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
  className = "",
  style = {},
  hidden
}) => {
  const classes = [_PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, VARIANTS[type] || VARIANTS.primary, SIZES[size] || SIZES.md, fullWidth ? _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fullWidth : "", iconOnly ? _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconOnly : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
    type: "button",
    onClick: onAction,
    disabled: disabled,
    "aria-label": ariaLabel,
    className: classes,
    style: style,
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
      children: icon
    }), !iconOnly && text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: text
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageActionButton);

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

/***/ "./src/Components/Pages/Bookings/BookingRows.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/Bookings/BookingRows.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOOKING_COLUMNS: () => (/* binding */ BOOKING_COLUMNS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/WalletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookingRows.module.scss */ "./src/Components/Pages/Bookings/BookingRows.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






// Every column the bookings list can show, in the order it shows them. The
// Display options popover decides which are visible; the widths live here so
// the header and the rows cannot disagree.

const BOOKING_COLUMNS = [{
  value: "order",
  label: "Order ID",
  width: "92px"
}, {
  value: "date",
  label: "Order Date/Time",
  width: "148px"
}, {
  value: "registrant",
  label: "Registrant",
  width: "minmax(0, 1.3fr)"
}, {
  value: "title",
  label: "Title",
  width: "minmax(0, 1.7fr)"
}, {
  value: "occurrence",
  label: "Occurrence",
  width: "148px"
}, {
  value: "paid",
  label: "Payment & status",
  width: "132px"
}];

// Three 32px icon buttons with 4px between them.
const ACTIONS_WIDTH = "104px";
const statusOf = row => {
  if (row.active_registrants === 0) return "canceled";
  if (row.reunded_quantity >= row.quantity) return "refunded";
  return "active";
};
const STATUS_LABEL = {
  active: "Active",
  refunded: "Refunded",
  canceled: "Canceled"
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
  onCancel
}) => {
  const visible = BOOKING_COLUMNS.filter(column => columns.some(c => c.value === column.value && c.visible));

  // 18px for the checkbox, the visible columns, then the actions. The actions
  // track must be a NUMBER, not `auto`: the header's last cell is empty, so an
  // auto track measures 0 there and 104px in the rows, and the difference is
  // taken out of the flexible columns — which slides every column after them
  // out of line with its heading.
  const template = [onToggleSelect ? "18px" : null, ...visible.map(column => column.width), ACTIONS_WIDTH].filter(Boolean).join(" ");
  const hasColumn = value => visible.some(column => column.value === value);
  const mergeDates = hasColumn("date") && hasColumn("occurrence");
  const isMergedColumn = column => column.value === "occurrence" && mergeDates;
  const compactWidths = {
    order: "minmax(72px, .6fr)",
    date: mergeDates ? "minmax(180px, 1.1fr)" : "minmax(120px, 1fr)",
    registrant: "minmax(0, 1.3fr)",
    title: "minmax(0, 1.4fr)",
    occurrence: "minmax(120px, 1fr)",
    paid: "112px",
    status: "minmax(104px, .8fr)"
  };
  const compactTemplate = [onToggleSelect ? "18px" : null, ...visible.filter(column => !isMergedColumn(column)).map(column => compactWidths[column.value]), "68px"].filter(Boolean).join(" ");
  const gridStyle = {
    "--booking-cols": template,
    "--booking-compact-cols": compactTemplate
  };
  const renderCell = (column, row) => {
    const ordered = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(row.created_datetime).tz(row.timezone);
    const starts = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(row.start_datetime).tz(row.timezone);
    switch (column.value) {
      case "order":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].strong,
            children: ["#", row.id]
          })
        });
      case "date":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: mergeDates ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].regularDates : undefined,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].strong,
              children: ordered.format("MMM DD YYYY")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].sub,
              children: ordered.format(timeFormat)
            })]
          }), mergeDates && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].compactDates,
            children: [["Ordered", ordered], ["Event", starts]].map(([label, date]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dateLabel,
                children: t(label)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dateLine,
                title: date.format(`MMM DD YYYY ${timeFormat}`),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  children: date.format("MMM DD YYYY")
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dateTime,
                  children: date.format(timeFormat)
                })]
              })]
            }, label))
          })]
        });
      case "registrant":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].text,
            title: row.email,
            children: row.email
          })
        });
      case "title":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title,
          title: row.product_name,
          children: row.product_name
        });
      case "occurrence":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].strong,
            children: starts.format("MMM DD YYYY")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].sub,
            children: starts.format(timeFormat)
          })]
        });
      case "paid":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment,
          children: [Number(row.price) > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].money,
            children: [Number(row.price), " ", currency?.toUpperCase()]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].free,
            children: t("Free")
          }), renderCell({
            value: "status"
          }, row)]
        });
      case "status":
        {
          const state = statusOf(row);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: [_BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].status, state === "active" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].statusActive : "", state === "refunded" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].statusRefunded : "", state === "canceled" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].statusCanceled : ""].filter(Boolean).join(" "),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: [_BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dot, state === "active" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dotActive : "", state === "refunded" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dotRefunded : "", state === "canceled" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dotCanceled : ""].filter(Boolean).join(" ")
            }), t(STATUS_LABEL[state])]
          });
        }
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].list,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].head,
      style: gridStyle,
      children: [onToggleSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {}), visible.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: isMergedColumn(column) ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].mergedColumn : undefined,
        children: column.value === "date" && mergeDates ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].regularDates,
            children: t(column.label)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].compactDatesHeading,
            children: t("Dates")
          })]
        }) : t(column.label)
      }, column.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {})]
    }), bookings.map(row => {
      const picked = selectedIds.includes(row.id);
      const live = row.active_registrants > 0;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: gridStyle,
        className: [_BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row, live ? "" : _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].muted, picked ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].picked : ""].filter(Boolean).join(" "),
        children: [onToggleSelect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].pick,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            checked: picked,
            ariaLabel: `${t("Select order")} #${row.id}`,
            onChange: () => onToggleSelect(row.id)
          })
        }), visible.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: [_BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cell, column.value === "title" ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].eventCell : "", isMergedColumn(column) ? _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].mergedColumn : ""].filter(Boolean).join(" "),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cellLabel,
            children: t(column.label)
          }), renderCell(column, row)]
        }, column.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].actions,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].action,
            title: t("Resend confirmation"),
            disabled: !live,
            onClick: () => onResend?.(row),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].action,
            title: t("Issue refund"),
            disabled: !live || !(Number(row.price) > 0),
            onClick: () => onRefund?.(row),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: [_BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].action, _BookingRows_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].actionDanger].join(" "),
            title: t("Cancel booking"),
            disabled: !live,
            onClick: () => onCancel?.(row),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {})
          })]
        })]
      }, row.id);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingRows);

/***/ }),

/***/ "./src/Components/Pages/BookingsPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/BookingsPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useCacheRefresh */ "./src/hooks/useCacheRefresh.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownOnSquareStackIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/WalletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js");
/* harmony import */ var _utilities_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/bookings */ "./src/utilities/bookings.js");
/* harmony import */ var _utilities_tableHeadings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/tableHeadings */ "./src/utilities/tableHeadings.js");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_DisplayOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/DisplayOptions */ "./src/Components/Controls/DisplayOptions.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Containers_FiltersDropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Containers/FiltersDropdown */ "./src/Components/Containers/FiltersDropdown.jsx");
/* harmony import */ var _Containers_BulkBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Containers/BulkBar */ "./src/Components/Containers/BulkBar.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _Shared_DashboardPagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Shared/DashboardPagination */ "./src/Components/Shared/DashboardPagination.jsx");
/* harmony import */ var _Bookings_BookingRows__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Bookings/BookingRows */ "./src/Components/Pages/Bookings/BookingRows.jsx");
/* harmony import */ var _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BookingsPage.module.scss */ "./src/Components/Pages/BookingsPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);


























// =====================================================================
// HEADINGS STORAGE HELPERS
// =====================================================================

const HEADINGS_STORAGE_KEY = "servv_bookings_headings";

// Which columns the list shows is a per-browser preference, so it lives in
// localStorage and is edited through the Display options popover.
const defaultHeadings = _Bookings_BookingRows__WEBPACK_IMPORTED_MODULE_22__.BOOKING_COLUMNS.map(({
  label,
  value
}) => ({
  label,
  value,
  visible: true
}));

// What the destructive bulk actions have to be confirmed for.
const CONFIRMABLE = {
  refund: {
    title: "Refund these bookings?",
    description: "The money goes back to the registrant through Stripe. This cannot be undone.",
    action: "Issue refund"
  },
  cancel: {
    title: "Cancel these bookings?",
    description: "The registrants lose their place and are notified. This cannot be undone.",
    action: "Cancel booking"
  }
};

// =====================================================================
// COMPONENT
// =====================================================================

const BookingsPage = () => {
  var _bookings$bookings, _price$from, _price$to, _bookings$page_number, _bookings$page_count, _bookings$total_recor;
  const {
    settings,
    stripeCurrency
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)();
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hh:mm a");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [timezone, setTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("US/Pacific");
  // Lazy initializer reads from localStorage once on mount
  const [headings, setHeadings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const loaded = (0,_utilities_tableHeadings__WEBPACK_IMPORTED_MODULE_5__.loadHeadings)(HEADINGS_STORAGE_KEY, defaultHeadings);
    try {
      const saved = JSON.parse(localStorage.getItem(HEADINGS_STORAGE_KEY) || "null");
      if (saved && "status" in saved) {
        const migrated = loaded.map(heading => heading.value === "paid" ? {
          ...heading,
          visible: heading.visible || Boolean(saved.status)
        } : heading);
        (0,_utilities_tableHeadings__WEBPACK_IMPORTED_MODULE_5__.saveHeadings)(HEADINGS_STORAGE_KEY, migrated);
        return migrated;
      }
    } catch {/* unavailable storage uses the loaded defaults */}
    return loaded;
  });
  const timeIntervals = [{
    label: "All time",
    value: "all"
  }, {
    label: "12 month",
    value: "12"
  }, {
    label: "30 days",
    value: "30"
  }, {
    label: "7 days",
    value: "7"
  }];
  const [selectedOrder, setSelectedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [bookings, setBookings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedInterval, setSelectedTimeInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [localSearch, setLocalSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    startDate: null,
    endDate: null
  });
  const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    from: null,
    to: null
  });
  const [selectedProvider, setSelectedProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    offline: true,
    zoom: true
  });
  const [confirming, setConfirming] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const firstFetch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const timezones = Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_6__.timezonesList).map(zone => {
    return {
      id: zone,
      name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_6__.timezonesList[zone]
    };
  });
  const getTimezoneFromSettings = settings => {
    const hardDefault = "America/Los_Angeles";
    const guessed = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz.guess();
    const raw = settings?.settings?.admin_dashboard;
    if (!raw) return moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz.zone(guessed) ? guessed : hardDefault;
    try {
      const parsed = typeof raw === "string" ? JSON.parse(raw.trim()) : raw;
      const savedTz = parsed?.default_timezone;
      if (savedTz && moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz.zone(savedTz)) return savedTz;
      return moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz.zone(guessed) ? guessed : hardDefault;
    } catch (err) {
      console.warn("Invalid admin_dashboard JSON:", err);
      return moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz.zone(guessed) ? guessed : hardDefault;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings?.settings) {
      if (settings.settings.time_format_24_hours) setTimeFormat("HH:mm");
    }
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const timezoneFromSettings = getTimezoneFromSettings();
    setTimezone(timezoneFromSettings);
  }, [settings]);
  const getPostId = variant => {
    if (variant.indexOf("0") < variant.length - 1) {
      return {
        id: variant.slice(0, variant.indexOf("0")),
        occurrence: variant.slice(variant.indexOf("0"))
      };
    } else {
      return {
        id: variant.slice(0, variant.indexOf("0"))
      };
    }
  };
  const handleOrderSelect = id => setSelectedOrder(prev => prev.includes(id) ? prev.filter(order => order !== id) : [...prev, id]);
  const rows = (_bookings$bookings = bookings?.bookings) !== null && _bookings$bookings !== void 0 ? _bookings$bookings : [];
  const handleSelectAll = () => setSelectedOrder(prev => prev.length === rows.length ? [] : rows.map(booking => booking.id));

  // A selection only means something while its rows are on screen.
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const visible = new Set(rows.map(booking => booking.id));
    setSelectedOrder(prev => {
      const kept = prev.filter(id => visible.has(id));
      return kept.length === prev.length ? prev : kept;
    });
  }, [bookings]);
  const resendConfirmations = async ({
    id,
    occurrence,
    registrant
  }) => {
    setLoading(true);
    const registrants = registrant.includes(",") ? registrant.split(",") : [registrant];
    try {
      for (const reg of registrants) {
        await (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.resendBookingConfirmation)(id, reg, occurrence);
      }
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Emails successfully resent to the registrant");
    } catch (error) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Failed to resend emails");
    } finally {
      setLoading(false);
    }
  };
  const cancelBookings = async id => {
    setLoading(true);
    const refundBookingResponse = await (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.cancelBooking)(id).catch(() => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Failed to cancel booking");
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Booking successfully cancelled");
      let newBookings = {
        ...bookings
      };
      newBookings = {
        ...newBookings,
        bookings: newBookings.bookings.map(booking => {
          if (booking.id === id) {
            console.log(booking, id);
            return {
              ...booking,
              active_registrants: 0
            };
          }
          return {
            ...booking
          };
        })
      };
      setBookings(newBookings);
      setLoading(false);
    }
  };
  const handleSetDates = dates => {
    var _startDate, _endDate;
    let startDate = null;
    if (dates.startDate) startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz({
      year: dates.startDate.getFullYear(),
      month: dates.startDate.getMonth(),
      day: dates.startDate.getDate(),
      hour: 0,
      minute: 0,
      second: 0
    }, timezone);
    let endDate = null;
    if (dates.endDate) endDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default().tz({
      year: dates.endDate.getFullYear(),
      month: dates.endDate.getMonth(),
      day: dates.endDate.getDate(),
      hour: 23,
      minute: 59,
      second: 0
    }, timezone);
    setDates({
      startDate: (_startDate = startDate) !== null && _startDate !== void 0 ? _startDate : null,
      endDate: (_endDate = endDate) !== null && _endDate !== void 0 ? _endDate : null
    });
  };
  const fetchBookings = async ({
    page = 1
  } = {}) => {
    setLoading(true);
    const endDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()();
    let startDate = null;
    let fromDatetime = null;
    let toDatetime = null;
    if (dates.startDate === null) {
      if (selectedInterval === "12" || firstFetch.current) {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(endDate).subtract(12, "months");
      } else if (selectedInterval === "30") {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(endDate).subtract(30, "days");
      } else if (selectedInterval === "7") {
        startDate = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(endDate).subtract(7, "days");
      }
      if (!firstFetch.current && startDate) {
        fromDatetime = startDate.format("YYYY-MM-DD HH:mm:ss");
        toDatetime = endDate.format("YYYY-MM-DD HH:mm:ss");
      }
    } else if (dates.startDate && dates.endDate) {
      fromDatetime = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(dates.startDate).format("YYYY-MM-DD HH:mm:ss");
      toDatetime = moment_timezone__WEBPACK_IMPORTED_MODULE_3___default()(dates.endDate).format("YYYY-MM-DD HH:mm:ss");
    }
    if (!selectedProvider.offline && !selectedProvider.zoom) {
      setLoading(false);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Please select at least one event type to apply the filter.");
      return;
    }
    try {
      const data = await (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.fetchBookings)({
        page,
        filters: {
          dates: {
            startDate: fromDatetime,
            endDate: toDatetime
          },
          selectedInterval,
          searchString,
          price,
          selectedProvider
        }
      });
      if (data) setBookings(data);
    } catch (error) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("WP Super Events was unable to fetch bookings.");
    }
    setLoading(false);
    return {
      bookings: bookings.bookings,
      page: bookings.page_number
    };
  };
  (0,_hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__["default"])(["bookings"], () => fetchBookings({
    page: bookings?.page_number || 1
  }));

  // Apply and Reset change several pieces of filter state at once, and
  // fetchBookings reads them from its closure — calling it in the same handler
  // would fetch with the values the render started with. Bumping a counter
  // lets the effect below run once React has settled the new state.
  const [filtersRun, setFiltersRun] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const onFiltering = () => setFiltersRun(run => run + 1);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!filtersRun) return;
    fetchBookings();
  }, [filtersRun]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchBookings().finally(() => setFirstFetchDone(true));
  }, [dates, selectedInterval]);

  // The field holds what is typed; the list is refetched once typing settles.
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (localSearch === searchString) return undefined;
    const timer = setTimeout(() => setSearchString(localSearch), 400);
    return () => clearTimeout(timer);
  }, [localSearch]);
  const searchedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(searchString);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (searchedRef.current === searchString) return;
    searchedRef.current = searchString;
    fetchBookings();
  }, [searchString]);
  const handleChangeTimeInterval = newVal => setSelectedTimeInterval(newVal);
  const handlePriceChange = (newVal, attribute) => {
    const newPrice = {
      ...price
    };
    const newPriceValue = newVal.replace(".", ",");
    if (attribute === "from") newPrice.from = Number.parseFloat(newPriceValue);else newPrice.to = Number.parseFloat(newPriceValue);
    setPrice({
      ...newPrice
    });
  };
  const handleSelectProvider = provider => setSelectedProvider(prev => ({
    ...prev,
    [provider]: !prev[provider]
  }));
  const resetFilters = () => {
    setDates({
      startDate: null,
      endDate: null
    });
    setSearchString("");
    setLocalSearch("");
    setSelectedProvider({
      offline: true,
      zoom: true
    });
    setPrice({
      from: null,
      to: null
    });
    firstFetch.current = true;
  };

  // What the Filters drawer itself holds — the search and the period sit in
  // the toolbar, so they are not part of its badge.
  const drawerFilterCount = (Number.isFinite(price.from) ? 1 : 0) + (Number.isFinite(price.to) ? 1 : 0) + (selectedProvider.offline && selectedProvider.zoom ? 0 : 1);
  const isFiltersApplied = Boolean(searchString) || Boolean(dates.startDate) || drawerFilterCount > 0;
  const performBulkAction = async (actionType, ids = selectedOrder) => {
    if (!ids || ids.length === 0) return;
    setLoading(true);
    let successCount = 0;
    let failureCount = 0;
    try {
      for (const variant of ids) {
        const variantData = bookings.bookings.find(booking => booking.id === variant);
        if (!variantData) continue;
        const {
          id,
          occurrence
        } = getPostId(variantData.variant_id);
        const registrants = variantData.registrants_ids.includes(",") ? variantData.registrants_ids.split(",") : [variantData.registrants_ids];
        if (actionType !== "resend" && actionType !== "refund" && actionType !== "cancel") {
          (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Unknown action type.");
          return;
        }
        if (actionType === "refund") {
          try {
            const res = await (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.refundBooking)(variant);
            if (res.status === 200) successCount++;else failureCount++;
          } catch {
            failureCount++;
          }
        } else if (actionType === "cancel") {
          try {
            const res = await (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.cancelBooking)(variant);
            if (res.status === 200) successCount++;else failureCount++;
          } catch {
            failureCount++;
          }
        } else {
          try {
            const requests = registrants.map(registrant => (0,_utilities_bookings__WEBPACK_IMPORTED_MODULE_4__.resendBookingConfirmation)(id, registrant, occurrence));
            const responses = await Promise.allSettled(requests);
            const succeeded = responses.filter(r => r.status === "fulfilled" && r.value.status === 200).length;
            if (succeeded === registrants.length) successCount++;else failureCount++;
          } catch {
            failureCount++;
          }
        }
      }
      if (successCount > 0 && failureCount === 0) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("All actions completed successfully.");else if (successCount > 0 && failureCount > 0) (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(`${successCount} succeeded, ${failureCount} failed.`);else (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("All actions failed.");
    } finally {
      setLoading(false);
    }
  };
  const handleExport = async () => {
    let allBookings = [];
    for (let i = 1; i < bookings.page_count + 1; i++) {
      const {
        bookings,
        page
      } = await fetchBookings({
        page: i
      });
      allBookings = allBookings.concat(bookings);
    }
    exportToCSV(allBookings);
  };
  function exportToCSV(data, filename = "export.csv") {
    if (!data || data.length === 0) return;
    const selectedFields = ["id", "created_datetime", "product_name", "variant_name", "start_datetime", "timezone", "price", "quantity", "refunded_quantity", "active_registrants", "additional_registrants"];
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
      additional_registrants: "Additional Registrants"
    };
    const rows = data.map(item => {
      const row = {};
      for (const field of selectedFields) {
        if (field === "additional_registrants") {
          row[field] = Array.isArray(item.additional_registrants) ? item.additional_registrants.map(r => `${r.first_name || ""} ${r.last_name || ""} (${r.email || ""})`).join(" | ") : "";
        } else {
          var _item$field;
          row[field] = (_item$field = item[field]) !== null && _item$field !== void 0 ? _item$field : "";
        }
      }
      return row;
    });
    const headers = selectedFields.map(field => headerMap[field]);
    const csvRows = [headers.join(",")];
    for (const row of rows) {
      const line = selectedFields.map(field => `"${("" + row[field]).replace(/"/g, '""')}"`).join(",");
      csvRows.push(line);
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  // --- single-row actions ---------------------------------------------------
  // Each one runs through the same confirm + bulk path, so there is one place
  // where a refund or a cancellation can actually happen.
  const askFor = (action, ids) => setConfirming({
    action,
    ids
  });
  const runConfirmed = async () => {
    if (!confirming) return;
    const {
      action,
      ids
    } = confirming;
    setSelectedOrder(ids);
    setConfirming(null);
    await performBulkAction(action, ids);
    await fetchBookings();
  };
  const resendFor = async ids => {
    await performBulkAction("resend", ids);
  };

  // --- display options ------------------------------------------------------
  const customizeHeading = value => {
    const newHeadings = headings.map(h => h.value === value ? {
      ...h,
      visible: !h.visible
    } : h);
    setHeadings(newHeadings);
    (0,_utilities_tableHeadings__WEBPACK_IMPORTED_MODULE_5__.saveHeadings)(HEADINGS_STORAGE_KEY, newHeadings); // persist on every toggle
  };
  const displayGroups = [{
    key: "columns",
    type: "checkbox",
    title: t("Columns"),
    note: t("Which columns this list shows. Affects this page only."),
    options: headings.map(heading => ({
      value: heading.value,
      label: t(heading.label),
      checked: heading.visible,
      // Never let the last column be switched off.
      disabled: heading.visible && headings.filter(h => h.visible).length === 1
    })),
    onToggle: customizeHeading
  }];

  // --- filters drawer -------------------------------------------------------
  const filterSections = [{
    key: "price",
    title: t("Price"),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        value: (_price$from = price.from) !== null && _price$from !== void 0 ? _price$from : "",
        placeholder: t("Price from"),
        onChange: val => handlePriceChange(val, "from"),
        maxLength: 6,
        width: "100%",
        type: "number",
        step: "any",
        minValue: "0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        value: (_price$to = price.to) !== null && _price$to !== void 0 ? _price$to : "",
        placeholder: t("Price to"),
        onChange: val => handlePriceChange(val, "to"),
        maxLength: 6,
        width: "100%",
        type: "number",
        step: "any",
        minValue: "0"
      })]
    })
  }, {
    key: "provider",
    title: t("Event type"),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: t("In-person"),
        checked: selectedProvider.offline,
        onChange: () => handleSelectProvider("offline")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        label: t("Online"),
        checked: selectedProvider.zoom,
        onChange: () => handleSelectProvider("zoom")
      })]
    })
  }];
  const pagination = {
    pageNumber: (_bookings$page_number = bookings?.page_number) !== null && _bookings$page_number !== void 0 ? _bookings$page_number : 1,
    pageCount: (_bookings$page_count = bookings?.page_count) !== null && _bookings$page_count !== void 0 ? _bookings$page_count : 0,
    totalItems: (_bookings$total_recor = bookings?.total_records) !== null && _bookings$total_recor !== void 0 ? _bookings$total_recor : 0
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    withBackground: true,
    flush: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].page,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        eyebrow: "WP Super Events by ServvAI",
        title: t("Bookings"),
        description: "View and manage all event bookings in one place",
        actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_DisplayOptions__WEBPACK_IMPORTED_MODULE_12__["default"], {
            groups: displayGroups
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            type: "secondary",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__["default"], {}),
            text: t("Export"),
            disabled: rows.length === 0,
            onAction: handleExport
          })]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("div", {
          className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].divider
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].browser,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
          className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].toolbar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
            className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].toolbarTitle,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h2", {
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].heading,
              children: t("All bookings")
            }), rows.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("span", {
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].count,
              children: rows.length
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
            className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].controls,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].search,
              value: localSearch,
              placeholder: t("Search by event title"),
              onChange: setLocalSearch,
              onKeyDown: e => {
                if (e.key === "Enter") setSearchString(localSearch);
              },
              width: "100%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
              buttons: timeIntervals.map(interval => ({
                value: interval.value,
                label: t(interval.label)
              })),
              active: selectedInterval,
              onChange: handleChangeTimeInterval
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_15__["default"], {
              value: dates,
              onChange: handleSetDates,
              label: "Select dates"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Containers_FiltersDropdown__WEBPACK_IMPORTED_MODULE_17__["default"], {
              isApplied: drawerFilterCount > 0,
              appliedCount: drawerFilterCount,
              onClear: () => {
                resetFilters();
                onFiltering();
              },
              sections: filterSections,
              onApply: onFiltering
            })]
          })]
        }), !loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: firstFetchDone && rows.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
            className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].empty,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("h2", {
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].emptyTitle,
              children: isFiltersApplied ? t("No bookings match this view") : t("No bookings yet")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("p", {
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].emptyText,
              children: isFiltersApplied ? t("Try another period, clear the search, or reset the filters.") : t("Bookings appear here as soon as someone registers for one of your events.")
            }), isFiltersApplied && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              type: "secondary",
              text: t("Clear filters"),
              className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].emptyAction,
              onAction: () => {
                resetFilters();
                onFiltering();
              }
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Containers_BulkBar__WEBPACK_IMPORTED_MODULE_18__.SelectAllRow, {
              total: rows.length,
              selectedCount: selectedOrder.length,
              onToggleAll: handleSelectAll
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Containers_BulkBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
              selectedCount: selectedOrder.length,
              noun: "booking",
              onClear: () => setSelectedOrder([]),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                type: "secondary",
                size: "sm",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__["default"], {}),
                text: t("Resend"),
                onAction: () => resendFor(selectedOrder)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                type: "secondary",
                size: "sm",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__["default"], {}),
                text: t("Refund"),
                onAction: () => askFor("refund", selectedOrder)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                type: "danger-secondary",
                size: "sm",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__["default"], {}),
                text: t("Cancel"),
                onAction: () => askFor("cancel", selectedOrder)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Bookings_BookingRows__WEBPACK_IMPORTED_MODULE_22__["default"], {
              bookings: rows,
              columns: headings,
              currency: stripeCurrency,
              timeFormat: timeFormat,
              selectedIds: selectedOrder,
              onToggleSelect: handleOrderSelect,
              onResend: row => resendFor([row.id]),
              onRefund: row => askFor("refund", [row.id]),
              onCancel: row => askFor("cancel", [row.id])
            }), pagination.pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Shared_DashboardPagination__WEBPACK_IMPORTED_MODULE_21__["default"], {
              currentPage: pagination.pageNumber,
              totalPages: pagination.pageCount,
              totalRecords: pagination.totalItems,
              pageSize: 10,
              onPageChange: page => fetchBookings({
                page
              })
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_20__["default"], {
          isLoading: loading,
          customStyling: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].loader
        })]
      })]
    }), confirming && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_19__["default"], {
      size: "sm",
      title: t(CONFIRMABLE[confirming.action].title),
      description: t(CONFIRMABLE[confirming.action].description),
      onClose: () => setConfirming(null),
      footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          type: "secondary",
          text: t("Keep them"),
          onAction: () => setConfirming(null)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          type: "danger",
          text: t(CONFIRMABLE[confirming.action].action),
          onAction: runConfirmed
        })]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("ul", {
        className: _BookingsPage_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].confirmList,
        children: confirming.ids.map(id => {
          const row = rows.find(booking => booking.id === id);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("li", {
            children: ["#", id, row ? ` — ${row.product_name} (${row.email})` : ""]
          }, id);
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingsPage);

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

/***/ "./src/Components/Shared/DashboardPagination.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Shared/DashboardPagination.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DashboardPagination = ({
  currentPage = 1,
  totalPages,
  totalRecords,
  pageSize = 10,
  maxVisiblePages = 3,
  onPageChange
}) => {
  if (totalPages <= 1) return null;
  const centerPages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const pages = [];
    const delta = Math.floor(maxVisiblePages / 2);
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);
    if (currentPage <= delta + 1) {
      end = Math.min(totalPages - 1, maxVisiblePages + 1);
    }
    if (currentPage >= totalPages - delta) {
      start = Math.max(2, totalPages - maxVisiblePages);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);
  const showLeftEllipsis = centerPages.length > 0 && centerPages[0] > 2;
  const showRightEllipsis = centerPages.length > 0 && centerPages[centerPages.length - 1] < totalPages - 1;
  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);
  const goToPage = page => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "events-pagination-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: "events-pagination",
      role: "navigation",
      "aria-label": "Pagination",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--prev",
        disabled: currentPage === 1,
        onClick: () => goToPage(currentPage - 1),
        "aria-label": "Previous page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12.5 15L7.5 10L12.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "events-pagination__numbers",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === 1 ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(1),
          children: "1"
        }), showLeftEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), centerPages.map(page => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${page === currentPage ? "events-pagination__number--active" : ""}`,
          "aria-current": page === currentPage ? "page" : undefined,
          onClick: () => goToPage(page),
          children: page
        }, page)), showRightEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === totalPages ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(totalPages),
          children: totalPages
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--next",
        disabled: currentPage === totalPages,
        onClick: () => goToPage(currentPage + 1),
        "aria-label": "Next page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M7.5 15L12.5 10L7.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "events-pagination__info",
      children: ["Showing ", startRecord, "-", endRecord, " of ", totalRecords, " events"]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPagination);

/***/ }),

/***/ "./src/utilities/bookings.js":
/*!***********************************!*\
  !*** ./src/utilities/bookings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelBooking: () => (/* binding */ cancelBooking),
/* harmony export */   fetchBookings: () => (/* binding */ fetchBookings),
/* harmony export */   refundBooking: () => (/* binding */ refundBooking),
/* harmony export */   resendBookingConfirmation: () => (/* binding */ resendBookingConfirmation)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const fetchBookings = async ({
  page = 1,
  filters = {}
} = {}) => {
  const {
    dates = {},
    selectedInterval,
    searchString = "",
    price = {},
    selectedProvider = {
      offline: true,
      zoom: true
    }
  } = filters;
  let params = [];
  if (dates.startDate && dates.endDate) {
    params.push(`from_datetime=${dates.startDate}`);
    params.push(`to_datetime=${dates.endDate}`);
  }
  if (searchString.length > 0) params.push(`search=${encodeURIComponent(searchString)}`);
  if (price.from) params.push(`from_price=${price.from}`);
  if (price.to) params.push(`to_price=${price.to}`);
  if (selectedProvider && !selectedProvider.offline && !selectedProvider.zoom) {
    throw new Error("Please select at least one event type.");
  }
  if (selectedProvider && selectedProvider.offline !== selectedProvider.zoom) {
    params.push(`event_provider=${selectedProvider.offline ? "offline" : "zoom"}`);
  }
  params.push(`page=${page}`, `page_size=10`);
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/wp-json/servv-plugin/v1/bookings?${params.join("&")}`, {
    headers: headers()
  });
  return response.data;
};
const refundBooking = async id => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/bookings/${id}/refund`, null, {
    headers: headers()
  });
  return response;
};
const cancelBooking = async id => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/bookings/${id}/cancel`, null, {
    headers: headers()
  });
  return response;
};
const resendBookingConfirmation = async (eventId, registrantId, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${eventId}/registrants/${registrantId}/resend`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, null, {
    headers: headers()
  });
  return response;
};

/***/ }),

/***/ "./src/utilities/tableHeadings.js":
/*!****************************************!*\
  !*** ./src/utilities/tableHeadings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHeadings: () => (/* binding */ loadHeadings),
/* harmony export */   saveHeadings: () => (/* binding */ saveHeadings)
/* harmony export */ });
// Column visibility for the configurable tables (events, bookings). Only the
// visibility map is persisted, not the labels, so it stays small and survives
// relabelling or translation; a column added later falls back to its default.
const loadHeadings = (storageKey, defaultHeadings) => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return defaultHeadings;
    const savedMap = JSON.parse(saved); // { [value]: boolean }
    return defaultHeadings.map(h => h.value in savedMap ? {
      ...h,
      visible: savedMap[h.value]
    } : h);
  } catch {
    return defaultHeadings;
  }
};
const saveHeadings = (storageKey, updated) => {
  try {
    const savedMap = Object.fromEntries(updated.map(h => [h.value, h.visible]));
    localStorage.setItem(storageKey, JSON.stringify(savedMap));
  } catch {}
};

/***/ }),

/***/ "./src/utilities/timezones.js":
/*!************************************!*\
  !*** ./src/utilities/timezones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   timezonesList: () => (/* binding */ timezonesList)
/* harmony export */ });
const timezones = [{
  zone: "Pacific/Midway",
  gmt: "(GMT-11:00)",
  name: "Midway Island"
}, {
  zone: "US/Samoa",
  gmt: "(GMT-11:00)",
  name: "Samoa"
}, {
  zone: "US/Hawaii",
  gmt: "(GMT-10:00)",
  name: "Hawaii"
}, {
  zone: "US/Alaska",
  gmt: "(GMT-09:00)",
  name: "Alaska"
}, {
  zone: "US/Pacific",
  gmt: "(GMT-08:00)",
  name: "Pacific Time (US and Canada)"
}, {
  zone: "America/Tijuana",
  gmt: "(GMT-08:00)",
  name: "Tijuana"
}, {
  zone: "US/Arizona",
  gmt: "(GMT-07:00)",
  name: "Arizona"
}, {
  zone: "US/Mountain",
  gmt: "(GMT-07:00)",
  name: "Mountain Time (US and Canada)"
}, {
  zone: "America/Chihuahua",
  gmt: "(GMT-07:00)",
  name: "Chihuahua"
}, {
  zone: "America/Mazatlan",
  gmt: "(GMT-07:00)",
  name: "Mazatlan"
}, {
  zone: "America/Mexico_City",
  gmt: "(GMT-06:00)",
  name: "Mexico City"
}, {
  zone: "America/Monterrey",
  gmt: "(GMT-06:00)",
  name: "Monterrey"
}, {
  zone: "Canada/Saskatchewan",
  gmt: "(GMT-06:00)",
  name: "Saskatchewan"
}, {
  zone: "US/Central",
  gmt: "(GMT-06:00)",
  name: "Central Time (US and Canada)"
}, {
  zone: "US/Eastern",
  gmt: "(GMT-05:00)",
  name: "Eastern Time (US and Canada)"
}, {
  zone: "US/East-Indiana",
  gmt: "(GMT-05:00)",
  name: "Indiana (East)"
}, {
  zone: "America/Bogota",
  gmt: "(GMT-05:00)",
  name: "Bogota"
}, {
  zone: "America/Lima",
  gmt: "(GMT-05:00)",
  name: "Lima"
}, {
  zone: "America/Caracas",
  gmt: "(GMT-04:30)",
  name: "Caracas"
}, {
  zone: "Canada/Atlantic",
  gmt: "(GMT-04:00)",
  name: "Atlantic Time (Canada)"
}, {
  zone: "America/La_Paz",
  gmt: "(GMT-04:00)",
  name: "La_Paz"
}, {
  zone: "America/Santiago",
  gmt: "(GMT-04:00)",
  name: "Santiago"
}, {
  zone: "Canada/Newfoundland",
  gmt: "(GMT-03:30)",
  name: "Newfoundland"
}, {
  zone: "America/Buenos_Aires",
  gmt: "(GMT-03:00)",
  name: "Buenos Aires"
}, {
  zone: "Greenland",
  gmt: "(GMT-03:00)",
  name: "Greenland"
}, {
  zone: "Atlantic/Stanley",
  gmt: "(GMT-02:00)",
  name: "Stanley"
}, {
  zone: "Atlantic/Azores",
  gmt: "(GMT-01:00)",
  name: "Azores"
}, {
  zone: "Atlantic/Cape_Verde",
  gmt: "(GMT-01:00)",
  name: "Cape Verde Is."
}, {
  zone: "Africa/Casablanca",
  gmt: "(GMT)",
  name: "Casablanca"
}, {
  zone: "Europe/Dublin",
  gmt: "(GMT)",
  name: "Dublin"
}, {
  zone: "Europe/Lisbon",
  gmt: "(GMT)",
  name: "Libson"
}, {
  zone: "Europe/London",
  gmt: "(GMT)",
  name: "London"
}, {
  zone: "Africa/Monrovia",
  gmt: "(GMT)",
  name: "Monrovia"
}, {
  zone: "Europe/Amsterdam",
  gmt: "(GMT+01:00)",
  name: "Amsterdam"
}, {
  zone: "Europe/Belgrade",
  gmt: "(GMT+01:00)",
  name: "Belgrade"
}, {
  zone: "Europe/Berlin",
  gmt: "(GMT+01:00)",
  name: "Berlin"
}, {
  zone: "Europe/Bratislava",
  gmt: "(GMT+01:00)",
  name: "Bratislava"
}, {
  zone: "Europe/Brussels",
  gmt: "(GMT+01:00)",
  name: "Brussels"
}, {
  zone: "Europe/Budapest",
  gmt: "(GMT+01:00)",
  name: "Budapest"
}, {
  zone: "Europe/Copenhagen",
  gmt: "(GMT+01:00)",
  name: "Copenhagen"
}, {
  zone: "Europe/Ljubljana",
  gmt: "(GMT+01:00)",
  name: "Ljubljana"
}, {
  zone: "Europe/Madrid",
  gmt: "(GMT+01:00)",
  name: "Madrid"
}, {
  zone: "Europe/Paris",
  gmt: "(GMT+01:00)",
  name: "Paris"
}, {
  zone: "Europe/Prague",
  gmt: "(GMT+01:00)",
  name: "Prague"
}, {
  zone: "Europe/Rome",
  gmt: "(GMT+01:00)",
  name: "Rome"
}, {
  zone: "Europe/Sarajevo",
  gmt: "(GMT+01:00)",
  name: "Sarajevo"
}, {
  zone: "Europe/Skopje",
  gmt: "(GMT+01:00)",
  name: "Skopje"
}, {
  zone: "Europe/Stockholm",
  gmt: "(GMT+01:00)",
  name: "Stockholm"
}, {
  zone: "Europe/Vienna",
  gmt: "(GMT+01:00)",
  name: "Vienna"
}, {
  zone: "Europe/Warsaw",
  gmt: "(GMT+01:00)",
  name: "Warsaw"
}, {
  zone: "Europe/Zagreb",
  gmt: "(GMT+01:00)",
  name: "Zagreb"
}, {
  zone: "Europe/Athens",
  gmt: "(GMT+02:00)",
  name: "Athens"
}, {
  zone: "Europe/Bucharest",
  gmt: "(GMT+02:00)",
  name: "Bucharest"
}, {
  zone: "Africa/Cairo",
  gmt: "(GMT+02:00)",
  name: "Cairo"
}, {
  zone: "Africa/Harare",
  gmt: "(GMT+02:00)",
  name: "Harere"
}, {
  zone: "Europe/Helsinki",
  gmt: "(GMT+02:00)",
  name: "Helsinki"
}, {
  zone: "Europe/Istanbul",
  gmt: "(GMT+02:00)",
  name: "Istanbul"
}, {
  zone: "Asia/Jerusalem",
  gmt: "(GMT+02:00)",
  name: "Jerusalem"
}, {
  zone: "Europe/Kiev",
  gmt: "(GMT+02:00)",
  name: "Kiev"
}, {
  zone: "Europe/Minsk",
  gmt: "(GMT+02:00)",
  name: "Minsk"
}, {
  zone: "Europe/Riga",
  gmt: "(GMT+02:00)",
  name: "Riga"
}, {
  zone: "Europe/Sofia",
  gmt: "(GMT+02:00)",
  name: "Sofia"
}, {
  zone: "Europe/Tallinn",
  gmt: "(GMT+02:00)",
  name: "Tallinn"
}, {
  zone: "Europe/Vilnius",
  gmt: "(GMT+02:00)",
  name: "Vilnius"
}, {
  zone: "Asia/Baghdad",
  gmt: "(GMT+03:00)",
  name: "Baghdad"
}, {
  zone: "Asia/Kuwait",
  gmt: "(GMT+03:00)",
  name: "Kuwait"
}, {
  zone: "Africa/Nairobi",
  gmt: "(GMT+03:00)",
  name: "Nairobi"
}, {
  zone: "Asia/Riyadh",
  gmt: "(GMT+03:00)",
  name: "Riyadh"
}, {
  zone: "Asia/Tehran",
  gmt: "(GMT+03:30)",
  name: "Tehran"
}, {
  zone: "Europe/Moscow",
  gmt: "(GMT+04:00)",
  name: "Moscow"
}, {
  zone: "Asia/Baku",
  gmt: "(GMT+04:00)",
  name: "Baku"
}, {
  zone: "Europe/Volgograd",
  gmt: "(GMT+04:00)",
  name: "Volgograd"
}, {
  zone: "Asia/Muscat",
  gmt: "(GMT+04:00)",
  name: "Muscat"
}, {
  zone: "Asia/Tbilisi",
  gmt: "(GMT+04:00)",
  name: "Tbilisi"
}, {
  zone: "Asia/Yerevan",
  gmt: "(GMT+04:00)",
  name: "Yerevan"
}, {
  zone: "Asia/Kabul",
  gmt: "(GMT+04:30)",
  name: "Kabul"
}, {
  zone: "Asia/Karachi",
  gmt: "(GMT+05:00)",
  name: "Karachi"
}, {
  zone: "Asia/Tashkent",
  gmt: "(GMT+05:00)",
  name: "Tashkent"
}, {
  zone: "Asia/Kolkata",
  gmt: "(GMT+05:30)",
  name: "Kolkata"
}, {
  zone: "Asia/Kathmandu",
  gmt: "(GMT+05:45)",
  name: "Kathmandu"
}, {
  zone: "Asia/Yekaterinburg",
  gmt: "(GMT+06:00)",
  name: "Yekaterinburg"
}, {
  zone: "Asia/Almaty",
  gmt: "(GMT+06:00)",
  name: "Almaty"
}, {
  zone: "Asia/Dhaka",
  gmt: "(GMT+06:00)",
  name: "Dhaka"
}, {
  zone: "Asia/Novosibirsk",
  gmt: "(GMT+07:00)",
  name: "Novosibirsk"
}, {
  zone: "Asia/Bangkok",
  gmt: "(GMT+07:00)",
  name: "Bangkok"
}, {
  zone: "Asia/Jakarta",
  gmt: "(GMT+07:00)",
  name: "Jakarta"
}, {
  zone: "Asia/Krasnoyarsk",
  gmt: "(GMT+08:00)",
  name: "Krasnoyarsk"
}, {
  zone: "Asia/Chongqing",
  gmt: "(GMT+08:00)",
  name: "Chongqing"
}, {
  zone: "Asia/Hong_Kong",
  gmt: "(GMT+08:00)",
  name: "Hong Kong"
}, {
  zone: "Asia/Kuala_Lumpur",
  gmt: "(GMT+08:00)",
  name: "Kuala Lumpur"
}, {
  zone: "Australia/Perth",
  gmt: "(GMT+08:00)",
  name: "Perth"
}, {
  zone: "Asia/Singapore",
  gmt: "(GMT+08:00)",
  name: "Singapore"
}, {
  zone: "Asia/Taipei",
  gmt: "(GMT+08:00)",
  name: "Taipei"
}, {
  zone: "Asia/Ulaanbaatar",
  gmt: "(GMT+08:00)",
  name: "Ulaan Bataar"
}, {
  zone: "Asia/Urumqi",
  gmt: "(GMT+08:00)",
  name: "Urumqi"
}, {
  zone: "Asia/Irkutsk",
  gmt: "(GMT+09:00)",
  name: "Irkutsk"
}, {
  zone: "Asia/Seoul",
  gmt: "(GMT+09:00)",
  name: "Seoul"
}, {
  zone: "Asia/Tokyo",
  gmt: "(GMT+09:00)",
  name: "Tokyo"
}, {
  zone: "Australia/Adelaide",
  gmt: "(GMT+09:30)",
  name: "Adelaide"
}, {
  zone: "Australia/Darwin",
  gmt: "(GMT+09:30)",
  name: "Darwin"
}, {
  zone: "Asia/Yakutsk",
  gmt: "(GMT+10:00)",
  name: "Yakutsk"
}, {
  zone: "Australia/Brisbane",
  gmt: "(GMT+10:00)",
  name: "Brisbane"
}, {
  zone: "Australia/Canberra",
  gmt: "(GMT+10:00)",
  name: "Canberra"
}, {
  zone: "Pacific/Guam",
  gmt: "(GMT+10:00)",
  name: "Guam"
}, {
  zone: "Australia/Hobart",
  gmt: "(GMT+10:00)",
  name: "Hobart"
}, {
  zone: "Australia/Melbourne",
  gmt: "(GMT+10:00)",
  name: "Melbourne"
}, {
  zone: "Pacific/Port_Moresby",
  gmt: "(GMT+10:00)",
  name: "Port Moresby"
}, {
  zone: "Australia/Sydney",
  gmt: "(GMT+10:00)",
  name: "Sydney"
}, {
  zone: "Asia/Vladivostok",
  gmt: "(GMT+11:00)",
  name: "Vladivostok"
}, {
  zone: "Asia/Magadan",
  gmt: "(GMT+12:00)",
  name: "Magadan"
}, {
  zone: "Pacific/Auckland",
  gmt: "(GMT+12:00)",
  name: "Auckland"
}, {
  zone: "Pacific/Fiji",
  gmt: "(GMT+12:00)",
  name: "Fiji"
}];
const timezonesList = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Pago_Pago": "Pago Pago",
  "Pacific/Honolulu": "Hawaii",
  "America/Anchorage": "Alaska",
  "America/Vancouver": "Vancouver",
  "America/Los_Angeles": "Pacific Time (US and Canada)",
  "America/Tijuana": "Tijuana",
  "America/Edmonton": "Edmonton",
  "America/Denver": "Mountain Time (US and Canada)",
  "America/Phoenix": "Arizona",
  "America/Mazatlan": "Mazatlan",
  "America/Winnipeg": "Winnipeg",
  "America/Regina": "Saskatchewan",
  "America/Chicago": "Central Time (US and Canada)",
  "America/Mexico_City": "Mexico City",
  "America/Guatemala": "Guatemala",
  "America/El_Salvador": "El Salvador",
  "America/Managua": "Managua",
  "America/Costa_Rica": "Costa Rica",
  "America/Montreal": "Montreal",
  "America/New_York": "Eastern Time (US and Canada)",
  "America/Indianapolis": "Indiana (East)",
  "America/Panama": "Panama",
  "America/Bogota": "Bogota",
  "America/Lima": "Lima",
  "America/Halifax": "Halifax",
  "America/Puerto_Rico": "Puerto Rico",
  "America/Caracas": "Caracas",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Montevideo": "Montevideo",
  "America/Araguaina": "Brasilia",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Sao_Paulo": "Sao Paulo",
  "Atlantic/Azores": "Azores",
  "Canada/Atlantic": "Atlantic Time (Canada)",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  UTC: "Universal Time UTC",
  "Etc/Greenwich": "Greenwich Mean Time",
  "Europe/Belgrade": "Belgrade, Bratislava, Ljubljana",
  CET: "Sarajevo, Skopje, Zagreb",
  "Atlantic/Reykjavik": "Reykjavik",
  "Europe/Dublin": "Dublin",
  "Europe/London": "London",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca",
  "Africa/Nouakchott": "Nouakchott",
  "Europe/Oslo": "Oslo",
  "Europe/Copenhagen": "Copenhagen",
  "Europe/Brussels": "Brussels",
  "Europe/Berlin": "Amsterdam, Berlin, Rome, Stockholm, Vienna",
  "Europe/Helsinki": "Helsinki",
  "Europe/Amsterdam": "Amsterdam",
  "Europe/Rome": "Rome",
  "Europe/Stockholm": "Stockholm",
  "Europe/Vienna": "Vienna",
  "Europe/Luxembourg": "Luxembourg",
  "Europe/Paris": "Paris",
  "Europe/Zurich": "Zurich",
  "Europe/Madrid": "Madrid",
  "Africa/Bangui": "West Central Africa",
  "Africa/Algiers": "Algiers",
  "Africa/Tunis": "Tunis",
  "Africa/Harare": "Harare, Pretoria",
  "Africa/Nairobi": "Nairobi",
  "Europe/Warsaw": "Warsaw",
  "Europe/Prague": "Prague Bratislava",
  "Europe/Budapest": "Budapest",
  "Europe/Sofia": "Sofia",
  "Europe/Istanbul": "Istanbul",
  "Europe/Athens": "Athens",
  "Europe/Bucharest": "Bucharest",
  "Asia/Nicosia": "Nicosia",
  "Asia/Beirut": "Beirut",
  "Asia/Damascus": "Damascus",
  "Asia/Jerusalem": "Jerusalem",
  "Asia/Amman": "Amman",
  "Africa/Tripoli": "Tripoli",
  "Africa/Cairo": "Cairo",
  "Africa/Johannesburg": "Johannesburg",
  "Europe/Moscow": "Moscow",
  "Asia/Baghdad": "Baghdad",
  "Asia/Kuwait": "Kuwait",
  "Asia/Riyadh": "Riyadh",
  "Asia/Bahrain": "Bahrain",
  "Asia/Qatar": "Qatar",
  "Asia/Aden": "Aden",
  "Asia/Tehran": "Tehran",
  "Africa/Khartoum": "Khartoum",
  "Africa/Djibouti": "Djibouti",
  "Africa/Mogadishu": "Mogadishu",
  "Asia/Dubai": "Dubai",
  "Asia/Muscat": "Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Yekaterinburg",
  "Asia/Tashkent": "Islamabad, Karachi, Tashkent",
  "Asia/Calcutta": "India",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Novosibirsk": "Novosibirsk",
  "Asia/Almaty": "Almaty",
  "Asia/Dacca": "Dacca",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Bangkok": "Bangkok",
  "Asia/Saigon": "Vietnam",
  "Asia/Jakarta": "Jakarta",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Shanghai": "Beijing, Shanghai",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Taipei": "Taipei",
  "Asia/Kuala_Lumpur": "Kuala Lumpur",
  "Asia/Singapore": "Singapore",
  "Australia/Perth": "Perth",
  "Asia/Yakutsk": "Yakutsk",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Port_Moresby": "Guam, Port Moresby",
  "Australia/Brisbane": "Brisbane",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Hobart": "Hobart",
  "Asia/Magadan": "Magadan",
  SST: "Solomon Islands",
  "Pacific/Noumea": "New Caledonia",
  "Asia/Kamchatka": "Kamchatka",
  "Pacific/Fiji": "Fiji Islands, Marshall Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Asia/Kolkata": "Mumbai, Kolkata, New Delhi",
  "Europe/Kiev": "Kiev",
  "America/Tegucigalpa": "Tegucigalpa",
  "Pacific/Apia": "Independent State of Samoa"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timezones);

/***/ }),

/***/ "./src/Components/Containers/BulkBar.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/BulkBar.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"bar":"hSOmwKoK3j9LpC4zegTO","bulkSlideUp":"nLugcsMhaMgnxdZdNyQP","count":"cFNhdYdN4vSMrwAzvzxg","spacer":"bMguCiUk04seVwuAYKch","selectAll":"zpnccbY2H2DR1YORfn2k","insetRows":"IhnGQdFgJHjdgXZKde94","insetRail":"OuFAjert3JBScQrl2ydT"});

/***/ }),

/***/ "./src/Components/Containers/Dropdown.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Containers/Dropdown.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"Q6YwFze7pNwAmhdBzAGO","menu":"lY9gKiKMaPORXMiAcGOK","surface":"seqzcz7VZqZZnhfbs0wM"});

/***/ }),

/***/ "./src/Components/Containers/FiltersDropdown.module.scss":
/*!***************************************************************!*\
  !*** ./src/Components/Containers/FiltersDropdown.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"RlT1Xtis5zbaRX8M8bED","button":"uyoMBsQSnYRimRfD81BR","icon":"lyuOMgJ_9G_5jJ2g84cJ","count":"E4zV9EYb7rKTejTGAlXB"});

/***/ }),

/***/ "./src/Components/Containers/FiltersPanel.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Containers/FiltersPanel.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"VCQ5pQIxJ74tC1KqJN2w","svFade":"_rK8K_ZqmgLXXY9mI9wt","panel":"S_Rgztv7nPG8VW70L_BV","svSlide":"qssOgOQwiJUeXOGNvO4N","header":"iiikJ8cvccVepejpihQj","title":"i5foI8yjMamDdxzYe9J7","subtitle":"NPeModFpo5fiWLQxR9Zb","close":"bb1Desn73lB8lfmxy97N","body":"Wum2UVfv7Cdw4PYhgUVp","section":"aBRbCAC8IqMyJHti_JMl","sectionTitle":"gJaXcOWihRld0_6pbzPj","divider":"BiMee3DzjBg_sSqq58P3","chips":"GDjKck5jxUGaPhnIt7rQ","chip":"Qa20WeEFHlQd8EEH8gNu","chipActive":"wXotonMqGn3N4L2bTcx_","dot":"l4E4_Lda1g0OlTL4tTLv","dotOffline":"jLE6NngEI8IV3oHtZKNN","dotZoom":"Zn0XaLg7M4Fpn4qEXKF2","fields":"ORt9s_jPUlmsf2VyMngr","fieldLabel":"W8UyDQiuDLJudSWBYDk1","emptyGroups":"UruvpkqAToQDSG7KGlmx","footer":"CmtERZXx44Ct5MCZjux1"});

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

/***/ "./src/Components/Controls/CalendarInline.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/CalendarInline.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"surface":"auHDDkDXjHxTPLfjeqp2"});

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

/***/ "./src/Components/Controls/DisplayOptions.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/DisplayOptions.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"lPGroU3OVaxIG4XQBEWX","pop":"JnafPR5HtTIoCbFYeekp","group":"YtEmvYvJAMyiIatP5ges","title":"EuQAHxDBOTE2wWxpdq9R","note":"DCyXNKx34VbyupoHs1wd","checks":"_f7wUWVYivOieYM3PK50","opt":"iUFbBqUzTHAeKSMW4mYh","optActive":"D4C_3dwPWffDAkcCtwIi","mark":"RhIpaAPRJDNOuz3yxnZl","label":"dZXeKYOIEzlsnTdD87c_","hint":"rlatAKPgLNpeU9LZxw98"});

/***/ }),

/***/ "./src/Components/Controls/NewButtonGroup.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"JYs_3UJOiQFZ5_Ezkeeo","wrapperFull":"UAo90UATGeQRmc30vP33","title":"UjbXHfOe0TBrHLwf0Knb","track":"mAjfcVBL7MyaMYdJ9cWA","segment":"t0D_ZPrlgfZLrhryiCAp","active":"Wb0ziMZTJjqXvYgnqtYh","inactive":"XoWoUSevPmu1zPubCh1_","trackFull":"TZTstZOXbFiFgIOfEQ8q","iconOnly":"DpB4oocu7lvFMLpQ5Qhs","compact":"px78WAZRdXjUlT8FfGQ6","icon":"P7ggfyTePFEQFoR84lEO","text":"c28p99_lcFX9oVKhjAST"});

/***/ }),

/***/ "./src/Components/Controls/NewDatePickerControl.module.scss":
/*!******************************************************************!*\
  !*** ./src/Components/Controls/NewDatePickerControl.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"HwtSSogopbnUP9_7iCDB","button":"F2l5K1tOxIJTh0jK3Kpp","field":"_m3eRE8MaRxi1n_fwL05","icon":"x9Ei7o54rk9kgx3hWQh3","label":"GHYx3uCSPULDwTUL_kND","block":"due974qaf_ShRcdQYcxi"});

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

/***/ "./src/Components/Controls/NewSelectControl.module.scss":
/*!**************************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"Rn5YIp3pNNjfTZfs0Hun","label":"tILluilS7Kg08Ty_wuDz","control":"i0ovci9B8ZljxNo0kHsG","disabled":"PWKaKx8kbAa85Q7B8UNO","native":"_cngarf9_pEgPKjdzZgR","caret":"YeLk6FzAtgYmHZ3hiWy5","icon":"WIeIIcBBdl2AgJCO8Yws"});

/***/ }),

/***/ "./src/Components/Controls/PageActionButton.module.scss":
/*!**************************************************************!*\
  !*** ./src/Components/Controls/PageActionButton.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"KdySr5oFULfrhKhic35V","primary":"NU3RVqc5Fk7DJ5c4GHf_","secondary":"B48RwPm9xmg1M2dE2g6Q","danger":"q2iOAa3m1ACyQeXOmJaO","dangerSecondary":"YQXykqk_8YtO85727teT","ghost":"fxXHJtT4abc9Wa4LMvVL","dangerGhost":"pY19HOSltbDU49q6SaED","md":"t0fnm1wSsZTfyQQHuzNt","sm":"_Da3u_DsP7V7Jd4Z4lzg","xs":"pEHFbNwftcp4Oei9RRxp","fullWidth":"UyW29jrRG901Y4cS7AHm","iconOnly":"DmgZjtNgpAg3vfeKCEZw","icon":"M_1pjyLi4tiOcq2_oiwe","label":"lcGbrWicMbKyunggF77J"});

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

/***/ "./src/Components/Pages/Bookings/BookingRows.module.scss":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/Bookings/BookingRows.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"list":"PkcUGXTq9X4fs_HQgfID","head":"llsbPtumTdgXsVHlbyAA","row":"v7rGz2RRcLLCCzIfjwHC","muted":"i_qC5iGGKtqutGcFqfUJ","picked":"ewxxPxbDhoWfOaeo_33S","pick":"lxWgzuujFNK6Tzg8mIXK","strong":"pHZz5dsNmK3nZbmRRusm","title":"KM1ukraOSMOE54YMt8EA","text":"QJakbZa14NNRoLYrZWSB","sub":"tNGJgEtRbdtmaYiN77Tm","money":"FjGtPwUImqemaK0Yxduf","free":"qrMs4mHSQScBPGutYsJs","status":"kdqMrc4WRgNic_7uaf29","statusActive":"mjlds6JKDGDpjz1hDf1X","statusRefunded":"BVIfoxJxn5tkE3ap3yGF","statusCanceled":"g1V1qqpC0JwaSpW7O8cg","dot":"UftJ3HYwMLjv8vmLoe09","dotActive":"O_HqUTRMvJ9UUFIbCGks","dotRefunded":"MLN33YuqyJcFl7dXuA9A","dotCanceled":"A57InzGiIEHuvCvV8ArF","actions":"cVrAcM8kWRBFXASTFvAr","action":"Q39DG8D3I01AHPlYA5u5","actionDanger":"BEEMzboM0GEJfukQIKjP","cellLabel":"ruAW6taAyCisZ47twvLM","eventCell":"sxGDfm1txaOoRGiFxyWW","payment":"MTmwICrgk_atVIxYb6GL","compactDates":"_NnvCfEtv8lnv4N2k_S4","compactDatesHeading":"R6T5lkYyl4hbFJppVx5U","mergedColumn":"WbeUaURIoXNw7w2u98yy","regularDates":"ZYLLwkls21s5vBBcx8zW","dateLabel":"Rhlw7HxuEiIw_cz2qrOw","dateLine":"yWoXu3StIvZii6qT304Q","dateTime":"nKzX7zlnzG6GVJ0wW2U3"});

/***/ }),

/***/ "./src/Components/Pages/BookingsPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/BookingsPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"GCrVU9PGOZrjTsVRHVSM","divider":"lEgYDreg7q8WDLUP3whd","browser":"QTexp0wf48BWOU2Lieqc","toolbar":"MNRWAUVQWnHmirIZQfPG","toolbarTitle":"TqGKLSeGoDeqWkptKcPF","heading":"EIkRzcofXDWapSsKWrml","count":"gSJujukjXqZpvB83rkDe","controls":"CJB11eqerNkhMNU9ewQN","search":"PfIL_7M7U8MkO3bNd88G","loader":"d3QjGHZxXEOww5voIDKL","empty":"BzU68LbOJRDrlmIwyWhM","emptyTitle":"JOKrbRouL6gjP5Gmxr1C","emptyText":"ONzrMcEfDFl1BGgZuCwf","emptyAction":"gCpWxBiGhLWNDY2sUJPU","confirmList":"LPqkCPGzPKMl99LAgnE0"});

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

/***/ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownOnSquareStackIcon.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ArrowDownOnSquareStackIcon.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowDownOnSquareStackIcon({
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
    d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownOnSquareStackIcon);
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

/***/ "./node_modules/@heroicons/react/24/outline/esm/WalletIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/WalletIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function WalletIcon({
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
    d: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(WalletIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function XCircleIcon({
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
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_BookingsPage_jsx.js.map?ver=b0c701ad1364c7cf39fe