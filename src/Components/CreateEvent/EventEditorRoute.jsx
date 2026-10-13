import { useSearchParams } from "react-router-dom";
import UnifiedEventForm from "./UnifiedEventForm";
import EventRegistrantsPage from "../Pages/EventRegistrantsPage";

export default function EventEditorRoute() {
  const [query] = useSearchParams();
  return query.has("registrants") || query.has("registrants_view")
    ? <EventRegistrantsPage />
    : <UnifiedEventForm />;
}
