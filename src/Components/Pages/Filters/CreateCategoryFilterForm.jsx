import FilterFormSection, {
  FilterField,
  FilterOrdering,
} from "./FilterFormSection";
import FilterFormLayout from "./FilterFormLayout";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveFilter } from "../../../utilities/filters";
import { useServvStore } from "../../../store/useServvStore";

const CreateCategoryFilterForm = ({ loading, setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );
  // Try to find existing category if ID is provided
  const existingCategory =
    id && filtersList.categories
      ? filtersList.categories.find((c) => String(c.id) === String(id))
      : null;

  const [categoryData, setCategoryData] = useState(existingCategory || {});

  const onCancel = () => navigate(-1); // Go back

  const handleCategroyChange = (field, value) => {
    setCategoryData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategorySave = async () => {
    if (!categoryData?.name) return;

    setLoading(true);
    await saveFilter("categories", categoryData, existingCategory?.id);
    await syncSingleFilterFromServer("categories");
    navigate(-1);
  };

  const isFormValid = categoryData?.name?.length > 0;

  return (
    <FilterFormLayout
      title={existingCategory ? `Edit category` : "New category"}
      description={
        existingCategory
          ? `Edit details for ${existingCategory.name}`
          : "Create a new category filter"
      }
      editing={Boolean(existingCategory)}
      onSave={handleCategorySave}
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
          label="Category name"
          value={categoryData?.name || ""}
          type="text"
          maxLength={100}
          required
          fullWidth
          hint="This name identifies the value in your event filters."
          disabled={loading}
          onChange={(value) => handleCategroyChange("name", value)}
        />
        <FilterField
          label="Description"
          value={categoryData?.details || ""}
          type="text"
          maxLength={200}
          textarea
          rows={3}
          fullWidth
          disabled={loading}
          onChange={(value) => handleCategroyChange("details", value)}
        />
      </FilterFormSection>
      <FilterOrdering
        editing={Boolean(existingCategory)}
        value={categoryData.priority}
        onChange={(value) => handleCategroyChange("priority", value)}
      />
    </FilterFormLayout>
  );
};

export default CreateCategoryFilterForm;
