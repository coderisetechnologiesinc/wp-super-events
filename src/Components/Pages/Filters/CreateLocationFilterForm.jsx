import styles from "./FilterForm.module.scss";
import FilterFormSection, {
  FilterField,
  FilterOrdering,
} from "./FilterFormSection";
import NewTimeInputControl from "../../Controls/NewTimeInputControl";
import FilterFormLayout from "./FilterFormLayout";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { saveFilter } from "../../../utilities/filters";
import { useServvStore } from "../../../store/useServvStore";

const CreateLocationFilterForm = ({
  setLoading = () => {},
  loading,
  timeFormat = "hh:mm a",
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const filtersList = useServvStore((s) => s.filtersList);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );

  const existingLocation =
    id && filtersList.locations
      ? filtersList.locations.find((l) => String(l.id) === String(id))
      : null;

  const [locationData, setLocationData] = useState(existingLocation || {});

  const onCancel = () => navigate(-1);

  const handleLocationChange = (field, value) => {
    setLocationData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLocationSave = async () => {
    if (!locationData?.name) return;

    setLoading(true);
    await saveFilter("locations", locationData, existingLocation?.id);
    await syncSingleFilterFromServer("locations");
    navigate(-1);
  };

  /** ------------------ Operational Hours Helpers ------------------ **/
  const getStartTime = () => {
    if (locationData?.operational_hours) {
      const [start] = locationData.operational_hours.split(" - ");
      return moment(start, timeFormat);
    }
    return moment("09:00", "HH:mm");
  };

  const getEndTime = () => {
    if (locationData?.operational_hours) {
      const parts = locationData.operational_hours.split(" - ");
      return moment(parts[1], timeFormat);
    }
    return moment("17:00", "HH:mm");
  };

  const handleStartTimeChange = (newVal) => {
    const start = moment(newVal).format(timeFormat);
    const end =
      locationData.operational_hours?.split(" - ")[1] ||
      moment("17:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };

  const handleEndTimeChange = (newVal) => {
    const end = moment(newVal).format(timeFormat);
    const start =
      locationData.operational_hours?.split(" - ")[0] ||
      moment("09:00", "HH:mm").format(timeFormat);
    handleLocationChange("operational_hours", `${start} - ${end}`);
  };

  const isFormValid = locationData?.name?.length > 0;

  return (
    <FilterFormLayout
      title={existingLocation ? `Edit location` : "New location"}
      description={
        existingLocation
          ? `Edit details for ${existingLocation.name}`
          : "Create a new location filter"
      }
      editing={Boolean(existingLocation)}
      onSave={handleLocationSave}
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
          label="Location name"
          value={locationData?.name || ""}
          type="text"
          maxLength={100}
          required
          fullWidth
          hint="This name identifies the value in your event filters."
          disabled={loading}
          onChange={(value) => handleLocationChange("name", value)}
        />
        <FilterField
          label="Details"
          value={locationData?.details || ""}
          type="text"
          maxLength={200}
          textarea
          rows={3}
          fullWidth
          disabled={loading}
          onChange={(value) => handleLocationChange("details", value)}
        />
      </FilterFormSection>
      <FilterFormSection
        title="Operational hours"
        description="Set the start and end time for this location."
      >
        <div className={styles.hours}>
          <NewTimeInputControl
            label="Start time"
            time={getStartTime()}
            onChange={handleStartTimeChange}
            timeFormat={timeFormat}
            disabled={loading}
          />
          <NewTimeInputControl
            label="End time"
            time={getEndTime()}
            onChange={handleEndTimeChange}
            timeFormat={timeFormat}
            disabled={loading}
          />
        </div>
      </FilterFormSection>
      <FilterOrdering
        editing={Boolean(existingLocation)}
        value={locationData.priority}
        onChange={(value) => handleLocationChange("priority", value)}
      />
    </FilterFormLayout>
  );
};

export default CreateLocationFilterForm;
