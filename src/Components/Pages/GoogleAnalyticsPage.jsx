import IntegrationLayout, {
  IntegrationSection,
} from "./Integrations/IntegrationLayout";
import PageActionButton from "../Controls/PageActionButton";
import { useEffect, useState } from "react";
import NewInputControl from "../Controls/NewInputControl";
import { useServvStore } from "../../store/useServvStore";
import { saveSettings } from "../../utilities/settings";
const GoogleAnalyticsPage = ({ onPageSelect = () => {} }) => {
  const settings = useServvStore((s) => s.settings);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const [storedGAId, setStoredGAId] = useState("");
  const [GAId, setGAId] = useState("G-");
  const handleSaveGAId = async () => {
    let newSettings = { ...settings };
    let widgetSettings =
      typeof settings.settings.widget_style_settings === "string"
        ? JSON.parse(settings.settings.widget_style_settings)
        : { ...settings.settings.widget_style_settings };
    widgetSettings.google_analytics_id = GAId;
    newSettings.settings = {
      ...newSettings.settings,
      widget_style_settings: JSON.stringify(widgetSettings),
    };
    await saveSettings(newSettings);
    await fetchSettings();
  };
  useEffect(() => {
    if (settings && settings?.settings?.widget_style_settings) {
      let widgetSettings =
        typeof settings.settings.widget_style_settings === "string"
          ? JSON.parse(settings.settings.widget_style_settings)
          : { ...settings.settings.widget_style_settings };
      if (widgetSettings.google_analytics_id) {
        setGAId(widgetSettings.google_analytics_id);
        setStoredGAId(widgetSettings.google_analytics_id);
      }
    }
  }, [settings]);
  return (
    <IntegrationLayout
      title="Google Analytics"
      glyph="A"
      description="Track visits, clicks, and conversions for your events."
      connected={Boolean(storedGAId && storedGAId.length > 2)}
      accountLabel={storedGAId || undefined}
      actions={<PageActionButton text="Save" onAction={handleSaveGAId} />}
    >
      <IntegrationSection
        title="Tracking"
        description="Connect your existing Google Analytics property."
      >
        <NewInputControl
          value={GAId}
          onChange={setGAId}
          placeholder="G-XXXXXXXXXX"
          label="Google Analytics ID"
        />
      </IntegrationSection>
    </IntegrationLayout>
  );
};
export default GoogleAnalyticsPage;
