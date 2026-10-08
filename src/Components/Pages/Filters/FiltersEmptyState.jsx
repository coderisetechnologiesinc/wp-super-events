import { FunnelIcon } from "@heroicons/react/24/outline";
import styles from "./FiltersPage.module.scss";
import { FILTER_TYPES } from "./CreateFilterMenu";

export default function FiltersEmptyState({ type, children }) {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>
        <FunnelIcon />
      </span>
      <h2>{type ? `No ${type.toLowerCase()} yet` : "No filters yet"}</h2>
      <p>
        {type
          ? `Create your first ${FILTER_TYPES[
              type
            ].label.toLowerCase()} to help attendees find the right events.`
          : "Add locations, categories and languages to help attendees find the right events."}
      </p>
      {children}
    </div>
  );
}
