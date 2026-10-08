import React, { useEffect, useState, useRef } from "react";
import { mergeAttributesPatch } from "../../utilities/attributes";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BrushIcon, CloseIcon, Support } from "../../assets/icons";
import {
  Cog6ToothIcon,
  RocketLaunchIcon,
  CreditCardIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useServvStore } from "../../store/useServvStore";
import logo from "../../assets/images/logo.png";
import PageWrapper from "../Pages/PageWrapper";
import { createEvent } from "../../utilities/events";
import { saveSettings } from "../../utilities/settings";
import {
  getGmailConnectURL,
  getZoomConnectURL,
} from "../../utilities/accounts";
import { createLocation } from "../../utilities/filters";
import { toast } from "react-toastify";
import ModalShell from "../Modals/ModalShell";
import SkipOnboardingModalContent from "./SkipOnboardingModalContent";
import { getStripeAccount, getStripeConnectURL } from "../../utilities/stripe";
// Lazy load step components
const SettingsStep = React.lazy(() => import("./SettingsStep"));
const FirstEventStep = React.lazy(() => import("./FirstEventStep"));
const IntegrationsStep = React.lazy(() => import("./IntegrationsStep"));
const BrandingStep = React.lazy(() => import("./BrandingStep"));
const BillingStep = React.lazy(() => import("./BillingStep"));

const StepperIcon = ({ Icon, iconClass, active, showLine }) => (
  <div className="stepper-icon">
    <span className={`icon-box ${active ? "is-active" : ""}`}>
      <Icon className={`icon-box__svg ${iconClass}`} />
    </span>
    {showLine && <div className="icon-line" />}
  </div>
);

const StepperText = ({ title, subtitle, active, completed }) => {
  return (
    <div
      className={`stepper-text ${active ? "is-active" : ""} ${
        completed ? "is-completed" : ""
      }`}
    >
      <div className="stepper-title">{title}</div>
      <div className="stepper-subtitle">{subtitle}</div>
    </div>
  );
};

const OnboardingFlow = () => {
  const settings = useServvStore((s) => s.settings);
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const filtersList = useServvStore((s) => s.filtersList);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const syncGmailAccount = useServvStore((s) => s.syncGmailAccount);
  const syncCalendarAccount = useServvStore((s) => s.syncCalendarAccount);
  const syncSingleFilterFromServer = useServvStore(
    (s) => s.syncSingleFilterFromServer,
  );
  const [synchronization, setSynchronization] = useState(false);
  const [stripeConnected, setStripeConnected] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const activatePlan = searchParams.has("activate_plan");

  // Get initial step from URL or default to first step
  const stepFromUrl = searchParams.get("step");
  const [brandingCompleted, setBrandingCompleted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [skipConfirmed, setSkipConfirmed] = useState(false);

  const [attributes, setAttributes] = useState({
    // Settings step
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: "",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    defaultEventType: "offline", // offline | zoom
    emailConnected: false,

    // First event step
    firstEvent: {
      topic: "",
      startTime: null,
      duration: 60,
      agenda: "",
      location: "offline",
    },

    // Branding step
    branding: {
      avatar: null,
      title: "",
      description: "",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    },
  });

  const [steps, setSteps] = useState([
    {
      key: "billing",
      title: "Billing Plan",
      subtitle: "Choose your plan",
      Icon: CreditCardIcon,
      iconClass: "icon--angled",
    },
    // {
    //   key: "branding",
    //   title: "Store Branding",
    //   subtitle: "Personalize your appearance",
    //   Icon: BrushIcon,
    //   iconClass: "icon--angled",
    // },
    {
      key: "integrations",
      title: "Integrations",
      subtitle: "Connect your services",
      Icon: LinkIcon,
      iconClass: "",
    },
    {
      key: "settings",
      title: "Global Settings",
      subtitle: "Configure your preferences",
      Icon: Cog6ToothIcon,
      iconClass: "",
    },
    {
      key: "first-event",
      title: "Create First Event",
      subtitle: "Set up your initial event",
      Icon: RocketLaunchIcon,
      iconClass: "",
    },
  ]);

  // Determine current step from URL or default
  const getValidStep = (stepKey) => {
    return steps.find((s) => s.key === stepKey) ? stepKey : steps[0].key;
  };

  const [currentStep, setCurrentStep] = useState(getValidStep(stepFromUrl));

  // Update URL when step changes
  useEffect(() => {
    if (!activatePlan)
      setSearchParams({ step: currentStep }, { replace: true });
  }, [currentStep, setSearchParams]);

  // Handle returning from redirect (e.g., after email connection)
  useEffect(() => {
    const returnStep = searchParams.get("return_step");
    const success = searchParams.get("success");
    const error = searchParams.get("error");

    if (returnStep) {
      const validStep = getValidStep(returnStep);
      setCurrentStep(validStep);

      if (success) {
        toast.success(decodeURIComponent(success));
      }
      if (error) {
        toast.error(decodeURIComponent(error));
      }

      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("return_step");
      newParams.delete("success");
      newParams.delete("error");
      setSearchParams(newParams, { replace: true });
    }
    setSynchronization(true);
    // syncGmailAccount();
    // syncZoomAccount();
    // syncSingleFilterFromServer("locations");
    // syncCalendarAccount();
    // getStripeAccount(servvData.nonce).then((account) => {
    //   if (account?.charges_enabled) setStripeConnected(true);
    // });
    setSynchronization(false);
  }, []);

  useEffect(() => {
    if (
      !attributes.location &&
      Array.isArray(filtersList?.locations) &&
      filtersList.locations.length > 0
    ) {
      const firstLocationName = filtersList.locations[0]?.name;

      if (firstLocationName) {
        setAttributes((prev) => ({
          ...prev,
          location: firstLocationName,
        }));
      }
    }
  }, [filtersList?.locations]);

  useEffect(() => {
    if (!settings?.settings) return;

    let adminDashboard = {};
    try {
      adminDashboard =
        typeof settings.settings.admin_dashboard === "string"
          ? JSON.parse(settings.settings.admin_dashboard)
          : settings.settings.admin_dashboard || {};
    } catch (e) {
      console.warn("Invalid admin_dashboard JSON", e);
    }

    if (
      settings?.is_wp_marketplace === true &&
      steps.filter((step) => step.key === "branding").length === 0
    ) {
      let newSteps = [...steps];

      newSteps.splice(1, 0, {
        key: "branding",
        title: "Store Branding",
        subtitle: "Personalize your appearance",
        Icon: BrushIcon,
        iconClass: "icon--angled",
      });
      setSteps(newSteps);
    }

    setAttributes((prev) => ({
      ...prev,

      ...(adminDashboard.default_timezone && {
        timezone: adminDashboard.default_timezone,
      }),

      ...(adminDashboard.default_event_type && {
        defaultEventType:
          adminDashboard.default_event_type === "zoom" ? "zoom" : "offline",
      }),

      ...(typeof settings.settings.time_format_24_hours === "boolean" && {
        timeFormat: settings.settings.time_format_24_hours ? "24h" : "12h",
      }),

      ...(settings.location && {
        location: settings.location,
      }),
    }));
  }, [settings]);

  const stepComponents = {
    billing: BillingStep,
    branding: BrandingStep,
    integrations: IntegrationsStep,
    settings: SettingsStep,
    "first-event": FirstEventStep,
  };

  const StepComponent = stepComponents[currentStep];

  const mergeAttributes = (patch) => {
    setAttributes((prev) => mergeAttributesPatch(prev, patch));
  };

  const markStepCompleted = (stepKey) => {
    setCompletedSteps((prev) => new Set([...prev, stepKey]));
  };

  const goToNextStep = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);

    if (currentIndex < steps.length - 1) {
      markStepCompleted(currentStep);

      // if (currentIndex === 3) {
      //   navigate(
      //     `/events/new?onboarding_step=2&timezone=${attributes.timezone}`,
      //   );
      //   return;
      // }

      setCurrentStep(steps[currentIndex + 1].key);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key);
    }
  };

  const handleStepClick = (stepKey) => {
    const clickedIndex = steps.findIndex((s) => s.key === stepKey);

    // Allow going back to any previous step or completed step
    if (clickedIndex !== steps.length - 1) {
      setCurrentStep(stepKey);
    }
  };

  const handleFirstEventCreate = async (eventData) => {
    setLoading(true);
    try {
      const response = await createEvent(eventData.location, {
        meeting: {
          topic: eventData.topic,
          startTime: eventData.startTime,
          duration: eventData.duration,
          agenda: eventData.agenda,
          timezone: attributes.timezone,
          eventType: eventData.location === "offline" ? 1 : 2,
        },
      });

      // Store event ID for later reference
      mergeAttributes({ firstEventId: response.id });

      toast.success("First event created successfully");
      goToNextStep();
    } catch (error) {
      console.error("Event creation error:", error);
      toast.error("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBrandingComplete = async (branding) => {
    try {
      setLoading(true);

      let existing = {};
      try {
        existing = JSON.parse(
          settings?.settings?.widget_style_settings || "{}",
        );
      } catch {
        existing = {};
      }

      const mergedSettings = {
        ...existing,

        /* Profile */
        pw_title: branding.title || existing.pw_title || "",
        pw_description: branding.description || existing.pw_description || "",
        pw_avatar: branding.avatar ?? existing.pw_avatar ?? null,
        pw_banner_image: branding.banner ?? existing.pw_banner_image ?? null,

        /* Theme */
        pw_bg_type: branding.backgroundType || existing.pw_bg_type || "color",
        pw_background_color:
          branding.backgroundColor || existing.pw_background_color || "#ffffff",
        pw_background_gradient:
          branding.backgroundGradient ??
          existing.pw_background_gradient ??
          null,
        pw_text_color:
          branding.textColor || existing.pw_text_color || "#000000",
      };

      await saveSettings({
        ...settings,
        settings: {
          ...settings.settings,
          widget_style_settings: JSON.stringify(mergedSettings),
        },
      });

      toast.success("Branding saved successfully");
      await fetchSettings();
      setBrandingCompleted(true);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save branding");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSave = async (location) => {
    setLoading(true);

    await createLocation(location);
    // await syncSingleFilterFromServer("locations");
  };

  const connectGmail = async () => {
    await handleSettingsSave({ sync: true });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    await getGmailConnectURL();
  };

  const connectZoom = async () => {
    await handleSettingsSave({ sync: true });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    await getZoomConnectURL();
  };

  const connectStripe = async () => {
    const url = await getStripeConnectURL(servvData.nonce);
    if (url) {
      open(
        `${
          servvData.shopify_app
        }/payments/stripe/connect?wordpress_url=${encodeURIComponent(
          url.auth_url,
        )}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`,
        "_top",
      );
    }
  };

  const handleSettingsSave = async ({ sync = false }) => {
    setLoading(true);

    const adminDashboard =
      settings.admin_dashboard &&
      Object.keys(settings.admin_dashboard).length > 0
        ? settings.admin_dashboard
        : {};

    const payload = {
      ...settings,
      settings: {
        ...settings.settings,
        time_format_24_hours: attributes.timeFormat === "24h",
        admin_dashboard: JSON.stringify({
          ...adminDashboard,
          default_timezone: attributes.timezone,
          default_event_type: attributes.defaultEventType,
        }),
      },
    };

    try {
      await saveSettings(payload).catch((err) => console.error(err));

      if (attributes.location && attributes.location.length > 0) {
        const exists =
          filtersList?.locations?.some((f) => f.name === attributes.location) ||
          false;
        if (!exists) {
          await handleLocationSave(attributes.location);
        }
      }

      if (sync) await fetchSettings();
      if (!sync) goToNextStep();
    } catch (error) {
      console.error("Settings save error:", error);
      toast.error("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkipOnboarding = () => {
    const isBrandingStep = currentStep === "branding";

    const brandingCompleted = attributes?.branding?.title?.trim();

    if (isBrandingStep && brandingCompleted) {
      localStorage.setItem("onboardingSkipped", "1");

      navigate("/dashboard", { replace: true });
      return;
    }

    setShowSkipModal(true);
  };

  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentStep]);

  if (activatePlan) {
    return (
      <PageWrapper loading={loading}>
        <div className="create-event">
          <main
            className={`create-event__content m-auto ${
              settings?.is_wp_marketplace ? "marketplace" : ""
            }`}
            ref={contentRef}
          >
            <React.Suspense
              fallback={<div className="step-loading">Loading…</div>}
            >
              <div className="step-slide w-full">
                <BillingStep
                  attributes={attributes}
                  setAttributes={mergeAttributes}
                  currentStep="billing"
                  goToNextStep={() => navigate("/dashboard")}
                  goToPreviousStep={() => navigate("/dashboard")}
                  checkingEmail={synchronization}
                  loading={loading}
                  zoomConnected={zoomConnected}
                  isGmailConnected={gmailConnected}
                  stripeConnected={stripeConnected}
                  onConnectGmail={connectGmail}
                  onConnectZoom={connectZoom}
                  onConnectStripe={connectStripe}
                  brandingCompleted={brandingCompleted}
                  settings={settings}
                  onSave={handleBrandingComplete}
                />
              </div>
            </React.Suspense>
          </main>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper loading={loading}>
      <div className="create-event">
        {/* SIDEBAR */}
        <aside
          className={`create-event__sidebar ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          }`}
        >
          {/* Logo (same as original) */}
          <div className="logo-wrapper">
            <div
              className="logo-bg"
              style={{ backgroundImage: `url(${logo})` }}
            />
            <div className="sidebar__logo servv-logo-png" />
          </div>

          {/* Stepper */}
          <div className="sidebar__stepper">
            <div>
              {steps.map((step, index) => {
                const isActive = step.key === currentStep;
                const isCompleted = completedSteps.has(step.key);

                return (
                  <div
                    key={step.key}
                    className="stepper__row"
                    onClick={() => handleStepClick(step.key)}
                  >
                    <StepperIcon
                      Icon={step.Icon}
                      iconClass={step.iconClass}
                      active={isActive}
                      completed={isCompleted}
                      showLine={index < steps.length - 1}
                    />

                    <StepperText
                      title={step.title}
                      subtitle={step.subtitle}
                      active={isActive}
                      completed={isCompleted}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom link (match Support style) */}
          <div className="sidebar__bottom-link">
            <Support className="bottom-link__icon" aria-hidden="true" />
            <span
              className="bottom-link__text"
              onClick={() => window.open("/support", "_blank")}
            >
              Need Help?
            </span>
          </div>
        </aside>

        {/* CONTENT */}
        <main
          className={`create-event__content ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          }`}
          ref={contentRef}
        >
          {/* Close Icon */}
          <div
            className="servv-create-form-close"
            onClick={handleSkipOnboarding}
          >
            <CloseIcon className="servv-create-form-close-icon" />
          </div>

          {/* Step content */}
          <React.Suspense
            fallback={<div className="step-loading">Loading…</div>}
          >
            {StepComponent && (
              <div key={currentStep} className="step-slide w-full">
                <StepComponent
                  attributes={attributes}
                  setAttributes={mergeAttributes}
                  currentStep={currentStep}
                  goToNextStep={goToNextStep}
                  goToPreviousStep={goToPreviousStep}
                  checkingEmail={synchronization}
                  loading={loading}
                  zoomConnected={zoomConnected}
                  isGmailConnected={gmailConnected}
                  stripeConnected={stripeConnected}
                  onConnectGmail={connectGmail}
                  onConnectZoom={connectZoom}
                  onConnectStripe={connectStripe}
                  brandingCompleted={brandingCompleted}
                  settings={settings}
                  onSave={
                    currentStep === "settings"
                      ? handleSettingsSave
                      : currentStep === "first-event"
                      ? handleFirstEventCreate
                      : handleBrandingComplete
                  }
                />
              </div>
            )}
          </React.Suspense>
        </main>
        {showSkipModal && (
          <ModalShell
            title="Skip onboarding"
            onClose={() => setShowSkipModal(false)}
          >
            <SkipOnboardingModalContent
              confirmed={skipConfirmed}
              setConfirmed={setSkipConfirmed}
              closeModal={() => setShowSkipModal(false)}
              onConfirm={() => {
                setShowSkipModal(false);
                localStorage.setItem(
                  "onboardingSkipped",
                  window.location.origin,
                );
                navigate("/dashboard?onboarding=skipped");
              }}
            />
          </ModalShell>
        )}
      </div>
    </PageWrapper>
  );
};

export default OnboardingFlow;
