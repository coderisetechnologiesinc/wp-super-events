import { useEffect, useState } from "react";
import BlockStack from "../../Containers/BlockStack";
import PageContent from "../../Containers/PageContent";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import RadioGroup from "../../Controls/RadioGroup";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";
import CheckboxItem from "../../Controls/CheckboxItem";
import PageActionButton from "../../Controls/PageActionButton";
import BreadCrumbs from "../../Menu/BreadCrumbs";
import PageWrapper from "../PageWrapper";
import axios from "../../../utilities/adminApi";
import { useNavigate } from "react-router-dom";
const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const ZoomSettingsPage = () => {
  const navigate = useNavigate();
  const [zoomSettings, setZoomSettings] = useState({
    use_pmi: false,
    waiting_room: true,
    host_video: false,
    join_before_host: false,
    mute_upon_entry: false,
    participant_video: false,
    auto_recording: "none",
    audio: "voip",
  });
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const updateZoomSettings = async () => {
    const newSettings = { ...settings };
    const adminDashboardSettings = { ...settings.admin_dashboard };
    adminDashboardSettings.zoom_meeting_default_settings = zoomSettings;
    // newSettings.settings.admin_dashboard = ""
    newSettings.settings.admin_dashboard = JSON.stringify(
      adminDashboardSettings,
    );
    const updateZoomSettingsResponse = await axios.put(
      "/wp-json/servv-plugin/v1/shop/settings",
      newSettings,
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
  };

  const handleSettingsChange = (field, value) => {
    let newSettings = { ...zoomSettings };
    newSettings[field] = value;
    setZoomSettings(newSettings);
  };

  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      if (getZoomAccountResponse.data.email)
        setAccount(getZoomAccountResponse.data);

      setAccountFetched(true);
    }
  };
  const getZoomSettings = async () => {
    const shopInfo = await axios.get("/wp-json/servv-plugin/v1/shop/info", {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (shopInfo && shopInfo.status === 200 && shopInfo.data.settings) {
      setSettings(shopInfo.data);
      if (shopInfo.data.settings.admin_dashboard.length > 0) {
        const adminSettings = JSON.parse(
          shopInfo.data.settings.admin_dashboard,
        );
        if (adminSettings.zoom_meeting_default_settings)
          setZoomSettings(adminSettings.zoom_meeting_default_settings);
      }
    }
  };
  const getInfo = async () => {
    await getZoomSettings();
    await getZoomAccount();
  };
  useEffect(() => {
    getInfo();
  }, []);
  const responsiveBlockStack = "w-full min-w-0";
  return (
    <PageWrapper loading={loading} withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          {/* LEFT: title + breadcrumbs + description */}
          <div className="dashboard-heading">
            <h1 className="dashboard-title mt-6">{t("Zoom Settings")}</h1>
            <div className="dashboard-description">
              <BreadCrumbs
                breadcrumbs={[
                  {
                    label: "Integrations",
                    action: () => navigate("../../integrations"),
                  },
                  {
                    label: "Zoom",
                    action: () => navigate("../integrations/zoom"),
                  },
                  {
                    label: "Zoom Settings",
                    action: () => {},
                  },
                ]}
              />
            </div>

            {/* <p className="dashboard-description">
              {t("Connect and manage your Zoom account and settings.")}
            </p> */}
          </div>

          {/* RIGHT: actions */}
          <div className="dashboard-actions">
            <PageActionButton
              text={t("Save")}
              type="primary"
              onAction={updateZoomSettings}
            />
          </div>
        </div>

        {/* <div className="header-line" /> */}

        <PageContent>
          <BlockStack
            gap={8}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <h1 className="text-lg font-semibold border-b pb-4">
              {t("Account")}
            </h1>
            <AnnotatedSection
              title="Account details"
              description="Account email & name."
            >
              <BlockStack gap={4}>
                <div className="flex items-center gap-3">
                  {isAccountFetched && account.photo && (
                    <img
                      src={account.photo}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />
                  )}
                  <NewInputFieldControl
                    width="100%"
                    value={isAccountFetched ? account.email : ""}
                    type="text"
                    align="right"
                    disabled={true}
                    maxLength={30}
                  />
                </div>
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Account name"
              description="Set a default time zone."
            >
              <BlockStack gap={4}>
                <NewInputFieldControl
                  width="100%"
                  value={isAccountFetched ? account.full_name : ""}
                  type="text"
                  align="right"
                  disabled={true}
                  maxLength={30}
                />
              </BlockStack>
            </AnnotatedSection>
            <h1 className="text-lg font-semibold border-b pb-4">
              {t("Zoom settings")}
            </h1>
            <AnnotatedSection title="Meeting ID" description="Set a meeting ID">
              <RadioGroup
                name="meeting_id"
                value={zoomSettings.use_pmi ? "pmi" : "auto"}
                options={[
                  { value: "auto", label: "Generate automatically" },
                  { value: "pmi", label: "Personal meeting ID" },
                ]}
                onChange={(val) => handleSettingsChange("use_pmi", val === "pmi")}
              />
            </AnnotatedSection>
            <AnnotatedSection
              title="Video"
              description="Show/hide host and guest video"
            >
              <BlockStack gap={4}>
                <CheckboxItem
                  label="Host video"
                  name="host_video"
                  checked={zoomSettings.host_video}
                  onChange={() =>
                    handleSettingsChange("host_video", !zoomSettings.host_video)
                  }
                />
                <CheckboxItem
                  label="Guest video"
                  name="guest_video"
                  checked={zoomSettings.participant_video}
                  onChange={() =>
                    handleSettingsChange(
                      "participant_video",
                      !zoomSettings.participant_video,
                    )
                  }
                />
              </BlockStack>
            </AnnotatedSection>
            <AnnotatedSection
              title="Audio"
              description="Set default audio settings"
            >
              <RadioGroup
                name="audio"
                value={zoomSettings.audio}
                options={[
                  { value: "telephony", label: "Telephone" },
                  { value: "voip", label: "Computer audio" },
                  { value: "both", label: "Both" },
                ]}
                onChange={(val) => handleSettingsChange("audio", val)}
              />
            </AnnotatedSection>
            <AnnotatedSection
              title="Enable Join Before Host"
              description="Enable or disabled join before host"
            >
              <RadioGroup
                name="join_before_host"
                value={zoomSettings.join_before_host ? "yes" : "no"}
                options={YES_NO_OPTIONS}
                onChange={(val) =>
                  handleSettingsChange("join_before_host", val === "yes")
                }
              />
            </AnnotatedSection>
            <AnnotatedSection
              title="Enable Waiting Room"
              description="Enable or disabled waiting room"
            >
              <RadioGroup
                name="waiting_room"
                value={zoomSettings.waiting_room ? "yes" : "no"}
                options={YES_NO_OPTIONS}
                onChange={(val) =>
                  handleSettingsChange("waiting_room", val === "yes")
                }
              />
            </AnnotatedSection>
            <AnnotatedSection
              title="Automatically record meeting"
              description="Record meeting on local computer"
            >
              <RadioGroup
                name="auto_recording"
                value={zoomSettings.auto_recording}
                options={[
                  { value: "local", label: "Yes" },
                  { value: "none", label: "No" },
                ]}
                onChange={(val) => handleSettingsChange("auto_recording", val)}
              />
            </AnnotatedSection>
          </BlockStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};

export default ZoomSettingsPage;
