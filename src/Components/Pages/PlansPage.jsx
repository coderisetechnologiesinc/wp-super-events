import { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import PageActionButton from "../Controls/PageActionButton";
import PaymentOptionsModal from "../Controls/PaymentOptionsModal";
import { useServvStore } from "../../store/useServvStore";
import {
  CheckCircleIcon,
  XCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import axios from "../../utilities/adminApi";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import styles from "./PlansSupport.module.scss";
import { PLAN_LIMITS as planLimits, planLimit } from "../../utilities/planLimits";

export default function PlansPage() {
  const [shop, setShop] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const checkoutRef = useRef(null);
  const checkoutHost = useRef(null);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      checkoutRef.current?.destroy();
    };
  }, []);
  useEffect(() => {
    if (showPaymentForm && checkoutRef.current && checkoutHost.current) {
      checkoutRef.current.mount(checkoutHost.current);
    }
  }, [showPaymentForm]);
  async function openPortal() {
    setBusy(true);
    try {
      const response = await axios.post(
        "/wp-json/servv-plugin/v1/shop/billing/portal/session",
        {},
        { headers: { "X-WP-Nonce": window.servvData.nonce } },
      );
      if (response.data?.redirect_url)
        window.open(
          response.data.redirect_url,
          "_blank",
          "noopener,noreferrer",
        );
      else throw new Error("Missing portal URL");
    } catch {
      toast.error("WP Super Events was unable to open the billing portal.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  async function activatePlan(id, isAnnual = false) {
    setBusy(true);
    setSelectedPlan(null);
    try {
      const response = await axios.post(
        `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
        { is_annual: isAnnual },
        { headers: { "X-WP-Nonce": window.servvData.nonce } },
      );
      const { client_secret, public_key } = response.data;
      const stripe = await loadStripe(public_key);
      if (!stripe || !client_secret) throw new Error("Checkout unavailable");
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: async () => {
          checkoutRef.current?.destroy();
          checkoutRef.current = null;
          if (!mounted.current) return;
          setShowPaymentForm(false);
          toast.success("Your billing plan has been successfully activated.");
          // The wait below is a few seconds of webhook, so the page says so.
          if (mounted.current) setBusy(true);
          try {
            // Waits for the activated plan to actually come back, and drops the
            // cached settings on the way, before the page re-reads the shop.
            await useServvStore.getState().syncPlanAfterActivation(id);
            const refreshed = await axios.get(
              "/wp-json/servv-plugin/v1/shop/info",
              { headers: { "X-WP-Nonce": window.servvData.nonce } },
            );
            if (mounted.current) setShop(refreshed.data);
          } catch {
            toast.error("Plan status could not be refreshed.");
          } finally {
            if (mounted.current) setBusy(false);
          }
        },
      });
      if (!mounted.current) {
        checkout.destroy();
        return;
      }
      checkoutRef.current?.destroy();
      checkoutRef.current = checkout;
      setShowPaymentForm(true);
    } catch {
      if (mounted.current)
        toast.error("WP Super Events was unable to activate the billing plan.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      headers: { "X-WP-Nonce": window.servvData.nonce },
      signal: controller.signal,
    };
    Promise.allSettled([
      axios.get("/wp-json/servv-plugin/v1/shop/info", options),
      axios.get("/wp-json/servv-plugin/v1/shop/paymentplans", options),
    ]).then(([shopResult, plansResult]) => {
      if (controller.signal.aborted) return;
      const nextErrors = {};
      if (shopResult.status === "fulfilled") setShop(shopResult.value.data);
      else nextErrors.shop = "Plan status could not be refreshed.";
      if (plansResult.status === "fulfilled") {
        const catalog = plansResult.value.data?.plans ?? plansResult.value.data;
        setPlans(
          (Array.isArray(catalog)
            ? catalog
            : Object.values(catalog || {})
          ).filter((plan) => plan && typeof plan === "object"),
        );
      } else nextErrors.plans = "Available plans could not be loaded.";
      setErrors(nextErrors);
      setLoading(false);
    });
    return () => controller.abort();
  }, []);
  const current = shop?.current_plan ?? shop?.plan;
  const currentName =
    typeof current === "object" && current
      ? current.name || "Current plan"
      : current || "No active plan detected";
  const isMarketplace = Boolean(shop?.is_wp_marketplace);
  const maxPlanId = Math.max(...plans.map((plan) => Number(plan.id)));
  const visiblePlans = plans.filter(
    (plan) => ![true, "true", 1, "1"].includes(plan.hidden) &&
      (!isMarketplace || Number(plan.id) !== 1),
  );
  const currentPaid =
    Number(current?.price) > 0 || Number(current?.price_annual) > 0;
  const paidUntilValue = current?.payed_until ?? current?.paid_until ?? shop?.payed_until ?? shop?.paid_until;
  const paidUntilDate = paidUntilValue
    ? new Date(typeof paidUntilValue === "string"
        ? paidUntilValue.trim().replace(/^(\d{4}-\d{2}-\d{2}) /, "$1T")
        : paidUntilValue)
    : null;
  const paidUntil = paidUntilDate && !Number.isNaN(paidUntilDate.getTime())
    ? paidUntilDate.toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
      })
    : paidUntilValue ? String(paidUntilValue) : null;
  return (
    <PageWrapper flush>
      <PageContent>
        <PageHeader
          className={styles.plansHeader}
          title="Plans"
          description=""
          actions={
            currentPaid ? (
              <PageActionButton
                text="Billing settings"
                icon={<CreditCardIcon />}
                type="secondary"
                disabled={busy}
                onAction={openPortal}
              />
            ) : undefined
          }
        />
        <div className={styles.divider} />
        <section
          className={`${styles.card} ${styles.current}`}
          aria-busy={loading}
        >
          <div>
            <span className={styles.eyebrow}>Current plan</span>
            <h2 className={styles.planName}>
              {loading ? "Loading plan…" : currentName}
            </h2>
          </div>
          {currentPaid && paidUntil && (
            <span className={styles.badge}>Paid until {paidUntil}</span>
          )}
        </section>
        {errors.shop && (
          <p className={styles.notice} role="alert">
            {errors.shop}
          </p>
        )}
        {errors.plans ? (
          <p className={styles.notice} role="alert">
            {errors.plans}
          </p>
        ) : !loading && !plans.length ? (
          <p className={styles.notice}>
            No public paid plan catalog is available yet.
          </p>
        ) : null}
        {!showPaymentForm && (
          <div className={styles.planGrid} aria-busy={loading || busy}>
            {visiblePlans.map((plan, index) => {
              const price = Number(plan.price ?? plan.monthly_price) || 0;
              const annual = Number(plan.price_annual) || 0;
              const isCurrent =
                (current?.id != null &&
                  plan.id != null &&
                  String(current.id) === String(plan.id)) ||
                (current && plan.name === currentName);
              const isUpgradeable =
                current?.id != null && Number(plan.id) > Number(current.id);
              const isPremium = Number(plan.id) === maxPlanId;
              const isPaid = price > 0 || annual > 0;
              return (
                <section
                  key={plan.id ?? index}
                  className={`${styles.card} ${styles.planCard} ${
                    isPremium ? styles.premium : ""
                  }`}
                >
                  <div className={styles.planHeading}>
                    <h2 className={styles.planLabel}>{plan.name || "Plan"}</h2>
                    <p className={styles.price}>
                      {price > 0 ? (
                        <>
                          ${price}
                          <span>/mo</span>
                        </>
                      ) : annual > 0 ? (
                        <>
                          ${annual}
                          <span>/yr</span>
                        </>
                      ) : (
                        "Free"
                      )}
                    </p>
                    <p className={styles.fee}>
                      {Number(plan.application_fee_percent) > 0
                        ? `${plan.application_fee_percent}% transaction fee`
                        : "\u00a0"}
                    </p>
                    <p>{plan.description?.trim() || "\u00a0"}</p>
                  </div>
                  <ul className={styles.features} aria-label={`${plan.name || "Plan"} limits`}>
                    {planLimits.map(([key, label]) => {
                      const fallback = key === "filters_limit" ? 25
                        : key === "members_limit" ? (Number(plan.id) === 1 ? 0 : -1)
                        : null;
                      const value = planLimit(plan, key, isCurrent ? planLimit(current, key, fallback) : fallback);
                      return (
                        <li key={key}>
                          {value === 0 ? <XCircleIcon /> : value != null ? <CheckCircleIcon /> : null}
                          <span>{label}: {value === -1 ? "Unlimited" : value ?? "Unlimited"}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {Array.isArray(plan.features) && plan.features.length > 0 && (
                    <ul className={styles.features}>
                      {plan.features.map((feature, i) => {
                        const object = feature && typeof feature === "object";
                        const included =
                          !object ||
                          feature.value === "true" ||
                          feature.value === true;
                        const Icon = included ? CheckCircleIcon : XCircleIcon;
                        return (
                          <li
                            key={i}
                            className={included ? "" : styles.unavailable}
                          >
                            <Icon />
                            <span>
                              {object
                                ? feature.title || feature.name || ""
                                : String(feature)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <div className={styles.planActions}>
                    {isCurrent && isPaid ? (
                      <PageActionButton
                        text="Manage"
                        fullWidth
                        disabled={busy}
                        onAction={openPortal}
                      />
                    ) : !isCurrent && isUpgradeable ? (
                      <PageActionButton
                        text="Activate"
                        fullWidth
                        disabled={busy || loading}
                        onAction={() =>
                          isMarketplace
                            ? activatePlan(plan.id)
                            : setSelectedPlan(plan)
                        }
                      />
                    ) : null}
                    {isCurrent && (
                      <span className={styles.badge}>Current plan</span>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        )}
        {showPaymentForm && (
          <section className={styles.card}>
            <div id="servv-payment-element" ref={checkoutHost} />
          </section>
        )}
        <PaymentOptionsModal
          open={Boolean(selectedPlan)}
          onCancel={() => setSelectedPlan(null)}
          fee={selectedPlan?.application_fee_percent}
          price={selectedPlan?.price || 0}
          priceAnnual={selectedPlan?.price_annual || 0}
          onAcceptMonthly={() => selectedPlan && activatePlan(selectedPlan.id)}
          onAcceptAnnual={() =>
            selectedPlan && activatePlan(selectedPlan.id, true)
          }
        />
      </PageContent>
    </PageWrapper>
  );
}
