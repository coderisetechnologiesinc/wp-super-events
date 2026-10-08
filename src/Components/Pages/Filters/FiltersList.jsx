import { useState } from "react";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import CheckboxItem from "../../Controls/CheckboxItem";
import PageActionButton from "../../Controls/PageActionButton";
import ModalShell from "../../Modals/ModalShell";
import BulkBar from "../../Containers/BulkBar";
import { FILTER_TYPES } from "./CreateFilterMenu";
import styles from "./FiltersPage.module.scss";

const FIELDS = {
  Locations: [
    { key: "details", label: "Details" },
    { key: "operational_hours", label: "Operational hours" },
  ],
  Languages: [],
  Categories: [{ key: "details", label: "Description" }],
  Members: [
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "description", label: "Description" },
  ],
};

export default function FiltersList({
  title,
  filters,
  selected,
  onSelect,
  onDelete,
  onSelectAll,
  onClearSelection,
  loading,
}) {
  const [confirm, setConfirm] = useState(null);
  const { Icon } = FILTER_TYPES[title];
  const fields = FIELDS[title] || [];
  const grid = {
    gridTemplateColumns: `18px minmax(150px, 2fr) ${fields
      .map(() => "minmax(100px, 1fr)")
      .join(" ")} 70px 76px`,
  };
  return (
    <>
      {confirm && (
        <ModalShell
          size="sm"
          title={
            confirm.length === 1 ? "Delete filter" : "Delete selected filters"
          }
          description="Deleted filters will no longer be available for events."
          onClose={() => !loading && setConfirm(null)}
          footer={
            <>
              <PageActionButton
                text="Cancel"
                type="secondary"
                disabled={loading}
                onAction={() => setConfirm(null)}
              />
              <PageActionButton
                text={loading ? "Deleting…" : "Delete"}
                type="danger"
                disabled={loading}
                onAction={async () => {
                  await onDelete(title, confirm);
                  setConfirm(null);
                }}
              />
            </>
          }
        >
          <p>
            Are you sure you want to delete{" "}
            {confirm.length === 1
              ? "this filter"
              : `these ${confirm.length} filters`}
            ?
          </p>
        </ModalShell>
      )}
      <div className={styles.toolbar}>
        <CheckboxItem
          label="Select all"
          ariaLabel="Select all filters"
          checked={filters.length > 0 && selected.length === filters.length}
          indeterminate={
            selected.length > 0 && selected.length < filters.length
          }
          disabled={loading}
          onChange={onSelectAll}
        />
        <span className={styles.secondary}>
          {`${filters.length} ${filters.length === 1 ? "filter" : "filters"}`}
        </span>
      </div>
      <BulkBar
        selectedCount={selected.length}
        noun="filter"
        onClear={onClearSelection}
      >
        <PageActionButton
          text="Delete"
          icon={<TrashIcon />}
          type="danger-secondary"
          size="sm"
          disabled={loading}
          onAction={() => setConfirm([...selected])}
        />
      </BulkBar>
      <div className={styles.list}>
        <div className={styles.valueHead} style={grid}>
          <span />
          <span>Name</span>
          {fields.map((field) => (
            <span key={field.key}>{field.label}</span>
          ))}
          <span>Order</span>
          <span />
        </div>
        {filters.map((filter) => (
          <div
            key={filter.id}
            className={`${styles.row} ${styles.valueRow} ${
              selected.includes(filter.id) ? styles.picked : ""
            }`}
            style={grid}
          >
            <div className={styles.pick}>
              <CheckboxItem
                ariaLabel={`Select ${filter.name}`}
                checked={selected.includes(filter.id)}
                disabled={loading}
                onChange={() => onSelect(filter.id)}
              />
            </div>
            <div className={styles.identity}>
              <span className={styles.mark}>
                <Icon />
              </span>
              <Link
                className={styles.name}
                to={`/filters/new/${title}?id=${filter.id}`}
              >
                {filter.name}
              </Link>
            </div>
            {fields.map((field) => (
              <div key={field.key} className={styles.detail}>
                <span className={styles.mobileLabel}>{field.label}</span>
                <span title={filter[field.key] || undefined}>
                  {filter[field.key] || "—"}
                </span>
              </div>
            ))}
            <div className={styles.order}>
              <span className={styles.mobileLabel}>Order</span>
              {filter.priority ?? "—"}
            </div>
            <div className={styles.rowActions}>
              <Link
                className={styles.action}
                to={`/filters/new/${title}?id=${filter.id}`}
                aria-label={`Edit ${filter.name}`}
                title="Edit filter"
              >
                <PencilSquareIcon />
              </Link>
              <button
                type="button"
                className={`${styles.action} ${styles.danger}`}
                aria-label={`Delete ${filter.name}`}
                title="Delete filter"
                disabled={loading}
                onClick={() => setConfirm([filter.id])}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
