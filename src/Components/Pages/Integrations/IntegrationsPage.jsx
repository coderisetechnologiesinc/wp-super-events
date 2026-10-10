import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import PageContent from "../../Containers/PageContent";
import PageHeader from "../../Containers/PageHeader";
import ServiceCard from "../../Containers/ServiceCard";
import PageActionButton from "../../Controls/PageActionButton";
import { useServvStore } from "../../../store/useServvStore";
import axios from "../../../utilities/adminApi";
import { toast } from "react-toastify";
import useCacheRefresh from "../../../hooks/useCacheRefresh";
import styles from "./IntegrationsPage.module.scss";

// The integrations landing. The copy comes from the native WordPress screen
// this replaced (servv_render_integrations_overview in servv.php) — that one
// no longer renders, so these are the single source of those strings.
const IntegrationsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false,
}) => {
  const settings = useServvStore((s) => s.settings);
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const stripeConnected = useServvStore((s) => s.stripeConnected);
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const calendarConnected = useServvStore((s) => s.calendarConnected);

  const [accounts, setAccounts] = useState({});
  const [busy, setBusy] = useState(null);
  const loadAccounts = async () => {
    const services = ["calendar", "gmail", "zoom", "stripe"];
    const results = await Promise.allSettled(
      services.map((service) =>
        axios.get(`/wp-json/servv-plugin/v1/${service}/account`, {
          headers: { "X-WP-Nonce": window.servvData.nonce },
        }),
      ),
    );
    const answers = {};
    results.forEach((result, index) => {
      if (result.status === "fulfilled")
        answers[services[index]] = result.value.data;
    });
    setAccounts((previous) => ({ ...previous, ...answers }));
    // This screen is the one place that asks for every account regardless of
    // plan, so its answers also fill the store flags the dashboard skipped on
    // a free plan or deferred — the calendar one in particular, which several
    // screens read and none of them fetch on their own.
    useServvStore.getState().adoptAccountAnswers(answers);
  };
  useEffect(() => {
    loadAccounts();
  }, []);
  useCacheRefresh(["accounts"], loadAccounts);
  const disconnect = async (service) => {
    setBusy(service);
    try {
      await axios.delete(`/wp-json/servv-plugin/v1/${service}/account`, {
        headers: { "X-WP-Nonce": window.servvData.nonce },
      });
      setAccounts((previous) => ({ ...previous, [service]: null }));
      await useServvStore.getState().syncAccountsAfterEvents();
    } catch {
      toast.error("Unable to disconnect the account. Please try again.");
    } finally {
      setBusy(null);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (resetSelectedSubpage) handleResetSubpage(false);
  }, [resetSelectedSubpage]);

  // Stripe sends the admin back here with a section parameter after connecting.
  useEffect(() => {
    const params = new URLSearchParams(new URL(window.location).search);

    if (params.get("section") === "stripe-integration") {
      window.history.pushState(
        {},
        "",
        `${window.location.origin}${servvData.adminUrl}?page=servvai-event-booking`,
      );
      navigate("/integrations/stripe");
    }
  }, []);

  // Zoom and Stripe are paid-plan features.
  const isFeatureAvailable =
    settings?.current_plan?.id === 2 || settings?.current_plan?.id === 3;

  let analyticsId = "";
  try {
    const raw = settings?.settings?.widget_style_settings;
    analyticsId =
      (typeof raw === "string" ? JSON.parse(raw) : raw)?.google_analytics_id ||
      "";
  } catch {
    /* Leave the status unconfigured when settings are unavailable. */
  }

  const cards = [
    {
      key: "calendars",
      glyph: "G",
      title: "Google Calendar",
      // From the native screen.
      description: "Sync event schedules to Google Calendar.",
      connected: calendarConnected,

      route: "/integrations/calendars",
    },
    {
      key: "gmail",
      glyph: "M",
      title: "Gmail",
      description: "Send event email notifications and reminders.",
      connected: gmailConnected,

      route: "/integrations/gmail",
    },
    {
      key: "zoom",
      glyph: "Z",
      title: "Zoom",
      description: "Create and manage online event meetings.",
      connected: zoomConnected,

      route: "/integrations/zoom",
      requiresPlan: true,
    },
    {
      key: "stripe",
      glyph: "S",
      title: "Stripe",
      description: "Accept paid registrations and manage payout settings.",
      connected: stripeConnected,

      route: "/integrations/stripe",
      requiresPlan: true,
    },
    ...(settings?.is_wp_marketplace
      ? [
          {
            key: "analytics",
            glyph: "A",
            title: "Google Analytics",
            description:
              "Track visits, clicks, and conversions for your events in one place.",
            connected: analyticsId.length > 2,
            route: "/integrations/analytics",
          },
        ]
      : []),
  ];

  const paymentsOffline =
    isFeatureAvailable &&
    !("stripe" in accounts
      ? accounts.stripe?.charges_enabled
      : stripeConnected);

  return (
    <PageWrapper loading={!settings} withBackground={true} flush>
      <PageContent className={styles.page}>
        <PageHeader
          title={t("Integrations")}
          description="Payments, calendars, and email — connected in the same place"
        >
          <div className={styles.divider} />
        </PageHeader>

        {paymentsOffline && (
          <div className={styles.notice}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 8v4m0 3.5v.5" />
              <circle cx="12" cy="12" r="9" />
            </svg>

            <div className={styles.noticeText}>
              <strong>{t("Payments are not live.")}</strong>{" "}
              {t(
                "Connect Stripe to sell paid tickets — free registrations work already.",
              )}
            </div>

            <PageActionButton
              type="primary"
              size="sm"
              text={t("Connect Stripe")}
              onAction={() => navigate("/integrations/stripe")}
            />
          </div>
        )}

        <div className={styles.grid}>
          {[...cards]
            .sort((a, b) =>
              a.key === "stripe" ? -1 : b.key === "stripe" ? 1 : 0,
            )
            .map((card) => {
              const service = card.key === "calendars" ? "calendar" : card.key;
              const account = accounts[service];
              const accountLabel =
                account?.google_calendar_email ||
                account?.email ||
                account?.name ||
                (service === "analytics" ? analyticsId : "");
              const connected =
                service in accounts
                  ? Boolean(
                      service === "zoom" || service === "gmail"
                        ? account?.email
                        : account?.id,
                    )
                  : card.connected;
              const incomplete =
                service === "stripe" && connected && !account?.charges_enabled;
              const locked = card.requiresPlan && !isFeatureAvailable;

              return (
                <ServiceCard
                  key={card.key}
                  tile="raised"
                  glyph={card.glyph}
                  title={t(card.title)}
                  description={t(card.description)}
                  status={
                    incomplete
                      ? t("Connection incomplete")
                      : connected
                      ? t("Connected")
                      : t("Not connected")
                  }
                  tone={incomplete ? "warn" : connected ? "on" : "neutral"}
                  meta={locked ? t("Available on a paid plan") : undefined}
                  actionLabel={connected ? t("Manage") : t("Connect")}
                  actionType={connected ? "secondary" : "primary"}
                  accountLabel={connected ? accountLabel : undefined}
                  onDisconnect={
                    connected && !locked && service !== "analytics"
                      ? () => disconnect(service)
                      : undefined
                  }
                  busy={busy === service}
                  disabled={locked}
                  onAction={() => navigate(card.route)}
                />
              );
            })}
        </div>
      </PageContent>
    </PageWrapper>
  );
};

export default IntegrationsPage;
