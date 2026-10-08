import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import MenuItem from "./MenuItem";
import {
  Events,
  Sales,
  Filters,
  Analytics,
  Contacts,
  Emails,
  Settings,
  Support,
  Widgets,
  Dashboard,
} from "../../assets/icons";
import { useServvStore } from "../../store/useServvStore";
/* ---------------------------------------------------------
   Menu configuration
--------------------------------------------------------- */

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */

const MenuSectionLabel = ({ children }) => (
  <div className="px-3 pt-4 pb-2 text-[16px] font-semibold tracking-widest text-gray-400">
    {children}
  </div>
);

/* ---------------------------------------------------------
   Component
--------------------------------------------------------- */

const SideBar = ({ page, onChange, collapsed = false, onToggle, t }) => {
  const navigate = useNavigate();
  const translate = (label) => (typeof t === "function" ? t(label) : label);
  const settings = useServvStore((s) => s.settings);
  const handleSelect = (link) => {
    onChange?.(link);
    navigate(`/${link}`);
  };

  // The marketplace build is the only one that exposes Branding; everything else
  // about the menu is the same, so derive it rather than keeping two copies.
  const manuSections = useMemo(() => {
    const mainItems = [
      { title: "Dashboard", link: "dashboard", icon: Dashboard },
      { title: "Events", link: "events", icon: Events },
      { title: "Bookings", link: "bookings", icon: Sales },
      ...(settings?.is_wp_marketplace
        ? [{ title: "Branding", link: "branding", icon: Widgets }]
        : []),
      { title: "Widget", link: "widget", icon: Widgets },
      { title: "Filters", link: "filters", icon: Filters },
      { title: "Integrations", link: "integrations", icon: Contacts },
      { title: "Notifications", link: "notifications", icon: Emails },
      { title: "Analytics", link: "analytics", icon: Analytics },
    ];

    return [
      { id: "main", items: mainItems },
      {
        id: "system",
        bottom: true,
        items: [
          { title: "Support", link: "support", icon: Support },
          { title: "Settings", link: "settings", icon: Settings },
        ],
      },
    ];
  }, [settings]);

  return (
    <aside className={`servv-sidebar ${collapsed ? "collapsed-sidebar" : ""}`}>
      {/* Mobile close button */}
      {!collapsed && onToggle && (
        <button
          type="button"
          onClick={onToggle}
          aria-label="Close menu"
          className="md:hidden absolute top-4 right-4 z-10
                     p-1 rounded-full bg-gray-100
                     hover:bg-gray-200 text-gray-600"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}

      <div className="flex flex-col h-full">
        {/* Logo */}
        <div
          className={`mb-6 ${
            collapsed ? "servv-logo-collapsed" : "servv-logo-png"
          }`}
        />

        {/* Sections */}
        <nav className="flex flex-col flex-1 gap-[2px]" role="navigation">
          {manuSections.map(({ id, label, items, bottom }) => (
            <div key={id} className={bottom ? "mt-auto" : ""}>
              {label && !collapsed && (
                <MenuSectionLabel>{label}</MenuSectionLabel>
              )}

              <div className="flex flex-col gap-2">
                {items.map(({ title, link, icon: Icon }) => (
                  <MenuItem
                    key={link}
                    title={translate(title)}
                    link={link}
                    active={page === link}
                    collapsed={collapsed}
                    onSelect={handleSelect}
                    icon={<Icon className="menu-icon" aria-hidden />}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
