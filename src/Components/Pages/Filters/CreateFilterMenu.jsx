import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PlusIcon,
  MapPinIcon,
  LanguageIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "../../Containers/Dropdown";
import PageActionButton from "../../Controls/PageActionButton";
import display from "../../Controls/DisplayOptions.module.scss";
import styles from "./FiltersPage.module.scss";

export const FILTER_TYPES = {
  Locations: {
    label: "Location",
    note: "Where the event takes place",
    Icon: MapPinIcon,
  },
  Categories: {
    label: "Category",
    note: "Topics and types of events",
    Icon: TagIcon,
  },
  Members: {
    label: "Member",
    note: "Hosts, instructors and team members",
    Icon: UserGroupIcon,
  },
  Languages: {
    label: "Language",
    note: "Language of the event",
    Icon: LanguageIcon,
  },
};

export default function CreateFilterMenu({ types, disabled }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const navigate = useNavigate();
  return (
    <div
      ref={root}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          root.current?.querySelector("button")?.focus();
        }
      }}
    >
      <Dropdown
        className={display.root}
        dropdownClassName={styles.createMenuPanel}
        surface={false}
        align="right"
        status={open}
        onClose={() => setOpen(false)}
        activator={
          <PageActionButton
            text="Create filter"
            icon={<PlusIcon />}
            disabled={disabled}
            onAction={() => setOpen((value) => !value)}
          />
        }
      >
        <div className={display.pop} aria-label="Create filter">
          <h3 className={display.title}>Filter type</h3>
          <p className={display.note}>Choose an attribute for your events.</p>
          {types.map((type) => {
            const { label, note, Icon } = FILTER_TYPES[type];
            return (
              <button
                key={type}
                type="button"
                className={display.opt}
                onClick={() => {
                  setOpen(false);
                  navigate(`/filters/new/${type}`);
                }}
              >
                <Icon className={styles.menuIcon} />
                <span>
                  <span className={display.label}>{label}</span>
                  <span className={display.hint}>{note}</span>
                </span>
              </button>
            );
          })}
        </div>
      </Dropdown>
    </div>
  );
}
