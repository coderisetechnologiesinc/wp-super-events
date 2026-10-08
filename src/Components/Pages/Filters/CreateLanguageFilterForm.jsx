import FilterFormSection, {
  FilterField,
  FilterOrdering,
} from "./FilterFormSection";
import FilterFormLayout from "./FilterFormLayout";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveFilter } from "../../../utilities/filters";
import { useServvStore } from "../../../store/useServvStore";

const CreateLanguageFilterForm = ({ loading, setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );

  // Find existing language if editing
  const existingLanguage =
    id && filtersList.languages
      ? filtersList.languages.find((l) => String(l.id) === String(id))
      : null;

  const [languageData, setLanguageData] = useState(existingLanguage || {});

  const onCancel = () => navigate(-1); // Return to previous page

  const handleLanguageChange = (field, value) => {
    setLanguageData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLanguageSave = async () => {
    if (!languageData?.name) return;

    setLoading(true);
    await saveFilter("languages", languageData, existingLanguage?.id);
    await syncSingleFilterFromServer("languages");
    navigate(-1);
  };

  const isFormValid = languageData?.name?.length > 0;

  return (
    <FilterFormLayout
      title={existingLanguage ? `Edit language` : "New language"}
      description={
        existingLanguage
          ? `Edit details for ${existingLanguage.name}`
          : "Create a new language filter"
      }
      editing={Boolean(existingLanguage)}
      onSave={handleLanguageSave}
      onCancel={onCancel}
      saveDisabled={!isFormValid}
      loading={loading}
    >
      <FilterFormSection
        title="Details"
        description="Add the information for this filter value."
        grid
      >
        <FilterField
          label="Language name"
          value={languageData?.name || ""}
          type="text"
          maxLength={100}
          required
          fullWidth
          hint="This name identifies the value in your event filters."
          disabled={loading}
          onChange={(value) => handleLanguageChange("name", value)}
        />
      </FilterFormSection>
      <FilterOrdering
        editing={Boolean(existingLanguage)}
        value={languageData.priority}
        onChange={(value) => handleLanguageChange("priority", value)}
      />
    </FilterFormLayout>
  );
};

export default CreateLanguageFilterForm;
