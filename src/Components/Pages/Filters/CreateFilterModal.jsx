import { useState } from "react";
import { toast } from "react-toastify";
import ModalShell from "../../Modals/ModalShell";
import PageActionButton from "../../Controls/PageActionButton";
import { FilterField } from "./FilterFormSection";
import { FILTER_FORMS, filterFormErrors } from "./filterFields";
import { saveFilter } from "../../../utilities/filters";
import { useServvStore } from "../../../store/useServvStore";
import styles from "./FilterForm.module.scss";

// Creates one filter value without leaving the page that needed it — the event
// form, so far. The filter pages stay the place to edit values, reorder them
// and set a location's hours; this only asks for what a value cannot be created
// without.
//
// onCreated receives the new value, so the caller can select what the host just
// created instead of making them find it in a list.
const CreateFilterModal = ({ type, onClose, onCreated }) => {
  const form = FILTER_FORMS[type];
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );
  const [values, setValues] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [saving, setSaving] = useState(false);

  if (!form) return null;

  const errors = filterFormErrors(type, values);
  const change = (key, value) => {
    setShowErrors(false);
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    if (Object.keys(errors).length) {
      setShowErrors(true);
      return;
    }

    setSaving(true);
    try {
      const created = await saveFilter(type, values);
      await syncSingleFilterFromServer(type);
      // The create response carries the new id on most collections; where it
      // does not, the refreshed list is matched by the name just submitted.
      const name = String(values.name || "").trim();
      const stored = useServvStore
        .getState()
        .filtersList?.[type]?.find(
          (value) => String(value.name || "").trim() === name,
        );
      onCreated?.(created?.id ? { ...stored, ...created } : stored);
      toast.success(`${form.label} created.`);
      onClose();
    } catch (failure) {
      toast.error(
        failure.response?.data?.message ||
          `Unable to create this ${form.label.toLowerCase()}. Please try again.`,
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <ModalShell
      eyebrow="New filter"
      title={`New ${form.label.toLowerCase()}`}
      description={form.description}
      size="md"
      onClose={saving ? () => {} : onClose}
      footer={
        <>
          <PageActionButton
            text="Cancel"
            type="secondary"
            disabled={saving}
            onAction={onClose}
          />
          <PageActionButton
            text={saving ? "Creating…" : "Create filter"}
            disabled={saving}
            onAction={save}
          />
        </>
      }
    >
      <div className={styles.fieldGrid}>
        {form.fields.map((field) => (
          <FilterField
            key={field.key}
            label={field.label}
            required={field.required}
            hint={field.hint}
            error={showErrors ? errors[field.key] : undefined}
            fullWidth={field.fullWidth}
            value={values[field.key] || ""}
            type="text"
            maxLength={field.maxLength}
            textarea={field.textarea}
            rows={field.rows}
            disabled={saving}
            onChange={(value) => change(field.key, value)}
          />
        ))}
      </div>
    </ModalShell>
  );
};

export default CreateFilterModal;
