import { useId } from "react";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";
import styles from "./FilterForm.module.scss";

export default function FilterFormSection({
  title,
  description,
  children,
  grid = false,
}) {
  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <div className={`${styles.cardBody} ${grid ? styles.fieldGrid : ""}`}>
        {children}
      </div>
    </section>
  );
}

export function FilterField({
  label,
  required = false,
  hint,
  error,
  fullWidth = false,
  ...props
}) {
  const id = useId();
  return (
    <div className={`${styles.field} ${fullWidth ? styles.fullWidth : ""}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className={styles.required}> *</span>
        ) : (
          <span className={styles.optional}>Optional</span>
        )}
      </label>
      <NewInputFieldControl
        {...props}
        id={id}
        width="100%"
        error={Boolean(error)}
      />
      {error ? (
        <span className={styles.error} role="alert">
          {error}
        </span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </div>
  );
}

export function FilterOrdering({ editing, value, onChange }) {
  return (
    <FilterFormSection title="Ordering">
      {editing ? (
        <div className={styles.ordering}>
          <div className={styles.priority}>
            <FilterField
              label="Priority"
              value={value ?? ""}
              maxLength={10}
              onChange={onChange}
            />
          </div>
          <p className={styles.hint}>
            Set the order in which this value appears in the filter list.
          </p>
        </div>
      ) : (
        <p className={styles.hint}>
          Priority can be edited after this filter is created.
        </p>
      )}
    </FilterFormSection>
  );
}
