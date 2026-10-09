import IntegrationLayout, {
  IntegrationSection,
  IntegrationAccount,
} from "./IntegrationLayout";
import styles from "./IntegrationLayout.module.scss";
import { useEffect, useState } from "react";
import {
  getStripeAccount,
  getStripeConnectURL,
  disconnectStripeAccount,
  getDisconnectedStripeAccounts,
  updateStripeSettings,
  getStripeSettings,
} from "../../../utilities/stripe";
import NewSelectControl from "../../Controls/NewSelectControl";
import { currenciesList } from "../../../utilities/currencies";
import PageActionButton from "../../Controls/PageActionButton";
import he from "he";
import { toast } from "react-toastify";
const StripeIntegrationsPage = (props) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [connectedAccountsFetched, setConnectedAccountsFetched] =
    useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const fetchAccount = async () => {
    const account = await getStripeAccount(servvData.nonce);
    // Always assigned: a disconnected account reads as null, and keeping the
    // previous one would hide the Connect button.
    setAccount(account?.id ? account : null);
    setAccountFetched(true);
    const settings = await getStripeSettings(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  // Stripe sends the merchant back to wordpress_return_url, so it has to be an
  // admin screen that still exists: a stale target lands on WordPress's
  // "not allowed to access this page" wall instead of the integration.
  const openStripeConnect = (authUrl) => {
    if (!authUrl) {
      toast.error("Stripe did not return a connection link. Please try again.");
      return;
    }
    const returnUrl = `${
      servvData.adminPages?.integrations || window.location.href.split("#")[0]
    }#/integrations/stripe`;
    open(
      `${servvData.shopify_app}/payments/stripe/connect` +
        `?wordpress_url=${encodeURIComponent(authUrl)}` +
        `&wordpress_return_url=${encodeURIComponent(returnUrl)}`,
      "_top",
    );
  };

  const handleConnectExistingAccount = async (account_id) => {
    const url = await getStripeConnectURL(servvData.nonce, account_id);
    setLoading(false);
    openStripeConnect(url?.auth_url);
  };

  const connectNewAccount = async () => {
    const url = await getStripeConnectURL(servvData.nonce);
    openStripeConnect(url?.auth_url);
  };

  const renderExistingAccounts = () =>
    connectedAccounts.map((existing) => (
      <button
        key={existing.account_id}
        type="button"
        className={styles.existingAccount}
        onClick={() => handleConnectExistingAccount(existing.account_id)}
      >
        {[existing.name, existing.email, existing.account_id]
          .filter(Boolean)
          .join(" · ")}
      </button>
    ));

  const handleGetConnectURL = async () => {
    setLoading(true);
    const existingAccounts = await getDisconnectedStripeAccounts(
      servvData.nonce,
    );
    setLoading(false);
    if (existingAccounts?.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
      return;
    }
    setLoading(true);
    const url = await getStripeConnectURL(servvData.nonce);
    setLoading(false);
    openStripeConnect(url?.auth_url);
  };

  const handleRemoveAccount = async () => {
    setLoading(true);
    const res = await disconnectStripeAccount(servvData.nonce);
    setLoading(false);
    if (res !== 200) {
      toast.error("Unable to disconnect Stripe. Please try again.");
      return;
    }
    setAccount(null);
    // The account just disconnected joins the reconnectable ones, so the next
    // Connect press has to ask for that list again.
    setConnectedAccounts([]);
    setConnectedAccountsFetched(false);
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  const handleSelectChange = (currency) => {
    const newCurrency = currency.split(" - ")[0];
    setSelectedCurrency(newCurrency);
  };
  const currencySelect = () => {
    let currencies = [];
    if (currenciesList) {
      currencies = currenciesList.map((currency) => {
        let sequence = currency.symbol;

        return currency.abbreviation + " - " + he.decode(sequence);
      });
    }

    return (
      <NewSelectControl
        options={currencies.map((currency) => ({
          value: currency,
          label: currency,
        }))}
        value={
          currencies.filter(
            (currency) => currency.indexOf(selectedCurrency) >= 0,
          )[0]
        }
        onChange={handleSelectChange}
      />
    );
  };
  const handleCurrencySave = async () => {
    if (selectedCurrency) {
      setLoading(true);
      await updateStripeSettings(servvData.nonce, selectedCurrency);
      setLoading(false);
    }
  };
  const incomplete = account && !account.charges_enabled;
  return (
    <IntegrationLayout
      title="Stripe"
      glyph="S"
      description="Accept paid registrations and manage payout settings."
      connected={Boolean(account)}
      status={
        !isAccountFetched
          ? "Loading…"
          : incomplete
          ? "Connection incomplete"
          : undefined
      }
      accountLabel={account?.email}
      loading={loading}
      actions={
        isAccountFetched && (
          <>
            {!account && (
              <PageActionButton
                text={
                  connectedAccountsFetched && connectedAccounts.length > 0
                    ? "Connect new account"
                    : "Connect"
                }
                onAction={
                  connectedAccountsFetched && connectedAccounts.length > 0
                    ? connectNewAccount
                    : handleGetConnectURL
                }
              />
            )}
            {incomplete && (
              <PageActionButton
                text="Resume integration"
                onAction={() =>
                  handleConnectExistingAccount(account.account_id)
                }
              />
            )}
            {account && (
              <PageActionButton
                text="Disconnect"
                type="danger-secondary"
                onAction={handleRemoveAccount}
              />
            )}
          </>
        )
      }
    >
      <IntegrationSection title="Account">
        <IntegrationAccount
          label={account?.email}
          status={incomplete ? "Connection incomplete" : "Connected"}
        />
      </IntegrationSection>
      {connectedAccountsFetched && connectedAccounts.length > 0 && !account && (
        <IntegrationSection title="Connect existing account">
          {renderExistingAccounts()}
        </IntegrationSection>
      )}
      <IntegrationSection
        title="Currency"
        description="The currency used for paid registrations."
      >
        <div className={styles.row}>
          <div>{currencySelect()}</div>
          <PageActionButton
            text="Save"
            disabled={!selectedCurrency || loading}
            onAction={handleCurrencySave}
          />
        </div>
      </IntegrationSection>
    </IntegrationLayout>
  );
};
export default StripeIntegrationsPage;
