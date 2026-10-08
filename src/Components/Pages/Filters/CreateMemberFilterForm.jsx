import FilterFormSection, {
  FilterField,
  FilterOrdering,
} from "./FilterFormSection";
import FilterFormLayout from "./FilterFormLayout";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveFilter } from "../../../utilities/filters";
import { useServvStore } from "../../../store/useServvStore";

const CreateMemberFilterForm = ({ loading, setLoading = () => {} }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );

  // Load existing member if editing
  const existingMember =
    id && filtersList.members
      ? filtersList.members.find((m) => String(m.id) === String(id))
      : null;

  const [memberData, setMemberData] = useState(existingMember || {});

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const validateEmail = (email) => {
    if (!email) return ""; // optional field
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ""
      : "Invalid email address";
  };

  const validatePhone = (phone) => {
    if (!phone) return ""; // optional field
    return /^\+?[\d\s\-().]{7,20}$/.test(phone) ? "" : "Invalid phone number";
  };

  const handleMemberChange = (field, value) => {
    setMemberData((prev) => ({ ...prev, [field]: value }));

    if (field === "email") {
      setShowErrors(false);
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (field === "phone") {
      setShowErrors(false);
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const isFormValid =
    memberData?.name?.length > 0 && !errors.email && !errors.phone;

  const onCancel = () => navigate(-1);

  const handleMemberSave = async () => {
    if (!memberData.name || !isFormValid) {
      setShowErrors(true);
      return;
    }

    setLoading(true);
    await saveFilter("members", memberData, existingMember?.id);
    await syncSingleFilterFromServer("members");
    navigate(-1);
  };

  return (
    <FilterFormLayout
      title={existingMember ? `Edit member` : "New member"}
      description={
        existingMember
          ? `Edit details for ${existingMember.name}`
          : "Create a new member filter"
      }
      editing={Boolean(existingMember)}
      onSave={handleMemberSave}
      onCancel={onCancel}
      saveDisabled={!memberData?.name}
      loading={loading}
    >
      <FilterFormSection
        title="Details"
        description="Add the information for this filter value."
        grid
      >
        <FilterField
          label="Member name"
          value={memberData?.name || ""}
          type="text"
          maxLength={100}
          required
          fullWidth
          hint="This name identifies the value in your event filters."
          disabled={loading}
          onChange={(value) => handleMemberChange("name", value)}
        />
        <FilterField
          label="Email"
          value={memberData?.email || ""}
          type="email"
          maxLength={100}
          error={showErrors ? errors.email : undefined}
          disabled={loading}
          onChange={(value) => handleMemberChange("email", value)}
        />
        <FilterField
          label="Phone"
          value={memberData?.phone || ""}
          type="tel"
          maxLength={20}
          error={showErrors ? errors.phone : undefined}
          disabled={loading}
          onChange={(value) => handleMemberChange("phone", value)}
        />
        <FilterField
          label="Description"
          value={memberData?.description || ""}
          type="text"
          maxLength={200}
          textarea
          rows={3}
          fullWidth
          disabled={loading}
          onChange={(value) => handleMemberChange("description", value)}
        />
      </FilterFormSection>
      <FilterOrdering
        editing={Boolean(existingMember)}
        value={memberData.priority}
        onChange={(value) => handleMemberChange("priority", value)}
      />
    </FilterFormLayout>
  );
};

export default CreateMemberFilterForm;
