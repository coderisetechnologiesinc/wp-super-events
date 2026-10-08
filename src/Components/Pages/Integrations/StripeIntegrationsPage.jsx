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
    if (account && account.id) {
      setAccount(account);
    }
    setAccountFetched(true);
    const settings = await getStripeSettings(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  const handleConnectExistingAccount = async (account_id) => {
    const url = await getStripeConnectURL(servvData.nonce, account_id);
    if (url) {
      const returnURL = encodeURIComponent(window.location.origin);
      const connectURL = encodeURIComponent(url.auth_url);
      setLoading(false);

      open(
        `${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${connectURL}&wordpress_return_url=${returnURL}`,
        "_top",
      );
    }
  };

  const connectNewAccount = async () => {
    const connectUrl = await getStripeConnectURL(servvData.nonce);
    const returnURL = encodeURIComponent(window.location.origin);
    const connectURL = encodeURIComponent(connectUrl.auth_url);
    open(
      `${
        servvData.shopify_app
      }/payments/stripe/connect?wordpress_url=${encodeURIComponent(
        connectURL,
      )}&wordpress_return_url=${returnURL}`,
      "_top",
    );
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
    // const url = await getStripeConnectURL(servvData.nonce);
    // setConnectUrl(url.auth_url);
    setLoading(false);
    if (existingAccounts?.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
    } else {
      setLoading(true);
      const url = await getStripeConnectURL(servvData.nonce);
      setConnectUrl(url.auth_url);
      if (url)
        open(
          `${
            servvData.shopify_app
          }/stripe/connect?wordpress_url=${encodeURIComponent(
            url.auth_url,
          )}&wordpress_return_url=${encodeURIComponent(
            window.location.origin,
          )}`,
          "_top",
        );
    }
  };

  const handleRemoveAccount = async () => {
    setLoading(true);
    const res = await disconnectStripeAccount(servvData.nonce);
    if (res === 200) {
      setAccount(null);
    }
    setLoading(false);
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
