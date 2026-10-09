"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_CalendarPage_jsx"],{

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



// The page shell from the design reference: a padded frame around a centred
// 1180px column whose children are spaced 24px apart.
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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
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

/***/ "./src/Components/Pages/CalendarPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/CalendarPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_FiltersDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/FiltersDropdown */ "./src/Components/Containers/FiltersDropdown.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Events_EventCalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Events/EventCalendar */ "./src/Components/Pages/Events/EventCalendar.jsx");
/* harmony import */ var _CalendarPage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CalendarPage.module.scss */ "./src/Components/Pages/CalendarPage.module.scss");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Events/useEventsLogicMerged */ "./src/Components/Pages/Events/useEventsLogicMerged.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const EventsCalendarPage = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_9__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_9__.useServvStore)(s => s.filtersList);
  const zoomAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_9__.useServvStore)(s => s.zoomAccount);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  const {
    mergedList,
    mergedLoading,
    handleSetDates,
    selectedFilters,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied
  } = (0,_Events_useEventsLogicMerged__WEBPACK_IMPORTED_MODULE_10__.useEventsLogic)(settings, filtersList, zoomAccount);
  const [activePopover, setActivePopover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [popoverEvent, setPopoverEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [popoverPos, setPopoverPos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const popoverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [queryValue, setQueryValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!activePopover) return;
    const handleClickOutside = e => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
        setPopoverEvent(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePopover]);
  const filteredEvents = mergedList.filter(event => queryValue ? event.title?.toLowerCase().includes(queryValue.toLowerCase()) : true);
  const getMeetingURL = postId => {
    fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => open(post.link, "_blank")).catch(e => console.error(e));
  };
  const handleOpenEvent = meeting => {
    const pathType = meeting.type === "Zoom" ? "zoom" : "offline";
    let url = `/events/${pathType}/${meeting.id}`;
    if (meeting.occurrence_id) url += `?occurrence_id=${meeting.occurrence_id}`;
    if (meeting.registrants_view && !meeting.occurrence_id) url += `?registrants=true`;else if (meeting.registrants_view && meeting.occurrence_id) url += `&registrants=true`;
    navigate(url, {
      state: {
        from: location.pathname
      }
    });
  };
  const handleEventClick = (e, event) => {
    var _event$occurrence_id;
    const id = (_event$occurrence_id = event.occurrence_id) !== null && _event$occurrence_id !== void 0 ? _event$occurrence_id : event.id;
    if (activePopover === id) {
      setActivePopover(null);
      setPopoverEvent(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPos({
      x: Math.max(8, Math.min(rect.left, window.innerWidth - 320)),
      y: rect.bottom + 4
    });
    setActivePopover(id);
    setPopoverEvent(event);
  };
  const renderEventPopover = () => {
    if (!activePopover || !popoverEvent) return null;
    const event = popoverEvent;
    const isOneTime = event.recurrence === "One-time";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      ref: popoverRef,
      className: "cal-popover bg-white border border-gray-200 rounded-xl shadow-lg p-4",
      style: {
        top: popoverPos.y,
        left: popoverPos.x
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "flex justify-between items-start mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "font-semibold text-sm cursor-pointer hover:text-purple-600 leading-snug pr-2",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id
          }),
          children: event.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
          onClick: () => {
            setActivePopover(null);
            setPopoverEvent(null);
          },
          type: "button",
          "aria-label": t("Close event details"),
          className: "text-gray-400 hover:text-gray-600 flex-shrink-0 text-base leading-none",
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "text-xs text-gray-500 mb-3 flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("path", {
            d: "M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5S14.5 11.59 14.5 8 11.59 1.5 8 1.5zm.5 7H5.5V7h2V4.5h1V8.5z",
            fill: "currentColor"
          })
        }), event.time]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "mb-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: `inline-flex items-center text-xs px-2 py-1 rounded-full font-medium ${isOneTime ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`,
          children: event.recurrence
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "flex gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
          className: "event-action-btn view",
          title: "View event",
          onClick: () => getMeetingURL(event.post_id),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "event-action-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
          className: "event-action-btn edit",
          title: "View registrants",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id,
            registrants_view: true
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__["default"], {
            className: "event-action-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
          className: "event-action-btn edit",
          title: "Edit event",
          onClick: () => handleOpenEvent({
            id: event.post_id,
            type: event.type,
            occurrence_id: event.occurrence_id
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "event-action-icon"
          })
        })]
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withBackground: true,
    flush: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _CalendarPage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].page,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        eyebrow: "WP Super Events by ServvAI",
        title: t("Events Calendar"),
        description: t("Plan your events by month, week, or day.")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: _CalendarPage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].divider
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: _CalendarPage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].toolbar,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          placeholder: t("Search events by name"),
          value: queryValue,
          onChange: setQueryValue
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_FiltersDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
          filtersList: filtersList,
          selectedFilters: selectedFilters,
          onSelect: handleFilterSelect,
          onClear: resetFilters,
          isApplied: isFiltersApplied()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Events_EventCalendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        events: filteredEvents,
        loading: mergedLoading,
        onRangeChange: handleSetDates,
        onEventClick: handleEventClick
      })]
    }), renderEventPopover()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsCalendarPage);

/***/ }),

/***/ "./src/Components/Pages/Events/EventCalendar.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/Events/EventCalendar.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventCalendar.module.scss */ "./src/Components/Pages/Events/EventCalendar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








// The calendar view of the events list.
//
// Unlike the other views it does not read the range the toolbar picked — it
// OWNS the range: whatever month, week or day is on screen is handed back
// through `onRangeChange`, which refetches the list for exactly that window.

const PERIODS = [{
  value: "month",
  label: "Month"
}, {
  value: "week",
  label: "Week"
}, {
  value: "day",
  label: "Day"
}];
const rangeFor = (date, period) => {
  if (period === "week") return {
    startDate: date.clone().startOf("week"),
    endDate: date.clone().endOf("week")
  };
  if (period === "day") return {
    startDate: date.clone().startOf("day"),
    endDate: date.clone().endOf("day")
  };
  return {
    startDate: date.clone().startOf("month").startOf("week"),
    endDate: date.clone().endOf("month").endOf("week")
  };
};
const daysFor = (date, period) => {
  if (period === "day") return [{
    date: date.clone(),
    outside: false
  }];
  if (period === "week") {
    const start = date.clone().startOf("week");
    return Array.from({
      length: 7
    }, (_, i) => ({
      date: start.clone().add(i, "day"),
      outside: false
    }));
  }
  const {
    startDate,
    endDate
  } = rangeFor(date, "month");
  const days = [];
  const cursor = startDate.clone();
  while (cursor.isSameOrBefore(endDate, "day")) {
    days.push({
      date: cursor.clone(),
      outside: cursor.month() !== date.month()
    });
    cursor.add(1, "day");
  }
  return days;
};
const EventCalendar = ({
  events = [],
  loading = false,
  onOpen = () => {},
  onRangeChange,
  onEventClick
}) => {
  const [cursor, setCursor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => moment__WEBPACK_IMPORTED_MODULE_1___default()());
  const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => window.innerWidth < 768 ? "day" : "month");
  const scheduleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const rows = scheduleRef.current?.querySelectorAll(`.${_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hourRow}`);
    if (rows?.[8]) scheduleRef.current.scrollTop = rows[8].offsetTop - rows[0].offsetTop;
  }, [period, cursor.valueOf()]);

  // Whatever is on screen decides what is fetched.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onRangeChange?.(rangeFor(cursor, period));
  }, [cursor.valueOf(), period]);
  const days = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => daysFor(cursor, period), [cursor, period]);
  const byDay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const map = new Map();
    events.forEach(event => {
      if (!event._sortKey) return;
      const key = moment__WEBPACK_IMPORTED_MODULE_1___default()(event._sortKey).format("YYYY-MM-DD");
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(event);
    });
    return map;
  }, [events]);
  const step = direction => setCursor(prev => prev.clone().add(direction, period === "month" ? "month" : period));
  const title = () => {
    if (period === "day") return cursor.format("DD MMM YYYY");
    if (period === "week") return `${cursor.clone().startOf("week").format("DD MMM")} – ${cursor.clone().endOf("week").format("DD MMM YYYY")}`;
    return cursor.format("MMMM YYYY");
  };
  const renderEvent = (event, detailed = false) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
    type: "button",
    title: `${event.time || ""} · ${event.title}`,
    className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chip, detailed ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].eventCard : "", event.status === "Past" ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chipPast : event.type === "Zoom" ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chipOnline : _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chipOffline].join(" "),
    onClick: e => onEventClick ? onEventClick(e, event) : onOpen((0,_utilities_events__WEBPACK_IMPORTED_MODULE_4__.eventRoutePayload)(event)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].eventTitle,
      children: event.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
      className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].eventMeta,
      children: [event.time, detailed && `${event.time ? " · " : ""}${t(event.type === "Zoom" ? "Online" : "In person")}`]
    })]
  }, `${event.type}-${event.id}-${event.occurrence_id || ""}`);
  const hourOf = event => {
    const time = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.time || "", ["hh:mm a", "HH:mm"], true);
    return time.isValid() ? time.hour() : moment__WEBPACK_IMPORTED_MODULE_1___default()(event._sortKey).hour();
  };
  const dayHeading = date => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dateHeading,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      children: date.format("ddd")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dayNumber, date.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), "day") ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].today : ""].join(" "),
      children: date.date()
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].calendar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].nav,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].navButton,
          "aria-label": t("Previous"),
          onClick: () => step(-1),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title,
          children: title()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].navButton,
          "aria-label": t("Next"),
          onClick: () => step(1),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "ghost",
          size: "sm",
          text: t("Today"),
          onAction: () => setCursor(moment__WEBPACK_IMPORTED_MODULE_1___default()())
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        buttons: PERIODS.map(item => ({
          value: item.value,
          label: t(item.label)
        })),
        active: period,
        onChange: setPeriod,
        ariaLabel: t("Calendar period")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].legend,
      "aria-label": t("Event formats"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].offlineDot
        }), t("In person")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].onlineDot
        }), t("Online")]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sheet, loading ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].busy : ""].join(" "),
      "aria-busy": loading,
      children: [period === "month" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].monthGrid,
        children: [moment__WEBPACK_IMPORTED_MODULE_1___default().weekdaysShort().map(day => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].weekday,
          children: day
        }, day)), days.map(({
          date,
          outside
        }) => {
          const key = date.format("YYYY-MM-DD");
          const dayEvents = byDay.get(key) || [];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].day, outside ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].outside : ""].join(" "),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dayTop,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("time", {
                dateTime: key,
                className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dayNumber, date.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), "day") ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].today : ""].join(" "),
                children: date.date()
              }), !!dayEvents.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dayCount,
                children: dayEvents.length
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].events,
              children: dayEvents.map(event => renderEvent(event))
            })]
          }, key);
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        ref: scheduleRef,
        className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].scheduleScroll,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: [_EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].schedule, period === "week" ? _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].weekSchedule : _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].daySchedule].join(" "),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].scheduleHeader,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].timeHeading,
              children: t("Time")
            }), days.map(({
              date
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].weekday,
              children: dayHeading(date)
            }, date.format("YYYY-MM-DD")))]
          }), Array.from({
            length: 24
          }, (_, hour) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hourRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("time", {
              className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hourLabel,
              children: moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").hour(hour).format("h A")
            }), days.map(({
              date
            }) => {
              const key = date.format("YYYY-MM-DD");
              const events = (byDay.get(key) || []).filter(event => hourOf(event) === hour);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hourCell,
                children: events.map(event => renderEvent(event, true))
              }, key);
            })]
          }, hour))]
        })
      }), !loading && days.every(({
        date
      }) => !byDay.get(date.format("YYYY-MM-DD"))?.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: _EventCalendar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dayEmpty,
        role: "status",
        children: t("No events in this period")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCalendar);

/***/ }),

/***/ "./src/Components/Pages/Events/useEventsLogicMerged.js":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Events/useEventsLogicMerged.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsLogic: () => (/* binding */ useEventsLogic)
/* harmony export */ });
/* harmony import */ var _utilities_requestCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/requestCache */ "./src/utilities/requestCache.js");
/* harmony import */ var _hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCacheRefresh */ "./src/hooks/useCacheRefresh.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");










const useEventsLogic = (settings, filtersList, zoomAccount) => {
  const PAGE_SIZE = 10;
  const isZoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.zoomConnected);
  const accountsSynced = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.accountsSynced);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const syncAccountsAfterEvents = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.syncAccountsAfterEvents);
  const syncFiltersFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.syncFiltersFromServer);
  const setDatePreset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(1);
  // =====================================================================
  // STATE
  // =====================================================================
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [firstFetchDone, setFirstFetchDone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [selectedEvents, setSelectedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [isPast, setIsPast] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  // A calendar shows a window of time, not a page of results: while this is on
  // the merged fetch asks for everything inside the date range instead of one
  // PAGE_SIZE page, or a busy month would silently stop at ten events.
  const [wholeRange, setWholeRange] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const WHOLE_RANGE_SIZE = 200;
  const [eventType, setEventType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
  const [dateSelected, setDateSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    startDate: null,
    endDate: null
  });
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [selectedFilters, setSelectedFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [meetingsList, setMeetingsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [eventOccurrencess, setEventOccurrencess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [occurrencesPagination, setOccurrencesPagination] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [selectedEventForOccurrences, setSelectedEventForOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [mergedList, setMergedList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [mergedPagination, setMergedPagination] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [mergedLoading, setMergedLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("events");
  const [selectedEvent, setSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [selectedOccurrence, setSelectedOccurrence] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    meeting: {},
    product: {},
    notifications: {},
    tickets: []
  });
  const [timeFormat, setTimeFormat] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("hh:mm a");
  const [timezone, setTimezone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("US/Pacific");
  const [showError, setShowError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  // =====================================================================
  // HELPERS
  // =====================================================================

  const getFilteringParameterName = type => {
    switch (type) {
      case "locations":
        return "location_id";
      case "languages":
        return "language_id";
      case "categories":
        return "category_id";
      case "members":
        return "member_id";
      default:
        return null;
    }
  };
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_6__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_6__.timezonesList[zone]
  })), []);
  const normalizeDate = d => {
    if (!d) return null;
    if (moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().isMoment(d)) return d;
    if (d instanceof Date) return moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(d);
    return null;
  };
  const resetFilters = () => {
    setSearchString("");
    setDates({
      startDate: null,
      endDate: null
    });
    setSelectedFilters({});
  };
  const isFiltersApplied = () => {
    if (searchString.length > 0) return true;
    if (dates.startDate && dateSelected) return true;
    return Object.values(selectedFilters).some(arr => arr.length > 0);
  };
  const handleFilterSelect = (filter, id) => {
    setSelectedFilters(prev => {
      const updated = {
        ...prev
      };
      if (!updated[filter]) {
        updated[filter] = [id];
      } else if (updated[filter].includes(id)) {
        updated[filter] = updated[filter].filter(i => i !== id);
      } else {
        updated[filter].push(id);
      }
      return updated;
    });
  };
  const handleEventChange = newAttr => {
    setAttributes(prev => ({
      ...prev,
      ...newAttr
    }));
  };

  // =====================================================================
  // DATE HELPERS
  // =====================================================================

  const handleSetDates = (dates, isDefault) => {
    const start = normalizeDate(dates.startDate);
    const end = normalizeDate(dates.endDate);
    const startDate = start ? moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz({
      year: start.year(),
      month: start.month(),
      day: start.date(),
      hour: 0,
      minute: 0,
      second: 0
    }, timezone.id) : null;
    const endDate = end ? moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz({
      year: end.year(),
      month: end.month(),
      day: end.date(),
      hour: 23,
      minute: 59,
      second: 0
    }, timezone.id) : null;
    if ((startDate || endDate) && setDatePreset.current > 1) {
      setDateSelected(true);
    } else if (!startDate && !endDate) {
      setDateSelected(false);
    }
    setDates({
      startDate,
      endDate
    });
  };

  // A range preset is the window AND which side of now it is on. Both have to
  // land in one render: `applyDatePreset` fetches immediately with whatever
  // `isPast` the closure captured, so flipping to Past through it would fire a
  // request with the old flag and race the corrected one. This only sets
  // state — the FILTER CHANGES effect below sees both and fetches once.
  const applyRangePreset = ({
    past = false,
    startDate = null,
    endDate = null
  }) => {
    setIsPast(past);
    setDatePreset.current = 2;
    handleSetDates({
      startDate,
      endDate
    });
  };
  const applyDatePreset = dates => {
    handleSetDates(dates);
    setDatePreset.current = 2;
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: searchString,
        datesObj: {
          startDate: dates.startDate,
          endDate: dates.endDate
        },
        filtersObj: selectedFilters,
        page: 1
      });
    }
  };

  // =====================================================================
  // SEARCH
  // =====================================================================

  const handleSearchSubmit = value => {
    setSearchString(value);
    if (eventType === "all") {
      getMergedEventsList({
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    } else {
      getEventsList({
        type: eventType,
        is_Past: isPast,
        search: value,
        datesObj: dates,
        filtersObj: selectedFilters
      });
    }
  };

  // =====================================================================
  // NAVIGATION
  // =====================================================================

  const handleOpenEvent = selected => {
    const {
      id,
      occurrence_id,
      type
    } = selected;
    const pathType = type === "Zoom" ? "zoom" : eventType === "all" ? "offline" : eventType;
    if (occurrence_id) {
      navigate(`/events/${pathType}/${id}?occ=${occurrence_id}`);
    } else {
      navigate(`/events/${pathType}/${id}`);
    }
  };

  // =====================================================================
  // URL BUILDER
  // =====================================================================

  const buildEventsUrl = ({
    type,
    page,
    pageSize = PAGE_SIZE,
    is_Past,
    search,
    datesObj,
    filtersObj
  }) => {
    let url = `/wp-json/servv-plugin/v1/events/${type}?page_size=${pageSize}&page=${page}&without_occurrences=true`;
    if (!is_Past && search) url += `&search=${search}`;
    if (!is_Past && datesObj?.startDate && datesObj?.endDate) {
      url += `&start_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(datesObj.startDate).format("YY-MM-DD HH:mm:ss")}` + `&end_datetime=${moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(datesObj.endDate).format("YY-MM-DD HH:mm:ss")}`;
    }
    if (!is_Past && filtersObj) {
      Object.entries(filtersObj).forEach(([group, ids]) => {
        const param = getFilteringParameterName(group);
        if (!param) return;
        ids.forEach(id => url += `&${param}=${id}`);
      });
    }
    if (is_Past) url += `&is_past=1`;
    return url;
  };

  // =====================================================================
  // ROW MAPPER
  // =====================================================================

  const mapEventRows = (meetings, type, is_Past) => (meetings || []).map(m => {
    const dt = m.start_time ? moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz(m.start_time, m.timezone) : null;
    return {
      id: m.id,
      occurrence_id: m.occurrence_id,
      title: m.topic || "(No title)",
      post_id: m.shop_post_object_id,
      date: dt ? dt.format("MMM DD, YYYY") : null,
      time: dt ? dt.format("hh:mm a") : null,
      _sortKey: dt ? dt.valueOf() : 0,
      timezone: m.timezone,
      location: m.location || "",
      type: type === "offline" ? "Event" : "Zoom",
      recurrence: m.type === 2 && type === "offline" || m.type === 8 && type === "zoom" ? "Recurring" : "One-time",
      status: is_Past ? "Past" : m.is_hidden ? "Unlisted" : "On sale"
    };
  });

  // =====================================================================
  // MAIN FETCH — SINGLE TYPE (offline | zoom)
  // =====================================================================

  const syncedAfterEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  // True while the loading state is deliberately held for the zoom answer.
  const awaitingZoomRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  stateRef.current = {
    eventType,
    isPast,
    wholeRange,
    searchString,
    dates,
    selectedFilters,
    settings,
    isZoomConnected,
    accountsSynced
  };
  const getEventsList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ({
    page = 1,
    type,
    is_Past,
    search,
    datesObj,
    filtersObj
  } = {}) => {
    var _type, _is_Past, _search, _datesObj, _filtersObj;
    const s = stateRef.current;
    type = (_type = type) !== null && _type !== void 0 ? _type : s.eventType;
    is_Past = (_is_Past = is_Past) !== null && _is_Past !== void 0 ? _is_Past : s.isPast;
    search = (_search = search) !== null && _search !== void 0 ? _search : s.searchString;
    datesObj = (_datesObj = datesObj) !== null && _datesObj !== void 0 ? _datesObj : s.dates;
    filtersObj = (_filtersObj = filtersObj) !== null && _filtersObj !== void 0 ? _filtersObj : s.selectedFilters;
    if (!s.settings) return;
    setLoading(true);
    try {
      const url = buildEventsUrl({
        type,
        page,
        is_Past,
        search,
        datesObj,
        filtersObj
      });
      const res = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = mapEventRows(res.data.meetings, type, is_Past);
      setMeetingsList(rows);
      setFirstFetchDone(true);
      setPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("Error fetching events");
    } finally {
      setFirstFetchDone(true);
      setLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // MERGED FETCH — offline always, zoom only if isZoomConnected
  // =====================================================================

  const getMergedEventsList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ({
    page = 1,
    is_Past,
    search,
    datesObj,
    filtersObj,
    pageSize
  } = {}) => {
    var _is_Past2, _search2, _datesObj2, _filtersObj2;
    const s = stateRef.current;
    is_Past = (_is_Past2 = is_Past) !== null && _is_Past2 !== void 0 ? _is_Past2 : s.isPast;
    search = (_search2 = search) !== null && _search2 !== void 0 ? _search2 : s.searchString;
    datesObj = (_datesObj2 = datesObj) !== null && _datesObj2 !== void 0 ? _datesObj2 : s.dates;
    filtersObj = (_filtersObj2 = filtersObj) !== null && _filtersObj2 !== void 0 ? _filtersObj2 : s.selectedFilters;
    if (!s.settings) return;
    const version = (0,_utilities_requestCache__WEBPACK_IMPORTED_MODULE_0__.resourceVersion)("events");
    setMergedLoading(true);
    const headers = {
      "X-WP-Nonce": servvData.nonce
    };
    // The zoom connection is only answered by the account sync that runs
    // after the first fetch, so this pass may be offline-only merely because
    // the answer has not arrived yet. If zoom turns out to be connected the
    // effect below fetches again and re-sorts the list, so the loading state
    // is held until then instead of painting offline events twice.
    const zoomPassMayFollow = !s.accountsSynced && !s.isZoomConnected;

    // Whole-range mode asks both endpoints for the full window, so there is
    // nothing to balance between them and nothing to page through.
    const unpaged = Boolean(pageSize);
    const TARGET = pageSize !== null && pageSize !== void 0 ? pageSize : PAGE_SIZE; // 10 total
    const ITEMS_PER_TYPE = unpaged ? TARGET : 5;
    try {
      var _offlineRes$data$meet, _zoomRes$data$meeting, _offlineRes$data$tota, _zoomRes$data$total_r;
      // ── STEP 1: fetch from both endpoints ─────────────────────────────────
      // if zoom not connected, fetch full TARGET from offline right away
      const offlinePageSize = s.isZoomConnected ? ITEMS_PER_TYPE : TARGET;
      const [offlineRes, zoomRes] = await Promise.all([_utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
        type: "offline",
        page,
        pageSize: offlinePageSize,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }), s.isZoomConnected ? _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
        type: "zoom",
        page,
        pageSize: ITEMS_PER_TYPE,
        is_Past,
        search,
        datesObj,
        filtersObj
      }), {
        headers
      }) : Promise.resolve(null)]);
      let offlineMeetings = (_offlineRes$data$meet = offlineRes.data.meetings) !== null && _offlineRes$data$meet !== void 0 ? _offlineRes$data$meet : [];
      let zoomMeetings = zoomRes ? (_zoomRes$data$meeting = zoomRes.data.meetings) !== null && _zoomRes$data$meeting !== void 0 ? _zoomRes$data$meeting : [] : [];
      const offlineTotal = (_offlineRes$data$tota = offlineRes.data.total_records) !== null && _offlineRes$data$tota !== void 0 ? _offlineRes$data$tota : 0;
      const zoomTotal = zoomRes ? (_zoomRes$data$total_r = zoomRes.data.total_records) !== null && _zoomRes$data$total_r !== void 0 ? _zoomRes$data$total_r : 0 : 0;

      // ── STEP 2: balance — only needed when zoom is connected ───────────────
      if (s.isZoomConnected && !unpaged) {
        const offlineGot = offlineMeetings.length;
        const zoomGot = zoomMeetings.length;
        const deficit = TARGET - (offlineGot + zoomGot);
        if (deficit > 0) {
          if (offlineGot < ITEMS_PER_TYPE && zoomGot >= ITEMS_PER_TYPE) {
            var _extraZoomRes$data$me;
            // offline ran short, top up from zoom
            const extraZoomRes = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
              type: "zoom",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            zoomMeetings = (_extraZoomRes$data$me = extraZoomRes.data.meetings) !== null && _extraZoomRes$data$me !== void 0 ? _extraZoomRes$data$me : [];
          } else if (zoomGot < ITEMS_PER_TYPE && offlineGot >= ITEMS_PER_TYPE) {
            var _extraOfflineRes$data;
            // zoom ran short, top up from offline
            const extraOfflineRes = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
              type: "offline",
              page,
              pageSize: ITEMS_PER_TYPE + deficit,
              is_Past,
              search,
              datesObj,
              filtersObj
            }), {
              headers
            });
            offlineMeetings = (_extraOfflineRes$data = extraOfflineRes.data.meetings) !== null && _extraOfflineRes$data !== void 0 ? _extraOfflineRes$data : [];
          }
        }
      }

      // ── STEP 3: map, merge, sort ───────────────────────────────────────────
      const allOffline = mapEventRows(offlineMeetings, "offline", is_Past);
      const allZoom = mapEventRows(zoomMeetings, "zoom", is_Past);
      let merged = [...allOffline, ...allZoom].sort((a, b) => is_Past ? b._sortKey - a._sortKey : a._sortKey - b._sortKey);

      // ── STEP 3b: the past half of a calendar window ───────────────────────
      // The endpoint cannot answer "events inside a past window": a window
      // that has already passed comes back empty whether or not is_past is
      // set, and is_past=1 ignores the window (and the search and filters)
      // and returns every past event. So a calendar month that reaches into
      // the past is topped up from that list and trimmed here.
      const windowStartsInPast = unpaged && datesObj?.startDate && moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(datesObj.startDate).isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()());
      if (windowStartsInPast) {
        var _pastOffline$data$mee, _pastZoom$data$meetin;
        const pastArgs = {
          page: 1,
          pageSize: TARGET,
          is_Past: true
        };
        const [pastOffline, pastZoom] = await Promise.all([_utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
          type: "offline",
          ...pastArgs
        }), {
          headers
        }), s.isZoomConnected ? _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(buildEventsUrl({
          type: "zoom",
          ...pastArgs
        }), {
          headers
        }) : Promise.resolve(null)]);
        const from = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(datesObj.startDate).valueOf();
        const to = datesObj.endDate ? moment_timezone__WEBPACK_IMPORTED_MODULE_4___default()(datesObj.endDate).valueOf() : Infinity;
        const past = [...mapEventRows((_pastOffline$data$mee = pastOffline.data.meetings) !== null && _pastOffline$data$mee !== void 0 ? _pastOffline$data$mee : [], "offline", true), ...mapEventRows((_pastZoom$data$meetin = pastZoom?.data.meetings) !== null && _pastZoom$data$meetin !== void 0 ? _pastZoom$data$meetin : [], "zoom", true)].filter(row => row._sortKey >= from && row._sortKey <= to);
        const seen = new Set(merged.map(row => `${row.id}${row.occurrence_id || ""}`));
        merged = [...merged, ...past.filter(row => !seen.has(`${row.id}${row.occurrence_id || ""}`))].sort((a, b) => a._sortKey - b._sortKey);
      }

      // ── STEP 4: pagination — based on server totals ────────────────────────
      const totalItems = offlineTotal + zoomTotal;
      const totalPages = unpaged ? 1 : Math.max(1, Math.ceil(totalItems / TARGET));
      const safePage = Math.min(Math.max(1, page), totalPages);
      if (version !== (0,_utilities_requestCache__WEBPACK_IMPORTED_MODULE_0__.resourceVersion)("events")) {
        return await getMergedEventsList({
          page,
          is_Past,
          search,
          datesObj,
          filtersObj,
          pageSize
        });
      }
      setMergedList(merged);
      setMergedPagination({
        pageNumber: safePage,
        pageCount: totalPages,
        totalItems
      });
      setFirstFetchDone(true);
    } catch (e) {
      console.error(e);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("Error fetching merged events");
    } finally {
      awaitingZoomRef.current = zoomPassMayFollow;
      if (!zoomPassMayFollow) setMergedLoading(false);
    }
    if (!syncedAfterEventsRef.current) {
      syncedAfterEventsRef.current = true;
      await syncAccountsAfterEvents?.();
      await syncFiltersFromServer?.();
    }
  }, []);

  // =====================================================================
  // OCCURRENCES
  // =====================================================================

  const getEventOccurrencess = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (event, page = 1) => {
    const s = stateRef.current;
    if (!s.settings) return;
    setLoading(true);
    try {
      var _res$data$meetings;
      const res = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/wp-json/servv-plugin/v1/event/${event}/occurrences?page_size=10&page=${page}`, {
        headers: {
          "X-WP-Nonce": servvData.nonce
        }
      });
      const rows = ((_res$data$meetings = res.data.meetings) !== null && _res$data$meetings !== void 0 ? _res$data$meetings : []).map(m => {
        const dt = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz(m.start_time, m.timezone);
        return {
          id: m.id,
          occurrence_id: m.occurrence_id,
          title: m.topic || "(No title)",
          post_id: m.shop_post_object_id,
          timezone: m.timezone,
          date: dt.format("MMM DD, YYYY"),
          time: dt.format("hh:mm a"),
          location: m.location || "",
          type: eventType === "offline" ? "Event" : "Zoom",
          recurrence: m.type === 2 && eventType === "offline" ? "One-time" : "Recurring",
          status: isPast ? "Past" : m.is_hidden ? "Unlisted" : "On sale",
          tickets: "0/0"
        };
      });
      setEventOccurrencess(rows || []);
      setSelectedEventForOccurrences(event);
      setView("occurrences");
      setOccurrencesPagination({
        pageNumber: res.data.page_number,
        pageCount: res.data.page_count
      });
    } catch {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("Error fetching occurrences.");
    } finally {
      setLoading(false);
    }
  }, [] // stable — reads live values via stateRef
  );

  // =====================================================================
  // DELETE
  // =====================================================================

  const handleEventDelete = async (postID, occurrenceID) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceID) url += `?occurrence_id=${occurrenceID}`;
    await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url,
      method: "DELETE",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (occurrenceID) {
      setEventOccurrencess(prev => prev.filter(o => o.occurrence_id !== occurrenceID));
      if (selectedEventForOccurrences) {
        var _occurrencesPaginatio;
        await getEventOccurrencess(selectedEventForOccurrences, (_occurrencesPaginatio = occurrencesPagination.pageNumber) !== null && _occurrencesPaginatio !== void 0 ? _occurrencesPaginatio : 1);
      }
    } else {
      if (eventType === "all") getMergedEventsList();else getEventsList();
    }
  };
  const handleMultipleEventsDelete = async () => {
    const eventsIDs = selectedEvents.map(event => ({
      id: event.post_id,
      occurrenceId: event.occurrence_id
    }));
    try {
      await Promise.all(eventsIDs.map(({
        id,
        occurrenceId
      }) => handleEventDelete(id, occurrenceId)));
    } catch (error) {
      console.error("Error deleting events:", error);
    }
  };

  // =====================================================================
  // EFFECTS
  // =====================================================================

  const lastFetchedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const shouldFetch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    var _s$dates$startDate$va, _s$dates$endDate$valu;
    const s = stateRef.current;
    if (!s.settings) return false;
    const next = {
      eventType: s.eventType,
      isPast: s.isPast,
      startDate: (_s$dates$startDate$va = s.dates.startDate?.valueOf()) !== null && _s$dates$startDate$va !== void 0 ? _s$dates$startDate$va : null,
      endDate: (_s$dates$endDate$valu = s.dates.endDate?.valueOf()) !== null && _s$dates$endDate$valu !== void 0 ? _s$dates$endDate$valu : null,
      filters: JSON.stringify(s.selectedFilters),
      isZoomConnected: s.isZoomConnected,
      // re-fetch if zoom connection changes
      wholeRange: s.wholeRange // a calendar needs the window, not a page
    };
    const prev = lastFetchedRef.current;
    if (prev && prev.eventType === next.eventType && prev.isPast === next.isPast && prev.startDate === next.startDate && prev.endDate === next.endDate && prev.filters === next.filters && prev.isZoomConnected === next.isZoomConnected && prev.wholeRange === next.wholeRange) return false;
    lastFetchedRef.current = next;
    return true;
  }, []);
  const doFetch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const s = stateRef.current;
    if (s.eventType === "all") {
      getMergedEventsList({
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters,
        pageSize: s.wholeRange ? WHOLE_RANGE_SIZE : undefined
      });
    } else {
      getEventsList({
        type: s.eventType,
        is_Past: s.isPast,
        search: s.searchString,
        datesObj: s.dates,
        filtersObj: s.selectedFilters
      });
    }
  }, [getMergedEventsList, getEventsList]);
  const initialLoadDoneRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,_hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_1__["default"])(["events"], () => {
    if (!initialLoadDoneRef.current) return;
    if (view === "occurrences" && selectedEventForOccurrences) {
      return getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber || 1);
    }
    if (stateRef.current.eventType === "all") {
      return getMergedEventsList({
        page: mergedPagination.pageNumber || 1,
        pageSize: stateRef.current.wholeRange ? WHOLE_RANGE_SIZE : undefined
      });
    }
    return getEventsList({
      page: pagination.pageNumber || 1
    });
  });

  // 1) INITIAL LOAD
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!settings || initialLoadDoneRef.current) return;
    initialLoadDoneRef.current = true;
    shouldFetch();
    doFetch();
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // 2) ZOOM ANSWER — release a list that was waiting for it
  // A connected account triggers the refetch below, which keeps the loading
  // state it inherits. A disconnected one fetches nothing more, so what the
  // offline pass already rendered is final.
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!awaitingZoomRef.current || !accountsSynced || isZoomConnected) return;
    awaitingZoomRef.current = false;
    setMergedLoading(false);
  }, [accountsSynced, isZoomConnected]);

  // 3) FILTER / TYPE / ZOOM CONNECTION CHANGES
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!initialLoadDoneRef.current) return;
    if (!shouldFetch()) return;
    doFetch();
  }, [isPast, wholeRange, eventType, dates.startDate?.valueOf(), dates.endDate?.valueOf(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(selectedFilters), isZoomConnected // re-fetch when zoom connects/disconnects
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  // 4) TOAST ERRORS
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (showError) (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(showError);
  }, [showError]);

  // 5) TIME FORMAT & TIMEZONE — runs once
  const settingsAppliedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!settings || settingsAppliedRef.current) return;
    settingsAppliedRef.current = true;
    if (settings.settings?.time_format_24_hours) setTimeFormat("HH:mm");else setTimeFormat("hh:mm a");
    let tzGuess = moment_timezone__WEBPACK_IMPORTED_MODULE_4___default().tz.guess();
    if (settings.settings?.admin_dashboard) {
      const dash = JSON.parse(settings.settings.admin_dashboard);
      tzGuess = dash.default_timezone || tzGuess;
    }
    const found = timezones.find(z => z.id === tzGuess);
    if (found) setTimezone(found);
  }, [settings]); // eslint-disable-line react-hooks/exhaustive-deps

  // =====================================================================
  // EXPOSE
  // =====================================================================

  return {
    loading,
    mergedLoading,
    showGuide,
    isPast,
    eventType,
    dates,
    view,
    searchString,
    selectedFilters,
    selectedEvent,
    selectedOccurrence,
    attributes,
    timezone,
    timeFormat,
    firstFetchDone,
    meetingsList,
    pagination,
    mergedList,
    mergedPagination,
    eventOccurrencess,
    occurrencesPagination,
    setSelectedEvent,
    setSelectedOccurrence,
    setView,
    setAttributes,
    setShowGuide,
    handleOpenEvent,
    // A boolean sets the side explicitly; no argument keeps the old toggle.
    handleIsPastChange: value => setIsPast(p => typeof value === "boolean" ? value : !p),
    handleTypeChange: t => setEventType(t),
    handleSetDates,
    applyDatePreset,
    applyRangePreset,
    setWholeRange,
    handleSearchChange: setSearchString,
    handleSearchSubmit,
    handleFilterSelect,
    resetFilters,
    isFiltersApplied,
    handleEventChange,
    handleReturnWithError: err => setShowError(err),
    resetSubpageSelection: () => {
      setSelectedEvent(null);
      setSelectedEventForOccurrences(null);
      setSelectedOccurrence(null);
    },
    getEventsList,
    getMergedEventsList,
    getEventOccurrencess,
    handleGetPrevPage: () => pagination.pageNumber > 1 && getEventsList({
      page: pagination.pageNumber - 1
    }),
    handleGetNextPage: () => pagination.pageNumber < pagination.pageCount && getEventsList({
      page: pagination.pageNumber + 1
    }),
    handleGetPrevMergedPage: () => mergedPagination.pageNumber > 1 && getMergedEventsList({
      page: mergedPagination.pageNumber - 1
    }),
    handleGetNextMergedPage: () => mergedPagination.pageNumber < mergedPagination.pageCount && getMergedEventsList({
      page: mergedPagination.pageNumber + 1
    }),
    handleGetPrevOccurrencessPage: () => occurrencesPagination.pageNumber > 1 && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber - 1),
    handleGetNextOccurrencessPage: () => occurrencesPagination.pageNumber < occurrencesPagination.pageCount && getEventOccurrencess(selectedEventForOccurrences, occurrencesPagination.pageNumber + 1),
    handleEventDelete,
    handleMultipleEventsDelete,
    selectedEvents,
    setSelectedEvents,
    dateSelected
  };
};

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

/***/ "./src/utilities/events.js":
/*!*********************************!*\
  !*** ./src/utilities/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   eventKey: () => (/* binding */ eventKey),
/* harmony export */   eventRoutePayload: () => (/* binding */ eventRoutePayload),
/* harmony export */   generateEventData: () => (/* binding */ generateEventData),
/* harmony export */   getEvent: () => (/* binding */ getEvent),
/* harmony export */   getFeaturedImage: () => (/* binding */ getFeaturedImage),
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
const generateEventData = async data => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/event/data/generate`, data, {
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
  ...(registrants ? {
    registrants_view: true
  } : {})
});

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

/***/ "./src/Components/Pages/CalendarPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/CalendarPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"DMnrmhNlf3M9tQLinADe","divider":"pwkqBYeanRNVZ9rSVmvb","toolbar":"PAmMSiAc8aKnmPHRVNjZ"});

/***/ }),

/***/ "./src/Components/Pages/Events/EventCalendar.module.scss":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/Events/EventCalendar.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"calendar":"Iqc_LzSBgBkkfLYsHUgG","bar":"ilGgcmHsjJgGt2jjRHQH","nav":"IdqD1PWlNR5pibMnKMRk","navButton":"tRGAeDFUiJZG0tnss8S5","title":"ou682syi_COkUtPRB5SX","sheet":"qYyDuEMrf98NrG_rg7rB","busy":"iT4qfbqpGvlrfwP80Jdi","monthGrid":"ODuzHISTFRnI91rj3YdH","weekday":"TD5UYcvZQP8_yWQuZWiP","day":"P20pLgvRCFZjhGUojcGJ","outside":"hG4GVv50sEJ2lBcctIqj","dayNumber":"OiriBRTZkHcP44E5M5kM","today":"C5tIjyy0aEaUf5kkAPhV","events":"s91AjSN3b8gSLhomgtoA","chip":"FswV1TK7hHJzajG28aIP","chipOffline":"gh5vXK1bpO_sMzu3lqJt","chipOnline":"f7SLh0insBZq9aXIOUWR","chipPast":"iPti6erwTJwdjreJKefQ","dayTop":"LvRhA9TYJ0fXzdvWrChQ","dayCount":"StjLlh6suWNE8KflYkwB","eventTitle":"yBEwfE24GMGa1tcCZyNf","eventMeta":"WG5jTFI1C0HjOnqiT0HE","legend":"hU8M9HOWWI_yvgaVmL3p","offlineDot":"CWjNCdUhdI_rOCIc4_Pr","onlineDot":"oPJS7yuJvQxKPD4gFw7h","scheduleScroll":"iGUdjAhSxSfopIshntbn","weekSchedule":"LrcJiXOqWOsaX36snuAv","daySchedule":"HBEaAFJwLs8VprH93bB0","scheduleHeader":"dyaQa2analnGFleEP_yY","hourRow":"mbAwspliL0QIfe1tew5n","timeHeading":"LPR7M7iYVi3lceBmud3i","dateHeading":"wtNMgTCnpRSmLpUFbmAc","hourLabel":"eJ8b2rKiiCrpRiQh_oGb","hourCell":"Lpd1l2TmJKwIFEM5gRvQ","eventCard":"UEEEWqYuxth4AMUIKnbQ","dayEmpty":"kgUACUNBBsEYEFQm3lk1","tall":"xR1LdRrKsoXqfSsHvFwq"});

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

/***/ "./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronLeftIcon({
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
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronRightIcon({
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
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function EyeIcon({
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
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PencilSquareIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilSquareIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function UserCircleIcon({
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
    d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_CalendarPage_jsx.js.map?ver=e4a1e8972fce14540f57